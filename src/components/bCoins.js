import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box,Typography } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const BCoins = ({bCoins}) => {
    const classes = useStyles();
    return (
    
        <Box width="50%" >
            <Typography align="center" style={{fontWeight:"bolder", fontSize:"20px"}}>Binance Coin Conversion List</Typography>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:"bolder"}}>Conversion Between</TableCell>
            <TableCell align="right" style={{fontWeight:"bolder"}}>Conversion Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bCoins.map((bCoin) => (
            <TableRow key={bCoin.symbol}>
              <TableCell component="th" scope="row">
                {bCoin.symbol}
              </TableCell>
              <TableCell align="right">{bCoin.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></Box>
    
    )
};

export default BCoins