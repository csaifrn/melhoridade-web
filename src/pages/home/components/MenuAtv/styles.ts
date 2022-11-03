import styled from "styled-components";

export const Container = styled.div`

    .menu-atv ol{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .menu-atv .btn{
        background-color: transparent;
    }
    .ensino-button{
        font-size: 12px;
        border:none
    }
    .extensao-button{
        border:none;
        font-size: 14px;
        margin-right: 3vh;
        border-bottom: 2px solid var(--header-color);
        box-sizing: border-box;
        width: 5em;
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
    .menu-atv .btn:hover{
        font-size: 14px;
        cursor: pointer;
    }

`;