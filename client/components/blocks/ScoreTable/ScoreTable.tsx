import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  width: clamp(20rem, 50%, 60rem);
  font-size: clamp(15pt, 5vw, 20pt);
  border-collapse: collapse;
  padding: 15px;
`

const StyledTableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  text-align: center;
`

const StyledTableData = styled.td`
  padding: 15px;
`
interface ScoreTableProps {
  rows: {
    email: string
    bestScores: any
  }[]
}

// TODO: Design and atomic design
const ScoreTable: React.FC<ScoreTableProps> = ({ rows }): JSX.Element => {
  return (
    <StyledTable>
      <StyledTableRow>
        <th></th>
        <th>Email</th>
        <th>Score</th>
      </StyledTableRow>
      {rows.map((row, index) => (
        <StyledTableRow>
          <StyledTableData>{index + 1}</StyledTableData>
          <StyledTableData>{row.email}</StyledTableData>
          <StyledTableData>{row.bestScores.beginner}</StyledTableData>
        </StyledTableRow>
      ))}
    </StyledTable>
  )
}

export default ScoreTable
