import { createContext, useState } from "react";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const Context = ({children}) => {
    const [showSideBar, setShowSideBar] = useState(false)

  return (
    <UserContext.Provider value={{ showSideBar, setShowSideBar }}>
      {children}
    </UserContext.Provider>
  );
}