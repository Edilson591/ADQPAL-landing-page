import { Container } from "../../styles";
import * as S from "./styles";
import { useState } from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import { Menu, X } from "lucide-react";
import { MenuItem, subMenuData } from "../../data/subMenuData";
import { useScroll } from "../../context/contextScroll/useScroll";
import logoADQPAL from "../../assets/logo-adqpal.png";

function Header() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [activeMenuMobile, setActiveMenuMobile] = useState<boolean>(false);
  const { isActiveHeader,elementRefHeader } = useScroll();

  const toggleMobileMenu = () => setActiveMenuMobile((prev) => !prev);

  const handleMenuToggle = (index: number | null) => {
    setActiveMenu((prev) => (prev === index ? null : index));
  };

  const preventNavigationForSubmenu = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: MenuItem
  ) => {
    if (item.submenu && item.submenu.length > 0) {
      e.preventDefault();
    }
  };

  return (
    <>
      <S.Header $isActiveHeader={isActiveHeader && !activeMenuMobile} ref={elementRefHeader}>
        <Container>
          <S.Nav aria-label="Menu Principal">
            <div className="container-logo">
              <S.NavLink to="/">
                <img src={logoADQPAL} alt="foto logo" />
              </S.NavLink>
            </div>

            {/* Menu Desktop*/}
            <S.MenuDesktop role="menu">
              <li role="menuitem" aria-haspopup="true">
                <S.NavLink to="/">Inicio</S.NavLink>
              </li>
              {subMenuData.map((item, index) => (
                <li
                  key={item.id}
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={activeMenu === index}
                  onMouseEnter={() => handleMenuToggle(index)}
                  onMouseLeave={() => handleMenuToggle(null)}
                >
                  <div className="container-icon">
                    <S.NavLink
                      to={item.link || "#"}
                      onClick={(e) => preventNavigationForSubmenu(e, item)}
                    >
                      {item.label}
                    </S.NavLink>
                    {activeMenu === index ? (
                      <ArrowDropUpRoundedIcon />
                    ) : (
                      <ArrowDropDownRoundedIcon />
                    )}
                  </div>
                  <S.Submenu
                    $activeSub={activeMenu === index}
                    aria-label={`Submenu ${item.label}`}
                    role="menu"
                  >
                    {item.submenu?.map((subItem, subIndex) => (
                      <li key={subIndex} role="menuitem">
                        <S.NavLink
                          to={subItem.link}
                          onClick={() => setActiveMenu(null)}
                        >
                          {subItem.label}
                        </S.NavLink>
                      </li>
                    ))}
                  </S.Submenu>
                </li>
              ))}
            </S.MenuDesktop>

            {/* Menu Mobile*/}
            <S.MenuMobile $activeMenuMobile={activeMenuMobile} role="menu">
              <Container>
                <li role="menuitem" aria-haspopup="true">
                  <S.NavLink to="/" onClick={toggleMobileMenu}>
                    Inicio
                  </S.NavLink>
                </li>
                {subMenuData.map((item, index) => (
                  <li
                    key={item.id}
                    tabIndex={index}
                    role="menuitem"
                    aria-haspopup="true"
                    aria-expanded={activeMenu === index}
                    onClick={() => handleMenuToggle(activeMenu === index ? null : index)}
                  >
                    <div className="container-icon">
                      <S.NavLink
                        to={item.link || "#"}
                        onClick={(e) => {
                          if (item.submenu) {
                            e.preventDefault();
                          }
                        }}
                      >
                        {item.label}
                      </S.NavLink>
                      {activeMenu === index ? (
                        <ArrowDropUpRoundedIcon
                          onClick={() => {
                            handleMenuToggle(index);
                          }}
                        />
                      ) : (
                        <ArrowDropDownRoundedIcon
                          onClick={() => handleMenuToggle(null)}
                        />
                      )}
                    </div>
                    <S.Submenu
                      $activeSub={activeMenu === index}
                      aria-expanded={activeMenu === index}
                      aria-label={`Submenu ${item.label}`}
                      role="menu"
                    >
                      {item.submenu?.map((subItem, subIndex) => (
                        <li key={subIndex} role="menuitem">
                          <S.NavLink
                            to={subItem.link}
                            onClick={toggleMobileMenu}
                          >
                            {subItem.label}
                          </S.NavLink>
                        </li>
                      ))}
                    </S.Submenu>
                  </li>
                ))}
              </Container>
            </S.MenuMobile>

            {/* Mobile Menu Button*/}
            <button onClick={() => setActiveMenuMobile(!activeMenuMobile)}>
              {activeMenuMobile ? <X size={30} /> : <Menu size={30} />}
            </button>
          </S.Nav>
        </Container>
      </S.Header>
      <S.BackgroundOverlay
        $activeMenuMobile={activeMenuMobile}
        onClick={() => setActiveMenuMobile(!activeMenuMobile)}
      />
    </>
  );
}

export default Header;
