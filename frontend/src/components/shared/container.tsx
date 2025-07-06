import React from 'react'

interface containerProp {
    parentStyle ?: string,
    className ?: string
    children: React.ReactNode
}

const Container:React.FC<containerProp> = ({children , parentStyle, className}) => {
  return (
     <div className={`w-full flex justify-center ${parentStyle}`}>
 
            <div className={`max-w-[1580px] pl-5 lg:pl-14 py-10 w-full ${className}`}>
 
                {children}
            </div>
        </div>
  )
}

export default Container