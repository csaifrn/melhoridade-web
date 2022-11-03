import styled from "styled-components";

export const Container = styled.div`
    ol{
        display:flex;
        align-items: baseline;
    }

    .menu-atv{
        margin: 15px 10px;
    }
    .menu-atv .participantes-button{
        font-size: 12px;
        background-color: transparent;
        border: none;
    }
    .dados-button{
        font-size: 14px;
        background-color: transparent;
        margin: 0 20px 0 0;
        border: none;
        border-bottom: 2px solid var(--header-color);
        box-sizing: border-box;
        width: 90%
    }
    .menu-atv .btn:hover{
        font-size: 14px;
        cursor: pointer;
    }
`;