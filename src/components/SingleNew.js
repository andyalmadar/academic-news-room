import React from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/es";

const Image = styled.div`
    margin-bottom: 8px;
    position: relative;

    main.dark-mode & {
        color: #fff;
    }

    a {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 2px;
        font-family: 'Fira Sans', sans-serif;
        font-weight: 600;
        font-size: 24px;
        background-color: rgba(0, 0, 0, 0.8);
        color: #fff;
        opacity: 0;
        transition: 0.25s all;
    }

    &:hover a {
        opacity: 1;
    }

    img {
        vertical-align: middle;
        filter: grayscale(1);
    }
`;

const PublishedDate = styled.div`
    font-size: 11px;

    main.dark-mode & {
        color: #fff;
    }
`;

const DataPills = styled.div`
    padding: 4px 0 10px 0;

    > span {
        margin-right: 5px;
        padding: 5px 12px;
        display: inline-block;
        text-transform: uppercase;
        font-size: 11px;
        background-color: #000;
        color: #ffe327;

        main.dark-mode & {
            background-color: #ffe327;
            color: #000;
        }
    }
`;

const Title = styled.h3`
    font-size: 26px;
    font-family: 'Fira Sans', sans-serif;
    font-weight: 600;
    
    main.dark-mode & {
        color: #fff;
    }
`;

const SingleNew = (props) => {
    const { shownew } = props;

    return (
        <div className="column is-4">
            <Image>
                <a className="leer-noticia" href={shownew.url}>
                    LEER NOTICIA
                </a>
                <img alt={shownew.title} src={shownew.img_url || "/images/no-photo.jpg"} />
            </Image>
            <PublishedDate>
                {moment(parseInt(shownew.date) * 1000).format("D [de] MMMM [de] YYYY, HH:mm:ss")}
            </PublishedDate>
            <DataPills>
                <span className="publisher">
                    {shownew.source_name}
                </span>
                <span className="category">
                    {shownew.category ?? "Otros"}
                </span>
            </DataPills>
            <Title>
                {shownew.title}
            </Title>
        </div>
    );
}

export default SingleNew;