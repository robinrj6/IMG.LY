import React, { forwardRef } from "react";

import classes from './style.module.scss';
import { Card } from "../../../components/Card";

interface Props {
    small?: boolean;
    className?: string;
    image?: string;
    heading?: string;
    description?: string;
    contentType?: string;
    url?: string;
}


const ResourceItems = forwardRef<HTMLAnchorElement, Props>(
    ({ small, className, image, heading, description, contentType, url, ...props }, ref) => {
        return (
            <div>
                <a
                    className={classes.anchor}
                    href={url}>
                    <Card image={image} heading={heading} description={description} contentType={contentType} />
                </a>
            </div>
        )
    }
);
export { ResourceItems };