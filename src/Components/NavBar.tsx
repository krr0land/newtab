import { HomeIcon, SettingsIcon, WeatherIcon, CodeIcon } from "../Utils/Icons.tsx";
import { Link, useLocation } from "react-router";
import { routes } from "../routes.ts";
import React from "react";

export default function NavBar() {
  const currentLocation = useLocation().pathname;
  return (
    <>
      <div className="absolute top-0 left-0 bg-gray-400/70 dark:bg-gray-800/80 py-1 px-2 rounded-br-xl backdrop-blur-xs">
        <div className="flex items-center gap-2">
          <NavBarLink to={routes.HOME} icon={HomeIcon} current={currentLocation} />
          <NavBarLink to={routes.WEATHER} icon={WeatherIcon} current={currentLocation} />
          <NavBarLink to={routes.TECH} icon={CodeIcon} current={currentLocation} />
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
      {isActive ? (
        <props.icon className={"fill-zinc-700 dark:fill-gray-200 w-9 h-9 p-[2px] rounded-lg"} />
      ) : (
        <props.icon className={"fill-gray-500 dark:fill-gray-900 hover:fill-zinc-800 dark:hover:fill-gray-400  w-9 h-9 p-[2px] rounded-lg"} />
      )}
    </Link>
  );
}
