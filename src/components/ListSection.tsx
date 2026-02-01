import { ReactNode } from "react";

export default function ListSection(props: { title: string; children?: ReactNode }) {
    const {title, children} = props

    return (
        <div className="flex flex-col">
            <div>{title}</div>
            {children && <div className="flex flex-col ml-8">{children}</div>}
        </div>
    );
}
