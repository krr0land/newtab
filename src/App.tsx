import Searchbar from "./Components/Searchbar";
import LinkContainer from "./Components/Link";
import Background from "./Components/Background.tsx";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 w-fit  m-auto pt-20 box-border overflow-hidden text-white">
      <Background />
      <Searchbar />
      <LinkContainer />
    </div>
  );
}
