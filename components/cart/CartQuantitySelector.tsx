"use client";

import { FC, useState, useEffect } from "react";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onChange: (value: number) => void;
}

export const QuantitySelector: FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(quantity);

  useEffect(() => {
    setInputValue(quantity);
  }, [quantity]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val > 0) {
      setInputValue(val);
      onChange(val);
    } else {
      setInputValue(1);
      onChange(1);
    }
  };

  return (
    <div className="flex items-center gap-2 bg-gray-100 w-fit ">
      <button
        onClick={onDecrease}
        className="w-8 h-8 flex items-center justify-center text-lg font-bold hover:bg-gray-200 rounded cursor-pointer"
        aria-label="Decrease quantity"
      >
        –
      </button>

      <input
        type="number"
        value={inputValue}
        min={1}
        onChange={handleInputChange}
        className="w-8 text-center border-none focus:outline-none bg-transparent 
    appearance-none 
    [&::-webkit-outer-spin-button]:appearance-none 
    [&::-webkit-inner-spin-button]:appearance-none 
    [-moz-appearance:textfield]"
      />

      <button
        onClick={onIncrease}
        className="w-8 h-8 flex items-center justify-center text-lg font-bold hover:bg-gray-200 rounded cursor-pointer"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};
