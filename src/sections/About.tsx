import { FC } from "react";
import { Typography } from "../components/ui";

export const About: FC = () => {
    return (
        <section id="about" className="flex justify-center items-center bg-primary">
            <div className="container flex flex-col justify-center items-center py-32 p-16">
                <Typography type="h1" color="black">О компании</Typography>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-32 gap-y-40 text-black">
                    <div className="flex flex-col items-start h-full">
                        <span className="flex justify-center items-center font-display text-2xl xl:text-6xl min-w-[54px] xl:min-w-[100px] mb-6 xl:mb-12 py-6 xl:py-8 px-10 xl:px-12 border-2 rounded-lg border-black">
                            01
                        </span>
                        <div className="flex flex-col w-full">
                            <span className="font-display text-lg xl:text-2xl mb-2">
                                Бизнес профиль
                            </span>
                            <p className="text-xs xl:text-sm">
                                Торговая марка New Era ® принадлежит ООО «New
                                Era Company Service» (Далее Компания). Компания
                                специализируется на предоставлении
                                функциональных и надежных решений в сферах M2M и
                                IoT. На этом рынке компания работает с 2005 года
                                и на сегодняшний день является одной из ведущих
                                компаний, разработчиком и владельцем ряда
                                уникальных технологий и продуктов, включая
                                платформу глобального спутникового мониторинга
                                WIALON.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start h-full">
                        <span className="flex justify-center items-center font-display text-2xl xl:text-6xl min-w-[54px] xl:min-w-[100px] mb-6 xl:mb-12 py-6 xl:py-8 px-10 xl:px-12 border-2 rounded-lg border-black">
                            02
                        </span>
                        <div className="flex flex-col">
                            <span className="font-display text-lg xl:text-2xl mb-2">
                                Решения B2B и B2C
                            </span>
                            <p className="text-xs xl:text-sm">
                                Клиентами компании являются более 30,000 частных
                                лиц и компаний в разных регионах РУз. Мы также
                                гордимся тем, что среди наших клиентов много
                                крупных коммерческих, государственных и
                                муниципальных организаций. Важную роль в успехе
                                играет обширная сеть партнеров по всей стране.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start h-full">
                        <span className="flex justify-center items-center font-display text-2xl xl:text-6xl min-w-[54px] xl:min-w-[100px] mb-6 xl:mb-12 py-6 xl:py-8 px-10 xl:px-12 border-2 rounded-lg border-black">
                            03
                        </span>
                        <div className="flex flex-col">
                            <span className="font-display text-lg xl:text-2xl mb-2">
                                Инновации и технологии
                            </span>
                            <p className="text-xs xl:text-sm">
                                Компания владеет собственной
                                телекоммуникационной платформой для
                                предоставления геоинформационных сервисов.
                                Дата-центр располагается в Ташкенте и отвечает
                                высоким требованиям производительности и
                                безопасности. Наши клиенты всегда уверены в
                                быстром доступе к информации, а также ее
                                защищенности.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start h-full">
                        <span className="flex justify-center items-center font-display text-2xl xl:text-6xl min-w-[54px] xl:min-w-[100px] mb-6 xl:mb-12 py-6 xl:py-8 px-10 xl:px-12 border-2 rounded-lg border-black">
                            04
                        </span>
                        <div className="flex flex-col">
                            <span className="font-display text-lg xl:text-2xl mb-2">
                                Команда
                            </span>
                            <p className="text-xs xl:text-sm">
                                Собственный штат профессиональных разработчиков
                                позволяет в кратчайшие сроки реализовывать
                                IT-проекты различной сложности, в том числе,
                                производить интеграцию с системами заказчика,
                                адаптировать продукты и разрабатывать
                                индивидуальные решения под специфические
                                требования.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start h-full">
                        <span className="flex justify-center items-center font-display text-2xl xl:text-6xl min-w-[54px] xl:min-w-[100px] mb-6 xl:mb-12 py-6 xl:py-8 px-10 xl:px-12 border-2 rounded-lg border-black">
                            05
                        </span>
                        <div className="flex flex-col">
                            <span className="font-display text-lg xl:text-2xl mb-2">
                                Юридические полномочия
                            </span>
                            <p className="text-xs xl:text-sm">
                                Соответствие законодательству является одним из
                                наших приоритетов. Компания имеет все
                                необходимые лицензии и разрешения,
                                действительные на территории РУз. Продукция
                                предприятия соответствует международным
                                стандартам, требованиям технических регламентов,
                                имеет положительные заключения о соответствии
                                требованиям UNICON.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
