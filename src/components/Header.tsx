import Image from "next/image";
import { FC, useState } from "react";
import { useModal } from "../hooks/handleModal";
import { useCommercialFormModal } from "../hooks/useCommercialFormModal";
import { useDeviceDetector } from "../hooks/useDeciveDecetor";

export const Header: FC = () => {
    const [isActive, setActive] = useState(false);
    const { isMobile } = useDeviceDetector();
    const { handleModal } = useModal();
    const { handleCommercialModal } = useCommercialFormModal();
    const handleActive = () => setActive(prevState => !prevState);

    return (
        <header
            className={`flex flex-col justify-center ${
                isMobile ? "flex-start" : "items-center"
            } bg-white ${
                isActive ? "h-[320px] md:h-[360px]" : "h-[132px] md:h-[120px] lg:h-[120px]"
            } lg:h-[118px] w-full fixed z-20 transition-all delay-100 drop-shadow-lg`}
        >
            <div
                className={`flex justify-center items-center min-h-[132px] lg:min-h-[64px] w-full ${
                    isActive
                        ? "translate-y-[0]"
                        : "translate-y-[26px] lg:translate-y-[0]"
                } transition-all`}
            >
                <div className="container flex flex-wrap lg:flex-nowrap xl:flex-wrap justify-between items-center font-body text-sm">
                    <div className="flex justify-between lg:justify-start items-center flex-shrink-0 text-secondary w-full lg:max-w-fit mr-0 lg:mr-32 mb-12 lg:mb-0 px-8 lg:px-0">
                        <Image
                            src="/assets/images/logo.svg"
                            height={44}
                            width={140}
                            className="font-display text-xl"
                            alt=""
                        />
                        <div className="block lg:hidden font-body">
                            <button
                                className="flex items-center rounded"
                                onClick={handleActive}
                            >
                                <svg
                                    className="fill-current h-24 w-24"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center flex-wrap justify-end lg:justify-start xl:justify-end px-8 lg:px-0">
                        <a
                            href="tel:+998991949494"
                            className="inline-flex items-center lg:text-base xl:text-xl font-bold leading-none mr-8 lg:mr-24"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-20 h-20 mr-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                            </svg>
                            <span className="hidden lg:block">
                                +99899 194-94-94
                            </span>
                        </a>
                        <button
                            className="bg-primary text-xs lg:text-base py-6 lg:py-12 px-12 lg:px-28 mr-8 lg:mr-16 rounded"
                            onClick={() => handleModal(1)}
                        >
                            Позвоните мне
                        </button>
                        <button
                            className="bg-primary text-xs lg:text-base py-6 lg:py-12 px-12 lg:px-28 mr-0 md:mr-8 lg:mr-16 rounded"
                            onClick={() => handleCommercialModal(true)}
                        >
                            Получить коммерческое
                        </button>
                        <button
                            className="bg-primary text-xs lg:text-base py-6 lg:py-12 px-12 mt-8 md:mt-0 lg:px-28 rounded"
                            onClick={() => handleModal(2)}
                        >
                            Заказать тест
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`flex justify-center items-center bg-white lg:bg-primary min-h-[54px] w-full ${
                    isActive
                        ? "translate-y-[0%]"
                        : "translate-y-[-500%] lg:translate-y-[0]"
                } transition-all`}
            >
                <div className="container flex flex-col lg:flex-row justify-center lg:justify-start items-center font-body font-semibold text-xs uppercase lg:flex-grow">
                    <a
                        href="#about"
                        className="block mt-4 lg:inline-block lg:mt-0 mb-12 lg:mb-0 mr-0 lg:mr-32"
                    >
                        О компании
                    </a>
                    <a
                        href="#possibilities"
                        className="block mt-4 lg:inline-block lg:mt-0 mb-12 lg:mb-0 mr-0 lg:mr-32"
                    >
                        Возможности
                    </a>
                    <a
                        href="#software"
                        className="block mt-4 lg:inline-block lg:mt-0 mb-12 lg:mb-0 mr-0 lg:mr-32"
                    >
                        Программное обеспечение
                    </a>
                    <a
                        href="#equipment"
                        className="block mt-4 lg:inline-block lg:mt-0 mb-12 lg:mb-0 mr-0 lg:mr-32"
                    >
                        Оборудование
                    </a>
                    <a
                        href="#gallery"
                        className="block mt-4 lg:inline-block lg:mt-0 mb-12 lg:mb-0 mr-0 lg:mr-32"
                    >
                        Галерея
                    </a>
                    <a
                        href="#contacts"
                        className="block mt-4 lg:inline-block lg:mt-0"
                    >
                        Контакты
                    </a>
                </div>
            </div>
        </header>
    );
};
