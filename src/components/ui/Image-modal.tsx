import Image from "next/image";
import { FC } from "react";
import { useImageModal } from "../../hooks/handleImageModal";

export const ImageModal: FC = () => {
    const { file, isOpen, handleClose } = useImageModal();

    return (
        <div
            id="modal"
            className={`${
                isOpen ? "flex" : "hidden"
            } fixed top-0 left-0 z-80 w-screen h-screen bg-black/90 justify-center items-center z-30`}
        >
            <a
                className="fixed z-90 top-20 right-20 text-white text-5xl font-bold"
                href="javascript:void(0)"
                onClick={handleClose}
            >
                &times;
            </a>

            <div className="flex max-w-[800px] w-[800px] max-h-[600px] h-[600px] relative">
                {file && (
                    <Image
                        id="modal-img"
                        src={file}
                        objectFit="cover"
                        layout="fill"
                        className=""
                        alt=""
                    />
                )}
            </div>
        </div>
    );
};
