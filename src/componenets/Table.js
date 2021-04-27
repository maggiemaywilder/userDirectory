import { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import mock_data from './mock-data.json';

// need import react and useMemo
// need style sheet?


const Table = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => mock_data, [])
  
    const tableInstance = useTable({
      columns,
      data
    }) 
  
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance 
  
      return (
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))
                  }
              </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                          return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                  )
                })}
            </tbody>
          </table>
      )
  }

  export default Table;
  