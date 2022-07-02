import { Button } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from "./MainPage.module.scss"
import Link from "next/link";
import schedule from "../../img/schedule.png"
export default function MainPage(){
    return(
        <section className={styles.main_page_main_wrapper}>
            <div className={styles.main_page_wrapper}>
                <div>
                <h1  className={styles.main_page_title}>Create your own balance wheel</h1>
                <p  className={styles.main_page_text}>Create your own balance wheel and manage your finances correctly</p>
                <Link href={'/[userId]ds/calendar'}>
                <Button  color="secondary"
              variant="outlined"
              endIcon={<ArrowForwardIcon />}   className={styles.main_page_btn}>Create your balance wheel</Button>
           </Link> </div>
           <img className={styles.schedule_img}src={schedule.src} alt={schedule.alt} /></div>
        </section>
    )
}