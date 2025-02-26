import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`

export const ContentFirst = styled.div`
  
`

export const ContentSecond = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;


  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    gap: 20px;
  }

  @media (max-width: 430px) {
    display: grid;
    grid-template-columns: 180px 180px;
  }

  @media (max-width: 360px) {
    display: grid;
    grid-template-columns: 160px 160px;
  }

   
`

export const Button = styled.button`
  cursor: pointer;
  width: 200px;
  height: 100px;
  margin-left: 10px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: -5px 5px 10px rgba(128, 128, 128, 0.5);

  @media (max-width: 768px) {
    width: 160px;
    height: 80px;
    font-size: 12px;
  }

  @media (max-width: 430px) {
    width: 140px;
    height: 70px;
    font-size: 10px;
  }

  @media (max-width: 390px) {
    width: 120px;
    height: 60px;
    font-size: 9px;
  }

  @media (max-width: 360px) {
    width: 110px;
    height: 55px;
    font-size: 8px;
  }
`