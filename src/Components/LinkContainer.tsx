import { links, Link } from "../config";

export default function LinkContainer() {
    return (
        <div className="text-center size-fit grid gap-[1px] auto-rows-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            {links.map((link, index) => (
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
            <p className="m-0 px-0 py-1.5 group-hover:font-bold">{link.title}</p>
        </a>
    );
}
