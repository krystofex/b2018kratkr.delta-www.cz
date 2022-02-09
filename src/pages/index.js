import { useState, Fragment } from 'react';
import Main from '../components/layouts/Main';
import {
  GithubIcon,
  ArrowIcon,
  DownloadIcon,
} from '../components/elements/Icons';
import { Dialog, Transition } from '@headlessui/react';

const LandingPage = () => {
  const [downloadsModalOpen, setDownloadsModalOpen] = useState(false);

  function closeModal() {
    setDownloadsModalOpen(false);
  }

  return (
    <Main>
      <Transition appear show={downloadsModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 w-full h-full bg-black opacity-75" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Downloads
                </Dialog.Title>
                <Dialog.Description className="mt-2 flex flex-col gap-4">
                  <a className="button-small" href="/web-source.tar.gz">
                    Web source .tar.gz
                  </a>

                  <a className="button-small" href="/web-source.zip">
                    Web source .zip
                  </a>
                </Dialog.Description>

                <div className="mt-4">
                  <button
                    onClick={() => setDownloadsModalOpen(false)}
                    className="button-small"
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <h1 className="font-bold text-7xl text-gray-800 mb-12 max-w-2xl leading-[1.2em] text-center">
        {"Let's get started with "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9000]  to-[#D12FC4]">
          Histories
        </span>
      </h1>
      {/* BUTTONS */}
      <div className="flex gap-4 flex-col sm:flex-row">
        {/* DOWNLOADS */}
        <button onClick={() => setDownloadsModalOpen(true)} className="button">
          <span className="w-3 h-3">
            <DownloadIcon />
          </span>
          Downloads
        </button>

        {/* DOCUMENTATION */}
        <a
          className="button"
          href="https://github.com/histories-cc/SOC_dokumentace"
        >
          Documentation
        </a>

        {/* SOURCE CODE */}
        <a className="button" href="https://www.github.com/histories-cc">
          <span className="w-6 h-6">
            <GithubIcon />
          </span>
          Source code
        </a>

        {/* EXPLORE */}
        <a className="button-primary" href="https://www.histories.cc">
          Explore
          <span className="w-4 h-4">
            <ArrowIcon />
          </span>
        </a>
      </div>
    </Main>
  );
};

export default LandingPage;
