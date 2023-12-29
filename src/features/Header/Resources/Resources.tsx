import React from "react";

import { ListItem } from "../../../components/ListItem";
import { HeaderDropdown } from "../../../components/HeaderDropdown";
import classNames from "classnames";
import classes from './style.module.scss';
import { List } from "../../../components/List";
import { Links } from "../../../utils/constants";
import { ResourceItems } from "../ResourceItems";
import { ResourceLinksItems } from "../ResourceLinksItems";


interface Props {
    open?: boolean;
    small?: boolean;
    buttonClassName?: string;
}

export const Resources: React.FC<Props> = ({ open, small, buttonClassName }) => {
    return (
        <ListItem>
            <HeaderDropdown
                buttonClassName={buttonClassName}
                contentClassName={classNames(classes.content, {
                    [classes.content__is_small]: small,
                })}
                title="Resources"
                open={open}
                small={small}
            >
                <div className={classes.wrapper}>
                    <List className={classes.container}>
                        {Object.values(Links.ResourcesLinks).map(data => {
                            const items = data.map(({ name, url }) => {
                                if (!url) {
                                    return (
                                        <div
                                            key={name}
                                            className={classNames(classes.heading)}
                                        >
                                            {name}
                                        </div>
                                    );
                                }
                                return <ResourceLinksItems key={name} name={name} url={url} />;
                            }
                            );
                            return (
                                <div key={data[0].name} className={classes.column}>
                                    {items}
                                </div>
                            );
                        })}
                    </List>

                    <div className={classes.container_featured}>
                        <div className={`${classes.heading} ${classes.featured}`}>
                            Featured
                        </div>
                        <div className={classes.frame}>
                            {Object.values(Links.CardData).map(data => {
                                return (
                                    <div className={classes.div1}>
                                        <ResourceItems
                                            description={data.description}
                                            image={data.image}
                                            heading={data.heading}
                                            contentType={data.contentType}
                                            url={data.url}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </HeaderDropdown>
        </ListItem>
    );
};