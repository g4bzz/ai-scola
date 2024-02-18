import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid'

function Book({ isOpen, toggleModal, dado }) {

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto " onClose={toggleModal}>
          <div className="flex items-center justify-center min-h-full ">
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
              <div className="fixed bg-white w-[60%] h-[80%] mx-auto rounded-xl shadow-xl dark:bg-zinc-500">

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center p-6">
                  <Dialog.Title className="text-3xl font-medium  leading-6 text-gray-900 mb-6 text-center dark:text-gray-200">
                    {dado !== null && dado.titulo}
                  </Dialog.Title>
                  {dado !== null && dado.audio !== "" && <>
										<p className='dark:text-gray-200 mb-1'>Você também pode ouvir o texto, basta clicar no botão <PlayIcon className="inline h-6 w-6" aria-hidden="true" /> do player abaixo: </p>
										<iframe
											className=" w-full h-32 border-2 border-black"
											src={dado.audio}
											allowFullScreen
											title="Murf Embed Player"
											style={{ border: 'none' }}
											autoPlay
										></iframe>
									</>}
                  <div className="text-gray-950 mb-4 h-full overflow-y-auto dark:text-gray-200">
                    {dado !== null && dado.conteudo && (
                      <p className="text-lg indent-1 mb-4">
                        {dado.conteudo.split('\n\n').map((paragraph, index) => (
                          <Fragment key={index}>
                            {paragraph}
                            <br />
                            <br />
                          </Fragment>
                        ))}
                      </p>
                    )}
                  </div>



                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium dark:text-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
