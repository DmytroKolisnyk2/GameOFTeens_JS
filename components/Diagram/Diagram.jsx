import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./Diagram.module.scss";
import { PolarArea } from "react-chartjs-2";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const initialData = {
  labels: [
    "Здоров'я, спорт",
    "Розвиток",
    "Відпочинок та подорожі",
    "Творчість та хоббі",
    "Оточення",
    "Сім'я",
    "Кар'єра",
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
        "rgba(280, 25, 64, 0.8)",
      ],
      borderWidth: 1,
    },
  ],
};

const Diagram = ({ data }) => {
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
  newData.datasets[0].data = percentData;
  const indexArray = newData.datasets[0].percentData;
  const res = dataArr.slice().sort((a, b) => a - b).slice(0, 2);
  

  return (
    <div className={styles.polarArea__wrapper}>
      <PolarArea data={newData} className={styles.diagram}/>
      <h2 className={styles.text}>Ви маєте попрацювати із {newData.labels[indexArray.indexOf(res[0])]}  і {newData.labels[indexArray.indexOf(res[1])]}</h2>
    </div>
  );
};

export default Diagram;
