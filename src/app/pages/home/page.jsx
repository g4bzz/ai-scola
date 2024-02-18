"use client"; /* se nao usar essa zorra a pagina nao renderiza: https://github.com/tailwindlabs/headlessui/issues/1980 */
import Book from '../../components/Book';
import Card from '../../components/Card';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isopen, setIsopen] = useState(false);
  const [cardSelected, setCardSelected] = useState("")

  const [dados, setDados] = useState([]);

  function toggleModal() {
    setIsopen(!isopen);
  }


  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch('./data.json',{
			headers: {
				Accept: "application/json"
			}
		}); 
        const dadosJSON = await resposta.json();
        setDados(dadosJSON.data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    carregarDados();
  }, []);

  return (
		<>
			<header className="bg-white shadow">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">Início</h1>
				</div>
			</header>
			<main>
				<div className="mx-auto justify-center max-w-7xl py-6 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-x-3 gap-y-6 md:grid-cols-2 sm:grid-cols-1">
				{dados.map((dado, index) => (
					<Card
					key={index}
					dado={dado}
					toggleModal={toggleModal}
					setCardSelect={setCardSelected}
				/>
				))}
				</div>
				<Book isOpen={isopen} toggleModal={toggleModal} dado={cardSelected}/>
			</main>
		</>
  )
}

