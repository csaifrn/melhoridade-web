import styled from "styled-components";

export const Container = styled.div`
    ol{
        display:flex
    }
    .dados-button{
        margin: 0 20px 0 0;
    }
    .menu-atv{
        margin: 15px 10px;
    }
    .menu-atv .btn{
        font-size: 12px;
        background-color: transparent;
        border: none;
    }

    .menu-atv .btn:hover{
        font-size: 14px;
        cursor: pointer;
        border-bottom: 2px solid var(--header-color);
    }
`;