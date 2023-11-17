import { useEffect, useState } from 'react';
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { CollegeChart, ContainerWrapper, ListGroup} from '../styles/College.styled';
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const College = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetching Data From the data.json
    const fetchData = () => {
      fetch('data.json')
        .then((response) => response.json())
        .then((data) => {
          if (data.student && data.student.length !== undefined) {
            const statusData = {
              Present: [],
              'On Leave': [],
              Absent: [],
            };

            // Implementing student names based on their attendance status
            data.student.forEach((student) => {
              statusData[student.status].push(student.name);
            });

            setData({
              datasets: [
                {
                  data: Object.values(statusData).map((statusStudents) => statusStudents.length),
                  backgroundColor: ['#ff8800', '#00ff26df', '#ff0000df'],
                  hoverOffset: 5,
                  cutout: '70%',
                },
              ],
              labels: Object.keys(statusData),
              statusData: statusData,
            });
          } else {
            console.log("API response is not in the expected format.");
          }
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    };

    fetchData();
  }, []);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'College Attendance Status',
      },
      legend: {
        display: true,
        position: 'top',
        padding:0,
        labels: {
          usePointStyle: true,
        },
      },

    }
  };

  return (
    <CollegeChart >
      {
        data ? (
            // Rendering the Doughnut chart and attendance details
          <div>
            <ContainerWrapper style={{height:'25rem'}}>
            <Doughnut className='container p-2' options={chartOptions} data={data} />
            </ContainerWrapper>
            <ListGroup style={{paddingBottom:'5rem'}}>
              {data.labels.map((status) => (
                <div className='container text-center' key={status}>
                      <h3 className='bg-dark text-light rounded'>{status}</h3>
                    <ul className='list-group'>
                      {data.statusData[status].map((name) => (
                        <li className='list-group-item ' key={name}>{name}</li>
                        ))}
                    </ul>
                </div>
              ))}
            </ListGroup>
          </div >
        ) : (
          'Loading...'
        )}
    </CollegeChart >
  );
};

export default College;
