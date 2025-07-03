import logoMenu from "../assets/logo/logo-icon.svg";
import iconChevronRight from "../assets/icons/chevron-right.svg";
import iconContact from "../assets/icons/icon-contacts-list.svg";
import iconHistory from "../assets/icons/icon-historic.svg";
import iconProfile from "../assets/icons/icon-profile.svg";
import { SidebarMenuProps } from "../types/SidebarMenuProps.type";
import { AlignJustify } from "lucide-react";

export function ContractedSidebarMenu({ onToggleMenu }: SidebarMenuProps) {
  return (
    <div>
      <div className="p-3 w-1/6 md:hidden">
        <AlignJustify color="#358438" size="100%" onClick={onToggleMenu} />
      </div>
      <div className="hidden md:flex md:flex-col md:space-y-10 md:justify-center md:items-center md:px-3 md:pt-8">
        <button onClick={onToggleMenu}>
          <img src={iconChevronRight} alt="Seta que aponta para a direita" />
        </button>
        <div className="w-5/6">
          <img src={logoMenu} alt="Logo SysCall" />
        </div>
        <img src={iconContact} alt="Ícone de contatos" />
        <img src={iconHistory} alt="Histórico de contatos" />
        <img src={iconProfile} alt="Perfil do usuário" />
      </div>
    </div>
  );
}
