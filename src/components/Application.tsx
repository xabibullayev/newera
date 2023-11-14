import { FC } from "react";
import { useFormik } from "formik";
import { useModal } from "../hooks/handleModal";
import { Button } from "./ui";
import InputMask from "react-input-mask";

export const Application: FC = () => {
    const { isActive, handleModal } = useModal();

    const formik = useFormik({
        initialValues: {
            name: "",
            car: "",
            phone: "",
        },
        onSubmit: (data: any) => {
            fetch(`/api/request`, {
                method: "POST",
                body: JSON.stringify({
                    ...data,
                    type: 'ПОЛУЧЕНИЕ ТЕСТА'
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });

            setTimeout(() => handleModal(false), 500);
        },
    });

    return (
        <div
            className={`${
                isActive === 2 ? "flex" : "hidden"
            } justify-center items-center bg-black/80 h-screen w-full fixed top-0 z-20 px-32 xl:px-0`}
            onClick={() => handleModal(false)}
        >
            <form
                className="flex flex-col items-center w-full xl:w-1/2 p-32 rounded bg-primary text-center z-30"
                onSubmit={formik.handleSubmit}
                onClick={e => e.stopPropagation()}
            >
                <h1 className="font-bold text-xl mb-10">Получить тест</h1>
                <span className="mb-12">
                    Тестовое оснащение проводится только в Каракалпакистане
                </span>
                <input
                    name="name"
                    type="text"
                    className="w-full mb-12 p-12 py-16 rounded"
                    placeholder="Введите имя"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <input
                    name="car"
                    type="text"
                    className="w-full mb-12 p-12 py-16 rounded"
                    placeholder="Введите модель машины"
                    onChange={formik.handleChange}
                    value={formik.values.car}
                />
                <InputMask
                    name="phone"
                    className="w-full mb-12 p-12 py-16 rounded"
                    mask="+\9\9\8 99 999 99 99"
                    // maskChar=" "
                    placeholder="Введите телефон*"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                />
                <Button color="black" type="submit">
                    Отправить
                </Button>
            </form>
        </div>
    );
};
