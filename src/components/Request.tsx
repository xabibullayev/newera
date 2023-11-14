import { useFormik } from "formik";
import { FC } from "react";
import { useDeviceDetector } from "../hooks/useDeciveDecetor";
import InputMask from "react-input-mask";

export const Request: FC = () => {
    const { isMobile } = useDeviceDetector();

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
        },
        onSubmit: (data: any) => {
            fetch(`/api/request`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
        },
    });

    return (
        <div className="flex justify-center bg-primary lg:h-[320px] w-full">
            <div className="container flex flex-col justify-center py-36 p-16 lg:p-0">
                <h2 className="font-display text-3xl mb-6">
                    БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
                </h2>
                <span>Оставьте заявку и мы вам перезвоним</span>
                <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col lg:flex-row items-center mt-24"
                >
                    <input
                        name="name"
                        type="text"
                        className="w-full lg:max-w-[440px] mb-12 lg:mb-0 lg:mr-12 p-12 py-16 rounded"
                        placeholder="Введите имя"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    <InputMask
                        name="phone"
                        className="w-full lg:max-w-[440px] mb-12 lg:mb-0 lg:mr-12 p-12 py-16 rounded"
                        mask="+\9\9\8 99 999 99 99"
                        // maskChar=" "
                        placeholder="Введите телефон*"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                    <button
                        type="submit"
                        className="flex justify-center items-center font-bold text-sm xl:text-tiny h-54 xl:h-56 w-full lg:w-[240px] xl:w-[400px] cursor-pointer bg-black text-primary rounded"
                    >
                        Отправить заявку
                    </button>
                </form>
            </div>
        </div>
    );
};
