import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  /*componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      ) {
        axios.get("/posts/" + this.props.id).then((response) => {
          this.setState({ loadedPost: response.data });
        });
      }
    }
  }*/

  componentDidMount() {
    const {id :postId} = this.props.match.params;
    if (postId) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      ) {
        axios.get("/posts/" + postId).then((response) => {
          this.setState({ loadedPost: response.data });
        });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete("/posts/" + this.props.id).then((response) => {
      console.log(response);
    });
  };

  render() {
    const { loadedPost } = this.state;
    let post = <p style={{ textAlign: "center" }}>Please select a post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}> Loading... </p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{loadedPost.title}</h1>
          <p>{loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
