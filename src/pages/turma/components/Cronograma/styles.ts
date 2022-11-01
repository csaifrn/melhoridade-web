import styled from "styled-components";

export const Container = styled.div`
.cronograma-table{
    margin: 0 auto
}
.cronograma-table, th, td{
    text-align: center;
    table-layout: fixed;
    width: 90%;
}
th:not(:last-child), td:not(:last-child) {
    border-right: 1px solid var(--border-color);
}
td{
    padding: 3% 0;
}
tr:not(:last-child)>th>p,
tr:not(:last-child)>td>p{
    padding: 4% 0;
    border-bottom: 1px solid var(--border-color);
}
.cronograma-table{
    border-radius: 7px;
    border: 1px solid var(--border-color);
    border-spacing: 0;
}
.cronograma-titulo{
    font-size: 12px;
    margin: 10px;
    font-weight: 500;
}
`;