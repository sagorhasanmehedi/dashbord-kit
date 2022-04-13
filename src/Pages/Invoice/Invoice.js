import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import NavigationIcon from "@mui/icons-material/Navigation";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { Box } from "@mui/system";
import React from "react";
import SubNav from "../../Components/SubNav/SubNav";
import {
  InvoiceButtonStyle,
  InvoiceTitle,
  Mockup,
  NoteStyle,
  Recpient,
} from "../../MuStyled/MuStyled";
import logoLeft from "../../Static/Image/logo-left.png";
import logoRight from "../../Static/Image/logo-right.png";
import footer from "../../Static/Image/footer.png";
import sidebar from "../../Static/Image/side-bar.png";
import { Typography } from "@mui/material";
import InvoiceDicsription from "../../Components/InvoiceDicsription/InvoiceDicsription";
const Invoice = () => {
  return (
    <>
      <SubNav content={"Invoice"} />

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#1F2229",
        }}
      >
        <div
          style={{
            width: "595px",
            hight: "842px",
            backgroundColor: "#FFFFFF",

            paddingTop: "16px",
            paddingLeft: " 42px",
            paddingRight: " 42px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img src={logoLeft} alt="" srcset="" />
            <img src={logoRight} alt="" srcset="" />
            <Box sx={{ display: "flex", gap: "21px" }}>
              <Box>
                <InvoiceTitle>invoice no.</InvoiceTitle>
                <InvoiceTitle sx={{ fontWeight: "700" }}>001/2020</InvoiceTitle>
              </Box>
              <Box>
                <InvoiceTitle>Invoice date </InvoiceTitle>
                <InvoiceTitle sx={{ fontWeight: "700" }}>
                  January 1, 2020
                </InvoiceTitle>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              marginTop: "50px",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Recpient>RECIPIENT</Recpient>
              <Recpient> JOHN SNOW</Recpient>
              <Recpient>2345 Fire Island</Recpient>
              <Recpient>6789 Winterfell, N</Recpient>
              <Recpient> VAT no.: 0987654</Recpient>
              <Recpient sx={{ marginTop: "10px" }}>
                @ company.mail@gmail.com{" "}
              </Recpient>
              <Recpient>m +386 714 505 8385</Recpient>
            </Box>
            <Box>
              <Mockup> MOCKUP</Mockup>
              <Mockup>7896 Clouds Way </Mockup>
              <Mockup> 98237 Braavos, SE</Mockup>
              <Mockup>VAT no.: 2344234</Mockup>
              <Mockup sx={{ marginTop: "14px" }}>your.mail@gmail.com</Mockup>
              <Mockup>m +00 000 000 000</Mockup>
            </Box>
          </Box>

          <InvoiceDicsription />

          <Box sx={{ textAlign: "left" }}>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: "400",
                color: "#1F2229",
                marginTop: "32px",
                marginBottom: "16px",
              }}
            >
              NOTES
            </Typography>
            <NoteStyle>
              Arya hated them making fun of Needle. "It's castle-forged steel,
              you stupid," she snapped, turning in the saddle to glare at them,
              "and you better shut your mouth."
            </NoteStyle>
            <NoteStyle sx={{ margin: " 9px 0" }}>
              The orphan boys hooted. "Where'd you get a blade like that,
              Lumpyface?" Hot Pie wanted to know.
            </NoteStyle>
            <NoteStyle>Thank you and have a nice day.</NoteStyle>
          </Box>
          <img
            style={{ width: "500px", marginTop: "39px" }}
            src={footer}
            alt=""
          />
        </div>
        <Box>
          <Box sx={{ display: "flex" }}>
            <InvoiceButtonStyle>
              <ArrowDownwardIcon />
            </InvoiceButtonStyle>
            <InvoiceButtonStyle>
              <NavigationIcon />
            </InvoiceButtonStyle>
            <InvoiceButtonStyle>
              <LocalPrintshopIcon />
            </InvoiceButtonStyle>
          </Box>
        </Box>
      </Box> */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#1F2229",
        }}
      >
        <div
          style={{
            width: "595px",

            backgroundColor: "#FFFFFF",
            backgroundImage: `url(${sidebar})`,
            paddingTop: "10px",
            paddingLeft: " 58px",
            paddingRight: " 42px",

            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "18px",
                alignItems: "center",
              }}
            >
              <img src={logoLeft} alt="" srcset="" />
              <img src={logoRight} alt="" srcset="" />
            </Box>
            <Box sx={{ display: "flex", gap: "21px" }}>
              <Box>
                <InvoiceTitle>invoice no.</InvoiceTitle>
                <InvoiceTitle sx={{ fontWeight: "bold" }}>
                  001/2020
                </InvoiceTitle>
              </Box>
              <Box>
                <InvoiceTitle>Invoice date </InvoiceTitle>
                <InvoiceTitle sx={{ fontWeight: "bold" }}>
                  January 1, 2020
                </InvoiceTitle>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              marginTop: "43px",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Recpient sx={{ marginBottom: "2px" }}>RECIPIENT</Recpient>
              <Recpient> JOHN SNOW</Recpient>
              <Recpient>2345 Fire Island</Recpient>
              <Recpient>6789 Winterfell, N</Recpient>
              <Recpient> VAT no.: 0987654</Recpient>
              <Recpient sx={{ marginTop: "10px" }}>
                @ company.mail@gmail.com{" "}
              </Recpient>
              <Recpient>m +386 714 505 8385</Recpient>
            </Box>
            <Box>
              <Mockup sx={{ marginBottom: "2px" }}> MOCKUP</Mockup>
              <Mockup>7896 Clouds Way </Mockup>
              <Mockup> 98237 Braavos, SE</Mockup>
              <Mockup>VAT no.: 2344234</Mockup>
              <Mockup sx={{ marginTop: "10px" }}>your.mail@gmail.com</Mockup>
              <Mockup>m +00 000 000 000</Mockup>
            </Box>
          </Box>

          <InvoiceDicsription />

          <Box sx={{ textAlign: "left" }}>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: "400",
                color: "#1F2229",
                marginTop: "4px",
                marginBottom: "10px",
              }}
            >
              NOTES
            </Typography>
            <NoteStyle>
              Arya hated them making fun of Needle. "It's castle-forged steel,
              you stupid," she snapped, turning in the saddle to glare at them,
              "and you better shut your mouth."
            </NoteStyle>
            <NoteStyle sx={{ margin: " 7px 0" }}>
              The orphan boys hooted. "Where'd you get a blade like that,
              Lumpyface?" Hot Pie wanted to know.
            </NoteStyle>
            <NoteStyle>Thank you and have a nice day.</NoteStyle>
          </Box>
          <img
            style={{ width: "500px", marginTop: "29px" }}
            src={footer}
            alt=""
          />
        </div>
        <Box>
          <Box sx={{ display: "flex" }}>
            <InvoiceButtonStyle>
              <ArrowDownwardIcon />
            </InvoiceButtonStyle>
            <InvoiceButtonStyle>
              <NavigationIcon />
            </InvoiceButtonStyle>
            <InvoiceButtonStyle>
              <LocalPrintshopIcon />
            </InvoiceButtonStyle>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Invoice;
