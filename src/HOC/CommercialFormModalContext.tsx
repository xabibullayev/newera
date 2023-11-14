import { createContext, FC, ReactNode, useState } from "react";

interface CommercialFormModalContextType {
    isActive: boolean;
    handleCommercialModal: (value: boolean) => void;
}

// @ts-ignore
export const CommercialFormModalContext = createContext<CommercialFormModalContextType>();
CommercialFormModalContext.displayName = "Modal Context";

interface ModalContextProviderProps {
    children: ReactNode;
}

const CommercialFormModalContextProvider: FC<ModalContextProviderProps> = ({ children }) => {
    const [isActive, setActive] = useState<boolean>(false);

    return (
        <CommercialFormModalContext.Provider
            value={{
                isActive,
                handleCommercialModal: (value: boolean) => setActive(value),
            }}
        >
            {children}
        </CommercialFormModalContext.Provider>
    );
};

export default CommercialFormModalContextProvider;
