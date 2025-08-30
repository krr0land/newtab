import { HomeIcon, SettingsIcon, WeatherIcon, CodeIcon } from "../Utils/Icons.tsx";
import { Link, useLocation } from "react-router";
import { routes } from "../routes.ts";
import React from "react";

export default function NavBar() {
  const currentLocation = useLocation().pathname;
  return (
    <>
      <div className="md:absolute top-2 left-2 py-1 px-1 ">
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
      <props.icon className={`${isActive ? "bg-gray-400/80 dark:bg-gray-800/80" : "hover:bg-gray-300/80 dark:hover:bg-gray-800/60"} fill-zinc-700 dark:fill-white w-9 h-9 p-[2px] rounded-lg`} />
    </Link>
  );
}
