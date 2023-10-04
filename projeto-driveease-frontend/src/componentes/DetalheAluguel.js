import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getProdutoPorId } from "../backend";

export default function DetalheAluguel({onExcluir}) {
  let {id} = useParams();
  const navigate = useNavigate();

  const [produto, setProduto] = useState({
    nome: '',
    ano: '',
    valor: '',
    imagem: '',
    descricao: ''
  });

  useEffect(() => {
    getProdutoPorId(id).then(p => setProduto(p));
  }, [id]); // sempre que o id mudar, o produto deve mudar

  const excluir = () => {
    onExcluir(id).then(navigate('/')); // depois de excluir, voltar para a página inicial
  };

  return (
    <div className='carDetail'>
      <img src={produto.imagem} alt="Foto do produto"/>
      <h1>{produto.nome} - {produto.ano}</h1>
      <h3>R${produto.valor ? produto.valor.toFixed(2) : '-'}/dia</h3>
      <p>{produto.descricao}</p>
      <div className='opcoes'>
        <button className='btn btn-reservar'>RESERVE AGORA</button>
        <Link className='btn btn-voltar' to="/">Voltar</Link>
      </div>
    </div>
  )
}
