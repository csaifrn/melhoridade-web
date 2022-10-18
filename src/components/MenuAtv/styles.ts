import styled from "styled-components";

export const Container = styled.div`

    .menu-atv ol{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .menu-atv .btn{
        font-size: 12px;  
        border: none;
        background-color: transparent;
    }
    .menu-atv .btn:hover{
        font-size: 14px;
        border-bottom: 2px solid var(--header-color);
    }
    .extensao-button{
        margin-right: 3vh;
    }
    .filtro-button{
        color: white;
        width: 90px;
        height: 25px;
        border: none;
        border-radius: 10px;
        background-color: var(--header-color);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

`;