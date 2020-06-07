import React, { Component } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

const StyledInput = styled.input`
    width: 100%;
    border: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    font-family: 'Six Caps',sans-serif;
    font-weight: 400;
    font-size: 68px;
    text-align: center;
    text-transform: uppercase;
    background-color: #000;
    color: #ffe327;
    outline: none;
    transition: 0.25s all;

    &::selection {
        background-color: #ffe327 !important;
        color: #000;
    }
`;

const CloseSearchIcon = styled.span`
    height: 100% !important;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    left: auto;
    z-index: 2;
    transition: 0.2s all;
    cursor: pointer;
`;

class SearchBar extends Component {
    componentDidMount() {
        this.searchInput.focus();
    }

    render() {
        return (
            <>
                <StyledInput
                    type="text"
                    placeholder="Escribir y pulsar «enter»"
                    ref={(input) => {
                        this.searchInput = input;
                    }}
                    onKeyDown={(e) => {
                        e.keyCode === 13 && this.props.history.push(`/search/${e.target.value.toLowerCase()}`)
                    }}
                />
                <CloseSearchIcon className="icon is-large" onClick={this.props.toggleSearch}>
                    <Icon 
                        path={mdiClose}
                        title="Cerrar"
                        size="40px"
                        color="#ffe327"
                    />
                </CloseSearchIcon>
            </>
        );
    }
}

export default withRouter(SearchBar);