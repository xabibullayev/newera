import { FC, ReactNode } from "react";
import { Form } from "./Form";
import { Application } from "./Application";
import { Header } from "./Header";
import { ImageModal } from "./ui/Image-modal";
import { CommercialForm } from "./Commercial-form";

interface LayoutProps {
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {

    return (
        <>
            <Header />
            {children}
            <Form />
            <ImageModal />
            <Application />
            <CommercialForm />
        </>
    );
};
