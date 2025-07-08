import { setPopup } from '@/redux-store/slices/toggle-arrow';
import React from 'react'
import { useDispatch  } from 'react-redux';

interface PopupsProps {
  children: React.ReactNode;
  innerStyles ?: string
}

const Popups:React.FC<PopupsProps> = ({children , innerStyles}) => {
const dispatch = useDispatch()

  return (
    <div
          className="bg-black/70  h-full w-full fixed top-0 left-0 flex items-center md:justify-start"
          onClick={() => dispatch(setPopup())}
        >
          <div
            className={`text-black pt-10 px-3 sm:p-11 absolute right-0 bg-white  overflow-auto h-[95%] m-auto w-[95%] md:w-1/2 mr-2 sm:mr-4 ${innerStyles}`}
            onClick={(e) => e.stopPropagation()}
          >
        {children}
    </div>
    </div>
  )
}

export default Popups