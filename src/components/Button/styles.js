import styled from "styled-components";

export const ContainerButton = styled.button`

  width: 100px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor:pointer;

  &:hover{
    background-color: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 
  }
`