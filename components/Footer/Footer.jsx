import styles from "./Footer.module.scss";
import logoImg from "../../img/logo.jpg";
import dimaAvatar from "../../img/dimaAvatar.jpg";
import igorAvatar from "../../img/igorAvatar.jpg";
import annaAvatar from "../../img/annaAvatar.png";
import maxAvatar from "../../img/maxAvatar.jpg";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {getTheme} from '../../redux/theme/theme-selectors';
import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector(getTheme);
  const setStyle = (theme, style, darkTheme, lightTheme) => {
    switch (theme) {
      case 'default':
      return style
      case 'dark':
      return `${style} ${darkTheme}`
      case 'light':
      return `${style} ${lightTheme}`
    }
  };
  return (
    <footer className={setStyle(theme, styles.footer, styles.themeDark, styles.themeLight)}>
      <div className={styles.content}>
        <a target="_blank" href="https://github.com/HOPEteam2021" className={styles.wrapperLogo}>
          <Image
            width="58px"
            height="58px"
            className={styles.image}
            src={logoImg.src}
            alt="logo__team"
          />
          <h2 className={setStyle(theme, styles.logo, styles.darkThemeText, styles.lightThemeText)}>HOPEteam</h2>
        </a>
        <div className={styles.wrapperTeam}>
          <h3 className={setStyle(theme, styles.teamTitle, styles.darkThemeText, styles.lightThemeText)}>Our Team :</h3>
          <div className={styles.wrapperLinks}>
            <a
              className={styles.link}
              target="_blank"
              href="https://www.linkedin.com/in/dmytro-kolisnyk-203a61235/"
            >
              <div className={styles.overlay}>
                <LinkedInIcon className={styles.icon} />
              </div>
              <Image
                width="56px"
                height="56px"
                src={dimaAvatar.src}
                alt="avatar"
                className={styles.avatar}
              />
            </a>
            <a
              className={styles.link}
              target="_blank"
              href="https://www.linkedin.com/in/igor-yakibiuk-bb751522b/"
            >
              <div className={styles.overlay}>
                <LinkedInIcon className={styles.icon} />
              </div>
              <Image
                width="56px"
                height="56px"
                src={igorAvatar.src}
                alt="avatar"
                className={styles.avatar}
              />
            </a>
            <a
              className={styles.link}
              target="_blank"
              href="https://www.instagram.com/annadominikakozak/"
            >
              <div className={styles.overlay}>
                <InstagramIcon className={styles.icon} />
              </div>
              <Image
                width="56px"
                height="56px"
                src={annaAvatar.src}
                alt="avatar"
                className={styles.avatar}
              />
            </a>
            <a className={styles.link} target="_blank" href="https://github.com/MaxPopsuy">
              <div className={styles.overlay}>
                <GitHubIcon className={styles.icon} />
              </div>
              <Image
                width="56px"
                height="56px"
                src={maxAvatar.src}
                alt="avatar"
                className={styles.avatar}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.wrapperText}>
        <h4 className={setStyle(theme, styles.footerText, styles.darkThemeText, styles.lightThemeText)}>All rights are reserved.</h4>
        <CopyrightIcon className={setStyle(theme, styles.copyRightIcon, styles.darkThemeText, styles.lightThemeText)} />
      </div>
    </footer>
  );
};

export default Footer;
