import React from "react";
import { ConfigProvider, Pagination } from "antd";
import { PaginationConfig } from "antd/es/pagination";
export default function BasePagination(props: PaginationConfig) {
  const { align, showTitle, defaultCurrent, total , showSizeChanger } = props;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#fff",
        },
        components: {
          Pagination: {
            itemActiveBg: "#004D7D",
          },
        },
      }}
    >
      <Pagination
        align={align}
        showTitle={showTitle}
        defaultCurrent={defaultCurrent}
        showSizeChanger={showSizeChanger}
        total={total}
      />
    </ConfigProvider>
  );
}
