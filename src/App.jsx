import Searchbar from "./Components/Searchbar";
import LinkContainer from "./Components/Link";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 p-12 w-fit m-auto min-h-full box-border overflow-hidden text-white">
      <Searchbar />
      <LinkContainer />
    </div>
  );
}
