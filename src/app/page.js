"use client"; /* se nao usar essa zorra a pagina nao renderiza: https://github.com/tailwindlabs/headlessui/issues/1980 */
import { Disclosure,  } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { useState } from 'react';
import About from './pages/about/page';
import Home from './pages/home/page';
import ThemeToggleButton from './components/ThemeToggle';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
	const [activeComponent, setActiveComponent] = useState(<Home />);
	const [active, setActive] = useState('Início');
  

	const pages = [
		{ link: '/pages/home', label: 'Início', component: <Home /> },
		{ link: '/pages/about', label: 'Sobre nós',  component: <About /> },
	]

  return (
    <>
      <div className="min-h-full bg-white dark:bg-gradient-to-b from-zinc-500 to-zinc-400">
        <Disclosure as="nav" className="bg-blue-500 dark:bg-slate-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <h1 className='text-white italic text-2xl font-bold'>ai.scola</h1>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
												{pages.map((item) => (
													<a 
													href={item.link}
													key={item.label}
													onClick={(event) => {
														event.preventDefault();
														setActive(item.label);
														setActiveComponent(item.component)
													}}
													className={classNames(
                              item.label === active 
                                ? 'bg-blue-700 text-white dark:bg-slate-500'
                                : 'text-white hover:bg-blue-700 dark:hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium font-semibold'
															)}
															aria-current='page'
															>
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
									<div className='flex justify-end'>
										<ThemeToggleButton />
									</div>
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-blue-500 p-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Abrir menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
								{pages.map((item) => (
										<Disclosure.Button
											href={item.link}
											key={item.label}
											as='a'
											onClick={(event) => {
												event.preventDefault();
												setActive(item.label);
												setActiveComponent(item.component)
											}}
											className={classNames(
												item.label === active 
													? 'bg-blue-700 text-white'
													: 'text-white hover:bg-blue-700 hover:text-white',
												'block rounded-md px-3 py-2 text-base font-medium'
												)}
												aria-current='page'
										>
											{item.label}
										</Disclosure.Button>
									))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
						{activeComponent}
      </div>
    </>
  )
}
