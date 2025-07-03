import { useState } from "react";
import { ContractedSidebarMenu } from "../components/ContractedSidebarMenu";
import { ExtendedSidebarMenu } from "../components/ExtendedSidebarMenu";

export function Sidebar() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(true);

  return (
    <div className="relative h-screen">
      {toggleMenu ? (
        <div className="md:absolute md:left-0 md:h-full md:rounded-tr-2xl md:shadow-div-menu">
          <ContractedSidebarMenu onToggleMenu={() => setToggleMenu(false)} />
        </div>
      ) : (
        <div className="absolute left-0 h-full rounded-tr-2xl shadow-div-menu">
          <ExtendedSidebarMenu onToggleMenu={() => setToggleMenu(true)} />
        </div>
      )}
    </div>
  );
}
