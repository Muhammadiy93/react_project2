import './Barchart.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,Cell, ResponsiveContainer} from 'recharts';
import UserCost from '../../user.json'
import { useEffect } from 'react';

export default function Barchart () {
    const data = [
      {
        name: 'Psixolog',
        som: 1,
        fill: '#0CBD0F'
      },
      {
        name: 'UZI',
        som: 0,
        fill: '#ADFF00'
      },
      {
        name: 'Pediator',
        som: 0,
        fill: '#FFE500'
      },
      {
        name: 'Ginekolog',
        som: 0,
        fill:  '#FF6D00'
      },
      {
        name: 'EKG',
        som: 0 ,
        fill:  '#8000FF'
      },
  ];

  useEffect(()=>{
    const hisob = () => {
        for(let i=0; i<UserCost.length;i++){
            if(UserCost[i].service===1){
                data[0].som+=UserCost[i].price
            }
            if(UserCost[i].service===2){
                data[1].som+=UserCost[i].price
            }
            if(UserCost[i].service===3){
                data[2].som+=UserCost[i].price
            }
            if(UserCost[i].service===4){
                data[3].som+=UserCost[i].price
            }
            if(UserCost[i].service===5){
                data[4].som+=UserCost[i].price
            }
        }
    }
    hisob()
},[])


console.log(data)

    return (
     <>
        <div className='row bar_wrapper'>
        <h6 className='bar_title'>So’ngi 6 oylik daromat</h6>
          <div className='bar_container'>
          <div className="row bar_row">
            
              <ResponsiveContainer >
                <BarChart
                  width={1000}
                  height={700}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="name" padding={{ left: 90, right: 90 }}  />
                  <YAxis demo={[0, 'dataMax + 1000']} tickCount={8}  />
                
                  <Tooltip cursor={{fill: 'transparent'}}/>
                  <Bar dataKey="som"
                    fill="#82ca9d"
                    radius={[10, 10, 0, 0]} 
                    strokeWidth={1}/>

                    
                </BarChart>
                </ResponsiveContainer>
            
        
          </div>
          </div>
            <div className='row bar_row2'>
              
            <div className="bar_pieces">
            <div className="row">
                    {
                        data.map((item,index)=> {
                            return(
                                <div className="my-2 col-md-5" key={index}>
                                    <span className='bar_color1'></span>
                                    <p className=''>{item.name}- {item.som} so’m</p>
                                </div>
                            )
                        })
                    }
                    </div>
                  </div>
            </div>
        </div>
        

      
     </>
    );
  }

