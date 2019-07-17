import React from 'react';
import './Footer.module.scss';
import classes from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import githubLogo from '../../../assets/logotypes/github-sign.svg';
import linkedinLogo from '../../../assets/logotypes/linkedin-logo.svg';

const Footer = () => {
    return (
        <footer className={classes.mainFooter}>
            <span>&copy; Magda Mielczarek 2019</span>
            <span className={classes.socialMediaIcons}>
                <a className={classes.socialMediaIcons__item} href='https://github.com/magdamielczarek'>
                    <FontAwesomeIcon icon={faGithub} size='2x' />
                </a>
                <a className={classes.socialMediaIcons__item} href='https://www.linkedin.com/in/magda-mielczarek-20b06275/'>
                    <FontAwesomeIcon icon={faLinkedin} size='2x' />
                </a>
            </span>
        </footer>
    );
};

export default Footer;
