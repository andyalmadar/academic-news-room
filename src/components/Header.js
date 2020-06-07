import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import { actions } from "../actions";
import categories from "../data/categories";

import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { mdiLightbulb } from '@mdi/js';
import { mdiLightbulbOutline } from '@mdi/js';

import SearchBar from "./SearchBar";

const MainHeader = styled.header`
    background-color: #000;

    *::selection {
        background-color: transparent;
    }
`;

const TitleBar = styled.h1`
    padding: 18px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    font-family: 'Six Caps', sans-serif;
    font-weight: 400;
    font-size: 68px;
    text-align: center;
    color: #ffe327;
`;

const IconContainer = styled.span`
    transition: 0.2s all;
    cursor: pointer;
`;

const HomeLink = styled(Link)`
    color: #ffe327;

    &:hover {
        color: #ffe327;
    }
`;

const MainMenu = styled.ul`
    display: flex;
    justify-content: center;
`

const MenuCategory = styled.li`
    max-width: 175px;
    padding: 16px 18px;
    flex: 1;
`

const MenuCategoryImage = styled.div`
    text-align: center;
` 

const MenuCategoryTitle = styled.h2`
    margin-top: 6px;
    font-weight: 300;
    font-family: 'Fira Sans',sans-serif;
    font-size: 13px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #ffe327;
` 

class Header extends Component {
    state = {
        showSearch: false
    }
    
    toggleSearch = () => {
        this.setState(state => ({
            showSearch: !state.showSearch
        }))
    }

    render() {
        return (
            <MainHeader>
                <TitleBar className="container">
                    <IconContainer className="icon is-large" onClick={this.props.toggleLightMode}>
                        <Icon 
                            path={this.props.lightmode ? mdiLightbulb : mdiLightbulbOutline}
                            title="Alternar modo claro/oscuro"
                            size="40px"
                            color="#ffe327"
                        />
                    </IconContainer>
                    <HomeLink to="/">
                        A NEWS ROOM
                    </HomeLink>
                    {
                        this.state.showSearch && <SearchBar show={this.state.showSearch} toggleSearch={this.toggleSearch} />
                    }
                    <IconContainer className="icon is-large" onClick={this.toggleSearch}>
                        <Icon 
                            path={mdiMagnify}
                            title="Buscar"
                            size="40px"
                            color="#ffe327"
                        />
                    </IconContainer>
                </TitleBar>
                <MainMenu className="container">
                    {
                        categories.map(category => (
                            <MenuCategory key={category.id}>
                                <Link to={`/category/${category.id}`}>
                                    <MenuCategoryImage>
                                        <img alt={category.name} src={category.imgUrl} />
                                    </MenuCategoryImage>
                                    <MenuCategoryTitle>
                                        {category.name}
                                    </MenuCategoryTitle>
                                </Link>
                            </MenuCategory>
                        ))
                    }
                </MainMenu>
            </MainHeader>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lightmode: state.newsReducer.lightmode
    }
}

export default connect(
    mapStateToProps,
    {
        toggleLightMode: actions.toggleLightMode
    }
)(Header);