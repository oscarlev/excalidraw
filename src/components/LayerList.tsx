import React from "react";
import { Layer } from "../types";

export const LayerList = ({
  onChange,
  layers,
  currentLayerId,
}: {
  onChange: (value: string) => void;
  layers: Layer[];
  currentLayerId: string;
}) => (
  <div className="layer-item-list">
    {layers.map((layer) => (
      <div
        className={`layer-item ${
          currentLayerId === layer.id && "layer-item-active"
        }`}
        key={layer.id}
        onClick={() => onChange(layer.id)}
      >
        {layer.label}
      </div>
    ))}
  </div>
);
