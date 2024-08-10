"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  useState,
  useEffect,
} from "react";
import { StateContextType } from "../types/common/user";

export const StateContext = createContext<StateContextType>({
  username: "",
  setUsername: () => {},
  password: "",
  setPassword: () => {},
  click: () => {},
  isLoading: false,
  isInvalidUsername: false,
  isInvalidPassword: false,
});

type ContextProviderProps = {
  children?: ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalidUsername, setIsInvalidUsername] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);

  const click = () => {
    setIsLoading(true);
    if (username) {
      setIsInvalidUsername(false);
    } else {
      setIsInvalidUsername(true);
    }
    if (password) {
      setIsInvalidPassword(false);
    } else {
      setIsInvalidPassword(true);
    }
    setIsLoading(false);
  };

  const value = {
    username,
    setUsername,
    password,
    setPassword,
    click,
    isLoading,
    isInvalidUsername,
    isInvalidPassword,
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export default ContextProvider;

export const useUserAuth = () => {
  const ctx = useContext(StateContext);

  if (!ctx) {
    throw new Error(
      "useUserAuth must be used within a UserAuthContextProvider"
    );
  }

  return ctx;
};
