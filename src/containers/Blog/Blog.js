import React, { Component } from "react";
import { Route, /*Link, */ NavLink, Switch } from "react-router-dom";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline",
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;

// react-router package contains the logic
// but to be able to render into the DOM we need react-router-dom package

// activeClassName -> add css class
// activeStyle -> add inline css styles

// <Route /> - The order of route here matters as /:id detects /mew-post as a part of its route so be careful
// <Switch /> - It is used to load only one route inside this. Returns the first route which matches.
// NavLink - used to style the route link
// Link - used to link an attribute normally

// Absolute path - Whatever route comes after domain is absolute path like example.com/posts
// Relative path - Whatever route comes after some defined path like 'example.com/posts/' + postid