import styles from "./AboutPage.module.scss";
import LanguageIcon from '@mui/icons-material/Language';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Button } from "@mui/material";
import Link from "next/link";
export default function AboutPage(){
    return(
        <section className={styles.main_wrapper}>
            <div className={styles.wrapper}>
            <h2 className={styles.main_title}>About this app</h2>
            <p className={styles.main_text}>Our application is a prototype of the well-known "Wheel of Life Balance" exercise. In this web application, you evaluate your areas of life with the help of points.m</p>
           </div> 
           <h3 className={styles.title}>Our features</h3>
           <div className={styles.cards_wrapper}>
            <div className={styles.item_wrapper}>
            <AddCircleOutlineIcon className={styles.item_img}/>
            <h5 className={styles.item_title}>Multi-user application</h5>
            <p className={styles.item_text}>You can use the application from different accounts</p>
        <Link href={'/users'}>
        <Button className={styles.img_btn}
              color="secondary"
              variant="outlined"
              endIcon={<AddCircleOutlineIcon />} 
            >Add account</Button>
            </Link>
            </div>
            <div className={styles.item_wrapper}>
            <AccessTimeIcon className={styles.item_img}/>
            <h5 className={styles.item_title}>Instant result</h5>
            <p className={styles.item_text}>Our application will immediately show you the result of your expenses in the form of a balance wheel</p>
            <Link href={'/[userId]ds/result'}>
        <Button className={styles.img_btn}
              color="secondary"
              variant="outlined"
              endIcon={<AccessTimeIcon />} 
            >Go to the calendar</Button>
            </Link>
            </div>
            <div className={styles.item_wrapper}>
            <CheckCircleOutlineIcon className={styles.item_img}/>
            <h5 className={styles.item_title}>Automatic saving</h5>
            <p className={styles.item_text}>For convenience, your balance wheel is automatically saved in the new app</p>
            <Link href={'/[userId]ds/calendar'}>
        <Button className={styles.img_btn}
              color="secondary"
              variant="outlined"
              endIcon={<CheckCircleOutlineIcon />} 
            >Go to the calendar</Button>
            </Link>
            </div>
            <div className={styles.item_wrapper}>
            <LanguageIcon className={styles.item_img}/>
            <h5 className={styles.item_title}>Language change</h5>
            <p className={styles.item_text}>Our application works in English and Ukrainian, so that everyone can use our application</p>
            <Link href={'/'}>
        <Button className={styles.img_btn}
              color="secondary"
              variant="outlined"
              endIcon={<LanguageIcon />} 
            >Language change</Button>
            </Link>
            </div>
            </div>
        </section>
    )
}              