import React from 'react'
import { Link } from 'react-router-dom';

export default function ListaDeProdutos({produtos}) {
  const renderProduto = (produto) => {
    return (
      <div className='produto' key={'produto_' + produto.id}>
        <Link to={'/detalhe/' + produto.id}>
          <img src={produto.imagem} alt={'Foto do produto: ' + produto.nome}/>
        </Link>
        <p className='nome'>{produto.nome} - {produto.ano}</p>
        <p className='nome'>{produto.marca}</p>
        <p className='valor'>R$ {produto.valor ? produto.valor.toFixed(2) : '-'}/dia</p>
        <h8>*Sua reserva garante um dos modelos de carro acima, estando sujeito à disponibilidade da agência.</h8>
        <Link to={'/detalhe/' + produto.id}>
          <button className='btn btn-primary'>Detalhes</button>
        </Link>
      </div>
    );
  };

  return (
    <div className='listaDeProdutos'>
      { produtos.map(renderProduto) }
    </div>
  )
}
