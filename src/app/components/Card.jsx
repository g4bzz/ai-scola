import React from 'react';

const Card = ({ image, title, description, toggleModal,setCardSelect }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        onClick={() => {
          toggleModal()
          setCardSelect(title)
        }}
    >
      <div
        className="bg-cover bg-center h-64"
        style={{ backgroundImage: `url(${image})` }}
      >
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
