"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export interface PathProps {
  header: string;
  setHeader: Dispatch<SetStateAction<string>>;
  currentPage: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
}

export const PathContext = createContext<PathProps>({
  header: "",
  setHeader: () => {},
  currentPage: "",
  setCurrentPage: () => {},
});

export default function PathProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [header, setHeader] = useState("test");
  const [currentPage, setCurrentPage] = useState("");

  const value = {
    header,
    setHeader,
    currentPage,
    setCurrentPage,
  };

  return <PathContext.Provider value={value}>{children}</PathContext.Provider>;
}

export const usePath = () => {
    const context = useContext(PathContext);
  if (!context) {
    throw new Error("usePath must be used within a PathProvider");
  }
  return context;
};
