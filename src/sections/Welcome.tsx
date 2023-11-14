import { FC, useState } from "react";
import { Button } from "../components/ui";
import { useModal } from "../hooks/handleModal";

export const Welcome: FC = () => {
    const { handleModal } = useModal();
    const [sliderActive, setSliderActive] = useState(1);

    const handleSlider = (buttonType: "prev" | "next") => {
        setSliderActive(prevState => {
            if (buttonType === "next") {
                if (prevState === 3) {
                    return 1;
                } else {
                    return prevState + 1;
                }
            } else {
                if (prevState === 1) {
                    return 3;
                } else {
                    return prevState - 1;
                }
            }
        });
    };

    return (
        <section className={`flex justify-center w-full relative bg-welcome bg-[length:459px_290px] md:bg-[length:680px_454px] lg:bg-[length:1020px_681px] bg-no-repeat bg-right-bottom`}>
            <div className="container flex items-center">
                <div className="flex flex-col justify-center items-center lg:items-start text-black p-24">
                    <h1 className="font-display text-sm lg:text-xl xl:text-3xl w-full xl:w-[720px] lg:mt-72 mb-20 leading-5 xl:leading-9 uppercase text-center lg:text-left">
                        NEW ERA - СИСТЕМЫ GPS МОНИТОРИНГА ТРАНСПОРТА ЭТО ГОТОВЫЕ
                        РЕШЕНИЯ, ПРЕДНАЗНАЧЕННЫЕ ДЛЯ ОПТИМИЗАЦИИ ЗАТРАТ И
                        ПОВЫШЕНИЯ ЭФФЕКТИВНОСТИ ИСПОЛЬЗОВАНИЯ ВАШЕГО АВТОПАРКА
                    </h1>
                    <Button
                        onClick={() => handleModal(1)}
                        color="primary"
                    >
                        Получить консультацию
                    </Button>
                </div>
            </div>
        </section>
    );
};
