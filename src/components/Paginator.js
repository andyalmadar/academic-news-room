import React from "react";
import styled from "styled-components";

import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';
import { mdiChevronRight } from '@mdi/js';

const PagesContainer = styled.div`
    padding: 50px 0;
    display: flex;
    justify-content: center;

    span {
        transition: 0.25s all;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }

        &.prev-page {
            ${props => (props.page === 1 ? "pointer-events: none; transition: 0s all;" : "")}
        }

        &.next-page {
            ${props => (props.page === 5 ? "pointer-events: none; transition: 0s all;" : "")}
        }
    }
`;

const Paginator = (props) => {
    const { page, prevPage, nextPage } = props;

    return (
        <PagesContainer page={page}>
            <span className="prev-page" onClick={prevPage}>
                <Icon 
                    path={mdiChevronLeft}
                    title="Página anterior"
                    size="75px"
                    color={page === 1 ? "#4c440a" : "#ffe327"}
                />
            </span>
            <span className="next-page" onClick={nextPage}>
                <Icon 
                    path={mdiChevronRight}
                    title="Página siguiente"
                    size="75px"
                    color={page === 5 ? "#4c440a" : "#ffe327"}
                />
            </span>
        </PagesContainer>
    )
};

export default Paginator;