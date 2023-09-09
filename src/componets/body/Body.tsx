import { useState } from "react";

const InputForm = () => {
  const [colorValue, setColor] = useState("");
  const handleNameChange = ({ target }: any) => {
    let hex = target.value;

    const hexRegex = /#+?(([a-f0-9]{1,2}){3})\b/i;
    if (hexRegex.test(hex) && hex.length === 7) {
      const match = hex.match(/\w\w/g);
      const [r, g, b] = match.map((hexRegex: string) => parseInt(hexRegex, 16));
      let rgb = `rgb(${r},${g},${b})`;
      setColor(rgb);
    } else {
      setColor("ошибка");
    }
  };
  document.body.style.backgroundColor = colorValue;
  return (
    <div>
      <form className="form">
        <input maxLength={7} className="input" onChange={handleNameChange} />
        <div className="color-value">{colorValue}</div>
      </form>
    </div>
  );
};
export default InputForm;
