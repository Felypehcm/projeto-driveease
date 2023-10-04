// Coloquei todas as funções para acessar o backend aqui
import axios from "axios";

const URL_BACK = 'http://127.0.0.1:5000/produtos';

/* 
 * DICA DE BOA PRÁTICA: sempre faça um map nos dados que você
 * recebe do backend, convertendo para o formato dos dados que
 * o frontend espera. Desse modo, reduzimos o acoplamento
 * entre backend e frontend. Tornando a aplicação mais robusta
 * à alterações no backend.
 */
export const converteProduto = (p) => {
  return {
    id: p.id ? p.id : p._id, // o spring trabalha com id o node trabala com _id
    marca: p.marca,
    nome: p.modelo,
    ano: p.ano,
    valor: p.diaria,
    imagem: p.imagem,
    descricao: p.descricao
  }
};

export const getProdutos = () => {
  return axios.get(URL_BACK).then(res => {
    return res.data.map(converteProduto);
  });
};

export const getProdutoPorId = (id) => {
  return axios.get(URL_BACK + "/" + id).then(res => {
    return converteProduto(res.data);
  });
};

export const excluirProduto = (id) => {
  return axios.delete(URL_BACK + "/" + id);
};