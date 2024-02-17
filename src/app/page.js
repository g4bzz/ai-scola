"use client"; /* se nao usar essa zorra a pagina nao renderiza: https://github.com/tailwindlabs/headlessui/issues/1980 */
import { Disclosure,  } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import Link from 'next/link'
import About from './pages/about/page';
import Home from './pages/home/page';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Ciência', href: '#', current: false },
  { name: 'História', href: '#', current: false },
  { name: 'Tecnologia', href: '#', current: false },
  { name: 'Sobre nós', href: '/about', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
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
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
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
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
															)}
															aria-current='page'
															>
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Menu Mobile */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
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
