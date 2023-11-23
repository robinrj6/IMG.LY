import React from "react";
import classes from './style.module.scss';

interface Props {
    contentType?: string;
}

export const Pill: React.FC<Props> = ({ contentType, ...props }) => {
    return (
        <div
            {...props}
            className={classes.root}
        >
            {contentType}
        </div>
    );
};