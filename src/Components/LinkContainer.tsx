import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { linkGroups, Link } from "../config";

export default function LinkContainer() {
  return (
    <TabGroup className="flex flex-col justify-center items-center w-fit m-auto">
      <TabList className="flex flex-col sm:flex-row items-center">
        {linkGroups.map((linkGroup) => (
          <Tab
            className="rounded-xl first:ml-1 mr-2 px-3 py-1 text-sm/6 font-semibold focus:not-data-focus:outline-none data-focus:outline transition-colors
            data-focus:outline-white data-hover:bg-gray-300/70 data-selected:bg-gray-400/60
            dark:text-white dark:data-focus:outline-white dark:data-hover:bg-gray-800/45 dark:data-selected:bg-gray-800/70"
            key={linkGroup.title}
          >
            {linkGroup.title}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {linkGroups.map((linkGroup) => (
          <TabPanel key={linkGroup.title}>
            <LinkGrid links={linkGroup.links} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}

function LinkGrid(props: { links: Link[] }) {
  return (
    <div className="text-center size-fit grid gap-[1px] auto-rows-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
      {props.links.map((link, index) => (
        <LinkElement key={index} link={link} />
      ))}
    </div>
  );
}

function LinkElement(props: { link: Link }) {
  const link = props.link;

  return (
    <a href={link.url} className="p-3 overflow-hidden block size-fit group">
      <img src={link.icon} alt={link.title} className="w-[180px] h-[120px] m-0 p-0 object-cover border-0 rounded-xl transition-all duration-300 ease-in-out transform-style-3d group-hover:scale-105 group-hover:rotate-[-4deg]" />
      <p className="m-0 px-0 py-1.5 font-medium dark:font-normal group-hover:font-bold">{link.title}</p>
    </a>
  );
}
