import { Button } from "antd";
import { BaseButtonProps } from "antd/es/button/button";
import React from "react";

interface BaseButton extends BaseButtonProps {
  onClick?: () => void;
}

export default function BaseButton(props: BaseButton) {
  const {
    children,
    type,
    loading,
    icon,
    iconPosition = "end",
    className,
    onClick,
  } = props;
  return (
    <Button
      className={className}
      type={type}
      loading={loading}
      icon={icon}
      iconPosition={iconPosition}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
