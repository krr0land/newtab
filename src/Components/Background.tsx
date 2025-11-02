import { ColorSchemes } from "../Utils/themes.ts";
import { colorSchemeAtom, randomPhotoAtom, themeAtom } from "../atoms.ts";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { PhotoApiResponse } from "../Utils/unsplashApi.ts";

export default function Background() {
  const photo = useAtomValue(randomPhotoAtom);
  if (!photo) return <GxBackground />;
  else return <UnsplashBackground photo={photo} />;
}

function UnsplashBackground(props: { photo: PhotoApiResponse }) {
  const { photo } = props;

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const url = photo.urls.raw + `&w=${windowSize.width}&h=${windowSize.height}&crop=edges&fit=crop`;

  return (
    <div className="fixed top-0 left-0 min-h-screen min-w-screen z-[-100]">
      <img src={url} alt={photo.alt_description || ""} />
      <span className="w-full h-full absolute top-0 backface-hidden perspective-distant ease-out duration-70 bg-gradient-to-b from-black/10 via-black/0 to-black/10" />
    </div>
  );
}

function GxBackground() {
  const currentColorScheme = useAtomValue(colorSchemeAtom);
  const currentTheme = useAtomValue(themeAtom);

  const color = ColorSchemes[currentColorScheme].Colors;
  //const theme = currentTheme === "system" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : currentTheme;
  const url = "bg/" + currentTheme + "/";

  return (
    <div className="fixed top-0 left-0 min-h-screen min-w-screen z-[-100]">
      <svg className="absolute top-0 left-0 min-h-full min-w-full z-[-100]">
        <image xlinkHref={url + "1.webp"} height="100%" width="100%" preserveAspectRatio="none" />
      </svg>
      <SvgBg colors={color[0]} path={url + "2.webp"} mode="color" uid="preview--gradient-map-filter-0-1" />
      <SvgBg colors={color[1]} path={url + "3.webp"} mode="normal" uid="preview--gradient-map-filter-1-0" />
    </div>
  );
}

function SvgBg(props: { colors: string[]; path: string; mode: "color" | "normal"; uid: string }) {
  return (
    <svg className="absolute top-0 left-0 min-h-full min-w-full z-[-100]">
      <defs>
        <filter id={props.uid} width="120%" height="120%" x="-10%" y="-10%" colorInterpolationFilters="sRGB" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
          <feColorMatrix type="matrix" values=".33 .33 .33 0 0   .33 .33 .33 0 0   .33 .33 .33 0 0   0 0 0 1 0"></feColorMatrix>
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR type="table" tableValues={props.colors[0]}></feFuncR>
            <feFuncG type="table" tableValues={props.colors[1]}></feFuncG>
            <feFuncB type="table" tableValues={props.colors[2]}></feFuncB>
            <feFuncA tableValues="0 1" type="table"></feFuncA>
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" mode={props.mode} result="blend"></feBlend>
        </filter>
      </defs>
      <image xlinkHref={props.path} height="100%" width="100%" preserveAspectRatio="none" style={{ filter: "grayscale(1) url(#" + props.uid + ")" }} />
    </svg>
  );
}
