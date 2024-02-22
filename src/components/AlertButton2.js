import React from "react";

const buttons = [
  { message: "Downloading!", children: "Download File" },
  { message: "Charging!", children: "Charge File" },
  { message: "Kicking!", children: "Kick File" },
  { message: "Destroying!", children: "Destroy File" },
  { message: "Throwing!", children: "Throw File" },
];

function AlertButton2({ message, children }) {
  const handleClick = () => {
    alert(message);
  };

  return <button onClick={handleClick}>{children}</button>;
}

export function Toolbar2() {
  return (
    buttons.map(button => 
        <AlertButton2
            message={button.message}
            children={button.children}
        />
    )
  )
}