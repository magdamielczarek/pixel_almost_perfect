import React from 'react';
import './Footer.scss';
import githubLogo from '../../assets/github-sign.svg';
import linkedinLogo from '../../assets/linkedin-logo.svg';

const Footer = () => {
    return (
        <footer className="mainFooter">
            <span className='copyInfo'>&copy; Magda Mielczarek 2019</span>
            <span className='socialMediaIcons'>
                <a className='socialMediaIcons__item' href='https://github.com/magdamielczarek'>
                    <img src={githubLogo} alt='visit my github profile' />
                </a>
                <a className='socialMediaIcons__item' href='https://www.linkedin.com/in/magda-mielczarek-20b06275/'>
                    <img src={linkedinLogo} alt='visit my linkedin profile'/>
                </a>
            </span>
        </footer>
    );
};

export default Footer;
