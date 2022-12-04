import styled from "styled-components";

export const Container = styled.div`
  .recolher {
    margin: 2% 1% 0 2%;
  }

  hr {
    border-top: 1px initial var(--border-color);
    color: var(--border-color);
  }

  .menu-atv ol {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5% 4%;
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
`;
