import React from 'react';
import { createPortal } from 'react-dom';
import {AiFillCloseCircle} from 'react-icons/ai';

const ModelForm = ({onClose, isOpen, children}) => {
  return createPortal (
    <>
      {isOpen && 
     <div className=' grid place-items-center z-40 backdrop-blur h-screen w-screen top-0 absolute'>
      <div className='relative z-50 bg-white min-h-[200px] min-w-[90%] mx-auto p-3'>
        <div className='flex justify-end'>
            <AiFillCloseCircle onClick={onClose} className='text-3xl cursor-pointer' />
        </div>
        {children}
    </div>
    
     </div>
    }
    </>,
    document.getElementById('model-root')
  )
}

export default ModelForm;
