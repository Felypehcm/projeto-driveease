import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { useEffect, useState } from "react";
import Cabecalho from "./componentes/Cabecalho";
import Footer from "./componentes/Footer";
import ListaDeProdutos from "./componentes/ListaDeProdutos";
import DetalheAluguel from "./componentes/DetalheAluguel"
import { getProdutos, excluirProduto } from "./backend";

function App() {
  const [produtos, setProdutos] = useState([]);

  // REMOVER UM PRODUTO
  const removerProduto = async (id) => {
    await excluirProduto(id);
    setProdutos(await getProdutos());
  };

  // função chamada quando o componente for carregado
  useEffect(() => {
    getProdutos().then(prods => setProdutos(prods));
  }, []);

  return (
    <div className="container py-3">
    <Router>
      <Cabecalho/>
        <Routes>
          <Route path="/" exact={true} element={<ListaDeProdutos produtos={produtos}/>}/>
          <Route path="/detalhe/:id" exact={true} element={<DetalheAluguel onExcluir={removerProduto}/>}/>
        </Routes> 
      <Footer/>     
    </Router>
    </div>
  );
}

export default App;
