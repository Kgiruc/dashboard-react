import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"
import back from "../../assets/icons/back.png"

function Charts({produkt, setOpen}) {
    console.log(produkt)
  return (
    <div className="chart__container">
      <button className="back__button" onClick={() => setOpen()}><img src={back} alt="wróć"/></button>
      <ResponsiveContainer>
      <LineChart  data={produkt}>
        <Line type="monotone" dataKey="price" stroke="#000" strokeWidth={3} />
        <Line type="monotone" dataKey="discountedPrice" stroke="#700899" strokeWidth={3} />
        <CartesianGrid stroke="#ccc"/>
        <XAxis dataKey="title" fontSize={10} padding={{left: 20, right: 20}}/>
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Charts