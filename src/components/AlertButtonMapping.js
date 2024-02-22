import React from "react";

const buttons = [
  { message: "Downloading!", children: "Download File" },
  { message: "Charging!", children: "Charge File" },
  { message: "Save!", children: "Save File" },
  { children: "Destroy File" },
  { message: "Throwing!" }
];

function AlertButtonMapping({ message, children }) {
  const handleClick = () => {
    alert(message);
  };

  return <button onClick={handleClick}>{children}</button>;
}

export function ToolbarMapping() {
  return (
    buttons.map(button => 
        <AlertButtonMapping
            // Create a default message or children string if either props don't exist in an object
            message={ button.message ? button.message : 'Default Message' }
            children={ button.children ? button.children : 'Default Button' }
        />
    )
  )
}