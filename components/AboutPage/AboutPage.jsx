import styles from "./AboutPage.module.scss";
import LanguageIcon from '@mui/icons-material/Language';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTranslations } from "next-intl"
import { Button } from "@mui/material";
import Link from "next/link";

export default function AboutPage(){
    const t = useTranslations("About");
    return(
        <section className={styles.main_wrapper}>
            <div className={styles.wrapper}>
            <h2 className={styles.main_title}>{t('about')}</h2>
           </div> 
           <h3 className={styles.title}>{t('about_title')}</h3>
           <div className={styles.cards_wrapper}>
            <div className={styles.item_wrapper}>
            <AddCircleOutlineIcon className={styles.item_img}/>
            <h5 className={styles.item_title}>{t('multiU_title')}</h5>
            <p className={styles.item_text}>{t('multiU_text')}</p>
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
            <h5 className={styles.item_title}>{t('resultI_title')}</h5>
            <p className={styles.item_text}>{t('resultI_text')}</p>
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
            <h5 className={styles.item_title}>{t('savingA_title')}</h5>
            <p className={styles.item_text}>{t('savingA_text')}</p>
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
            <h5 className={styles.item_title}>{t('languageC_title')}</h5>
            <p className={styles.item_text}>{t('languageC_text')}</p>
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