import './App.css';
import Link from './Link';
import { links } from "./config";
import Searchbar from "./Searchbar";

export default function App() {
  return (
    <div className="App">

      <Searchbar />

      <div className="LinkContainer">
        {links.map((link, index) => (
          <Link key={index} link={link} />
        ))}
      </div>
    </div>
  );
}
