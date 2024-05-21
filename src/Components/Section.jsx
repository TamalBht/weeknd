import React from 'react'

const Section = ({children,id,className}) => {
  return (
    <div className={`min-w-[100vw] min-h-[100vh] px-1  ${className || ""}`} id={id}>
      {children}
    </div>
  )
}

export default Section
