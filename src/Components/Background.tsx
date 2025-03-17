const colors = [
  [
    // Red - GX Classic
    ["0.04 0.18 1.00", "0.03 0.15 1.00", "0.05 0.25 1.00"],
    ["0.00 0.98 1.00", "0.00 0.12 1.00", "0.00 0.31 1.00"],
  ],
  [
    //
    [],
    [],
  ],
];

export default function Background() {
  const color = colors[0];
  const theme = "dark";
  const url = "/bg/" + theme + "/";

  return (
    <div className="fixed top-0 left-0 min-h-full min-w-full z-[-100]">
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
        <filter id={props.uid} width="120%" height="120%" x="-10%" y="-10%" color-interpolation-filters="sRGB" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
          <feColorMatrix type="matrix" values=".33 .33 .33 0 0   .33 .33 .33 0 0   .33 .33 .33 0 0   0   0   0  1 0"></feColorMatrix>
          <feComponentTransfer in="colormatrix" result="componentTransfer">
            <feFuncR type="table" tableValues={props.colors[0]}></feFuncR>
            <feFuncG type="table" tableValues={props.colors[1]}></feFuncG>
            <feFuncB type="table" tableValues={props.colors[2]}></feFuncB>
            <feFuncA tableValues="0 1" type="table"></feFuncA>
          </feComponentTransfer>
          <feBlend in="componentTransfer" in2="SourceGraphic" mode={props.mode} result="blend"></feBlend>
        </filter>
      </defs>
      <image xlinkHref={props.path} height="100%" width="100%" preserveAspectRatio="none" className={"grayscale-100 filter-[url(#" + props.uid + ")]"} />
    </svg>
  );
}
