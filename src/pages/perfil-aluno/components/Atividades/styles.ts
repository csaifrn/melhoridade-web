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

  .tabela{
    display: flex;
    justify-content: center;
  }

  hr {
    border-top: 1px initial var(--border-color);
    color: var(--border-color);
  }

  .menu-atv ol {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5% 0;
  }
  .menu-atv .btn {
    background-color: transparent;
    border: none;
    margin-right: 1em;
  }

  .menu-atv .btn:hover {
    font-size: 14px;
    border-bottom: 2px solid var(--header-color);
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
