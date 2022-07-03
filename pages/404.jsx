import img from "../img/404.png";
import styles from "../styles/404.module.scss";
import { Button } from "@mui/material";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
export default function Error() {
  return (
    <section className={styles.not_found_page}>
      <Fade>
        <div className={styles.wrapper}>
          <img className={styles.img} src={img.src} alt={img.alt} />
          <h2 className={styles.title}>404</h2>
          <p className={styles.text}>
            Hey captain! Looks like you&apos;re heading to a wrong planet!
          </p>
          <Link href={"/"}>
            <Button className={styles.btn}>Take me back to the homepage</Button>
          </Link>
        </div>
      </Fade>
    </section>
  );
}
