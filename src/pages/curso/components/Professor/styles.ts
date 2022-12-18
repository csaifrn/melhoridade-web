import styled from "styled-components";

export const Container = styled.div`
ol{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.prof-titulo, .prof-foto, .prof-nome{
    margin: 10px;
}
.prof-titulo{
    font-weight: 500;
    font-size: 12px
}
.prof-foto{
    width: 77px;
    height: 77px;
}
`;