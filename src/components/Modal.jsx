import Button from './Button';

function ModalContent({ onClose }) {
    return (
      <div className='flex justify-center items-center'> 
        <div className=" bg-neutral-1000 w-96 p-10 gap-10 flex flex-col items-start rounded-2xl">
          <div className='flex flex-col items-start gap-3 self-stretch '>
            <div className='font-bold  text-2xl not-italic text-neutral-50' >Error</div>
            <p className='text-sm not-italic font-normal text-neutral-500'>Oops, something went wrong. Please try again later.</p>
          </div>
          <div>
              <Button onClick={onClose} wh='small' size='md' variant='default' >OK</Button>
          </div>
        </div>
      </div>
    );
  }

import { useState } from 'react';
import { createPortal } from 'react-dom';


function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className='font-bold border border-slate-400 p-3' onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}




export default function App() {
  return (
    <>
      <div className="clipping-container border border-slate-400 p-4">
        <PortalExample />
      </div>
    </>
  );
}