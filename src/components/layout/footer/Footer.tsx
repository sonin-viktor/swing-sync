import { Navigation } from "@/components/elements/navigation/Navigation";
import { ERouteNames } from "@/types/constants/e.route.names";
import { NavLink } from "react-router-dom";
import { SVG_Logo } from "@/assets/svg";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper wrapper-first">
        <NavLink
          to={ERouteNames.HOME}
          onClick={() => scrollTo({ behavior: "smooth", top: 0 })}
          className={"header__logo nav__link"}
        >
          <div className="logo">{SVG_Logo}</div>
        </NavLink>

        <Navigation isUnderlined={false} />

        <div className="footer__contacts">
          <p className="footer__phone">+1 (555) 123-4567</p>
          <p className="footer__address">123 Rhythm Avenue, Studio 45, New York, NY 10001, USA</p>
        </div>
      </div>
    </footer>
  );
};
