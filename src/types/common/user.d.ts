export interface StateContextType {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  click: () => void;
  isLoading: boolean;
  isInvalidUsername: boolean;
  isInvalidPassword: boolean;
}
