import {useState,useEffect} from "react"
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid

export default function Table() {

    const [tableData, setTableData] = useState([])

    const fetchData = async() => {
        await fetch('https://api.fantasycalc.com/values/current?isDynasty=false&numQbs=1&numTeams=12&ppr=1')
        .then(res => res.json())
        .then(data => setTableData(data))
        .catch(err => console.log(err))
    }

    const [colDefs, setColDefs] = useState([
        { headerName:"Rank", valueGetter: "node.rowIndex + 1", resizable: false, width: 75, sortable: false },
        { headerName: "Name", field: "player.name", resizable: false, sortable: false },
        { headerName: "", field: "player.position", resizable: false, width: 75, sortable: false },
        { headerName: "", field: "player.maybeTeam", resizable: false, width: 75, sortable: false },
      ]);

    //always runs first
    useEffect( () => {
        fetchData()
    },[]
    )

    // Function to refresh cells after being dragged to reflect new rank
    function updateRank(e){
        e.api.refreshCells();
    }

    return (
        // wrapping container with theme & size
        <div
         className="ag-theme-quartz-dark" // applying the Data Grid theme
         style={{ height: 500 }} // the Data Grid will fill the size of the parent container
        >
          <AgGridReact
              rowData={tableData}
              columnDefs={colDefs}
              rowDragManaged={true}
              rowDragEntireRow={true}
              rowDragText={()=>{return '';}}
              onRowDragEnd={updateRank} //refresh rank column after player has been moved
          />
        </div>
       )
}