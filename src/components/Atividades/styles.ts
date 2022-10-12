import styled from "styled-components";

export const ContainerAtividades = styled.div`

    .container-atv ul{
        display: grid;
        column-gap: 10%;
        padding: 0 5%;
        grid-template-columns: auto auto;
    }
    .container-atv li{
        display: flex;
        flex-direction: column;
        align-items: center;
    }  
    .container-atv div{
        padding: 10px;
        margin-top: 20px;
        width: 80px;
        height: 80px;
        background-color: var(--atv-extensao);
        border-radius: 7px;
        box-sizing: border-box;
    }
    .container-atv img{
        width: 60px;
    }
    .container-atv p{
        max-width: 80px;
        text-align: center;
    }
    
`;