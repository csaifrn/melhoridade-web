import styled from "styled-components";

export const Container = styled.li`
  border: 1px solid var(--border-color);
  border-radius: 10px;
  margin: 20px 0 0 0;
  padding: 15px;
  width: 90%;
  box-sizing: border-box;

  .foto {
    width: 75px;
  }

  .borda {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
  }

  .dados {
    font-size: 12px;
    margin: 10px;
  }
`;
