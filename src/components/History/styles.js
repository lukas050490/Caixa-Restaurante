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
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 

  .list{
    margin-left: 250px;

   
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

    .list {
      margin-left: 150px;
    }

    .meu-icone {
      margin-right: 0;
      position: relative;
    }
  }

  @media (max-width: 430px) {
    width: 95vw;
    height: 85vh;
    padding: 10px;

    .list {
      font-size: 14px;
      margin-left: 70px;
    }
  }
`