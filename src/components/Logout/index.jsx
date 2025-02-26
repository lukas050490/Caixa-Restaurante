import PropTypes from "prop-types";

import { FaBackward } from "react-icons/fa";

import { Container } from "./styles";

function Logout({closeModal, onLogout }) {

  return (
    <Container>
      < FaBackward onClick={closeModal} className="meu-icone"/>
      <h2>Sair do Caixa</h2>
      <button onClick={onLogout}>Logout</button>
    </Container>
  )
}

export default Logout

Logout.propTypes = {
  onLogout: PropTypes.function,
  closeModal: PropTypes.function
};