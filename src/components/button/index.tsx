import React from "react";
import { Button } from "@nextui-org/react";

type ButtonProps = {
  text?: string;
  icon?: string;
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
} & React.ComponentPropsWithRef<"button">;

const ButtonCommon = ({
  text,
  icon,
  isLoading,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <Button isLoading={isLoading} onPress={onClick} className={className}>
      {text}
    </Button>
  );
};

export default ButtonCommon;
