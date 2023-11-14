import Image from "next/image";
import { FC, useState } from "react";
import { Typography } from "../components/ui";

const possibilities = [
    {
        image: "ps1.png",
        title: "Контроль текущего местоположения транспорта",
        options: [
            "Выявление несанкционированных рейсов",
            "Соблюдение разрешенных маршрутов",
            "Локатор - возможность выборочного слежения за объектами без необходимости отдельной авторизации в системе мониторинга",
        ],
    },
    {
        image: "ps2.png",
        title: "Контроль расхода топлива с использованием датчика уровня топлива",
        options: [
            "Учёт заправок/сливов топлива",
            "Выявление случаев повышенного расхода",
            "Определение фактических норм расхода топлива",
        ],
    },
    {
        image: "ps3.png",
        title: "Контроль пробега \nтранспортного средства",
        options: [
            "Автоматическое оповещение о необходимости прохождения ТО",
            "Возможность расчёта с заказчиком по километражу",
            "Исключение махинаций со спидометром",
        ],
    },
    {
        image: "ps4.png",
        title: "Контроль над посещением обозначенных геозон",
        options: [
            "Контроль выполнения маршрутного задания",
            "Создание POI",
            "Несанкционированный выезд за обозначенную зону",
            "Несанкционированный въезд в запрещённые зоны",
        ],
    },
    {
        image: "ps5.png",
        title: "Контроль над соблюдением Скоростного режима",
        options: [
            "Отслеживание параметров движения",
            "Обеспечение безопасности грузопассажирских перевозок",
        ],
    },
    {
        image: "ps6.png",
        title: "Контроль над деятельностью водителей",
        options: [
            "Выявление простоев, нарушение графика",
            "Выявление агрессивного вождения",
            "Повышение дисциплины и аккуратности водителей",
            "Идентификация водителей с помощью электронных ключей",
            "Выявление махинаций с чеками, отчётностью, приписками пробега",
            "ECO driving - Функциональный модуль для определения качества вождения (значение ускорения, торможения, момент поворота)",
        ],
    },
    {
        image: "ps7.png",
        title: "Контроль работы дополнительного оборудования",
        options: [
            "Учёт времени и режимов работы любых механизмов и агрегатов: двигателя автомобиля, генераторов, компрессоров, кранов, навесного оборудования и т.д.",
            "Удалённое блокирование системы запуска автомобиля (иммобилайзер)",
            "Мониторинг температуры в рефрижераторах",
            "Подключение CAN к шине ",
        ],
    },
    {
        image: "ps8.png",
        title: "Составление аналитических отчетов по всем параметрам работы автотранспорта",
        options: [
            'Функция "Быстрый отчёт" за выбранный период времени',
            "Автоматическое уведомление по e-mail о нарушениях указанных событий ",
            "Формирование собственных шаблонов отчётов",
            "Анализ полученных данных посредством широкого набора табличных и графических отчётов",
        ],
    },
];

export const Possibilities: FC = () => {
    const [selectedPoss, setSelectedPoss] = useState(0);

    return (
        <section
            id="possibilities"
            className="flex justify-center items-center"
        >
            <div className="container flex flex-col items-center py-32">
                <Typography type="h1" color="black">
                    Возможности
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 w-full">
                    {possibilities.map(
                        ({ image, title, options }, index: number) => (
                            <div
                                key={image}
                                className={`flex flex-col min-h-[200px] min-w-[120px] p-24 md:rounded-xl cursor-pointer md:border-2 ${
                                    selectedPoss === index
                                        ? "bg-primary border-primary"
                                        : "bg-white text-black border-black/10"
                                }`}
                                onClick={() => setSelectedPoss(index)}
                            >
                                <div className="flex flex-col md:flex-row items-center mb-24 text-center md:text-left">
                                    <div className="flex mb-20 md:mb-0 md:mr-24 shrink-0">
                                        <Image
                                            className="text-primary"
                                            src={`/assets/icons/${image}`}
                                            height={100}
                                            width={100}
                                            quality={100}
                                            alt=""
                                            style={{ color: "red" }}
                                        />
                                    </div>
                                    <span className="font-bold text-md">
                                        {title}
                                    </span>
                                </div>
                                <div className="flex flex-col px-24 text-center md:text-left">
                                    {options.map(option => (
                                        <span key={option} className="text-sm mb-4">&#8722; {option}</span>
                                    ))}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};
