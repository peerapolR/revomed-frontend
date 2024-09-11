import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import IconLogout from "@icons/IconLogout";
import DotIcon from "@icons/DotIcon";
import { MenuItemType } from "antd/es/menu/interface";
import { useRouter } from "next/navigation";

// if type === subMenu
// add dot icon

type MenuItem = Required<MenuProps>["items"][number];

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

export default function MenuBar() {
  const router = useRouter();
  const [stateOpenKeys, setStateOpenKeys] = useState<string[]>([]);

  const onOpenChange: MenuProps["onOpenChange"] = (openKeys) => {
    console.log(openKeys);
    // const currentOpenKey = openKeys.find(
    //   (key) => stateOpenKeys.indexOf(key) === -1
    // );
    // console.log(currentOpenKey)
    // open
    // if (currentOpenKey !== undefined) {
    //   const repeatIndex = openKeys
    //     .filter((key) => key !== currentOpenKey)
    //     .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

    //   setStateOpenKeys(
    //     openKeys
    //       // remove repeat key
    //       .filter((_, index) => index !== repeatIndex)
    //       // remove current level all child
    //       .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
    //   );
    // } else {
    //   // close
    //   setStateOpenKeys(openKeys);
    // }
    setStateOpenKeys(openKeys);
  };

  const handlePath = (key : string) : void => {
    setStateOpenKeys([key])
    router.push(key)
  }

  const items: MenuItem[] = [
    {
      key: "/test",
      icon: <MailOutlined />,
      label: "New Proposal",
    },
    {
      key: "2",
      icon: <MailOutlined />,
      label: "My Proposal",
    },
    {
      key: "3",
      icon: <AppstoreOutlined />,
      label: "Formula & Ingredient",
      children: [
        {
          key: "31",
          label: "Supplement",
          children: [
            {
              key: "311",
              label: "Formula",
              icon: <DotIcon />,
              className: "gap-2",
            },
            {
              key: "312",
              label: "All Ingredient",
              icon: <DotIcon />,
              className: "gap-2",
            },
          ],
        },
        {
          key: "32",
          label: "Skin Care",
          children: [
            { key: "321", label: "Option 1" },
            { key: "322", label: "Option 2" },
            { key: "323", label: "Option 3" },
          ],
        },
        {
          key: "33",
          label: "Cosmetic",
          children: [
            { key: "331", label: "Option 1" },
            { key: "332", label: "Option 2" },
            { key: "333", label: "Option 3" },
          ],
        },
      ],
    },
    {
      key: "4",
      icon: <SettingOutlined />,
      label: "Sale Proposal",
      children: [
        { key: "41", label: "Option 1" },
        { key: "42", label: "Option 2" },
        { key: "43", label: "Option 3" },
        { key: "44", label: "Option 4" },
      ],
    },
    {
      key: "5",
      icon: <IconLogout />,
      label: "LogOut",
      className: "gap-4 h-[48px]",
    },
  ];

  const levelKeys = getLevelKeys(items as LevelKeysProps[]);
  return (
    <Menu
      style={{ height: "1000px" ,fontSize : '16px' }}
      onClick={({key})=>handlePath(key)}
      mode="inline"
      // defaultSelectedKeys={["231"]}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      // style={{ width: 256 }}
      items={items}
    />
  );
}
