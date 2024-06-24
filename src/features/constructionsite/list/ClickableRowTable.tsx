import React, { useState, MouseEvent } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Menu,
  MenuItem,
} from '@mui/material';

interface RowData {
  id: number;
  name: string;
  detail: string;
}

const ClickableRowTable: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRow, setSelectedRow] = useState<null | RowData>(null);

  const handleRowClick = (event: MouseEvent<HTMLTableRowElement>, row: RowData) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const rows: RowData[] = [
    { id: 1, name: 'Row 1', detail: 'Detail 1' },
    { id: 2, name: 'Row 2', detail: 'Detail 2' },
    { id: 3, name: 'Row 3', detail: 'Detail 3' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Detail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} onClick={(event) => handleRowClick(event, row)}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.detail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Xem chi tiết</MenuItem>
        <MenuItem onClick={handleClose}>Nhật ký</MenuItem>
      </Menu>
    </TableContainer>
  );
};

export default ClickableRowTable;