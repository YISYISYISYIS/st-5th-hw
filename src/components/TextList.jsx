import { useContext } from "react";
import { textContext } from "../App";

export default function TextList() {
  const { texts } = useContext(textContext);
  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
