import Monstro from "./Monstro";

const ListaMonstros = (props) => {
  const dados = props.dados;

  return (
    <>
      {dados.map((objeto) => {
        return <Monstro key={objeto.id} monstroUnico={objeto} />;
      })}
    </>
  );
};

export default ListaMonstros;