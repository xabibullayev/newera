import { createContext, FC, ReactNode, useState } from "react";

interface ModalContextType {
    isActive: 1 | 2 | false;
    handleModal: (value: 1 | 2 | false) => void;
}

// @ts-ignore
export const ModalContext = createContext<ModalContextType>();
ModalContext.displayName = "Modal Context";

interface ModalContextProviderProps {
    children: ReactNode;
}

const ModalContextProvider: FC<ModalContextProviderProps> = ({ children }) => {
    const [isActive, setActive] = useState<1 | 2 | false>(false);

    return (
        <ModalContext.Provider
            value={{
                isActive,
                handleModal: (value: 1 | 2 | false) => setActive(value),
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContextProvider;
