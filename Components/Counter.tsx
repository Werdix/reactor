import { useState } from "react"
const o = {a:5,b:false,c:6}
const poleA = [1,2]
const [a,b] = poleA



const pole = [1,2,3]
const clone = [...pole,4]

export const Counter:React.FC = () =>{
    const x = useState(1)
    const cislo = x[0];
    const setCislo = x[1]
    return<>
    <h1>{cislo}</h1>
    <button onClick={() => setCislo(previous => previous+1)}>+</button>
    </>
}