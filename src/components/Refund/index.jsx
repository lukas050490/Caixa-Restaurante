import { useAppContext } from "../../useAppContext";
import PropTypes from "prop-types";
import { FaBackward } from "react-icons/fa";
import { Container } from "./styles";

function Refund({ closeModal }) {
    const { history, removeFromHistory } = useAppContext();
    return (
        <>
            <Container>
                < FaBackward onClick={closeModal} className="meu-icone" />
                <ul className="list">
                {history.map((sale, index) => (
                        <li key={index}>
                            <p><strong>Venda {index + 1} - {sale.date}</strong></p>
                            <ul>
                                {sale.products.map((product, i) => (
                                    <li key={i}>{product.name} - R$ {product.price}</li>
                                ))}
                            </ul>
                            <p><strong>Forma de Pagamento: {sale.paymentMethod}</strong></p>
                            <p><strong>Total: R$ {sale.total}</strong></p>
                            <button onClick={() => removeFromHistory(index)}>Remover</button>
                            <hr />
                           
                        </li>
                    ))}
                </ul>
            </Container>
        </>
    )
}

export default Refund

Refund.propTypes = {
    closeModal: PropTypes.func.isRequired,
};