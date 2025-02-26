import { useState } from "react";

import { useAppContext } from "../../useAppContext";

import { MdAddShoppingCart } from "react-icons/md";
import { MdAlarmAdd } from "react-icons/md";
import { MdCloudSync } from "react-icons/md";
import { FaCashRegister } from "react-icons/fa";

import { Container,Button,ContentFirst,ContentSecond } from "./styles";

import History from "../../components/History";
import Logout from "../../components/Logout";
import Refund from "../../components/Refund";
import SellProducts from "../../components/SellProducts";
import Cashier from "../../components/Cashier";

function Home() {
  const { closeCashRegister } = useAppContext();
  
  const [isSellOpen, setIsSellOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isRefundOpen, setIsRefundOpen] = useState(false);
  const [isCashierOpen, setIsCashierOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
 
  
  
  return (
    <>
      <Container>
        <ContentFirst>
          <h1>Caixa Restaurante</h1>
        </ContentFirst>
        <ContentSecond>
         <Button onClick={() => setIsSellOpen(true)}><MdAddShoppingCart size={30}/>Vender Produtos</Button>
          <Button onClick={() => setIsHistoryOpen(true)}><MdAlarmAdd size={30}/>Histórico</Button>
          <Button onClick={() => setIsRefundOpen(true)}><MdCloudSync size={30}/>Estornar Produto</Button>
          <Button onClick={() => {closeCashRegister(); setIsCashierOpen(true)}}><FaCashRegister size={30}/>Fechar Caixa</Button>
          <Button onClick={() => setIsLogoutOpen(true)}><FaCashRegister size={30}/>Sair do Caixa</Button>
          
          {isSellOpen && <SellProducts closeModal={() => setIsSellOpen(false)} />}
          {isHistoryOpen && <History closeModal={() => setIsHistoryOpen(false)} />}
          {isRefundOpen && <Refund closeModal={() => setIsRefundOpen(false)} />}
          {isCashierOpen && <Cashier closeModal={() => setIsCashierOpen(false)} />}
          {isLogoutOpen && <Logout closeModal={() => setIsLogoutOpen(false)} />}
        </ContentSecond>
      </Container>
     
    </>
  )
}

export default Home

 