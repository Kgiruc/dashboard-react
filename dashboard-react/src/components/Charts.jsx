import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts"

function Charts({produkt, setOpen}) {
    console.log(produkt)
  return (
    <div >
      <button onClick={() => setOpen()}>x</button>
    <LineChart width={900} height={500} data={produkt}>
      <Line type="monotone" dataKey="price" stroke="#2174f3" strokeWidth={3} />
      <Line type="monotone" dataKey="discountedPrice" stroke="#FFCA29" strokeWidth={3} />
      <CartesianGrid stroke="#ccc"/>
      <XAxis dataKey="title" fontSize={10} padding={{left: 20, right: 20}}/>
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
    </div>
  )
}

export default Charts