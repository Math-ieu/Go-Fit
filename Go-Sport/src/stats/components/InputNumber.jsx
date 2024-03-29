import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";

export default function InputNumberComponent() {
  const [value3, setValue3] = useState(25);

  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <label htmlFor="minmax-buttons" className="font-bold block mb-2">
        Min-Max Boundaries
      </label>
      <InputNumber
        inputId="minmax-buttons"
        value={value3}
        onValueChange={(e) => setValue3(e.value)}
        mode="decimal"
        showButtons
        min={0}
        max={100}
      />
    </div>
  );
}
