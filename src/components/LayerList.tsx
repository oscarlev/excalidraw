import React from "react";
import { Layer } from "../types";

export const LayerList = ({
  onChange,
  layers,
  currentLayerId,
  floating,
}: {
  onChange: (value: string) => void;
  layers: Layer[];
  currentLayerId: string;
  floating?: boolean;
}) => (
  <select
    className={`dropdown-select dropdown-select__layer${
      floating ? " dropdown-select--floating" : ""
    }`}
    onChange={({ target }) => onChange(target.value)}
    value={currentLayerId}
  >
    {layers.map((layer) => (
      <option key={layer.id} value={layer.id}>
        {layer.label}
      </option>
    ))}
  </select>
);

export const AddLayor = ({ onClick }: { onClick: () => void }) => (
  <button className="addlayerbutton" onClick={() => onClick()}>
    +
  </button>
);
