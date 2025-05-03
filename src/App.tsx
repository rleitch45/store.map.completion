import React from "react";
import mapData from "./mapData.json";

type Shape = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  status: string;
};

const getStatusColor = (status: string): string => {
  switch (status) {
    case "W1 COMPLETE":
      return "#e920c0";
    case "W2 COMPLETE":
      return "#8b20e9";
    case "W3 COMPLETE":
      return "#203ce9";
    case "W4 COMPLETE":
      return "#20a5e9";
    case "W5 COMPLETE":
      return "#20e9c0";
    case "W6 COMPLETE":
      return "#20e98b";
    case "W7 COMPLETE":
      return "#4ee920";
    case "W8 COMPLETE":
      return "#d1e920";
    default:
      return "#ccc";
  }
};

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Store Map (Local Preview)</h2>
      <svg
        width="100%"
        height="600"
        style={{ background: "#f5f5f5", border: "1px solid #ccc" }}
      >
        {mapData.map((shape: Shape, index: number) => (
          <g key={shape.id || index}>
            <rect
              x={shape.x}
              y={shape.y}
              width={shape.width}
              height={shape.height}
              fill={getStatusColor(shape.status)}
              stroke="#000"
              strokeWidth={1}
            />
            <text
              x={shape.x + shape.width / 2}
              y={shape.y + shape.height / 2}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="6"
              fill="#000"
            >
              {shape.id}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default App;
