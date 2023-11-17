import { styled } from "styled-components";
import HomeBackground from '../assets/Home.jpg'

const CardContainer = styled.div`
    .card{
        transition: all 0.3s;
    }
    .card:hover{
        text-decoration: none;
        transform: scale(1.15);
    }

    .link{
        text-decoration: none;
    }

`;

const HomeContainer = styled.div`
    background-image: url(${HomeBackground}); 
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    background-size: cover;
    background-position: center;
    
`;

export { CardContainer, HomeContainer };