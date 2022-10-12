import styled from "styled-components";

export const ContainerPesquisa = styled.div`

    display: flex;
    align-items: center;
    margin: 20px 0;
    width: 90%;

    .icon{
        position: absolute;
        margin-left: 10px;

    }
    #buscar{
        position: relative;
        box-sizing: border-box;
        border: 1px solid var(--border-color);
        background-color: transparent;
        border-radius: 100px;
        padding: 0 40px;
        width: 100%;
        height: 40px;
    }
    
`;