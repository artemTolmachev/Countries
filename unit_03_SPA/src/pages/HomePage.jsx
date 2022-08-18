import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Controls } from '../components/Controls';
import {ALL_COUNTRIES} from '../config';
import {Card} from '../components/Card';
import {List} from '../components/List';


export const HomePage = ({setCountries, countries}) => {

    const [filtredCountries, setFiltredCountries] = useState(countries);

    const {push} = useHistory();

    const hendleSearch = (search, region) => {
        let data = [...countries];

        if(region){
            data = data.filter(c => c.region.includes(region)) 
        }
        if(search){
            data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase())) 
        }
        setFiltredCountries(data)
       
    };

    useEffect(() => {
        if(!countries.length)//чтобы не делать запрос если страны уже подгружены
        axios.get(ALL_COUNTRIES).then(({data}) => setCountries(data));
        //eslint-disable-next-line
    },[]);

    useEffect(() => {
        hendleSearch();
        //eslint-disable-next-line
    },[countries]);

  
    return (
        <>
            <Controls onSearch={hendleSearch}/>
            <List>
            { filtredCountries.map((c) => {
                const countryInfo = {
                img: c.flags.png,
                name: c.name,
                info:[
                    {
                    title: 'Population',
                    description: c.population.toLocaleString()
                    },
                    {
                    title: 'Region',
                    description: c.region
                    },
                    {
                    title: 'Capital',
                    description: c.capital
                    }
                ]};
                return (

                <Card key={c.name} onClick={() => push(`country/${c.name}`)} {...countryInfo} />
                
                )
            })
            }
            </List>
        </>
    );
};