import { HomeIcon, SettingsIcon, WeatherIcon, CodeIcon } from "../Utils/Icons.tsx";
import { Link, useLocation } from "react-router";
import { routes } from "../routes.ts";
import React from "react";

export default function NavBar() {
  const currentLocation = useLocation().pathname;
  return (
    <>
      <div className="bg-gray-400/30 dark:bg-gray-600/30 md:absolute top-2 left-2 py-1 px-1 rounded-xl backdrop-blur-xs">
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
      <props.icon className={`${isActive ? "fill-gray-800/90 dark:fill-gray-200/80" : "fill-gray-500/80 dark:fill-gray-600/50"} w-9 h-9 p-[2px] border-2 border-transparent hover:bg-gray-600/22 rounded-lg`} />
    </Link>
  );
}
