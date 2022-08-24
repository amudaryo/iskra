import { useState } from "react";
import { useStorage, useStorageByDay } from "../../../hooks/useLocalStorage";

export default function CreateSeal({ sealAdvice, sealFood, ...props }) {
  const [sealInput, setSealInput] = useState("");
  const [today] = useStorage("today");
  const [sealDirective, setSealDirective] = useStorageByDay("seals", today);
  const onSealChange = (event) => {
    setSealInput(event.target.value);
  };
  const storeSeal = () => {
    const payload = { text: sealInput };
    setSealDirective([...sealDirective, payload]);
  };
  return (
    <div>
      <input placeholder="Show me your seals" onChange={onSealChange} />
      <p>{sealInput}</p>
      <p>{sealFood}</p>
      <p>{sealAdvice}</p>
      {/* {props.sealRings && props.sealRings.map((ring) => <p>{ring}</p>)} */}
      <button onClick={storeSeal}>Send the seals!</button>
    </div>
  );
}
