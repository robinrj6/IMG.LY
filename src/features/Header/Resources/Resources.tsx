import React from "react";

import { ButtonTheme } from "../../../components/Button";

interface Props {   
    open?: boolean;
    small?: boolean;
    buttonClassName?: string;
}

export const Resources: React.FC<Props> = ({open,small,buttonClassName}) => {
    return (
        <div>
            <h1>Resources</h1>
        </div>
    );
};