import { FC } from "react";
import { useFormik } from "formik";
import { useModal } from "../hooks/handleModal";
import { Button } from "./ui";
import InputMask from "react-input-mask";

export const Form: FC = () => {
    const { isActive, handleModal } = useModal();

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
        },
        onSubmit: (data: any) => {
            fetch(`/api/request`, {
                method: "POST",
                body: JSON.stringify({
                    ...data,
                    type: 'ЗВОНОК'
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
                isActive === 1 ? "flex" : "hidden"
            } justify-center items-center bg-black/80 h-screen w-full fixed top-0 z-20 px-32 xl:px-0`}
            onClick={() => handleModal(false)}
        >
            <form
                className="flex flex-col items-center w-full xl:w-1/2 p-32 rounded bg-primary text-center z-30"
                onSubmit={formik.handleSubmit}
                onClick={e => e.stopPropagation()}
            >
                <h1 className="font-bold text-xl mb-10">
                    Получить консультацию
                </h1>
                <span className="mb-12">
                    Перезвоним в течение 10 минут и ответим на все интересующие
                    вопросы
                </span>
                <input
                    name="name"
                    type="text"
                    className="w-full mb-12 p-12 py-16 rounded"
                    placeholder="Введите имя"
                    onChange={formik.handleChange}
                    value={formik.values.name}
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
