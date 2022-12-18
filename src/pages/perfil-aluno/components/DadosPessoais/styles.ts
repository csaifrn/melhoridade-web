import styled from "styled-components";

export const Container = styled.div`
  .recolher {
    margin: 2% 1% 0 2%;
  }

  ol {
    display: flex;
    align-items: center;
    list-style: none;
  }

  hr {
    border-top: 1px initial var(--border-color);
    color: var(--border-color);
  }

  .dado-idoso {
    margin: 1% 2%;
  }
  .container-idoso {
    display: flex;
    align-items: center;
    list-style: none;
  }
  .foto-idoso,
  .nome-idoso {
    font-size: 12px;
    margin: 10px;
  }
  .foto-idoso {
    width: 77px;
    height: 77px;
  }
  .contato-emergencia {
    margin: 5% 0 3% 2%;
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
`;
