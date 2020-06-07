import React, { Component } from "react";
import { connect } from "react-redux";

import { actions } from "../actions";

const WithNewsList = (WrappedNewsList) => {
	class NewsListWrapper extends Component {
		constructor(props) {
			super(props);

			this.prevPage = this.prevPage.bind(this);
			this.nextPage = this.nextPage.bind(this);
			this.refreshNews = this.refreshNews.bind(this);
		}

		state = {
			page: 1
		}

		prevPage = () => {
			this.setState(state => ({
				page: state.page - 1
			}))
		}

		nextPage = () => {
			this.setState(state => ({
				page: state.page + 1
			}))
		}

		refreshNews = () => {
			this.setState(state => ({
				page: 1
			}), () => {
				this.props.getNews(this.props.endpoint);
			})
		};

		componentDidMount() {
			this.refreshNews();
		}

		componentDidUpdate(prevProps) {
			prevProps.endpoint !== this.props.endpoint && this.refreshNews();
		}

		render() {
			return <WrappedNewsList
				shownews={this.props.shownews}
				fetching={this.props.fetching}
				page={this.state.page}
				prevPage={this.prevPage}
				nextPage={this.nextPage}
			/>;
		}
	}
	
	const mapStateToProps = (state) => {
		return {
			shownews: state.newsReducer.shownews,
			fetching: state.newsReducer.fetching
		}
	}

	return connect(
		mapStateToProps,
		{
			getNews: actions.getNews
		}
	)(NewsListWrapper);
}

export default WithNewsList;
