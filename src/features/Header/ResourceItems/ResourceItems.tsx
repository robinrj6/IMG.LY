import React, { forwardRef } from "react";

import classes from './style.module.scss';
import { Card } from "../../../components/Card";

interface Props {
    image?: string;
    heading?: string;
    description?: string;
    contentType?: string;
    url?: string;
}


const ResourceItems = forwardRef<HTMLAnchorElement, Props>(
    ({ image, heading, description, contentType, url, ...props }, ref) => {
        return (
            <div>
                <a
                    {...props}
                    ref={ref}
                    className={classes.anchor}
                    href={url}>
                    <Card
                        image={image}
                        heading={heading}
                        description={description}
                        contentType={contentType}
                    />
                </a>
            </div>
        )
    }
);
export { ResourceItems };