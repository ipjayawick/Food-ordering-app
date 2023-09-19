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
      column2: 200,
      column3: "Miral",
    },
    {
      id: 2,
      column1: "18/9/2023",
      column2: 260,
      column3: "Buddhima",
    },
    // Add more rows as needed
  ];

  const table2Data = [
    {
      id: 1,
      column1: "18/9/2023",
      column2: 300,
      column3: "IP",
    },
    {
      id: 2,
      column1: "19/9/2023",
      column2: 200,
      column3: "Ravija",
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
      creditSum += row.column2;
    });

    table2Data.forEach((row) => {
      debitSum += row.column2;
    });

    setCreditTotal(creditSum);
    setDebitTotal(debitSum);
  }, [table1Data, table2Data]);

  return (
    <Container>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        sx={{ display: "flex" }}
      >
        <Tab label="Credit" style={{ minWidth: "565px" }} />
        <Tab label="Debit" style={{ minWidth: "565px" }} />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <Typography
          variant="h4"
          sx={{
            backgroundColor: "gray",
            minWidth: 700,
            minHeight: 50,
            textAlign: "center",
          }}
        >
          Total Credit: {creditTotal} LKR
        </Typography>
        <br />
        <DisplayTable data={table1Data} who={"TO WHO"} />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <Typography
          variant="h4"
          sx={{
            backgroundColor: "gray",
            minWidth: 700,
            minHeight: 50,
            textAlign: "center",
          }}
        >
          Total Debit: {debitTotal} LKR
        </Typography>
        <br />
        <DisplayTable data={table2Data} who={"FOR WHO"} />
      </TabPanel>
    </Container>
  );
};

const TabPanel = ({ value, index, children }) => (
  <div hidden={value !== index} role="tabpanel">
    {value === index && (
      <Box p={3}>
        <div>{children}</div>
      </Box>
    )}
  </div>
);

const DisplayTable = ({ data, who }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>DATE</TableCell>
          <TableCell>AMOUNT</TableCell>
          <TableCell>{who}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.column1}</TableCell>
            <TableCell>{row.column2} LKR</TableCell>
            <TableCell>{row.column3}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default App;
