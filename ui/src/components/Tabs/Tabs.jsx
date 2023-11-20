import React from "react";
import Tab from "./Tab";
const Tabs = ({tabs}) => {

  return (
    <div className="mx-auto mt-8 mb-8">
      <div className="flex">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            path={tab.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
