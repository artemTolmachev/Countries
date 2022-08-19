import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {filterByCode} from '../config';

const Wrapper = styled.section`
    margin-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem; 

    @media(min-width: 768px){
        grid-template-columns: minmax(100px, 400px) 1fr;
        aling-items: center;
        gap: 5rem
    }
    @media(min-width: 1024px){
        grid-template-columns: minmax(400px, 600px) 1fr;
    }
`;

const InfoImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const InfoTitle = styled.h1`
    margin: 0;
    font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media(min-width: 1024px){
        flex-direction: row;
        gap: 4rem;
    }

`;

const Meta = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    aling-items: flex-start;

    & > b {
        font-weight: var(--fw-bold)
    }

    @media(min-width: 1024px){
       flex-direction: row;
       aling-items: center;
    }
`;

const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

const Tag = styled.span`
    padding: 0 1rem;
    background-color: var(--color-ui-base);
    box-shadow: var(--shadow);
    line-height: 1.5;
    cursor: pointer;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;


const ListItem = styled.li`
    line-height: 1.8;

    & > b {
        font-weight: var(--fw-bold)
    }
   
`;


export const Info = (props) => {

    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = [],
        push,
    } = props;

    const [neighbars, setNeighbars] = useState([]);

    useEffect(() => {
        if(borders.length)
        axios.get(filterByCode(borders)).then(({data}) => setNeighbars(data.map(c => c.name)));
    },[borders]);


    return(
        <Wrapper>
            <InfoImage src={flag} alt={name}/>
            <div>
                <InfoTitle>
                        {name}
                </InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem><b>Native Name:</b> {nativeName}</ListItem>
                        <ListItem><b>Population:</b> {population}</ListItem>
                        <ListItem><b>Region:</b> {region}</ListItem>
                        <ListItem><b>Sub Region:</b> {subregion}</ListItem>
                        <ListItem><b>Capital:</b> {capital}</ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Top Level Domain: </b>{topLevelDomain.map(b => (<span key={b}>{b}</span>))}
                        </ListItem>
                        <ListItem>
                            <b>Currency: </b>{currencies.map(c => (<span key={c.code}>{c.name}</span>))}
                        </ListItem>
                        <ListItem>
                            <b>Languages: </b>{languages.map(m => (<span key={m.name}>{m.name}</span>))}
                        </ListItem>
                    </List>
                </ListGroup>
                <Meta>
                    <b>Border Countries</b>
                    {!borders.length ? 
                    (<span>There is no border countries</span>)
                    : (<TagGroup>
                        {neighbars.map(d => (<Tag onClick={() => push(`/country/${d}`)} key={d}>{d}</Tag>))}
                    </TagGroup>)}
                </Meta>
            </div>
        </Wrapper>
    )
}