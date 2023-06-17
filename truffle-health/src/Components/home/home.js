import React from 'react'
import './home.css'

const home = () => {
  return (
    <div>
    <h1>Summary of the bills</h1>

<table>
  <tr>
    <th>Bill No.</th>
    <th>Link to the Bill</th>
    <th>Submitted Date</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$80</td>
  </tr>
</table>
<button>View</button>
<button>Edit</button>
    </div>
  )
}

export default home