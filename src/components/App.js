import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/es";
import styled from "styled-components";

import Header from "./Header";
import WithNewsList from "../containers/WithNewsList";
import NewsListPresentation from "./NewsListPresentation";

const NewsListContainer = WithNewsList(NewsListPresentation);

const MainContainer = styled.main`
	background-color: ${(props) => (props.isDarkMode ? "#000" : "#fff")};
	transition: 0.3s all;
`;

const App = (props) => {
	return (
		<>
			<Header />
			<MainContainer className={`${props.lightmode ? "" : "dark-mode"}`} isDarkMode={!props.lightmode}>
				<Switch>
					<Route exact path="/" render={(props) => <NewsListContainer endpoint={`latest/${moment().format("YYYY-MM-DD")}`} />} />
					<Route path="/category/:id" render={(props) => <NewsListContainer endpoint={`news/category/${props.match.params.id}`} />} />
					<Route path="/search/:search" render={(props) => <NewsListContainer endpoint={`search/${props.match.params.search}`} />} />
				</Switch>
			</MainContainer>
		</>
	);
};

const mapStateToProps = (state) => {
    return {
        lightmode: state.newsReducer.lightmode
    }
}

export default connect(
    mapStateToProps,
    null
)(App);
