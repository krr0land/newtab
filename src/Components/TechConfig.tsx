import { techConfig } from "../config_tech.ts";
import { LinkIcon } from "../Utils/Icons.tsx";

export default function TechConfig() {
  return (
    <>
      <h1 className="md:pt-20 text-2xl font-bold">Tech Config</h1>

      <table className="border-collapse m-2 border-transparent border-8 rounded-lg backdrop-blur-sm">
        {techConfig.map((group) => (
          <>
            <tr className="text-xl font-bold h-16" key={group.title}>
              <td colSpan={3}>{group.title}</td>
            </tr>
            {group.entries.map((entry) => (
              <tr className="border-y-[1px]" key={entry.product}>
                <td className="p-2">{entry.category}</td>
                <td className="p-2">
                  {entry.url ? (
                    <a href={entry.url} target="_blank" rel="noopener noreferrer">
                      <LinkIcon className="fill-gray-200/80" />
                    </a>
                  ) : (
                    <div />
                  )}
                </td>
                <td className="p-2">{entry.product}</td>
              </tr>
            ))}
          </>
        ))}
      </table>
    </>
  );
}
