import React, { FC } from "react";
import { TabsComponent } from "./index.style";

type TabsProps = {
  tabs: {
    label: string;
    index: number;
  }[];
  selectedTab: number;
  onClick: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
};

const Tabs: FC<TabsProps> = ({
  tabs = [],
  selectedTab = 0,
  onClick,
  orientation = "horizontal"
}) => {

  return (
    <TabsComponent>
      <div role="tablist" aria-orientation={orientation}>
        {tabs.map((tab) => (
          <button
            className={selectedTab === tab.index ? "active" : ""}
            onClick={() => onClick(tab.index)}
            key={tab.index}
            type="button"
            role="tab"
            aria-selected={selectedTab === tab.index}
            aria-controls={`tabpanel-${tab.index}`}
            tabIndex={selectedTab === tab.index ? 0 : -1}
            id={`btn-${tab.index}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </TabsComponent>
  );
};
export default Tabs;

