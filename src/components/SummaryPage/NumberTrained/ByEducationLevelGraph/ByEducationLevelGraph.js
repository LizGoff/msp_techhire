import React from 'react';
import { Bar } from 'react-chartjs-2';

const EducationGraph = (props) => {

        return (
            <div className="graphDisplaySummaryPage">
                <Bar
                    data={{labels: ['High School', 'Some College', 'Associates', 'Bachelors', 'Graduate Plus'],
                    datasets: [
                        {
                            label: 'By Education Level',
                            data: [props.trainingData.highSchool, props.trainingData.someCollege, props.trainingData.associates, 
                                   props.trainingData.bachelors, props.trainingData.graduatePlus],
                            backgroundColor: 'rgba(176, 189, 99, 0.6)'
                        }
                    ],}}
                    options={{
                        title: {
                            display: true,
                            text: 'Education Level',
                            fontSize: 25,
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                        },
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                }
                            }]
                        }
                    }}
                />
            </div>
        )
}

export default EducationGraph;