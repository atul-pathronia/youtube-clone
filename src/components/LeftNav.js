import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";

const LeftNav = () => {
  const { selectCategory, setselectCategory, mobileView, setmobileView } =
    useContext(Context);
  const navigate = useNavigate();
  const categoryHanlder = (name, type) => {
    if (type === "category") {
      return setselectCategory(name);
    }
    if (type === "home") {
      return setselectCategory(name);
    }
    if (type === "mneu") {
      return false;
    }
  };

  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10  md:translate-x-0 transition-all ${
        mobileView ? "translate-x-0" : "translate-x-[-240px]"
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item, index) => {
          return (
            <>
              <LeftNavMenuItem
                key={index}
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  categoryHanlder(item.name, item.type);
                  navigate("/");
                  // if (mobileView) {
                  //   setmobileView(false);
                  // }
                }}
                className={`${
                  selectCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
              ></LeftNavMenuItem>
              {item.divider && <hr className="my-5 border-white/[0.2]"></hr>}
            </>
          );
        })}
        <hr className="my-5 border-white/[0.2]"></hr>
        <div className="text-white/[0.5] text-[12px]">Clone By: Atul P</div>
      </div>
    </div>
  );
};

export default LeftNav;
