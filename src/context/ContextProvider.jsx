import { createContext, useState, useEffect } from "react";

const TextsContext = createContext(null);

const ContextProvider = ({ children }) => {
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
    <TextsContext.Provider value={{ texts, setTexts, onAddText }}>
      {children}
    </TextsContext.Provider>
  );
};

export default ContextProvider;
