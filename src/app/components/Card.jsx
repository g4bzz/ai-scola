import React from 'react';

const Card = ({ dado, toggleModal,setCardSelect }) => {
  console.log(dado.imagem);
  return (
    <div className="max-w-xs bg-blue-500 text-white dark:bg-zinc-700 dark:text-gray-200 rounded overflow-hidden shadow-md shadow-gray-400 dark:shadow-slate-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
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
