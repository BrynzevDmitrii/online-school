import React from "react";
export interface MobileContainerProps {
    children: React.ReactNode
}
export default function MobileContainer({children}: MobileContainerProps) {
    return (
        <div className={"px-4"}>{children}</div>
    );
};
