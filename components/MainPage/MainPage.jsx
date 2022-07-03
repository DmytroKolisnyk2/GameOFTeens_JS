import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./MainPage.module.scss";
import Link from "next/link";
import schedule from "../../img/schedule.png";
import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";

export default function MainPage() {
  const t = useTranslations("Main");

  return (
    <section className={styles.main_page_main_wrapper}>
      <div className={styles.main_page_wrapper}>
        <div>
          <Fade cascade duration={600} triggerOnce>
            <h1 className={styles.main_page_title}>{t("title")}</h1>
            <p className={styles.main_page_text}>{t("text")}</p>
            <Link href={"/users"}>
              <Button
                color="secondary"
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                className={styles.main_page_btn}
              >
                {t("btn")}
              </Button>
            </Link>
          </Fade>
        </div>
        <Fade duration={600} triggerOnce direction="right">
          <img className={styles.schedule_img} src={schedule.src} alt={schedule.alt} />
        </Fade>
      </div>
    </section>
  );
}
