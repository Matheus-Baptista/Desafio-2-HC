import React, {useState, useEffect} from 'react';

import { Container, LinkLogin, Menu } from './style';

import api from '../../../services/api';

export default function Home() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
  
    useEffect(() => {
      api.get('').then((response) => {
        setData(response.data);
      });
    }, []);

    function handleCart(index) {
      let product = data[index];
      setCart((cart) => [...cart, product]);
    }
  
    return (
      <Container>
        <Menu>
          <LinkLogin to="/login">Cadastre-se</LinkLogin>
          <div className="cart">
            <span>( {cart.length} ) - Itens no carrinho</span>
          </div>
        </Menu>
        <section>
          {data.map((product, index) => (
            <div className="product-content" key={product.id}>
              <img src={product.image} alt="Imagem do produto"/>
              <h4>{product.name}</h4>
              <span>{product.model}</span>
              <h5>{product.price}</h5>
              <button onClick={() => handleCart(index)}>
                Adicionar ao carrinho
              </button>
            </div>
          ))}
        </section>
      </Container>
    );
  }

