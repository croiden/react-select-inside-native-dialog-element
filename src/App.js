import "./styles.css";

import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
    document.getElementById("myDialog").showModal();
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
    document.getElementById("myDialog").close();
  };

  return (
    <div>
      <button onClick={handleOpenDialog}>Open Dialog</button>
      <dialog id="myDialog">
        <h2>Dialog Title</h2>
        <p>This is a sample dialog.</p>
        <button onClick={handleCloseDialog}>Close Dialog</button>
        <Select options={options} aria-label="vbdskv" />
      </dialog>
    </div>
  );
};

export default DialogExample;
