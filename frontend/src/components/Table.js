import {useState,useEffect} from "react"

export default function Table() {

    const [tableData, setTableData] = useState([])

    const fetchData = async() => {
        await fetch('https://api.fantasycalc.com/values/current?isDynasty=false&numQbs=1&numTeams=12&ppr=1')
        .then(res => res.json())
        .then(data => setTableData(data))
        .catch(err => console.log(err))
    }

    //always runs first
    useEffect( () => {
        fetchData()
    },[]
    )

    const TableContents = () => {
        return (
            <tbody>
                {
                    tableData?.map((item,index) => (
                        <tr>
                            <td value={item.overallRank}>{item.overallRank}</td>
                            <td value={item.player.name}>{item.player.name}</td>
                        </tr>
                    ))
                }
            </tbody>
        )
    }

    return (
        <>
            <table>
                <thead>
                    <th>Rank</th>
                    <th>Name</th>
                </thead>
                <TableContents/>
            </table>
        </>
    )
}