import './App.css';
import React, {useEffect, useState} from 'react';
import Link from './Link';

export default function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch("%PUBLIC_URL%/links.json")
      .then(resp => resp.json())
      .then(data => setLinks(data.links));
  }, []);

  useEffect(() => {
    console.log(links);
  }, [links]);

  return (
    <div className={"App"}>
      <div className={"LinkContainer"}>
        {links.map((link, index) => (
          <Link key={index} link={link} />
        ))}
      </div>
    </div>
  );
}
