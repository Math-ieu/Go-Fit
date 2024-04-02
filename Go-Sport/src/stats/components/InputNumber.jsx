import React from "react";
import { InputNumber } from "primereact/inputnumber";

export default function InputNumberComponent({ selectedValue, onValueChange }) {
  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      {/* <label htmlFor="minmax-buttons" className="font-bold block mb-2">
        Min-Max Boundaries
      </label> */}
      <InputNumber
        inputId="minmax-buttons"
        value={selectedValue}
        onValueChange={(e) => onValueChange(e.value)}
        mode="decimal"
        showButtons
        min={0}
        max={100}
      />
    </div>
  );
}
