import React, { useState, createContext } from "react";
export const CONTEXT_FILTER = createContext({
  option: [],
});

export default function Context_Provider({ children }) {
  const [option, setOption] = useState([
    { label: "City", val1: "Peshawar", val2: "Karchi", val3: "Islamabad" },
    { label: "Purpose", val1: "Rent", val2: "Buy", val3: "Booking" },
  ]);

  return (
    <CONTEXT_FILTER.Provider value={{ option }}>
      {children}
    </CONTEXT_FILTER.Provider>
  );
}
