import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from "chart.js";
// import styles1 from "../MainPage/MainPage.module.scss";
import styles from "./Diagram.module.scss";
import { PolarArea } from "react-chartjs-2";
import { useTranslations } from "next-intl";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Arrow from "@mui/icons-material/ArrowBack";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
import { getTheme } from "../../redux/theme/theme-selectors";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

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
        "rgba(255, 99, 132, 0.9)",
        "rgba(54, 162, 235, 0.9)",
        "rgba(255, 206, 86, 0.9)",
        "rgba(75, 192, 192, 0.9)",
        "rgba(153, 102, 255, 0.9)",
        "rgba(255, 159, 64, 0.9)",
        "rgba(70, 159, 64, 0.9)",
      ],
      borderWidth: 1,
    },
  ],
};

const Diagram = ({ data }) => {
  // const [status, setStatus] = useState(true);
  const { query, back } = useRouter();
  const t = useTranslations("Diagram");
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
  const theme = useSelector(getTheme);

  const setStyle = (theme, style, darkTheme, lightTheme) => {
    switch (theme) {
      case "default":
        return style;
      case "dark":
        return `${style} ${darkTheme}`;
      case "light":
        return `${style} ${lightTheme}`;
    }
  };
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
  newData.datasets[0].data = percentData;
  const indexArray = newData.datasets[0].percentData;
  const res = dataArr
    .slice()
    .sort((a, b) => a - b)
    .slice(0, 2);
  const count = 0;
  const isEqual = 0;
  let chto = data["health"];
  for (const item in data) {
    const element = data[item];
    if (element === 0) count++;
    // if (element === chto) isEqual++;
  }

  return (
    <>
      <Button
        className={styles.button}
        size="large"
        color="secondary"
        variant="contained"
        startIcon={<Arrow />}
        onClick={() => back()}
      >
        {t("goBack")}
      </Button>
      <div
        className={setStyle(theme, styles.results__wrapper, styles.themeDark, styles.themeLight)}
      >
        <div className={styles.main_page_wrapper}>
          <div
            className={setStyle(
              theme,
              styles.polarArea__text__wrapper,
              styles.themeDark,
              styles.themeLight,
            )}
          >
            <Fade direction="up" cascade>
              <h1 className={styles.main_page_title}>{t("about")}</h1>
              <h2 className={styles.main_page_text}>{t("about_text")}</h2>
              {/* {isEqual === 7 ? ( */}
              {/* <h2 className={styles.text}>{t("equal")}</h2> */}
              {/* ) : ( */}
              {/* )} */}
              {count > 1 ? (
                <h2 className={styles.text}>{t("null")}</h2>
              ) : (
                <h2 className={styles.text}>
                  {t("advice")} {newData.labels[indexArray.indexOf(res[0])].slice(0, -3)}{" "}
                  {t("and")} {newData.labels[indexArray.indexOf(res[1])].slice(0, -3)}
                </h2>
              )}
            </Fade>
          </div>
          <div className={styles.polarArea__wrapper}>
            <PolarArea data={newData} className={styles.diagram} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Diagram;
