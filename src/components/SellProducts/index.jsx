import { useAppContext } from "../../useAppContext";
import PropTypes from "prop-types";

import ProductCard from "../ProductCard";
import Button from "../Button";

import { FaBackward } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { BsCash } from "react-icons/bs";
import { FaPix } from "react-icons/fa6";

import { Container } from "./styles";

function SellProducts({ closeModal }) {
    const { cart, checkout } = useAppContext();




    const products = [
        { name: "Estudante", price: 3},
        { name: "Visitante", price: 14},
    ];

    return (
        <>

            <Container>
                < FaBackward onClick={closeModal} fontSize="24px" color="#000" cursor="pointer" />
                <div className="products">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
                <h3>Total: R$ {cart.reduce((acc, p) => acc + p.price * p.quantity, 0)}</h3>
                <div className="payment">
                    <Button onClick={() =>  checkout("Dinheiro")}>
                        <BsCashCoin size="20" /> Dinheiro
                    </Button>
                    <Button onClick={() => checkout("Débito")}>
                        <BsCash size="20" /> Débito
                    </Button>
                    <Button onClick={() => checkout("Crédito")}>
                        <BsCash size="20" /> Crédito
                    </Button>
                    <Button onClick={() => checkout("Pix")}>
                        <FaPix size="20" /> Pix
                    </Button>
                </div>
            </Container >


        </>
    )
}

export default SellProducts

SellProducts.propTypes = {
    closeModal: PropTypes.func.isRequired,
};