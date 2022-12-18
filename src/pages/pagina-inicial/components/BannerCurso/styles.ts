import styled from "styled-components";

export const Container = styled.li`

    display: flex;
    flex-direction: column;
    align-items: center;
 
    div{
        padding: 10px;
        margin-top: 20px;
        width: 80px;
        height: 80px;
        background-color: var(--atv-extensao);
        border-radius: 7px;
        box-sizing: border-box;
    }
    img{
        width: 60px;
    }
    p{
        max-width: 80px;
        text-align: center;
    }

`;