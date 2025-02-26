import styled from "styled-components";

export const Container = styled.div`
  position: fixed; 
  top: 50%;         
  left: 50%;        
  transform: translate(-50%, -50%); 
  z-index: 999;    
  width: 70vw;
  height: 70vh;
  background-color: #fff;
  display: flex; 
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); 

  .products{
    display: flex;
    gap: 15px;
    margin-top: 10px;
  }

  .payment{
    display: flex;
    gap: 10px;
  }

  @media (max-width: 768px) {
    width: 90vw;
    height: 80vh;

    .products, .payment {
      gap: 8px;
    }
  }

  @media (max-width: 430px) {
    width: 95vw;
    height: 85vh;

    .products, .payment {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

`
