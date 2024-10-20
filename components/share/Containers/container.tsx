import React from "react";
import {Props} from "next/script";
export default function Container({ children }: React.PropsWithChildren<Props>) {
    return (
        <div className={"mx-auto max-w-[1280px]"}>{children}</div>
    );
};
