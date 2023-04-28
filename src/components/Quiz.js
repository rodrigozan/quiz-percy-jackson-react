import React from "react";
import PropTypes from "prop-types";

function Quiz(props) {
  const { step, handleAnswer, pergunta, opcoes } = props;

  const renderOpcoes = () => {
    return opcoes.map((opcao, index) => {
      return (
        <div key={index} className="opcoes-grid">
          <button class="rounded" onClick={() => handleAnswer(opcao)}>
            {opcao}
          </button>
        </div>
      );
    });
  };

  return (
    <div className="quiz-container">
      <h2>Pergunta {step}</h2>
      <h3 className="text-3xl font-bold mb-8">{pergunta}</h3>
      {renderOpcoes()}
    </div>
  );
}

Quiz.propTypes = {
  step: PropTypes.number.isRequired,
  handleAnswer: PropTypes.func.isRequired,
  pergunta: PropTypes.string.isRequired,
  opcoes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Quiz;
