import React, { Component } from "react";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

export class NewsItem extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4f9b54b41872466ea531c0888ff5efbe&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  HandlerPrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4f9b54b41872466ea531c0888ff5efbe&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  HandlerNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4f9b54b41872466ea531c0888ff5efbe&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">Today {this.props.category} News</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div
                  className="card m-4"
                  style={{ width: "18rem" }}
                  key={element.url}
                >
                  <img
                    className="card-img-top"
                    src={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://bsmedia.business-standard.com/_media/bs/img/article/2022-09/22/full/1663868771-0119.jpg"
                    }
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.description}</p>
                    <Link to={element.url} className="btn btn-primary">
                      Read More...
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.HandlerPrevClick}
          >
            &larr; Previos
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 5)
            }
            type="button"
            className="btn btn-primary"
            onClick={this.HandlerNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default NewsItem;
