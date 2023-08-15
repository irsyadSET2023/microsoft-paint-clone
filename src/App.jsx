import { useEffect, useState } from "react";
import Button from "./components/ui/Button";
let count = 0;
let initial = "h-[100px] w-[100px] bg-gray-400 flex justify-center";
function App() {
  //use State is a function that return arrays
  const [state, setState] = useState(0);
  const [bgColor, setBgColor] = useState(null);
  const handleClick = () => {
    count = count + 1;
    setState(state + 1);
  };

  console.log(state);
  useEffect(() => {
    if (state > 10) {
      setBgColor("red");
    }
  }, [state]);

  useEffect(() => {
    if (bgColor) {
      console.log("color changed");
    }
  }, [bgColor]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-4">
      <h1>{state}</h1>
      <Button onClick={handleClick}>+1</Button>
      <div className={initial} style={{ backgroundColor: bgColor }}>
        color
      </div>
    </div>
  );
}

export default App;
