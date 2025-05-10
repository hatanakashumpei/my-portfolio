import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Typography, Paper, Chip } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(year: string, month: string, qualification: string, category: string) {
  return { year, month, qualification, category };
}

const rows = [
  createData('2020', '8', '普通自動車第一種免許', 'その他'),
  createData('2024', '7', '応用情報技術者試験', '情報系'),
  createData('2024', '7', '一般社団法人日本ディープラーニング協会 G検定', 'AI'),
  createData('2024', '7', 'AWS Certified Cloud Practitioner', 'Cloud'),
  createData('2024', '7', 'Google Cloud Certified - Cloud Digital Leader', 'Cloud'),
  createData('2024', '8', 'AWS Certified Solutions Architect - Associate', 'Cloud'),
  createData('2024', '9', '統計検定2級', '情報系'),
  createData('2024', '9', 'Microsoft Certified: Azure Fundamentals', 'Cloud'),
  createData('2024', '10', 'Google Cloud Certified - Associate Cloud Engineer', 'Cloud'),
  createData('2024', '12', '一般社団法人日本ディープラーニング協会 Generative AI Test', 'AI'),
  createData('2024', '12', 'AWS Certified AI Practitioner', 'AI'),
  createData('2025', '4', 'Databricks Certified Data Engineer Associate', '情報系'),
];

// 最新順（年と月の降順）で資格を並び替え
const sortedRows = rows.sort((a, b) => {
  const yearDiff = parseInt(b.year) - parseInt(a.year);
  if (yearDiff === 0) {
    return parseInt(b.month) - parseInt(a.month);
  }
  return yearDiff;
});

const Certifications: React.FC = () => {
  return (
    <Container sx={{ paddingY: '40px' }}>
      <Typography variant="h4" gutterBottom>
        資格
      </Typography>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="certifications table">
            <TableHead>
              <TableRow>
                <StyledTableCell>年</StyledTableCell>
                <StyledTableCell>月</StyledTableCell>
                <StyledTableCell>資格</StyledTableCell>
                <StyledTableCell>カテゴリ</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedRows.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {row.year}
                  </StyledTableCell>
                  <StyledTableCell>{row.month}</StyledTableCell>
                  <StyledTableCell>{row.qualification}</StyledTableCell>
                  <StyledTableCell>
                    <Chip
                      label={row.category}
                      color={
                        row.category === '情報系'
                          ? 'primary'
                          : row.category === 'Cloud'
                          ? 'success'
                          : row.category === 'AI'
                          ? 'secondary'
                          : row.category === 'Statistics'
                          ? 'warning'
                          : 'default'
                      }
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default Certifications;