import styled from "styled-components";

const SchoolChart = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
`

const ListGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const ContainerWrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export { SchoolChart, ListGroup, ContainerWrapper };