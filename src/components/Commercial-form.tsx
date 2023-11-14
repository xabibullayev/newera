import { FC } from "react";
import { useFormik } from "formik";
import { useCommercialFormModal } from "../hooks/useCommercialFormModal";
import { Button } from "./ui";

export const CommercialForm: FC = () => {
    const { isActive, handleCommercialModal } = useCommercialFormModal();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
        },
        onSubmit: (data: any) => {
            fetch(`/api/request-commercial`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });

            setTimeout(() => handleCommercialModal(false), 500);
        },
    });

    return (
        <div
            className={`${
                isActive ? "flex" : "hidden"
            } justify-center items-center bg-black/80 h-screen w-full fixed top-0 z-20 px-32 xl:px-0`}
            onClick={() => handleCommercialModal(false)}
        >
            <form
                className="flex flex-col items-center w-full xl:w-1/2 p-32 rounded bg-primary text-center z-30"
                onSubmit={formik.handleSubmit}
                onClick={e => e.stopPropagation()}
            >
                <h1 className="font-bold text-xl mb-12">
                    Получить коммерческое
                </h1>
                <input
                    name="name"
                    type="text"
                    className="w-full mb-12 p-12 py-16 rounded"
                    placeholder="Введите имя"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <input
                    name="email"
                    type="email"
                    className="w-full mb-12 p-12 py-16 rounded"
                    placeholder="Введите почту"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <Button color="black" type="submit">
                    Получить
                </Button>
            </form>
        </div>
    );
};
