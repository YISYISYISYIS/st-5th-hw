import React, { useState, useEffect, createContext } from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";

export const textContext = createContext(null);
function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <textContext.Provider value={{ texts, onAddText }}>
      <TextInput />
      <TextList />
    </textContext.Provider>
  );
}

export default App;
