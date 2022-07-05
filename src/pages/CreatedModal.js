import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BtnIcon from '../common/BtnIcon';

export default function CreatedModal() {
  let [isOpen, setIsOpen] = useState(true);

  const n = useNavigate();

  const handleClose = () => {
    setIsOpen(!isOpen);
    n('/');
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={handleClose}>
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
                    <BtnIcon icon={<XIcon />} onClick={handleClose} />
                  </div>
                  <div className="m-6">
                    <div className="my-7">
                      <img
                        alt="checked"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Check_green_circle.svg/768px-Check_green_circle.svg.png"
                        className="w-[96px] mx-auto mb-6 opacity-60"
                      />
                      <h4 className="text-center">Successfully!</h4>
                      <h6 className="text-center text-gray-500">
                        Your house has been created. you can see house detail at
                        menu my house
                      </h6>
                    </div>
                    <Link className="btn" to="/house">
                      See my house
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
