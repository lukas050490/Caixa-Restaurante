import styled from "styled-components";

export const Container = styled.div`
   position: fixed; 
  top: 50%;         
  left: 50%;        
  transform: translate(-50%, -50%); 
  z-index: 999;    
  width: 70vw;
  height: 70vh;
  overflow-y: auto; 
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 
  

  h2{
    margin-left: 250px;
  }

  button{
    margin-left: 250px;
    cursor: pointer;
    width: 120px;
    height: 40px;

    &:hover{
      background-color: #fff;
    }
  }

  .meu-icone {
    margin-right: 80%;
    position:fixed;
    font-size:24px;
    color:#000;
    cursor:pointer;
  }

  @media (max-width: 768px) {
    width: 90vw;
    height: 80vh;
    padding: 15px;


    .meu-icone {
      margin-right: 0;
      position: relative;
    }
  }

  @media (max-width: 430px) {
    width: 95vw;
    height: 85vh;
    padding: 10px;

    h2, button {
      margin-left: 100px;
      
    }
  }

`
