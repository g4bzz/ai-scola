import React from 'react';

const Card = ({ dado, toggleModal,setCardSelect }) => {
  console.log(dado.imagem);
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        onClick={() => {
          toggleModal()
          setCardSelect(dado)
        }}
    >
      <div
        className="bg-cover bg-center h-64"
        style={{ backgroundImage: `url('/images/${dado.imagem}')` }}
      >
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{dado.titulo}</div>
        <p className="text-gray-700 text-base">{dado.description}</p>
      </div>
    </div>
  );
};

export default Card;
