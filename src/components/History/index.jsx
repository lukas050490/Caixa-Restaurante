import PropTypes from "prop-types";

import { useAppContext } from "../../useAppContext";
import { FaBackward } from "react-icons/fa";
import { Container } from "./styles";

function History({ closeModal }) {
    const { history } = useAppContext();

   





    return (
        <Container>
            <FaBackward onClick={closeModal} className="meu-icone" />
            <ul className="list">
                {history.length === 0 ? (
                    <p>Nenhuma venda registrada.</p>
                ) : (
                    history.map((sale, index) => (
                        <li key={index}>
                            <p><strong>Venda {index + 1} - {sale.date}</strong></p>
                            <ul>
                                {sale.products.map((product, i) => (
                                    <li key={i}>{product.name} - R$ {product.price.toFixed(2)}</li>
                                ))}
                            </ul>
                            <p><strong>Forma de Pagamento: {sale.paymentMethod}</strong></p>
                            <p><strong>Total: R$ {sale.total.toFixed(2)}</strong></p>
                            <hr />
                        </li>
                    ))
                )}
            </ul>
        </Container>
    );
}

export default History

History.propTypes = {
    closeModal: PropTypes.func.isRequired, 
};