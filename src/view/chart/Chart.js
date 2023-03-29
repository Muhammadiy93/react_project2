import './Chart.css'
import './Barchart'
import { PieChart, Pie, Cell, ResponsiveContainer, } from 'recharts';
import Barchart from './Barchart';

const data = [
  { name: 'Psixolog ', value: 5764 },
  { name: 'UZI', value: 3647 },
  { name: 'Pediator ', value: 2142 },
  { name: 'Ginekolog', value: 953 },
  { name: 'EKG', value: 931 },
  { name: 'Masaj ', value: 895 },
  { name: 'Lor ', value: 845 },
  { name: 'Rengen  ', value: 785 }
];

const COLORS = ['#0CBD0F', '#ADFF00', '#FFE500', '#FF6D00', '#8000FF', '#3300FF', '#FE0000', '#00FFFF'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    
    </text>
  );
};



export default function Chart () {
 
    return (
        <>
            <div className='chart_wrapper'>
            <div className="row pie_row">
                <h2 className='dashboard_title'>Dashboard</h2>
                <h6 className='pie_title'>So’ngi 30 kun ichida foydalanilgan xizmatylar</h6>
                <div className="col-md-5 pie_chart">
                    <ResponsiveContainer>
                        <PieChart width={600} height={600}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                            width={700}
                        >
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        </PieChart>
                        
                    </ResponsiveContainer>
                </div>
                <div className="col-md-5 pie_pieces">
                    <div className="pie_p1 position-relative my-2">
                        <span className='pie_color1'></span>
                        <p className='pie_p_name1'>Psixolog 5764 marta</p>
                    </div>
                    <div className="pie_p2 position-relative my-2">
                        <span className='pie_color2'></span>
                        <p className='pie_p_name2'> UZI  3647 marta</p>
                    </div>
                    <div className="pie_p3 position-relative my-2">
                        <span className='pie_color3'></span>
                        <p className='pie_p_name3'> Pediator 2142 marta </p>
                    </div>
                    <div className="pie_p4 position-relative my-2">
                        <span className='pie_color4'></span>
                        <p className='pie_p_name4'> Ginekolog 953 marta </p>
                    </div>
                    <div className="pie_p5 position-relative my-2">
                        <span className='pie_color5'></span>
                        <p className='pie_p_name5'> EKG 931 marta</p>
                    </div>
                    <div className="pie_p6 position-relative my-2">
                        <span className='pie_color6'></span>
                        <p className='pie_p_name6'>Masaj  895 marta</p>
                    </div>
                    <div className="pie_p7 position-relative my-2">
                        <span className='pie_color7'></span>
                        <p className='pie_p_name7'> Lor 845 marta</p>
                    </div>
                    <div className="pie_p8 position-relative my-2">
                        <span className='pie_color8'></span>
                        <p className='pie_p_name8'>Rengen 785 marta</p>
                    </div>
                </div>
            </div>
            <div className='bar'>
                <Barchart/>
            </div>
            <h5 className='chart_bottom'>This web site MEDICAL.NET Copyright 2020-2021</h5>
          </div>
        </>

    );
  };
