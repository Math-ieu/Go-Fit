import React from "react";
import { Dropdown } from "primereact/dropdown";

export default function DropdownComponent({
  data,
  placeholder,
  selectedValue,
  onValueChange,
}) {
  const content = data.map((item) => {
    return { name: item };
  });
  const handleChange = (e) => {
    onValueChange(e.value);
  };
  return (
    <div className="card_dropdown">
      <Dropdown
        value={selectedValue}
        onChange={handleChange}
        options={content}
        optionLabel="name"
        placeholder={placeholder}
        className="w-full md:w-14rem"
      />
    </div>
  );
}
