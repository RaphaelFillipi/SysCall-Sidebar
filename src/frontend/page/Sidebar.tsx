import { useState } from "react";
import logoMenu from "../assets/logo/logo-icon.svg";
import logoMenuVertical from "../assets/logo/logo-vertical.svg";
import iconChevronRight from "../assets/icons/chevron-right.svg";
import iconChevronLeft from "../assets/icons/chevron-left.svg";
import iconContact from "../assets/icons/icon-contacts-list.svg";
import iconHistory from "../assets/icons/icon-historic.svg";
import iconProfile from "../assets/icons/icon-profile.svg";

export function Sidebar() {
  const [showExtendMenu, setshowExtendMenu] = useState<boolean>(false);

  const handleClick = () => {
    setshowExtendMenu(!showExtendMenu);
  };

  return (
    <div className="relative h-screen">
      <div className="absolute left-0 h-full rounded-tr-2xl shadow-div-menu p-6">
        {showExtendMenu ? (
          <div className="flex flex-col p space-y-10 justify-center items-center">
            <button onClick={handleClick}>
              <img
                src={iconChevronRight}
                alt="Seta que aponta para a direita"
              />
            </button>
            <img src={logoMenu} alt="Logo SysCall" />
            <img src={iconContact} alt="Ícone de contatos" />
            <img src={iconHistory} alt="Histórico de contatos" />
            <img src={iconProfile} alt="Perfil do usuário" />
          </div>
        ) : (
          <div className="flex flex-col w-full space-y-10 h-auto justify-center items-center">
            <div className="relative flex flex-row w-full justify-center">
              <img src={logoMenuVertical} alt="Logo SysCall Vertical" />
              <div className="absolute right-0">
                <button onClick={handleClick}>
                  <img
                    src={iconChevronLeft}
                    alt="Seta que aponta para a direita"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-start w-full space-y-6">
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
        )}
      </div>
    </div>
  );
}
