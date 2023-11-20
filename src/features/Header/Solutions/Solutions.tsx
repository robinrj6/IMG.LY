import React from 'react';

import classNames from 'classnames';

import { ReactComponent as CreativeAutomation } from '../../../assets/images/navigation-creative-automation.svg';
import { ReactComponent as DAM } from '../../../assets/images/navigation-dam.svg';
import { ReactComponent as MarketingTech } from '../../../assets/images/navigation-marketing-tech.svg';
import { ReactComponent as PrintPersonalization } from '../../../assets/images/navigation-print-personalization.svg';
import { ReactComponent as Print } from '../../../assets/images/navigation-print.svg';
import { ReactComponent as VariableDataPrinting } from '../../../assets/images/navigation-variable-data-printing.svg';
import { HeaderDropdown } from '../../../components/HeaderDropdown';
import { List } from '../../../components/List';
import { ListItem } from '../../../components/ListItem';
import { Links } from '../../../utils/constants';
import { SolutionsItem } from '../SolutionsItem';

import classes from './style.module.scss';

const industries = [
  {
    name: Links.PrintIndustry.name,
    description:
      'Combine modern design editing and automation in your print workflow.',
    image: Print,
    url: Links.PrintIndustry.url,
  },
  {
    name: Links.MarketingTechIndustry.name,
    description:
      'Power content creation and creative automation in your marketing application.',
    image: MarketingTech,
    url: Links.MarketingTechIndustry.url,
  },
  {
    name: Links.DAMIndustry.name,
    description:
      'Scale content creation in your digital asset management solution.',
    image: DAM,
    url: Links.DAMIndustry.url,
  },
];

const usecase = [
  {
    name: Links.VariableDataPrintingUseCase.name,
    description: 'Enable mass-personalization in your design & print workflow.',
    image: VariableDataPrinting,
    url: Links.VariableDataPrintingUseCase.url,
  },
  {
    name: Links.CreativeAutomationUseCase.name,
    description: 'Scale content creation in your app.',
    image: CreativeAutomation,
    url: Links.CreativeAutomationUseCase.url,
  },
  {
    name: Links.PrintPersonalizationUseCase.name,
    description: 'Bring personalization to your products & campaigns.',
    image: PrintPersonalization,
    url: Links.PrintPersonalizationUseCase.url,
  },
];

interface Props {
  open?: boolean;
  small?: boolean;
  buttonClassName?: string;
}

export const Solutions: React.FC<Props> = ({
  open,
  small,
  buttonClassName,
}) => {
  return (
    <ListItem>
      <HeaderDropdown
        buttonClassName={buttonClassName}
        contentClassName={classNames(classes.content, {
          [classes.content__is_small]: small,
        })}
        aria-label="A menu that links to different use cases for the CE.SDK"
        title="Solutions"
        open={open}
        small={small}
      >
        <List className={classes.container}>
          <span className={classes.subheader}>by industry</span>
          <div className={classes.row}>
            {industries.map(({ name, url, image, description }) => (
              <SolutionsItem
                key={name}
                name={name}
                url={url}
                image={image}
                description={description}
              />
            ))}
          </div>
          <span className={classes.subheader}>by use case</span>
          <div className={classes.row}>
            {usecase.map(({ name, url, image, description }) => (
              <SolutionsItem
                key={name}
                name={name}
                url={url}
                image={image}
                description={description}
              />
            ))}
          </div>
          <div className={classes.note}>
            <span className={classes.note__text}>
              Can&lsquo;t find what you&lsquo;re looking for?
              <br />
              <a className={classes.note__link} href={Links.ContactSales.url}>
                Talk to us
              </a>{' '}
              to find the right solution for your use case.
            </span>
          </div>
        </List>
      </HeaderDropdown>
    </ListItem>
  );
};
