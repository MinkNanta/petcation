import BtnIcon from './BtnIcon';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { Fragment, useState } from 'react';

export default function Modal({
  children,
  title,
  icon,
  setClose,
  onClick,
  className,
  ...props
}) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={onClick}>
        <span
          className={`${className} ?${className} : "text-orange-500 flex gap-1 justify-center items-center"`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <p>{title}</p>
        </span>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(!isOpen)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-3xl transition-all">
                  <div className="flex justify-end">
                    <BtnIcon
                      icon={<XIcon />}
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    />
                  </div>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
