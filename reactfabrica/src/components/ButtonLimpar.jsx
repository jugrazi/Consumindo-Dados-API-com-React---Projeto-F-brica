import React from "react";

const ButtonLimpar = ({ apagarDados }) => {
  return (
    <button className="btn-azul" type="button" onClick={apagarDados}>
      limpar monstros
    </button>
  );
};

export default ButtonLimpar;