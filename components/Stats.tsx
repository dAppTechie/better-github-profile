import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Stats = ({ langData }: { langData: any }) => {
  const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Top Languages Used',
      },
    },
    scales: {
      y: {
        ticks: {
          autoSkip: false,
          beginAtZero: true,
        },
      },
    },
  };

  let newLabels = langData.filter(function (obj: any) {
    return obj.value >= 3;
  });

  const labels = newLabels.map((lang: any) => lang.label);
  const dataSet = langData.map((lang: any) => lang.value);

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: dataSet,
        borderColor: 'rgb(255, 127, 80)',
        backgroundColor: 'rgba(255, 127, 80, 0.5)',
      },
    ],
  };

  return (
    <div className="w- mt-5 flex w-11/12 justify-center md:w-1/3">
      <Bar options={options} data={data} />
    </div>
  );
};
export default Stats;
