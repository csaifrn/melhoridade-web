import styled from "styled-components";

export const Container = styled.div`
  .recolher {
    margin: 2% 1% 0 2%;
  }

  .container-idoso,
  ol {
    display: flex;
    align-items: center;
    list-style: none;
  }

  .th:not(:last-child),
  td:not(:last-child) {
    border-right: 1px solid var(--border-color);
    border-spacing: 0;
  }

  td {
    padding: 2% 0;
  }

  tr > th,
  tr > td {
    padding: 4% 0;
    border-bottom: 1px solid var(--border-color);
    border-spacing: 0;
  }

  .documentos-table {
    margin: 5%;
    width: 90%;
    border: 1px solid var(--border-color);
    border-spacing: 0;
  }

  .documentos-table,
  .documento {
    text-align: left;
  }
  .situacao {
    width: 5px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .documento {
    padding-left: 10px;
  }
`;
