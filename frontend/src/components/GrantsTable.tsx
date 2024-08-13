import React from 'react';
import { GrantWithUserGrant } from '../types/grant';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { createFormattedDate } from '../helpers';
import {
  tableContainerStyle,
  tableHeadStyle,
  tableCellHeadStyle,
  tableRowStyle,
  tableCellStyle
} from '../styles/tableStyles'

interface GrantTableProps {
    grants: GrantWithUserGrant[];
}

const GrantTable: React.FC<GrantTableProps> = ({ grants }) => {
    return (
      <TableContainer component={Paper} sx={tableContainerStyle}>
      <Table stickyHeader sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead sx={tableHeadStyle}>
          <TableRow>
            <TableCell sx={tableCellHeadStyle}>Foundation Name</TableCell>
            <TableCell align="right" sx={tableCellHeadStyle}>Grant Name</TableCell>
            <TableCell align="right" sx={tableCellHeadStyle}>Average Amount</TableCell>
            <TableCell align="right" sx={tableCellHeadStyle}>Status</TableCell>
            <TableCell align="right" sx={tableCellHeadStyle}>Deadline</TableCell>
            <TableCell align="right" sx={tableCellHeadStyle}>Match Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {grants.map((grantData) => {
            const { grant, status, matchDate } = grantData;
            return (
              <TableRow key={grant.id} sx={tableRowStyle}>
                <TableCell component="th" scope="row" sx={tableCellStyle}>
                  {grant.foundation}
                </TableCell>
                <TableCell align="right" sx={tableCellStyle}>{grant.name}</TableCell>
                <TableCell align="right" sx={tableCellStyle}>{grant.amount}</TableCell>
                <TableCell align="right" sx={tableCellStyle}>{status}</TableCell>
                <TableCell align="right" sx={tableCellStyle}>{createFormattedDate(grant.deadline)}</TableCell>
                <TableCell align="right" sx={tableCellStyle}>{matchDate ? createFormattedDate(matchDate) : ""}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default GrantTable;
