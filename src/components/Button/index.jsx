import { ContainerButton } from "./styles"

import PropTypes from "prop-types";

function Button({onClick,children}){

    return(
        <ContainerButton onClick={onClick}>
        {children}
        </ContainerButton>
    )
}

export default Button

Button.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func, 
};