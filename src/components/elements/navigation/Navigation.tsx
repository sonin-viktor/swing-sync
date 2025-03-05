import { ERouteNames } from "@/types/constants/e.route.names";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

interface IProps {
  isUnderlined?: boolean;
}

export const Navigation = ({ isUnderlined = true }: IProps) => {
  const onClick = () => scrollTo({ behavior: "smooth", top: 0 });

  const getClasses = (isActive: boolean) => {
    return "nav__link" + (isUnderlined && isActive ? " nav__link--active" : "");
  };

  return (
    <nav className={"nav"}>
      <ul className={"nav__list"}>
        <li>
          <NavLink
            onClick={onClick}
            to={ERouteNames.CLASSES}
            className={({ isActive }) => getClasses(isActive)}
          >
            Classes
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={onClick}
            to={ERouteNames.ABOUT_US}
            className={({ isActive }) => getClasses(isActive)}
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
