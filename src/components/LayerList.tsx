import React from "react";
import { Layer } from "../types";
import { trash } from "./icons";
import { ToolButton } from "./ToolButton";
import { t } from "../i18n";

export const LayerList = ({
  onSelect,
  onRemove,
  layers,
  currentLayerId,
}: {
  onSelect: (value: string) => void;
  onRemove: (id: string) => void;
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
        onClick={() => onSelect(layer.id)}
      >
        <div>{layer.label}</div>
        <ToolButton
          type="button"
          icon={trash}
          title={t("buttons.removeLayer")}
          aria-label={t("buttons.removeLayer")}
          className="removelayerbutton"
          onClick={() => onRemove(layer.id)}
        />
      </div>
    ))}
  </div>
);
