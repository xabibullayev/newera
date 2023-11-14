import { createContext, FC, ReactNode, useState } from "react";

interface ImageModalContextType {
    isOpen: boolean;
    file: string | null;
    handleOpen: (file: string) => void;
    handleClose: () => void;
}

// @ts-ignore
export const ImageModalContext = createContext<ImageModalContextType>();
ImageModalContext.displayName = "Image Modal Context";

interface ImageModalContextProviderProps {
    children: ReactNode;
}

const ImageModalContextProvider: FC<ImageModalContextProviderProps> = ({
    children,
}) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [file, setFile] = useState<string | null>(null);

    return (
        <ImageModalContext.Provider
            value={{
                isOpen,
                file,
                handleOpen: (file: string) => {
                    setOpen(true);
                    setFile(file)
                },
                handleClose: () => {
                    setOpen(false);
                    setFile(null);
                },
            }}
        >
            {children}
        </ImageModalContext.Provider>
    );
};

export default ImageModalContextProvider;
