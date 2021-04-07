import React, { Component } from "react";
import { Route, /*Link, */ NavLink, Redirect, Switch } from "react-router-dom";
import "./Blog.css";
import Posts from "./Posts/Posts";
// import NewPost from "./NewPost/NewPost";

import asyncComponent from "../../hoc/asyncComponent";

const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true,
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
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
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not Found</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
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

// Redirect - Replaces the page with a new one - Alternative to it - this.props.history.replace('your_route')
// ** Redirect and Route render() here will not work together as Redirect from='/' catches all the routes so it won't
// -- execute route render()

// Bundle.js file - A file which bundles all the project files and that is created at the time of building any React project 

/* Suppose we want to execute NewPost dynamically i.e., the bundle.js loads the code of NewPost component and its child
 only when the user goes to /new-post route so for doing that we have to use a process called Code-splitting or Lazy-Loading.

 So what lazy-loading eventually does is it only bundles the code in bundle.js file which is required and for the 
 dynamically loaded components it creates a file chunk.js which will only be executed when user lands on that particular 
 route (in our case it is '/new-post').
 */
