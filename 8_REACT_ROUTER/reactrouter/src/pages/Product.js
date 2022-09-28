import { useParams } from "react-router-dom";
import {useFetch} from "../hooks/useFetch"

const Product = () => {
  // 4 - rota dinâmica
  const { id } = useParams();

  // 5 - carregamento dado individual

  return (
    <>
      <p>ID do produto: {id}</p>
    </>
  );
};

export default Product;
