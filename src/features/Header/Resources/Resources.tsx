import React from "react";

import { ButtonTheme } from "../../../components/Button";
import { ListItem } from "../../../components/ListItem";
import { HeaderDropdown } from "../../../components/HeaderDropdown";
import classNames from "classnames";
import classes from './style.module.scss';
import { List } from "../../../components/List";
import { HeaderBlogButton } from "../../../components/HeaderBlogButton";
import { DocsItem } from "../DocsItem";
import { Links } from "../../../utils/constants";
import { Card } from "../../../components/Card";


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
                        {Object.values(Links.ResourcesLinks).map(docs => {
                            const items = docs.map(({ name, url }) => {
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
                                return <DocsItem key={name} name={name} url={url} />;
                            }
                            );
                            return (
                                <div key={docs[0].name} className={classes.column}>
                                    {items}
                                </div>
                            );
                        })}
                    </List>

                    <div className={classes.container_featured}>
                    <div className={`${classes.heading} ${classes.featured}`}>
                            featured
                        </div>
                        <div className={classes.frame}>
                            <div className={classes.div1}>
                                <Card image="src\assets\images\blog1.png" heading="CE.SDK v1.13 Release Notes" description="Control time and duration of your visuals in videos, enjoy enhanced group and selection behavior, and fine-tune your editor with this new configuration." contentType="Blog" />
                            </div>
                            <div className={classes.div1}>div2</div>
                            <div className={classes.div1}>div3</div>
                            <div className={classes.div1}>div4</div>
                        </div>
                    </div>
                </div>
            </HeaderDropdown>
        </ListItem>
    );
};