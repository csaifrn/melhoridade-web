import styled from 'styled-components'

export const Container = styled.div`

    background-color: var(--header-color);
    margin-bottom: 20px; 
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        max-width: 80px;
        max-height: 80px;
    }
    img{
        margin: 20px;
        background-image: linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2));
        border-radius: 10px;
        padding: 10%;
        background-opacity: 40%
    }

`;