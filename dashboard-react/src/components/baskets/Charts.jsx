import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"
import back from "../../assets/icons/back.png"

function Charts({produkt, setOpen}) {
  return (
    <div className="chart__container">
      <button className="back__button" onClick={() => setOpen()}><img src={back} alt="wróć"/></button>
      <ResponsiveContainer width="100%" aspect={0.9} >
      <LineChart  data={produkt} margin={{bottom: 50, left: 40 }} >
        <Line  dataKey="price" stroke="#000" strokeWidth={3} />
        <Line  dataKey="discountedPrice" stroke="#700899" strokeWidth={3} />
        <CartesianGrid stroke="#ccc"/>
        <XAxis dataKey="title" interval={0} angle={-20} dy={16} fontSize={10} textAnchor="end" padding={{left: 20, right: 20}}/>
        <YAxis  fontSize={10}/>
        <Tooltip />
        <Legend verticalAlign="top" height={36}/>
      </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Charts