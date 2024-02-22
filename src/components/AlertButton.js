import React from "react";

function AlertButton({ message, children }) {
    const handleClick = () => {
        alert(message)
    }

  return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export function Toolbar() {
  return (
    <>
        <AlertButton 
            message='first message'
            children='Alert 1'
        />
        
        <AlertButton 
            message='second message'
            children='Alert 2'
        />
    </>
      
  )
}
