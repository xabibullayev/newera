import { FC } from "react";

interface DownloadButton {
    file: string;
    name: string;
    type: "black" | "primary";
}

export const DownloadButton: FC<DownloadButton> = ({ file, name, type }) => {
    return (
        <a
            download
            href={`/assets/ffs/${file}`}
            className={`flex items-center bg-${type} text-${
                type === "primary" ? "black" : "primary"
            } text-sm py-12 px-20 cursor-pointer rounded max-w-fit uppercase`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-24 h-24 mr-12"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
            </svg>
            Флаер {name}
        </a>
    );
};
