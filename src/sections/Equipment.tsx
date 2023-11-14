import { FC } from "react";
import Image from "next/image";

import { Button, Typography } from "../components/ui";
import { useModal } from "../hooks/handleModal";
import { DownloadButton } from "../components/ui/Dowload-button";

export const Equipment: FC = () => {
    const { handleModal } = useModal();

    return (
        <section id="equipment" className="flex justify-center items-center">
            <div className="flex flex-col items-center w-full py-32">
                <Typography type="h1" color="black">
                    Новые продукты
                </Typography>
                <div className="flex flex-col items-center w-full">
                    <div className="container flex justify-center items-center w-full mb-32 px-24 xl:px-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-32">
                            <div className="flex flex-col items-center w-full text-center">
                                <div className="flex justify-center items-center h-[300px] w-full mb-24 relative">
                                    <Image
                                        src={`/assets/images/slides/6.jpg`}
                                        layout="fill"
                                        objectFit="contain"
                                        alt=""
                                    />
                                </div>
                                <span className="font-bold text-tiny mb-12">
                                    Видеокамера купольная для транспорта с
                                    ИК-подсветкой антивандальная
                                </span>
                                <span className="text-sm">
                                    Антивандальная AHD камера предназначена для
                                    использования в автотранспорте. Камера имеет
                                    чувствительный CMOS сенсор и разрешение Full
                                    HD (1920×1080), что позволяет получить
                                    качественное видеоизображение в высоком
                                    разрешении и с отличной детализацией. Камера
                                    оснащена фиксированным объективом 2.8 или
                                    3.6 мм.
                                </span>
                            </div>
                            <div className="flex flex-col items-center w-full text-center">
                                <div className="flex justify-center items-center h-[300px] w-full mb-24 relative">
                                    <Image
                                        src={`/assets/images/slides/7.jpg`}
                                        layout="fill"
                                        objectFit="contain"
                                        alt=""
                                    />
                                </div>
                                <span className="font-bold text-tiny mb-12">
                                    Автомобильный видеорегистратор на 5
                                    видеокамеры
                                </span>
                                <span className="text-sm">
                                    Автомобильный видеорегистратор на 5
                                    видеокамеры MA-MDVR04 SD разрешением 1080p
                                    эконом-класса предназначен для установки на
                                    транспортных средствах при условии
                                    ограниченного бюджета.
                                </span>
                            </div>
                            <div className="flex flex-col items-center w-full text-center">
                                <div className="flex justify-center items-center h-[300px] w-full mb-24 relative">
                                    <Image
                                        src={`/assets/images/slides/8.jpg`}
                                        layout="fill"
                                        objectFit="contain"
                                        alt=""
                                    />
                                </div>
                                <span className="font-bold text-tiny mb-12">
                                    Bluetooth маяк Teltonika Blue PUCK RHT
                                </span>
                                <span className="text-sm">
                                    Это компактный передатчик данных со
                                    встроенными датчиками температуры и
                                    влажности. Данная модель представляет
                                    решение для систем мониторинга, используемых
                                    в широком спектре сфер деятельности, где
                                    требуется отслеживание состояний, зависимых
                                    от температуры и влажности.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-primary w-full">
                        <div className="container flex flex-col xl:flex-row items-center py-32 px-24 xl:px-0">
                            <div className="flex justify-center items-center h-[400px] w-full xl:w-1/2 relative">
                                <Image
                                    src={`/assets/images/slides/33.png`}
                                    layout="fill"
                                    objectFit="contain"
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col items-center xl:items-start w-full xl:w-1/2 text-center xl:text-left">
                                <span className="font-bold text-xl text-tiny mb-16">
                                    МОНИТОРИНГ ТРАНСПОРТА
                                </span>
                                <span className="text-xl text-tiny mb-16">
                                    GPS ТРЕКЕР{" "}
                                    <strong>TELTONIKA FMB 920</strong>
                                </span>
                                <span className="text-md mb-12">
                                    Устанавливается на транспортные средства,
                                    имеющие пластиковую приборную панель, без
                                    подключения датчика уровня топлива
                                </span>
                                <DownloadButton
                                    file="3.pdf"
                                    name="TELTONIKA FMB 920"
                                    type="black"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <div className="container flex flex-col-reverse xl:flex-row items-center py-32 px-24 xl:px-0">
                            <div className="flex flex-col items-center xl:items-start w-full xl:w-1/2 text-center xl:text-left">
                                <span className="font-bold text-xl text-tiny mb-8">
                                    ПЕРВЫЙ В МИРЕ БЕСПРОВОДНОЙ ДАТЧИК УРОВНЯ
                                    ТОПЛИВА ЭСКОРТ TD-BLE
                                </span>
                                <DownloadButton
                                    file="4.jpg"
                                    name="TD BLE"
                                    type="primary"
                                />
                            </div>
                            <div className="flex justify-center items-center h-[400px] w-full xl:w-1/2 relative">
                                <Image
                                    src={`/assets/images/slides/4.png`}
                                    layout="fill"
                                    objectFit="contain"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center bg-primary w-full">
                        <div className="container flex flex-col xl:flex-row items-center py-32 px-24 xl:px-0">
                            <div className="flex justify-center items-center h-[400px] w-full xl:w-1/2 relative">
                                <Image
                                    src={`/assets/images/slides/2.png`}
                                    layout="fill"
                                    objectFit="contain"
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col items-center xl:items-start w-full xl:w-1/2 text-center xl:text-left">
                                <span className="font-bold text-xl text-tiny mb-8">
                                    МОНИТОРИНГ ТРАНСПОРТА С КОНТРОЛЕМ ТОПЛИВА
                                </span>
                                <span className="mb-24 xl:mb-12">
                                    Удаленный контроль расхода топлива
                                    возможен&nbsp; после установки GPS трекера
                                    FMB 125 и датчиков&nbsp; уровня топлива на
                                    выбор OMNICOMM LLS 5 или&nbsp; ЭСКОРТ ТД 150
                                </span>
                                <span className="text-xl text-tiny mb-8">
                                    GPS ТРЕКЕР{" "}
                                    <strong>TELTONIKA FMB 125</strong>
                                </span>
                                <span className="mb-12">
                                    Устанавливается на любое транспортное
                                    средство, с подключением до 5 датчиков
                                    уровня топлива
                                </span>
                                <DownloadButton
                                    file="2.pdf"
                                    name="TELTONIKA FMB 125"
                                    type="black"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <div className="container grid grid-cols-1 xl:grid-cols-3 gap-y-32 xl:gap-y-0 w-full py-32 px-24 xl:px-0">
                            <div className="flex flex-col items-center w-full">
                                <span className="text-xl text-tiny max-w-[400px] mb-20 text-center whitespace-pre-wrap">
                                    ДАТЧИК УРОВНЯ ТОПЛИВА&nbsp;
                                    <strong>OMNICOMM LLS 5</strong>
                                </span>
                                <div className="flex justify-center items-center h-[480px] w-1/2 relative">
                                    <Image
                                        src={`/assets/images/slides/11.png`}
                                        layout="fill"
                                        objectFit="contain"
                                        alt=""
                                    />
                                </div>
                                <DownloadButton
                                    file="1.pdf"
                                    name="OMNICOMM LLS 5"
                                    type="primary"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-between">
                                <Button
                                    onClick={() => handleModal(1)}
                                    color="primary"
                                >
                                    Выбрать оборудивонаие
                                </Button>
                                <span className="text-center mt-32 xl:mt-0">
                                    Это высокоточные датчики уровня топлива,
                                    предназначенные для измерения уровня топлива
                                    в топливном баке транспортного средства.
                                    Датчики подключаются к терминалу системы
                                    мониторинга транспорта и передают на него
                                    значения уровня топлива.
                                </span>
                                <div className="flex justify-center items-center h-[154px] w-[154px] mt-32 xl:mt-0 relative">
                                    <Image
                                        src={`/assets/images/slides/40per.png`}
                                        layout="fill"
                                        objectFit="contain"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-center w-full">
                                <span className="text-xl text-tiny max-w-[320px] mb-20 text-center whitespace-pre-wrap">
                                    ДАТЧИК УРОВНЯ ТОПЛИВА&nbsp;
                                    <strong>ЭСКОРТ ТД 150</strong>
                                </span>
                                <div className="flex justify-center items-center h-[480px] w-1/2 relative">
                                    <Image
                                        src={`/assets/images/slides/5.png`}
                                        layout="fill"
                                        objectFit="contain"
                                        alt=""
                                    />
                                </div>
                                <DownloadButton
                                    file="5.pdf"
                                    name="ЭСКОРТ ТД 150"
                                    type="primary"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
