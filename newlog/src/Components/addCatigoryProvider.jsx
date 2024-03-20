import { useState, createContext } from "react";

export const ProviderContext = createContext();

const addCatigoryProvider = ({ children }) => {
  const [addcati, setAddcati] = useState(true);
  return (
    <ProviderContext value={{ addcati, setAddcati }}>
      {children}
    </ProviderContext>
  );
};

export default addCatigoryProvider;
