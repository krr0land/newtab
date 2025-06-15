import { HomeIcon, SettingsIcon, WeatherIcon } from "../Utils/Icons.tsx";
import { Link, useLocation } from "react-router";
import { routes } from "../routes.ts";
import React from "react";

export default function NavBar() {
  const currentLocation = useLocation().pathname;
  return (
    <>
      <div className="md:absolute top-2 left-2 py-1 px-2 rounded-xl">
        <div className="flex items-center gap-2">
          <NavBarLink to={routes.HOME} icon={HomeIcon} current={currentLocation} />
          <NavBarLink to={routes.WEATHER} icon={WeatherIcon} current={currentLocation} />
          <NavBarLink to={routes.SETTINGS} icon={SettingsIcon} current={currentLocation} />
        </div>
      </div>
    </>
  );
}

function NavBarLink(props: { to: string; icon: React.ComponentType<{ className?: string }>; current?: string }) {
  const isActive = props.current === props.to;
  return (
    <Link to={props.to}>
      <props.icon className={`${isActive ? "fill-gray-200/80" : "fill-gray-600/50"} w-8 h-8  border-2 border-transparent hover:border-gray-600/30 rounded-lg`} />
    </Link>
  );
}
