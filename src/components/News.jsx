import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class News extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsItem key="general" pageSize={5} category={"general"} />
            }
          ></Route>
          <Route
            path="/health"
            element={<NewsItem key="health" pageSize={5} category={"health"} />}
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <NewsItem key="business" pageSize={5} category={"business"} />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <NewsItem key="science" pageSize={5} category={"science"} />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={<NewsItem key="sports" pageSize={5} category={"sports"} />}
          ></Route>
          <Route
            exact
            path="/technology"
            element={<NewsItem pageSize={5} category={"technology"} />}
          ></Route>
        </Routes>
      </Router>
    );
  }
}

export default News;
