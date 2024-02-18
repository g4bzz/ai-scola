"use client"; /* se nao usar essa zorra a pagina nao renderiza: https://github.com/tailwindlabs/headlessui/issues/1980 */

export default function About() {
	const nomes = [
    'Gabriel de Oliveira Santos',
    'Gustavo Caetano Santos',
    'Vitor Hugo Ribeiro Tiburtino de Melo'
  ];
  return (
		<>
			<header className="bg-white shadow dark:bg-zinc-700">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200">Sobre Nós</h1>
				</div>
			</header>
			<main>
				<div className="mx-auto w-3/5 h-svh text-lg dark:text-gray-100 justify-center max-w-7xl py-6 sm:px-6 lg:px-8">
					<p>Somos uma equipe apaixonada por simplificar o conhecimento para jovens. Nosso site tem como objetivo transaformar textos e histórias complexas eme algo mais acessível e envolvente, especialmente para os mais jovens. Utilizamos tecnologia de Inteligência Artificial (IA) para narrar esses conteúdos por meio de áudios cativantes.</p>
					<p>Conheça os integrantes da nossa equipe:</p>
					<ul className="list-disc ml-5">
						{nomes.map((nome, index) => (
							<li key={index} className="py-1 ml-2">
								{nome}
							</li>
						))}
					</ul>
					<p>
						Jutos, estamos comprometidos em simplificar o mundo das palavras e inspirar a próxima geração de leitores e pensadores. Seja bem-vindo ao nosso site, onde a IA dá vida às histórias e torna o aprendizado uma experiência única e acessível.
					</p>
				</div>
			</main>
		</>
  )
}
