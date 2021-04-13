import React from 'react'
import styled from 'styled-components'
import { object, shape, string, arrayOf } from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const useStyles = makeStyles({
  paper: {
    backgroundColor: 'black',
  },
  table: {
    minWidth: 450,
    maxWidth: 650,
    margin: 'auto',
  },
  tableRow: {
    fontSize: '45pt',
  },
})

const ScoreTable = ({ rows, nameLevelKey }) => {
  const classes = useStyles()

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <StyledTableCell></StyledTableCell>
          <StyledTableCell align="center">Email</StyledTableCell>
          <StyledTableCell align="center">Score</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow className={classes.tableRow} key={index + 1}>
            <StyledTableCell component="th" scope="row">
              {index + 1}
            </StyledTableCell>
            <StyledTableCell align="center">{row.email}</StyledTableCell>
            <StyledTableCell align="center">
              {row.bestScores[nameLevelKey]}
            </StyledTableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

const StyledTableCell = styled(TableCell)`
  color: white !important;
  font-size: 15pt !important;
`

ScoreTable.prototypes = {
  rows: arrayOf(
    shape({
      email: string.isRequired,
      bestScores: object.isRequired,
    })
  ).isRequired,
  nameLevelKey: string.isRequired,
}

export default ScoreTable
