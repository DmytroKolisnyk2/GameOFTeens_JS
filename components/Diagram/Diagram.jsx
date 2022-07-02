import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import styles1 from "../MainPage/MainPage.module.scss";
import styles from "./Diagram.module.scss";
import { PolarArea } from "react-chartjs-2";
import { useTranslations } from 'next-intl';
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Arrow from "@mui/icons-material/ArrowBack";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const initialData = {
  labels: [
    `Health and Sport, %`,
    "Progress, %",
    "Rest and Travels, %",
    "Hobbies, %",
    "Friends, %",
    "Family, %",
    "Carrier, %",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [],
      percentData: [],
      backgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
        "rgba(255, 159, 64, 0.8)",
        "rgba(70, 159, 64, 0.8)",
      ],
      borderWidth: 1,
    },
  ],
};

const Diagram = ({ data }) => {
  const { query, back } = useRouter();
  const t = useTranslations('Diagram');
  const newData = { ...initialData };
  const dataArr = [];
  for (let item in data) {
    dataArr.push(data[item]);
  }
  const sum = dataArr.reduce((partialSum, a) => partialSum + a, 0);
  const percentData = dataArr.map((d, i) => {
    const percent = Math.floor((d / sum) * 100);
    return percent;
  });
  newData.datasets[0].percentData = dataArr;
  newData.labels = [
    `${t("health")}, %`,
    `${t("progress")}, %`,
    `${t("rest")}, %`,
    `${t("hobby")}, %`,
    `${t("friends")}, %`,
    `${t("family")}, %`,
    `${t("carrier")}, %`,
  ];
  // console.log(newData.labels)
  newData.datasets[0].data = percentData;
  const indexArray = newData.datasets[0].percentData;
  const res = dataArr
    .slice()
    .sort((a, b) => a - b)
    .slice(0, 2);

  return (
    <div className={styles.results__wrapper}>
      <Button
        className={styles.button}
        size="large"
        color="secondary"
        variant="contained"
        startIcon={<Arrow />}
        onClick={() => back()}
      >
        {t('goBack')}
      </Button>
      <div>
      <div className={styles.main_page_wrapper}>
        <div>
        <h1 className={styles1.main_page_title}>About your result</h1>
          <h2 className={styles1.main_page_text}>On this page you can view your result. Below you can view a number of tips for applying your finances</h2>
        <h2 className={styles.text}>
          {t("advice")} {newData.labels[indexArray.indexOf(res[0])].slice(0,-3)} {t('and')} {" "}
          {newData.labels[indexArray.indexOf(res[1])].slice(0,-3)}
        </h2>
        </div>
        <div className={styles.polarArea__wrapper}>
        <PolarArea data={newData} className={styles.diagram} />
       
      </div>
        </div> 
      
      </div>
     
    </div>
  );
};

export default Diagram;
