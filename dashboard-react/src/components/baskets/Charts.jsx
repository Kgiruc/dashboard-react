import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"

function Charts({produkt, setOpen}) {
    console.log(produkt)
  return (
    <div className="dota">
      <button onClick={() => setOpen()}>wróć</button>
      <ResponsiveContainer>
      <LineChart  data={produkt}>
        <Line type="monotone" dataKey="price" stroke="#2174f3" strokeWidth={3} />
        <Line type="monotone" dataKey="discountedPrice" stroke="#FFCA29" strokeWidth={3} />
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