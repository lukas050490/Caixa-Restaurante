import PropTypes from "prop-types";

import { useAppContext } from "../../useAppContext";
import { FaBackward } from "react-icons/fa";
import { Container } from "./styles";

function Cashier({ closeModal }) {
    const { cashRegister } = useAppContext();
    

    if (!cashRegister) return <p>Carregando...</p>;






    return (
        <Container>
            <FaBackward onClick={closeModal} className="meu-icone" />
            <div className="modal">
                <h2>Resumo do Caixa</h2>
                <p>Dinheiro: R$ {cashRegister.paymentMethods?.Dinheiro?.toFixed(2) || 0}</p>
                <p>Cartão Crédito: R$ {cashRegister.paymentMethods?.["Crédito"]?.toFixed(2) || 0}</p>
                <p>Cartão Débito: R$ {cashRegister.paymentMethods?.["Débito"]?.toFixed(2) || 0}</p>
                <p>Pix: R$ {cashRegister.paymentMethods?.Pix?.toFixed(2) || 0}</p>
                <p><strong>Total de Vendas:</strong> R$ {cashRegister.totalSales.toFixed(2)}</p>
            </div>
        </Container>
    );
}

export default Cashier

Cashier.propTypes = {
    closeModal: PropTypes.func.isRequired,
};