import { useEffect, useState } from "react";
import { createContext } from "react";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";

export const CollapseContext = createContext();

const LayoutBase = ({ children }) => {
  const [collapse, setCollapse] = useState(false);

  const windowWidth = window.innerWidth;
  
  console.log(windowWidth);


  useEffect(() => {
    if(windowWidth < 400){
      setCollapse(true)
    }
  },[windowWidth])

  return (
    <>
      <CollapseContext.Provider value={[collapse, setCollapse]}>
        <Navbar />
        <MenuBar />
      </CollapseContext.Provider>
      <div className="flex">
        <div className={`mt-16 ${collapse ? "ml-20" : "ml-56 px-5"}`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default LayoutBase;
