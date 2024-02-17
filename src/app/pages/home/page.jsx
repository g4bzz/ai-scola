"use client"; /* se nao usar essa zorra a pagina nao renderiza: https://github.com/tailwindlabs/headlessui/issues/1980 */
import Book from '../../components/Book';
import Card from '../../components/Card';
import { useState } from 'react';

export default function Home() {
  const [isopen, setIsopen] = useState(false);
  const [cardSelected, setCardSelected] = useState("")

  function toggleModal() {
    setIsopen(!isopen);
  }

  const list = [1,2,3,4,5,6]

  return (
		<>
			<header className="bg-white shadow">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">Início</h1>
				</div>
			</header>
			<main>
				<div className="mx-auto justify-center max-w-7xl py-6 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-x-3 gap-y-6 md:grid-cols-2 sm:grid-cols-1">
					{list.map((item) => (
						// eslint-disable-next-line react/jsx-key
						<Card
						image="/images/frogney.jpeg"
						title="Título do Card"
						description={item}
						toggleModal={toggleModal}
						setCardSelect={setCardSelected}
					/>
					))}


					</div>
				<Book isOpen={isopen} toggleModal={toggleModal}  title={cardSelected}/>
			</main>
		</>
  )
}

