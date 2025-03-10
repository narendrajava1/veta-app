import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

import React from 'react';
const DataTable = ({ data, columns }) => {
  // const [data, setdata] = useState(modal?.modal);
  // useEffect(() => {
  //   setdata(modal);
  // }, [modal])

  /* const data =
    /*{ id: 1, name: 'John Doe', age: 28, country: 'USA' },
    { id: 2, name: 'Jane Smith', age: 34, country: 'Canada' },
    { id: 3, name: 'Sam Green', age: 25, country: 'UK' },
    { id: 4, name: 'Emily Brown', age: 30, country: 'Australia' }
     modal;*/

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns?.map((columnName, index) => (
              <TableCell key={index}>{columnName}</TableCell>
            ))}
            {/* <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Country</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => (
            <TableRow key={index}>
              {columns.map((columnName, index) => (
                <TableCell key={index} component="th" scope="row">
                  {row[columnName]}
                </TableCell>
              ))}
              {/* <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.country}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DataTable;
