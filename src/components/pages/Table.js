import { react, useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "./header.scss";
import { IconButton } from '@mui/material';


function TableData({ data }) {
    const [totalPages, setTotalPage] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        setTotalPage(Math.ceil(data?.length / 5))

    }, [data])

    const handlePageChange = (event, newpage) => {
        setCurrentPage(newpage)
    }
    const actionButton = () => {
        console.log('eit')
        return (
            <div className='icon-style'>
                <IconButton>
                    <EditIcon sx={{ color: '#1976D2' }} />
                </IconButton>
                <IconButton>
                    <DeleteIcon sx={{ color: 'red' }} />
                </IconButton>
            </div>
        )
    }

    const paginatedData = data.slice((currentPage - 1) * 5, currentPage * 5);

    return (
        <div className='display-data'>
            <TableContainer component={Paper}>
                {data.length === 0 ? (
                    <Typography variant="h6" align="center" sx={{ padding: 2 }}>
                        No tasks available
                    </Typography>
                ) : (
                    <Table sx={{ minWidth: 700 }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: '#1976D2' }}>
                            <TableRow>
                                <TableCell align="center" sx={{ color: 'white' }}>Index</TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}>Task Name</TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}>From  Time</TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}>To Time</TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}>From Date</TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}>To Date</TableCell>
                                <TableCell align="center" sx={{ color: 'white' }}>Action</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {paginatedData?.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{(currentPage - 1) * 5 + index + 1}</TableCell>
                                    <TableCell align="center">{row.taskName}</TableCell>
                                    <TableCell align="center">{row.fromTime}</TableCell>
                                    <TableCell align="center">{row.toTime}</TableCell>
                                    <TableCell align="center">{row.fromDate}</TableCell>
                                    <TableCell align="center">{row.toDate}</TableCell>
                                    <TableCell align="center">{actionButton()}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </TableContainer>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                showFirstButton
                showLastButton
                color='primary'
            />
        </div>
    );
}

export default TableData;
