import React, { Component } from "react";
import styled from "styled-components";

import SingleNew from "./SingleNew";
import Paginator from "./Paginator";

const NewsContainer = styled.div`
    margin: 0;
    position: relative;
`;

const LoadingScreen = styled.div`
    padding-top: 120px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: rgba(255, 255, 255, 0.9);
    color: #000;
    font-size: 36px;
    font-family: 'Fira Sans', sans-serif;

    main.dark-mode & {
        background-color: rgba(0, 0, 0, 0.9);
        color: #ffe327;
    }
`;

class NewsListPresentation extends Component {
    render() {
        const { shownews, fetching, page, prevPage, nextPage } = this.props;

        return (
            <div className="container">
                <NewsContainer className="columns is-multiline">
                    {
                        shownews.map((shownew, index) => (
                            index >= ((12 * page) - 12) && index < (12 * page) && <SingleNew shownew={shownew} key={shownew.news_id} />
                        ))
                    }
                    {
                        fetching && (
                            <LoadingScreen>
                                Cargando...
                            </LoadingScreen>
                        )
                    }
                </NewsContainer>
                <Paginator
                    page={page}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />
            </div>
        );
    }
}

export default NewsListPresentation;