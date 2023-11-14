import { FC } from "react";
import { Button } from "../components/ui";
import { useModal } from "../hooks/handleModal";

export const Contacts: FC = () => {
    const { handleModal } = useModal();

    return (
        <section
            id="contacts"
            className="flex justify-center items-center h-screen bg-black"
        >
            <div className="h-full w-full absolute z-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2942.8266361154806!2d59.61466050524092!3d42.47397570417804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9bbc1488dbe9%3A0xda91ea1bb3990294!2sSarvardin.....!5e0!3m2!1sru!2s!4v1663720238616!5m2!1sru!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <div className="bg-black/50 h-full w-full absolute z-0" />
            <div className="container flex flex-col justify-center items-center lg:items-start h-full z-10">
                <div className="flex flex-col items-center xl:items-start text-center min-w-[400px] max-w-[480px] bg-primary py-24 px-16 lg:px-44 rounded">
                    <h1 className="font-display text-3xl mb-28">
                        Контактная информация
                    </h1>
                    <div className="flex flex-col mb-24 text-center xl:text-left">
                        <span className="flex justify-center xl:justify-start items-center text-lg mb-4">
                            <span className="mr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-24 h-24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                            </span>
                            Адрес:
                        </span>
                        <a
                            href="https://www.google.com/maps/place/%D0%9D%D1%83%D0%BA%D1%83%D1%81/@42.4742685,59.6130029,103m/data=!3m1!1e3!4m5!3m4!1s0x41dd9a36ea33d7cf:0x8454c68babd0b936!8m2!3d42.461891!4d59.6166312"
                            className="font-bold text-base pl-26"
                        >
                            Республика Каракалпакстан, Нукус, проспект Дослык,
                            159
                        </a>
                    </div>
                    <div className="flex flex-col mb-24 text-center xl:text-left">
                        <span className="flex justify-center xl:justify-start items-center text-lg mb-4">
                            <span className="mr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-24 h-24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                                    />
                                </svg>
                            </span>
                            Email:
                        </span>
                        <a
                            href="mailto:new-era@gmail.com"
                            className="font-bold text-base pl-26"
                        >
                            new-era@gmail.com
                        </a>
                    </div>
                    <div className="flex flex-col text-center xl:text-left mb-32">
                        <span className="flex justify-center xl:justify-start items-center text-lg">
                            <span className="mr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-24 h-24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                    />
                                </svg>
                            </span>
                            Номер телефона:
                        </span>
                        <a
                            href="tel:+998991949494"
                            className="font-bold text-base pl-26"
                        >
                            +99899 194 94 94
                        </a>
                    </div>
                    <Button
                        onClick={() => handleModal(1)}
                        color="black"
                        className="w-full"
                    >
                        Заказать звонок
                    </Button>
                </div>
            </div>
        </section>
    );
};
