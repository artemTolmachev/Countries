import styled from 'styled-components';

const Wrapper = styled.section`

`;

const InfoImage = styled.img`

`;

const InfoTitle = styled.h1`

`;

const ListGroup = styled.div`

`;

const List = styled.ul``;
const ListItem = styled.li``;

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
        pusch,
    } = props;

console.log(props)

    return(
        <Wrapper>
            <InfoImage src={flag} alt={name}/>
            <ListGroup>
                <List>
                    <ListItem></ListItem>
                </List>
                <List>
                    <ListItem></ListItem>
                </List>
            </ListGroup>
            <div>
                <InfoTitle>
                    {name}
                </InfoTitle>
            </div>
        </Wrapper>
    )
}