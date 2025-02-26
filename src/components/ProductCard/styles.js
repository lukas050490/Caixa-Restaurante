import styled from "styled-components";

export const Container = styled.div`
  width: 100px;
  height: 200px;
  border: solid 2px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: -5px 5px 10px rgba(29, 28, 28, 0.5);

  .divProducts {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
  }

  .divButton{
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
  }

`