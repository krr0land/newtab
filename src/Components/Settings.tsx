import React from "react";
import { ColorSchemes, Themes } from "../Utils/themes.ts";
import { useAtom } from "jotai/index";
import { colorSchemeAtom, randomPhotoAtom, themeAtom } from "../atoms.ts";
import { getRandomPhoto } from "../Utils/unsplashApi.ts";

export default function Settings() {
  const [currentColorScheme, setColorScheme] = useAtom(colorSchemeAtom);
  const [currentTheme, setTheme] = useAtom(themeAtom);
  const [randomPhoto, setRandomPhoto] = useAtom(randomPhotoAtom);

  return (
    <>
      <h1 className="text-2xl font-bold">Set the theme</h1>
      <div className="flex gap-2">
        {Themes.map((theme) => (
          <Button key={theme} onClick={() => setTheme(theme)} highlight={currentTheme === theme}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </Button>
        ))}
      </div>

      {!randomPhoto && (
        // Only show the color scheme options if there is no random photo, aka the GX Background is used
        <>
          <div className="h-4" />

          <h1 className="text-2xl font-bold">Set the color scheme*</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">*Only applicable for the GX Background.</p>
          <div className="grid grid-cols-2 gap-2">
            {ColorSchemes.map((colorScheme, idx) => (
              <Button key={idx} onClick={() => setColorScheme(idx)} highlight={currentColorScheme === idx}>
                {colorScheme.Name}
              </Button>
            ))}
          </div>
        </>
      )}

      {randomPhoto && (
        // Only show the random photo options if there is a random photo
        <>
          <div className="h-4" />

          <h1 className="text-2xl font-bold">Random Image</h1>
          <div className="flex gap-2">
            <Button
              onClick={() => {
                getRandomPhoto()
                  .then((response) => {
                    setRandomPhoto(response);
                    localStorage.setItem("photo", JSON.stringify(response));
                  })
                  .catch((error) => console.error(error));
              }}
            >
              Next Image
            </Button>
          </div>
        </>
      )}
    </>
  );
}

function Button(props: { children?: React.ReactNode; onClick?: () => void; highlight?: boolean }) {
  return (
    <button className="bg-gray-400/60 dark:bg-gray-800/70 px-4 py-1 rounded-xl hover:bg-gray-500/60 dark:hover:bg-gray-700/70 transition-colors min-w-36" onClick={props.onClick}>
      {props.highlight ? <div className="font-extrabold dark:text-gray-300">{props.children}</div> : <div className="dark:text-gray-300">{props.children}</div>}
    </button>
  );
}
