import React from 'react';
import classes from './style.module.scss';
import { Pill } from '../Pill';


interface Props {
    small?: boolean;
    className?: string;
    image?: string;
    heading?: string;
    description?: string;
    contentType?: string;
    url?: string;
}

export const Card: React.FC<Props> = ({ small, className, image, heading, description, contentType, url, ...props }) => {
    return (
        <div
            {...props}
            className={classes.root}
        >
                <div className={classes.imgHolder}>
                    <img
                        className={classes.image}
                        alt="image for Blog1"
                        src={image}
                        loading="lazy"
                    />
                    <Pill contentType={contentType} />
                </div>
                <div className={classes.content}>
                    <div className={classes.heading}>
                        {heading}
                    </div>
                    <div className={classes.description}>
                        {description}
                    </div>
                </div>
        </div>
    );
};