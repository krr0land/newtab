import React from "react";
import { ColorSchemes, Theme, Themes } from "../Utils/themes.ts";

// Mock functions to simulate setting theme and color scheme
// Will be replaced with a store
interface SettingsProps {
  setTheme: (theme: Theme) => void;
  setColorScheme: (colorScheme: number) => void;
  currentTheme: Theme;
  currentColorScheme: number;
}

export default function Settings(props: SettingsProps) {
  return (
    <>
      <h1 className="md:pt-20 text-2xl font-bold">Set the theme*</h1>
      <p className="text-sm text-gray-400">*Currently only changes the background color.</p>
      <div className="flex gap-2">
        {Themes.map((theme) => (
          <Button key={theme} onClick={() => props.setTheme(theme)} highlight={props.currentTheme === theme}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </Button>
        ))}
      </div>

      <div className="h-4" />

      <h1 className="text-2xl font-bold">Set the color scheme</h1>
      <div className="grid grid-cols-2 gap-2">
        {ColorSchemes.map((colorScheme, idx) => (
          <Button key={idx} onClick={() => props.setColorScheme(idx)} highlight={props.currentColorScheme === idx}>
            {colorScheme.Name}
          </Button>
        ))}
      </div>
    </>
  );
}

function Button(props: { children?: React.ReactNode; onClick?: () => void; highlight?: boolean }) {
  return (
    <button className="bg-gray-800/70 px-4 py-1 rounded hover:bg-gray-700 transition-colors" onClick={props.onClick}>
      {props.highlight ? <div className="font-bold">{props.children}</div> : <div className="text-gray-300">{props.children}</div>}
    </button>
  );
}
