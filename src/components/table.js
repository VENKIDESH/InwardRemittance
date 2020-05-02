import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const Tables = (props) => {
  const classes = useStyles();
  if(((props.btcInr.last-( props.usdtBtc.last*props.usdtInr.rate))/( props.usdtBtc.last*props.usdtInr.rate)*100)>6){alert("Yo its the best time to take some BTc to India")}
  if(((props.btcInr.last-( props.usdtBtc.last*props.usdtInr.rate))/( props.usdtBtc.last*props.usdtInr.rate)*100)<1){alert("Yo its the best time to take some BTc from India")}
  if(((props.ethInr.last-( props.usdtEth.last*props.usdtInr.rate))/( props.usdtEth.last*props.usdtInr.rate)*100)>6){alert("Yo its the best time to take some ETH to India")}
  if(((props.ethInr.last-( props.usdtEth.last*props.usdtInr.rate))/( props.usdtEth.last*props.usdtInr.rate)*100)<1){alert("Yo its the best time to take some ETH from India")}
  if(((props.xrpInr.last-( props.usdtXrp.last*props.usdtInr.rate))/( props.usdtXrp.last*props.usdtInr.rate)*100)>6){alert("Yo its the best time to take some XRP to India")}
  if(((props.xrpInr.last-( props.usdtXrp.last*props.usdtInr.rate))/( props.usdtXrp.last*props.usdtInr.rate)*100)<1){alert("Yo its the best time to take some XRP from India")}
  if(((props.ltcInr.last-( props.usdtLtc.last*props.usdtInr.rate))/( props.usdtLtc.last*props.usdtInr.rate)*100)>6){alert("Yo its the best time to take some LTC to India")}
  if(((props.ltcInr.last-( props.usdtLtc.last*props.usdtInr.rate))/( props.usdtLtc.last*props.usdtInr.rate)*100)<1){alert("Yo its the best time to take some LTC from India")}
  return (
    <Box width="100%">
      <Typography
        align="center"
        style={{ fontWeight: "bolder", fontSize: "20px" }}
      >
        CEX vs wazirX Conversion List
      </Typography>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="medium"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: "bolder" }}>
                Conversion Between
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bolder" }}>
                CEX.io (USD)
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bolder" }}>
                CEX.io (Inr)
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bolder" }}>
                wazirX (Inr)
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bolder" }}>
                Conversion Profit
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bolder" }}>
                Profit Percentage
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="1">
              <TableCell component="th" scope="row" align="center">
                USD > BTC > Inr
              </TableCell>
              <TableCell component="th" scope="row" align="center">
              {props.usdtBtc.last}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
              {(props.usdtBtc.last*props.usdtInr.rate).toFixed(3)}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
              {props.btcInr.last}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {(props.btcInr.last-( props.usdtBtc.last*props.usdtInr.rate)).toFixed(3)}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
              {((props.btcInr.last-( props.usdtBtc.last*props.usdtInr.rate))/( props.usdtBtc.last*props.usdtInr.rate)*100).toFixed(3)}%
              </TableCell>
            </TableRow>

            <TableRow key="2">
              <TableCell component="th" scope="row" align="center">
                USD > ETH > Inr
              </TableCell>
              <TableCell component="th" scope="row" align="center">
              {props.usdtEth.last}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
              {(props.usdtEth.last*props.usdtInr.rate).toFixed(3)}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
              {props.ethInr.last}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {(props.ethInr.last-( props.usdtEth.last*props.usdtInr.rate)).toFixed(3)}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
              {((props.ethInr.last-( props.usdtEth.last*props.usdtInr.rate))/( props.usdtEth.last*props.usdtInr.rate)*100).toFixed(3)}%
              </TableCell>
            </TableRow>

            <TableRow key="3">
              <TableCell component="th" scope="row" align="center">
                USD > XRP > Inr
              </TableCell>
              <TableCell component="th" scope="row" align="center">
              {props.usdtXrp.last}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
              {(props.usdtXrp.last*props.usdtInr.rate).toFixed(3)}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
              {props.xrpInr.last}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {(props.xrpInr.last-( props.usdtXrp.last*props.usdtInr.rate)).toFixed(3)}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
              {((props.xrpInr.last-( props.usdtXrp.last*props.usdtInr.rate))/( props.usdtXrp.last*props.usdtInr.rate)*100).toFixed(3)}%
              </TableCell>
            </TableRow>

            <TableRow key="4">
              <TableCell component="th" scope="row" align="center">
                USD > LTC > Inr
              </TableCell>
              <TableCell component="th" scope="row" align="center">
              {props.usdtLtc.last}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
              {(props.usdtLtc.last*props.usdtInr.rate).toFixed(3)}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
              {props.ltcInr.last}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {(props.ltcInr.last-( props.usdtLtc.last*props.usdtInr.rate)).toFixed(3)}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
              {((props.ltcInr.last-( props.usdtLtc.last*props.usdtInr.rate))/( props.usdtLtc.last*props.usdtInr.rate)*100).toFixed(3)}%
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Tables;
