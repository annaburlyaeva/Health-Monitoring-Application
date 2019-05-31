import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Data
function createData(date, value) {
  return { date, value };
}

const data = [
  createData("2018-01-31", 5), 
  createData("2018-02-01", 6), 
  createData("2018-02-02", 5), 
  createData("2018-02-03", 5), 
  createData("2018-02-04", 5.5), 
  createData("2018-02-05", 5), 
  createData("2018-02-06", 5), 
  createData("2018-02-07", 5), 
  createData("2018-02-08", 5), 
  createData("2018-02-09", 5.5), 
  createData("2018-02-10", 7), 
  createData("2018-02-11", 5.5), 
  createData("2018-02-12", 5), 
  createData("2018-02-13", 5), 
  createData("2018-02-14", 5), 
  createData("2018-02-15", 5), 
  createData("2018-02-16", 5), 
  createData("2018-02-17", 6), 
  createData("2018-02-18", 5), 
  createData("2018-02-19", 5), 
  createData("2018-02-20", 5), 
  createData("2018-02-21", 5), 
  createData("2018-02-22", 4.5), 
  createData("2018-02-23", 4.5), 
  createData("2018-02-24", 5), 
  createData("2018-02-25", 5), 
  createData("2018-02-26", 5), 
  createData("2018-02-27", 5), 
  createData("2018-02-28", 5),
];



export default function Chart() {
  return (
    <React.Fragment>
      <Title>Visualization</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="date">            
            {/* <Label angle={0} position="center" style={{ textAnchor: 'middle' }}>
              Date
            </Label> */}
          </XAxis> 
            
          <YAxis>
            <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
              Value
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="value" stroke="#556CD6" dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}