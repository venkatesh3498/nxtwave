import React, { memo, useEffect, useState } from "react";
import { TabContainer, TabItem } from "./styles";

const Tab = ({ tabsList, onTabSelected }) => {
  const [itemId, setItemId] = useState(0);

  useEffect(() => {
    onTabSelected && onTabSelected(itemId);
  }, [itemId]);

  return (
    <TabContainer>
      {tabsList.map((tab) => (
        <TabItem
          key={String(tab.index)}
          center={tab.center}
          first={tab.first}
          last={tab.last}
          onClick={() => setItemId(tab.index)}
          selected={itemId === tab.index}
        >
          {tab.name}
        </TabItem>
      ))}
    </TabContainer>
  );
};

export default Tab;
