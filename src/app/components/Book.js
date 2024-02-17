import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

function Book({ isOpen, toggleModal, title }) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = 2; // Defina o número total de páginas do livro

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages - 1 ? prevPage + 1 : prevPage));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage));
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={toggleModal}>
          <div className="flex items-center justify-center min-h-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <div className="relative bg-white w-96 h-64 mx-auto rounded-xl shadow-xl">
                <div className="absolute inset-0 flex">
                  {/* Left page */}
                  {currentPage > 0 && (
                    <div className="w-1/2 bg-black rounded-l-xl cursor-pointer" onClick={prevPage}></div>
                  )}

                  {/* Right page */}
                  {currentPage < totalPages - 1 && (
                    <div className="w-1/2 bg-gray-100 rounded-r-xl cursor-pointer" onClick={nextPage}></div>
                  )}
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center p-6">
                  <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 mb-2">
                    {title}
                  </Dialog.Title>
                  <p className="text-sm text-gray-500 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum magna sit amet posuere vehicula. Ut efficitur arcu at ex malesuada, vitae lacinia nulla ultrices. Nulla facilisi. Proin eget lobortis purus, non posuere urna. 
                  </p>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={toggleModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Book;
