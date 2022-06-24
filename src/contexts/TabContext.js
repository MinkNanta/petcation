import { createContext, useContext, useEffect, useState } from "react";

const TabContext = createContext();
const menus = ["upcoming", "completed", "canceled", "all"];

function TabContextProvider({ children }) {
  const [active, setActive] = useState(menus[0]);

  return (
    <TabContext.Provider value={{ active, setActive, menus }}>
      {children}
    </TabContext.Provider>
  );
}

function useTab() {
  const ctx = useContext(TabContext);
  return ctx;
}

export default TabContextProvider;
export { TabContext, useTab };
