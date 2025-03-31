import { createContext, useContext, useState } from "react";

const VisibilityContext = createContext();

export const VisibilityProvider = ({ children }) => {
  const [hideRedBox, setHideRedBox] = useState(false);

  return (
    <VisibilityContext.Provider value={{ hideRedBox, setHideRedBox }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = () => useContext(VisibilityContext);
