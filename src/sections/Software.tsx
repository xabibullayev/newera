import Image from "next/image";
import { FC } from "react";
import { useModal } from "../hooks/handleModal";
import { Button, Typography } from "../components/ui";

export const Software: FC = () => {
    const { handleModal } = useModal();

    return (
        <section id="software" className="flex justify-center items-center">
            <div className="container flex flex-col justify-center items-center py-32 px-16 xl:px-0">
                <Typography type="h1" color="black">
                    Программное обеспечение
                </Typography>
                <div className="flex flex-col w-full">
                    <div className="flex flex-col xl:flex-row w-full mb-64">
                        <div className="flex justify-center max-h-[280px] w-full xl:w-1/2 relative mb-32 xl:mb-0">
                            <Image
                                src="/assets/images/local-ru.webp"
                                className="rounded-xl"
                                height={280}
                                width={500}
                                alt=""
                            />
                            <div className="hidden xl:block bg-primary top-50 left-50 h-[280px] w-[500px] rounded-xl absolute -z-10"></div>
                        </div>
                        <div className="flex flex-col items-center xl:items-start w-full xl:w-1/2 text-center xl:text-left">
                            <span className="font-display text-4xl mb-20 w-[80%] xl:w-full">
                                Wialon Local
                            </span>
                            <ul className="flex flex-col list-disc pl-20 mb-24">
                                <li className="mb-4">
                                    Wialon Local работает в TAS-IX
                                </li>
                                <li className="mb-4">
                                    Современная система GPS /ГЛОНАСС мониторинга
                                </li>
                                <li className="mb-4">
                                    Широкие технические возможности
                                </li>
                                <li className="mb-4">
                                    Максимально удобный в использовании
                                    интерфейс
                                </li>
                                <li className="mb-4">
                                    Отличная скорость работы
                                </li>
                                <li className="mb-4">
                                    Непревзойденная надежность хранения данных
                                </li>
                                <li className="mb-4">
                                    Оптимальная совместимость с различными
                                    видами оборудования
                                </li>
                                <li className="mb-4 text-red-500">
                                    Уникальное мобильное приложение
                                </li>
                            </ul>
                            <Button
                                onClick={() => handleModal(1)}
                                color="primary"
                            >
                                Узнать подробнее
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col w-full text-center">
                        <span className="mb-16 text-tiny">
                            С помощью данной программы Вы сможете контролировать
                            автомобили в режиме реального времени, отправлять
                            команды (например, блокировку двигателя), программа
                            может строить треки и отчеты за интересующий
                            интервал и самостоятельно отправлять на Ваш e-mail.
                        </span>
                        <span className="text-tiny">
                            Wialon Local вобрал в себя всё самое лучшее от
                            существующих облачных решений: богатый функционал,
                            для работы с которым не требуется клиентское ПО -
                            пользователи могут контролировать свой транспорт
                            через сайт оператора с любого компьютера, планшета
                            или смартфона.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
