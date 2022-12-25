import styled from 'styled-components'

export const Container = styled.div`

    background-color: var(--header-color);
    margin-bottom: 20px; 
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .home-icon{
        margin: 20px;
        cursor: pointer;
    }
    .menu-icon{
        background-image: linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2));
        border-radius: 10px;
        padding: 7px;
        background-opacity: 40%
    }
    img{
        background-image: linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2));
        border-radius: 10px;
        padding: 7px;
        background-opacity: 40%

    }

`;