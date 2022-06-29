import { ReactElement } from "react";

export interface FooterButtonsProps {
    children: ReactElement;
    label: string;
    href: string;
    themes: string[]
}