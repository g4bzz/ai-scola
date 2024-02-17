"use client"; 
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Card from './components/Card';
import Book from './components/Book';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Ciência', href: '#', current: false },
  { name: 'História', href: '#', current: false },
  { name: 'Tecnologia', href: '#', current: false },
  { name: 'Sobre nós', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {

  const [isopen, setIsopen] = useState(false);

  function toggleModal() {
    setIsopen(!isopen);
  }

  return (
    <>
      <div className="min-h-full bg-white">
        <Disclosure as="nav" className="bg-blue-500">
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
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-blue-700 text-white'
                                : 'text-white hover:bg-blue-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
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
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-700 hover:text-white',
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

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Home</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto justify-center max-w-7xl py-6 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-x-3 gap-y-6 md:grid-cols-2 sm:grid-cols-1">
            {/*  Your content */}
            <Card
              image="/images/frogney.jpeg"
              title="Título do Card"
              description="Descrição do Card"
              toggleModal={toggleModal}
            />
            <Card
              image="/images/frogney.jpeg"
              title="Título do Card"
              description="Descrição do Card"
              toggleModal={toggleModal}
            />
            <Card
              image="/images/frogney.jpeg"
              title="Título do Card"
              description="Descrição do Card"
              toggleModal={toggleModal}
            />
            <Card
              image="/images/frogney.jpeg"
              title="Título do Card"
              description="Descrição do Card"
              toggleModal={toggleModal}
            />
            <Card
              image="/images/frogney.jpeg"
              title="Título do Card"
              description="Descrição do Card"
              toggleModal={toggleModal}
            />
            <Card
              image="/images/frogney.jpeg"
              title="Título do Card"
              description="Descrição do Card"
              toggleModal={toggleModal}
            />
            <Card
              image="/images/frogney.jpeg"
              title="Título do Card"
              description="Descrição do Card"
              toggleModal={toggleModal}
            />
          </div>
          <Book isOpen={isopen} toggleModal={toggleModal} title={"nome"} />
        </main>
      </div>
    </>
  )
}
