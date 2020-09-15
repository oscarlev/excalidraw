import React from "react";

interface Layer {
  id: string;
  label: string;
}

const layers: Layer[] = [
  { id: "1", label: "Lager 1" },
  { id: "2", label: "Lager 2" },
  //Todo: get all layers
];

export const LayerList = ({
  onChange,
  currentLayerId,
  // layers = allLayers,
  // currentLanguage = layerHelper.getLayer().lng,
  floating,
}: {
  // layers?: { lng: string; label: string }[];
  onChange: (value: string) => void;
  currentLayerId: string;
  floating?: boolean;
}) => (
  <React.Fragment>
    <select
      className={`dropdown-select dropdown-select__layer${
        floating ? " dropdown-select--floating" : ""
      }`}
      onChange={({ target }) => onChange(target.value)}
      value={currentLayerId}
      //aria-label={layerHelper.t("buttons.selectLanguage")}
    >
      {layers.map((layer) => (
        <option key={layer.id} value={layer.id}>
          {layer.label}
        </option>
      ))}
    </select>
  </React.Fragment>
);

export const AddLayor = ({
  onChange,
}: {
  onChange: (value: string) => void;
}) => (
  <React.Fragment>
    <button className="addlayerbutton"></button>
  </React.Fragment>
);
