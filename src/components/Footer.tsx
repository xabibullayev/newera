import { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer className="flex justify-center items-center bg-black min-h-[124px] w-full">
            <div className="container flex flex-col md:flex-row justify-between items-center h-full text-primary text-center md:text-left px-16 md:px-0">
                <span className="text-tiny md:text-xl mb-12 md:mb-0">NEW ERA - СИСТЕМЫ GPS МОНИТОРИНГА ТРАНСПОРТА</span>
                <a href="tel:+998991949494" className="text-tiny md:text-xl">+99899 194-94-94</a>
            </div>
        </footer>
    );
};
