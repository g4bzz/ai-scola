import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react';

function Book({ isOpen, toggleModal, title }) {

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto " onClose={toggleModal}>
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
              <div className="fixed bg-white w-[60%] h-[80%] mx-auto rounded-xl shadow-xl ">
             
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center p-6">
                  <Dialog.Title className="text-3xl font-medium  leading-6 text-gray-900 mb-2 text-center">
                    {title}
                  </Dialog.Title>
                  <iframe
                  className="murf-embed w-full"
                  src="https://murf.ai/embeds/index.html?embedId=lsqorq7b"
                  allowFullScreen
                  title="Murf Embed Player"
                  style={{ border: 'none' }}
                  autoPlay
                ></iframe>
                  <p className="text-lg text-gray-950 mb-4 h-full overflow-y-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut urna consectetur, varius est eget, condimentum sapien. Integer ullamcorper libero a elit ultricies ullamcorper. Aliquam tempor magna sit amet erat venenatis, vitae fermentum lorem vestibulum. Quisque sit amet tortor vel neque malesuada mattis. Fusce ac tincidunt odio. Fusce vel nisi non dolor feugiat fermentum. Morbi id velit convallis, fermentum leo eget, malesuada eros. Nam eu justo ac elit accumsan dapibus nec at leo. Nulla quis ligula nec metus feugiat vehicula in id odio.

                    Cras fermentum eget justo sit amet dapibus. Morbi a nunc scelerisque, lacinia risus eget, luctus ligula. Vivamus id ligula ultricies, blandit metus at, interdum eros. Aliquam et metus justo. Aenean ac odio vitae nunc ullamcorper tincidunt. Quisque vel ex nec urna aliquam malesuada. Nulla facilisi. Integer maximus consequat est, eget vestibulum sapien malesuada sed. Donec mattis felis in turpis iaculis ultrices. Cras auctor fringilla erat, vel ultricies enim ultricies at. Nulla nec tincidunt est. Aenean semper tellus id sollicitudin accumsan. Suspendisse potenti. Nam venenatis libero in dolor fermentum, ut volutpat arcu tincidunt. Vestibulum mattis felis a pulvinar placerat. Maecenas volutpat risus eget lectus varius, in egestas nulla luctus. In consectetur nibh nec nisi suscipit convallis.

                    Sed at arcu vel orci placerat blandit in vel mi. Aliquam gravida sem sed urna consectetur eleifend. Suspendisse potenti. Pellentesque id enim libero. Donec consectetur sapien nec turpis mattis placerat. Suspendisse eleifend odio nulla, et suscipit risus scelerisque eget. Integer vestibulum urna a purus convallis, et sollicitudin velit feugiat. Phasellus at scelerisque purus. Vestibulum nec malesuada purus. Sed nec justo vehicula, fringilla erat et, elementum est. Morbi nec accumsan metus. In consequat id urna eu tristique. Nullam volutpat aliquam libero, eu vestibulum felis tincidunt nec. Vestibulum malesuada fermentum dolor, vel gravida ex tempus nec. Nulla facilisi. Integer nec tristique ligula. Maecenas posuere tortor nec nulla vestibulum, vel viverra leo vestibulum. Curabitur ac est sit amet elit pellentesque consectetur. Nam tristique ante in nulla lobortis, id sollicitudin nulla fringilla. Ut suscipit sodales erat ac fringilla. Nullam eleifend est sit amet lectus varius, eu vulputate arcu tincidunt. Aliquam pretium dolor at tellus convallis vestibulum. Vivamus condimentum felis vel mi auctor, in facilisis velit pulvinar. Pro
                    ex malesuada, vitae lacinia nulla ultrices. Nulla facilisi. Proin eget lobortis purus, non posuere urna. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut urna consectetur, varius est eget, condimentum sapien. Integer ullamcorper libero a elit ultricies ullamcorper. Aliquam tempor magna sit amet erat venenatis, vitae fermentum lorem vestibulum. Quisque sit amet tortor vel neque malesuada mattis. Fusce ac tincidunt odio. Fusce vel nisi non dolor feugiat fermentum. Morbi id velit convallis, fermentum leo eget, malesuada eros. Nam eu justo ac elit accumsan dapibus nec at leo. Nulla quis ligula nec metus feugiat vehicula in id odio.

                    Cras fermentum eget justo sit amet dapibus. Morbi a nunc scelerisque, lacinia risus eget, luctus ligula. Vivamus id ligula ultricies, blandit metus at, interdum eros. Aliquam et metus justo. Aenean ac odio vitae nunc ullamcorper tincidunt. Quisque vel ex nec urna aliquam malesuada. Nulla facilisi. Integer maximus consequat est, eget vestibulum sapien malesuada sed. Donec mattis felis in turpis iaculis ultrices. Cras auctor fringilla erat, vel ultricies enim ultricies at. Nulla nec tincidunt est. Aenean semper tellus id sollicitudin accumsan. Suspendisse potenti. Nam venenatis libero in dolor fermentum, ut volutpat arcu tincidunt. Vestibulum mattis felis a pulvinar placerat. Maecenas volutpat risus eget lectus varius, in egestas nulla luctus. In consectetur nibh nec nisi suscipit convallis.

                    Sed at arcu vel orci placerat blandit in vel mi. Aliquam gravida sem sed urna consectetur eleifend. Suspendisse potenti. Pellentesque id enim libero. Donec consectetur sapien nec turpis mattis placerat. Suspendisse eleifend odio nulla, et suscipit risus scelerisque eget. Integer vestibulum urna a purus convallis, et sollicitudin velit feugiat. Phasellus at scelerisque purus. Vestibulum nec malesuada purus. Sed nec justo vehicula, fringilla erat et, elementum est. Morbi nec accumsan metus. In consequat id urna eu tristique. Nullam volutpat aliquam libero, eu vestibulum felis tincidunt nec. Vestibulum malesuada fermentum dolor, vel gravida ex tempus nec. Nulla facilisi. Integer nec tristique ligula. Maecenas posuere tortor nec nulla vestibulum, vel viverra leo vestibulum. Curabitur ac est sit amet elit pellentesque consectetur. Nam tristique ante in nulla lobortis, id sollicitudin nulla fringilla. Ut suscipit sodales erat ac fringilla. Nullam eleifend est sit amet lectus varius, eu vulputate arcu tincidunt. Aliquam pretium dolor at tellus convallis vestibulum. Vivamus condimentum felis vel mi auctor, in facilisis velit pulvinar. Pro
                    ex malesuada, vitae lacinia nulla ultrices. Nulla facilisi. Proin eget lobortis purus, non posuere urna. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut urna consectetur, varius est eget, condimentum sapien. Integer ullamcorper libero a elit ultricies ullamcorper. Aliquam tempor magna sit amet erat venenatis, vitae fermentum lorem vestibulum. Quisque sit amet tortor vel neque malesuada mattis. Fusce ac tincidunt odio. Fusce vel nisi non dolor feugiat fermentum. Morbi id velit convallis, fermentum leo eget, malesuada eros. Nam eu justo ac elit accumsan dapibus nec at leo. Nulla quis ligula nec metus feugiat vehicula in id odio.

                    Cras fermentum eget justo sit amet dapibus. Morbi a nunc scelerisque, lacinia risus eget, luctus ligula. Vivamus id ligula ultricies, blandit metus at, interdum eros. Aliquam et metus justo. Aenean ac odio vitae nunc ullamcorper tincidunt. Quisque vel ex nec urna aliquam malesuada. Nulla facilisi. Integer maximus consequat est, eget vestibulum sapien malesuada sed. Donec mattis felis in turpis iaculis ultrices. Cras auctor fringilla erat, vel ultricies enim ultricies at. Nulla nec tincidunt est. Aenean semper tellus id sollicitudin accumsan. Suspendisse potenti. Nam venenatis libero in dolor fermentum, ut volutpat arcu tincidunt. Vestibulum mattis felis a pulvinar placerat. Maecenas volutpat risus eget lectus varius, in egestas nulla luctus. In consectetur nibh nec nisi suscipit convallis.

                    Sed at arcu vel orci placerat blandit in vel mi. Aliquam gravida sem sed urna consectetur eleifend. Suspendisse potenti. Pellentesque id enim libero. Donec consectetur sapien nec turpis mattis placerat. Suspendisse eleifend odio nulla, et suscipit risus scelerisque eget. Integer vestibulum urna a purus convallis, et sollicitudin velit feugiat. Phasellus at scelerisque purus. Vestibulum nec malesuada purus. Sed nec justo vehicula, fringilla erat et, elementum est. Morbi nec accumsan metus. In consequat id urna eu tristique. Nullam volutpat aliquam libero, eu vestibulum felis tincidunt nec. Vestibulum malesuada fermentum dolor, vel gravida ex tempus nec. Nulla facilisi. Integer nec tristique ligula. Maecenas posuere tortor nec nulla vestibulum, vel viverra leo vestibulum. Curabitur ac est sit amet elit pellentesque consectetur. Nam tristique ante in nulla lobortis, id sollicitudin nulla fringilla. Ut suscipit sodales erat ac fringilla. Nullam eleifend est sit amet lectus varius, eu vulputate arcu tincidunt. Aliquam pretium dolor at tellus convallis vestibulum. Vivamus condimentum felis vel mi auctor, in facilisis velit pulvinar. Pro
                    ex malesuada, vitae lacinia nulla ultrices. Nulla facilisi. Proin eget lobortis purus, non posuere urna. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut urna consectetur, varius est eget, condimentum sapien. Integer ullamcorper libero a elit ultricies ullamcorper. Aliquam tempor magna sit amet erat venenatis, vitae fermentum lorem vestibulum. Quisque sit amet tortor vel neque malesuada mattis. Fusce ac tincidunt odio. Fusce vel nisi non dolor feugiat fermentum. Morbi id velit convallis, fermentum leo eget, malesuada eros. Nam eu justo ac elit accumsan dapibus nec at leo. Nulla quis ligula nec metus feugiat vehicula in id odio.

                    Cras fermentum eget justo sit amet dapibus. Morbi a nunc scelerisque, lacinia risus eget, luctus ligula. Vivamus id ligula ultricies, blandit metus at, interdum eros. Aliquam et metus justo. Aenean ac odio vitae nunc ullamcorper tincidunt. Quisque vel ex nec urna aliquam malesuada. Nulla facilisi. Integer maximus consequat est, eget vestibulum sapien malesuada sed. Donec mattis felis in turpis iaculis ultrices. Cras auctor fringilla erat, vel ultricies enim ultricies at. Nulla nec tincidunt est. Aenean semper tellus id sollicitudin accumsan. Suspendisse potenti. Nam venenatis libero in dolor fermentum, ut volutpat arcu tincidunt. Vestibulum mattis felis a pulvinar placerat. Maecenas volutpat risus eget lectus varius, in egestas nulla luctus. In consectetur nibh nec nisi suscipit convallis.

                    Sed at arcu vel orci placerat blandit in vel mi. Aliquam gravida sem sed urna consectetur eleifend. Suspendisse potenti. Pellentesque id enim libero. Donec consectetur sapien nec turpis mattis placerat. Suspendisse eleifend odio nulla, et suscipit risus scelerisque eget. Integer vestibulum urna a purus convallis, et sollicitudin velit feugiat. Phasellus at scelerisque purus. Vestibulum nec malesuada purus. Sed nec justo vehicula, fringilla erat et, elementum est. Morbi nec accumsan metus. In consequat id urna eu tristique. Nullam volutpat aliquam libero, eu vestibulum felis tincidunt nec. Vestibulum malesuada fermentum dolor, vel gravida ex tempus nec. Nulla facilisi. Integer nec tristique ligula. Maecenas posuere tortor nec nulla vestibulum, vel viverra leo vestibulum. Curabitur ac est sit amet elit pellentesque consectetur. Nam tristique ante in nulla lobortis, id sollicitudin nulla fringilla. Ut suscipit sodales erat ac fringilla. Nullam eleifend est sit amet lectus varius, eu vulputate arcu tincidunt. Aliquam pretium dolor at tellus convallis vestibulum. Vivamus condimentum felis vel mi auctor, in facilisis velit pulvinar. Pro
                    ex malesuada, vitae lacinia nulla ultrices. Nulla facilisi. Proin eget lobortis purus, non posuere urna. 
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
