import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d8e360479c6444e0a2d8b1dbb0ac2232&pageSize=${this.props.size}&page=${this.state.page}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
  })
}

  async componentDidMount(){
    this.updateNews();
  }
  
  handelPrevClick = async ()=>{
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d8e360479c6444e0a2d8b1dbb0ac2232&pageSize=${this.props.size}&page=${this.state.page - 1}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // })
    this.setState({
        page: this.state.page - 1,})
        this.updateNews();
    
  }
  handelNextClick = async ()=>{
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d8e360479c6444e0a2d8b1dbb0ac2232&pageSize=${this.props.size}&page=${this.state.page + 1}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // })
    this.setState({
      page: this.state.page + 1,})
      this.updateNews();
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp - Top Headings </h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 88)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelPrevClick}>	&#xf0d9; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handelNextClick}>Next &#xf105;</button>
        </div>
      </div>
    );
  }
}
