import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const TitleColorContextProvider = ({ Children }) => {
  return <TitleColorContext.Provider>{Children}</TitleColorContext.Provider>;
};
