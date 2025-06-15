const colors = [
  [
    // GX Classic (Red)
    ["0.04 0.18 1.00", "0.03 0.15 1.00", "0.05 0.25 1.00"],
    ["0.00 0.98 1.00", "0.00 0.12 1.00", "0.00 0.31 1.00"],
  ],
  [
    // White Wolf
    ["0.04 0.20 1.00", "0.04 0.20 1.00", "0.04 0.20 1.00"],
    ["0.00 0.80 1.00", "0.00 0.80 1.00", "0.00 0.80 1.00"],
  ],
  [
    // Ultra Violet
    ["0.04 0.17 1.00", "0.04 0.17 1.00", "0.05 0.23 1.00"],
    ["0.00 0.49 1.00", "0.00 0.27 1.00", "0.00 0.95 1.00"],
  ],
  [
    // Sub Zero (Blue)
    ["0.04 0.18 1.00", "0.04 0.18 1.00", "0.04 0.22 1.00"],
    ["0.00 0.27 1.00", "0.00 0.38 1.00", "0.00 0.93 1.00"],
  ],
  [
    // Purple Haze (Lime)
    ["0.04 0.21 1.00", "0.03 0.14 1.00", "0.05 0.26 1.00"],
    ["0.00 0.68 1.00", "0.00 1.00 1.00", "0.00 0.24 1.00"],
  ],
  [
    // Vaporwave (Turquoise)
    ["0.05 0.24 1.00", "0.03 0.16 1.00", "0.05 0.24 1.00"],
    ["0.00 0.00 1.00", "0.00 0.90 1.00", "0.00 0.76 1.00"],
  ],
  [
    // Coming Soon (Yellow)
    ["0.02 0.12 1.00", "0.05 0.26 1.00", "0.05 0.28 1.00"],
    ["0.00 0.93 1.00", "0.00 0.87 1.00", "0.00 0.00 1.00"],
  ],
  [
    // Hackerman (Green)
    ["0.04 0.18 1.00", "0.04 0.22 1.00", "0.04 0.19 1.00"],
    ["0.00 0.00 1.00", "0.00 0.93 1.00", "0.00 0.23 1.00"],
  ],
  [
    // Lambda (Orange)
    ["0.04 0.18 1.00", "0.04 0.22 1.00", "0.04 0.20 1.00"],
    ["0.00 1.00 1.00", "0.00 0.60 1.00", "0.00 0.00 1.00"],
  ],
  [
    // Bare
    ["", "", ""],
    ["", "", ""],
  ],
];

export default function Background() {
  const color = colors[0];
  const theme = "dark";
  const url = "bg/" + theme + "/";

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
