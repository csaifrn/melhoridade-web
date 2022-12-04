import styled from "styled-components";

export const Container = styled.div`
  .recolher {
    margin: 2% 1% 0 2%;
  }

  .dado-idoso {
    margin: 1% 2%;
  }

  .container-idoso,
  ol {
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

  hr {
    border-top: 1px initial var(--border-color);
    color: var(--border-color);
  }

  .contato-emergencia {
    margin: 5% 0 3% 2%;
  }
`;
