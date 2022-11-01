import styled from "styled-components";

export const Container = styled.div`
ol{
    display: flex
    align-items: center;
}
.container-prof{
    margin: 15px 10px;
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
.prof-nome{
    margin-top: 15%
}
`;