import React, { useState } from "react";

const Paint = () => {
  const [drawing, setDrawing] = useState(false);
  const [bgColor, setBgColor] = useState("#1F2937");
  const [penColor, setPenColor] = useState("#000000");
  const [penSize, setPenSize] = useState(5);
  const [isErasing, setIsErasing] = useState(false); // New state for eraser
  const [positions, setPositions] = useState([]);

  const handleMouseDown = (e) => {
    setDrawing(true);
    const x = e.clientX;
    const y = e.clientY;
    const color = isErasing ? bgColor : penColor; // Use eraser or pen color
    setPositions([...positions, { x, y, bgColor: color, size: penSize }]);
  };

  const handleMouseUp = () => {
    setDrawing(false);
  };

  const handleMouseMove = (e) => {
    if (!drawing) return;
    const x = e.clientX;
    const y = e.clientY;
    const color = isErasing ? bgColor : penColor; // Use eraser or pen color
    setPositions([...positions, { x, y, bgColor: color, size: penSize }]);
  };

  const handleChangePenColor = (e) => {
    setPenColor(e.target.value);
  };

  const handleChangePenSize = (e) => {
    setPenSize(Number(e.target.value));
  };

  const handleToggleEraser = () => {
    setIsErasing(!isErasing);
  };

  return (
    <div>
      <div className="bg-gray-600 fixed top-4 right-4 w-fit p-2 z-50 space-y-2">
        <div>
          <p className="text-white">Pen Size: {penSize}</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-white">Pen Color</p>
          <input
            type="color"
            value={penColor}
            onChange={(event) => handleChangePenColor(event)}
          />
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-white">Pen Size</p>
          <input
            type="range"
            min="1"
            max="50"
            value={penSize}
            onChange={(event) => handleChangePenSize(event)}
          />
        </div>
        <div className="flex gap-2 items-center">
          <button onClick={handleToggleEraser}>
            {isErasing ? "Disable Eraser" : "Enable Eraser"}
          </button>
        </div>
      </div>

      <div
        className="h-screen w-screen bg-gray-800 relative"
        onMouseDown={(event) => handleMouseDown(event)}
        onMouseUp={() => handleMouseUp()}
        onMouseMove={(event) => handleMouseMove(event)}
      >
        {positions.map((element, index) => {
          return (
            <PenStroke
              key={index}
              positionX={element.x}
              positionY={element.y}
              penColor={element.bgColor}
              penSize={element.size}
            />
          );
        })}
      </div>
    </div>
  );
};

const PenStroke = ({ positionY = 0, positionX = 0, penColor, penSize }) => {
  return (
    <div
      className="rounded-full absolute"
      style={{
        top: positionY,
        left: positionX,
        backgroundColor: penColor,
        width: penSize,
        height: penSize,
      }}
    />
  );
};

export default Paint;
