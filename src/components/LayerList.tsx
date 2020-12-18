import React, { useMemo } from "react";
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
}) => {
  const items = useMemo(() => [...layers].reverse(), [layers]);

  return (
    <div>
      <div className="layer-item-list">
        {items.map((layer) => (
          <div
            className={`layer-item ${
              currentLayerId === layer.id && "layer-item-active"
            }`}
            key={layer.id}
            onClick={() => onSelect(layer.id)}
          >
            <div>{layer.label}</div>
            {layer.id !== "default" && (
              <div onClick={(e) => e.stopPropagation()}>
                <ToolButton
                  type="button"
                  icon={trash}
                  title={t("buttons.removeLayer")}
                  aria-label={t("buttons.removeLayer")}
                  className="removelayerbutton"
                  onClick={() => onRemove(layer.id)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
