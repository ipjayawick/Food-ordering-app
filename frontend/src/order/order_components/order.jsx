import { Box} from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}



function createRow(date, shop, meal, amount) {
    return { date, shop, meal, amount};
}



const rows = [
    createRow('2022/09/20', 'sahana', 'Fried Rice', 300),
    createRow('2022/09/21', 'sahana', 'Fried Rice', 300),

];



function Session() {
    return (
        <Box sx={{ mb: 2 }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead sx={{ backgroundColor: 'gray' }}>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell align="right">Restaurant</TableCell>
                            <TableCell align="right">Meal</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.date}>
                                <TableCell>{row.date}</TableCell>
                                <TableCell align='right'>{row.shop}</TableCell>
                                <TableCell align="right">{row.meal}</TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                                
                            </TableRow>
                        ))}

                    
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    )
}

export default Session