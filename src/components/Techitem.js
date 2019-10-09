import React from "react";
import PropTypes from "prop-types";

function Techitem({ tech = "", onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

//caso nao seja passado nada o defaultprops vai colocar por padrao o oculto
Techitem.defaultProps = {
  tech: "Oculto"
};

//uma prevencao de erros ao programar exemplo caso esqueca de colocar o onDelete
Techitem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default Techitem;
