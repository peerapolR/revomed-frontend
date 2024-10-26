import { ConfigProvider, Select, SelectProps } from "antd";
import React from "react";

export default function BaseSelect(props: SelectProps) {
  const { options, defaultValue } = props;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#E0E3EB",
          colorBgBase : "#fcfcfc",
        },
        components: {
          Select: {
            colorBorder: "#E0E3EB",
            
          },
        },
      }}
    >
      <Select options={options} defaultValue={defaultValue}/>
    </ConfigProvider>
  );
}
