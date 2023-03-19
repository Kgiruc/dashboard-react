import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts"

function Charts({produkt}) {
    console.log(produkt)
  return (
    <LineChart width={600} height={300} data={produkt}>
      <Line type="monotone" dataKey="price" stroke="#2174f3" strokeWidth={3} />
      <Line type="monotone" dataKey="discountedPrice" stroke="#FFCA29" strokeWidth={3} />
      <CartesianGrid stroke="#ccc"/>
      <XAxis dataKey="title" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  )
}

export default Charts