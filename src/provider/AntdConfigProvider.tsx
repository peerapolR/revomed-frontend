import { ConfigProvider } from "antd";
import React from "react";

export default function AntdConfigProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          // colorFillSecondary: "#fff",
        },
        components: {
          Menu: {
            colorBgBase: "#F3F5FB",
            colorPrimary: "#DC818D",
            iconMarginInlineEnd: 16,
            activeBarBorderWidth: 0,
            itemColor: "#6F7489",
            itemHoverColor: "#DC818D",
            itemHoverBg: "#FCE5E7",
            itemSelectedColor: "#DC818D",
            itemSelectedBg: "#FCE5E7",
          },
          Button: {
            defaultHoverBg: "#FDAEB8",
            defaultHoverColor: "#fff",
          },
          Tabs: {
            cardBg: "#dedede",
          },
          Input: {
            colorBgBase: "#E0E3EB",
            colorBorder: "#E0E3EB",
            hoverBorderColor: "#E0E3EB",
            activeBorderColor: "#E0E3EB",
            // activeShadow: "none",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
