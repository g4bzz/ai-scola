"use client"; /* se nao usar essa zorra a pagina nao renderiza: https://github.com/tailwindlabs/headlessui/issues/1980 */

export default function About() {

  return (
		<>
			<header className="bg-white shadow">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">Sobre nós</h1>
				</div>
			</header>
			<main>
				<div className="mx-auto justify-center max-w-7xl py-6 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-x-3 gap-y-6 md:grid-cols-2 sm:grid-cols-1">
					<p>bvbbbbbbbbb</p>
				</div>
			</main>
		</>
  )
}
