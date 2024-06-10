"use client";
import { createContext, useState, useContext, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginToken, setLoginToken] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    setLoginToken({ token });
  }, []);

  return (
    <DataContext.Provider value={{ user, setUser, loginToken }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
