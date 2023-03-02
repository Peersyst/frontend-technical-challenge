import { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import CheckBoxTab from "./CheckBoxTab";
import DefaultTab from "./DefaultTab";

const DefaulWrapperTab = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0px 0px;
  border-top: 1px solid #494949;
  padding-bottom: 20px;
`;

const CheckWrapperTab = styled.div`
  display: flex;
`;

export interface tabI {
  name: string;
  path: string;
  element: React.ReactNode;
}

type tabType = "Tab" | "Check_box";

export interface TabsI {
  tabs: tabI[];
  tabType: tabType;
}

const Tabs = ({ tabs, tabType }: TabsI) => {
  const [keySelected, setKeySelected] = useState(0);

  const handleTabClick = (key: number) => {
    setKeySelected(key);
  };

  function WrapperTabGenericFunc() {
    if (tabType === "Tab") {
      return DefaulWrapperTab;
    } else {
      return CheckWrapperTab;
    }
  }

  const WrapperTabGeneric = WrapperTabGenericFunc();

  function TabGenericFunc() {
    if (tabType === "Tab") {
      return DefaultTab;
    } else {
      return CheckBoxTab;
    }
  }

  const TabGeneric = TabGenericFunc();

  return (
    <div>
      <WrapperTabGeneric>
        {tabs.map((tab, key) => {
          return (
            <TabGeneric
              onClick={() => handleTabClick(key)}
              key={key}
              to={tab.path}
              isActive={keySelected === key}
            >
              {tab.name}
            </TabGeneric>
          );
        })}
      </WrapperTabGeneric>
      <Routes>
        <Route index element={tabs[0].element} />
        {tabs.map((tab, key) => {
          return (
            <Route key={key} path={tab.path + "/*"} element={tab.element} />
          );
        })}
      </Routes>
      <Outlet />
    </div>
  );
};

export default Tabs;
