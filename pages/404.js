  import img from "../img/404.png"
  import styles from "./404.module.scss"
  import { Button } from "@mui/material"
  import Link from "next/link";
export default function Error() {
  return (

        <section className={styles.not_found_page}>
          <div className={styles.wrapper}>
            <img className={styles.img} src={img.src} alt={img.alt} />
            <h2 className={styles.title}>404</h2>
            <p className={styles.text}>Hey captain! Looks like you're heading to a wrong planet!</p>
           <Link href={'/'}>
            <Button className={styles.btn}>Take me back to the homepage</Button>
           </Link> 
           </div>
         </section>
  
  )
}
