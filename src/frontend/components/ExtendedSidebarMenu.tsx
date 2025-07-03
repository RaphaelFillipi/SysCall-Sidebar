import logoMenuVertical from "../assets/logo/logo-vertical.svg";
import iconChevronLeft from "../assets/icons/chevron-left.svg";
import iconContact from "../assets/icons/icon-contacts-list.svg";
import iconHistory from "../assets/icons/icon-historic.svg";
import iconProfile from "../assets/icons/icon-profile.svg";
import { SidebarMenuProps } from "../types/SidebarMenuProps.type";

export function ExtendedSidebarMenu({ onToggleMenu }: SidebarMenuProps) {
  return (
    <div className="relative flex flex-col space-y-10 h-auto justify-center items-center pl-6 pr-14 pt-8">
      <div className="flex flex-row w-full justify-center">
        <div className="w-1/2">
          <img
            src={logoMenuVertical}
            alt="Logo SysCall Vertical"
            className="w-full"
          />
        </div>
        <div className="absolute right-10">
          <button onClick={onToggleMenu}>
            <img src={iconChevronLeft} alt="Seta que aponta para a direita" />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-start w-full space-y-10">
        <div className="flex flex-row space-x-2 items-center font-bold">
          <img
            src={iconContact}
            alt="Ícone de contatos"
            className="w-[40px] h-[40px]"
          />
          <h2>Contatos</h2>
        </div>
        <div className="flex flex-row space-x-2 items-center font-bold">
          <img
            src={iconHistory}
            alt="Histórico de contatos"
            className="w-[40px] h-[40px]"
          />
          <h2>Histórico de Chamadas</h2>
        </div>
        <div className="flex flex-row space-x-2 items-center font-bold">
          <img
            src={iconProfile}
            alt="Perfil do usuário"
            className="w-[40px] h-[40px]"
          />
          <h2>Meu Perfil</h2>
        </div>
      </div>
    </div>
  );
}
