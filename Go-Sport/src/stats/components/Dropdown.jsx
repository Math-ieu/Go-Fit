import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function DropdownComponent({ data }) {
  const [selectedCity, setSelectedCity] = useState(null);
  const content = data.map((item) => {
    return { name: item };
  });

  return (
    <div className="card_dropdown">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={content}
        optionLabel="name"
        placeholder="Select"
        className="w-full md:w-14rem"
      />
    </div>
  );
}
