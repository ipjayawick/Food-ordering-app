import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./WalletPage.css";

const App = () => {
  const [tabValue, setTabValue] = useState(0);
  const [creditTotal, setCreditTotal] = useState(0);
  const [debitTotal, setDebitTotal] = useState(0);

  const table1Data = [
    {
      id: 1,
      column1: "18/9/2023",
      column2: "Sahana",
      column3: "Chicken Rice",
      column4: 300,
    },
    {
      id: 2,
      column1: "19/9/2023",
      column2: "Sahana",
      column3: "Chicken Half",
      column4: 260,
    },
    // Add more rows as needed
  ];

  const table2Data = [
    {
      id: 1,
      column1: "18/9/2023",
      column2: "Mac",
      column3: "Chicken Half",
      column4: 300,
    },
    {
      id: 2,
      column1: "19/9/2023",
      column2: "Sahana",
      column3: "Vege Half",
      column4: 200,
    },
    // Add more rows as needed
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    // Calculate the total credit and debit when the tables change
    let creditSum = 0;
    let debitSum = 0;

    table1Data.forEach((row) => {
      creditSum += row.column4;
    });

    table2Data.forEach((row) => {
      debitSum += row.column4;
    });

    setCreditTotal(creditSum);
    setDebitTotal(debitSum);
  }, [table1Data, table2Data]);

  return (
    <Container>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Credit" />
        <Tab label="Debit" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <Typography>Total Credit: {creditTotal} LKR</Typography>
        <br />
        <DisplayTable data={table1Data} />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Typography>Total Debit: {debitTotal} LKR</Typography>
        <br />
        <DisplayTable data={table2Data} />
      </TabPanel>
    </Container>
  );
};

const TabPanel = ({ value, index, children }) => (
  <div hidden={value !== index} role="tabpanel">
    {value === index && (
      <Box p={3}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);

const DisplayTable = ({ data }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Shop</TableCell>
          <TableCell>Meal</TableCell>
          <TableCell>Amount</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.column1}</TableCell>
            <TableCell>{row.column2}</TableCell>
            <TableCell>{row.column3}</TableCell>
            <TableCell>{row.column4} LKR</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default App;
