import { FC, ReactNode } from "react";

interface TypographyProps {
    type: "h1" | "h2" | "h3" | "h4" | "h5";
    children: ReactNode;
    color: "primary" | "black";
}

export const Typography: FC<TypographyProps> = ({ type, children, color }) => {
    switch (type) {
        case "h1":
            return (
                <h1 className={`font-display text-4xl xl:text-display text-center xl:text-left mb-54 text-${color}`}>
                    {children}
                </h1>
            );

        default:
            return (
                <h1 className={`font-display text-display mb-54 text-${color}`}>
                    {children}
                </h1>
            );
    }
};
