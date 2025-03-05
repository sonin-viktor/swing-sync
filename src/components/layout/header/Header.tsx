import { Navigation } from "@/components/elements/navigation/Navigation";
import { ERouteNames } from "@/types/constants/e.route.names";
import { NavLink } from "react-router-dom";
import { SVG_Logo } from "@/assets/svg";
import { memo } from "react";
import "./Header.scss";

interface IProps {
  color?: "dark" | "red";
}

export const Header = memo(({ color = "dark" }: IProps) => {
  return (
    <header className={`header header--${color}`}>
      <div className="header__wrapper wrapper-first">
        <NavLink to={ERouteNames.HOME} className={"header__logo nav__link"}>
          <div className="logo">{SVG_Logo}</div>
        </NavLink>

        <Navigation />
      </div>
    </header>
  );
});
