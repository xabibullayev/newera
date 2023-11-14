import Image from "next/image";
import { FC } from "react";
import { useImageModal } from "../hooks/handleImageModal";

const images = [
    "photo_2022-09-21_05-56-24",
    "photo_2022-09-21_05-56-28",
    "photo_2022-09-21_05-56-34",
    "photo_2022-09-21_05-56-38",
    "photo_2022-09-21_05-56-43",
    "photo_2022-09-21_05-56-48",
    "photo_2022-09-21_05-56-53",
    "photo_2022-09-21_05-57-00",
    "photo_2022-09-21_05-57-06",
];

export const Gallery: FC = () => {
    const { handleOpen } = useImageModal()

    return (
        <section id="gallery">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-3">
                {images.map((image: string, index: number) => (
                    <div
                        key={image}
                        className={`${index === 8 ? 'hidden' : 'block'} h-[400px] w-full relative`}
                    >
                        {/* <div className="block bg-black/20 h-full w-full absolute z-10" /> */}
                        <Image
                            src={`/assets/images/gallery/${image}.jpg`}
                            objectFit="cover"
                            layout="fill"
                            onClick={() => handleOpen(`/assets/images/gallery/${image}.jpg`)}
                            className="hover:cursor-pointer"
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};
