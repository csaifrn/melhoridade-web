import styled from 'styled-components'

export const Container = styled.div`

    border: 1px solid var(--border-color);
    border-radius: 10px;
    margin: 0 0 20px 0;
    padding: 15px;
    width: 90%;
    max-width: 500px;
    box-sizing: border-box;
    hr{
    border-top: 1px initial var(--border-color); 
   }

   .menu-atv{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;