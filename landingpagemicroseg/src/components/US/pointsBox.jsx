import React from 'react';
import '../US/pointsBox.css';
import { FaExchangeAlt, FaCreditCard, FaTruck } from 'react-icons/fa'; 

const PointsBox = () => {
    return (
        <div className='pointsContainer'>
            <div>
                <div className='iconContainer'>
                    <FaTruck size={25}/>
                    <h3>ENTREGA OU RETIRADA AGÍL</h3>
                </div>
                <p>Logística rápida e opções de retirada facilitadas em nossos pontos de atendimento.</p>
            </div>
            <div>
                <div className='iconContainer'>
                    <FaExchangeAlt size={25}/>
                    <h3>SUPORTE E TROCA EXPRESSA</h3>
                </div>
                <p>Atendimento especializado no pós-venda e garantia com <strong> troca expressa </strong></p>
            </div>
            <div>
                <div className='iconContainer'>
                    <FaCreditCard size={25}/>
                    <h3>CONDIÇÕES ESPECIAIS</h3>
                </div>
                <p>Facilidade no pagamento com <strong>preços exclusivos para revenda</strong></p>
            </div>
        </div>
    );
};

export default PointsBox;