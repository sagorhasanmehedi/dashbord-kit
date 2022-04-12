import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AcountInfo, Tablecell, TableTitle } from "../../MuStyled/MuStyled";

const InvoiceDicsription = () => {
  return (
    <Box sx={{ marginTop: "64px" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TableTitle sx={{ textAlign: "left" }}>DESCRIPTION</TableTitle>
        </Grid>
        <Grid item xs={2}>
          <TableTitle>HOURS</TableTitle>
        </Grid>
        <Grid item xs={2}>
          <TableTitle>UNITS</TableTitle>
        </Grid>
        <Grid item xs={2}>
          <TableTitle>AMOUNT</TableTitle>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ borderBottom: "1px solid #E7E8EC;", marginTop: "28px" }}
      >
        <Grid item xs={6}>
          <Tablecell sx={{ textAlign: "left" }}>Castle Black attack</Tablecell>
        </Grid>
        <Grid item xs={2}>
          <Tablecell sx={{ textAlign: "left" }}>60</Tablecell>
        </Grid>
        <Grid item xs={2}>
          <Tablecell></Tablecell>
        </Grid>
        <Grid item xs={2}>
          <Tablecell>900,00 USD</Tablecell>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ borderBottom: "1px solid #E7E8EC;", marginTop: "8px" }}
      >
        <Grid item xs={6}>
          <Tablecell sx={{ textAlign: "left" }}>Dragon defence</Tablecell>
        </Grid>
        <Grid item xs={2}>
          <Tablecell sx={{ textAlign: "left" }}>20</Tablecell>
        </Grid>
        <Grid item xs={2}>
          <Tablecell>15 u.</Tablecell>
        </Grid>
        <Grid item xs={2}>
          <Tablecell>240,00 USD</Tablecell>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ borderBottom: "1px solid #E7E8EC;", marginTop: "9px" }}
      >
        <Grid item xs={6}></Grid>
        <Grid item xs={2}>
          <TableTitle>SUBTOTAL</TableTitle>
        </Grid>
        <Grid item xs={2}>
          <Tablecell>12 u.</Tablecell>
        </Grid>
        <Grid item xs={2}>
          <Tablecell>1140,00 USD</Tablecell>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ borderBottom: "1px solid #E7E8EC;", marginTop: "8px" }}
      >
        <Grid item xs={6}></Grid>
        <Grid item xs={2}>
          <TableTitle>DISCOUNT 5%</TableTitle>
        </Grid>
        <Grid item xs={2}>
          <Tablecell></Tablecell>
        </Grid>
        <Grid item xs={2}>
          <Tablecell>57,00 USD</Tablecell>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: "8px" }}>
        <Grid item xs={6}></Grid>
        <Grid item xs={2}>
          <Tablecell>TOTAL</Tablecell>
        </Grid>
        <Grid item xs={2}>
          <Tablecell></Tablecell>
        </Grid>
        <Grid item xs={2}>
          <TableTitle>1083,00 USD</TableTitle>
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: "39px" }}>
        <Grid md={6}></Grid>
        <Grid md={6}>
          <Typography sx={{ fontSize: "10px", textAlign: "left" }}>
            ACCOUNT DATA
          </Typography>

          <AcountInfo>
            Transfer the amount to the business account below. Please
          </AcountInfo>
          <AcountInfo> include invoice number on your check.</AcountInfo>
          <AcountInfo>BANK: PENTOS</AcountInfo>
          <AcountInfo>IBAN: ADSA-2343-2332-23234</AcountInfo>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InvoiceDicsription;
