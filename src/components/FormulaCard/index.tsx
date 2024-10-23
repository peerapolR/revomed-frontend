import React from "react";

export interface PropsType {
  header: "prototype" | "concept" | "saleCustom";
  type?: string;
  status: "draft" | "publish" | "approve" | "proposed" | "cancel";
  date: string;
  form: string;
  name: string;
  details: string;
}

export default function FormulaCard(props: PropsType): React.ReactElement {
  const { header, type, status, date, form, name, details } = props;

  return <div className="flex flex-col">
    <div className="bg-revomed-primary-light2 px-4 py-3 flex justify-between items-center">
        <div className="text-revomed-primary-blue text-[16px] font-bold">{header}</div>
        <div className="flex gap-2"></div>
    </div>
  </div>;
}
