import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import {Search} from './Search'; 
import {CustomSelect } from './CustomSelect';

const options = [

    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
]

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    aling-items: flex-start;

    @media(min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        aling-items: center;
    }
`

export const Controls = ({onSearch}) => {

    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        const regionValue = region?.value || ``;
        onSearch(search, regionValue);
        //eslint-disable-next-line
    },[search, region])
// isClearable возможность отменить по крестику 
//isSearchable отменяем возможность поиска
    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect options={options}
             placeholder='Filter by Region' 
             isClearable 
             isSearchable={false}
             value={region}
             onChange={setRegion}
             />
        </Wrapper>
    );
};
