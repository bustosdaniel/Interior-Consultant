import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ImagesModernInterior from "../imageInterior";

export default function ModernInterior() {
  return (
    <Box marginBottom="40px">
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent={{ md: "space-between" }}
      >
        <Box width="100%">
          <Typography
            fontSize={{ xs: "36px", md: "48px" }}
            fontWeight="500"
            marginBottom="25px"
          >
            Modern interior
          </Typography>
          <Typography
            fontSize={{ xs: "14px", md: "24px" }}
            fontWeight="400"
            marginBottom="25px"
            width={{ xs: "190px", md: "410px" }}
          >
            A full-Service residential & commercial interior design and staging
            company offering professional organizing & eco-services.
          </Typography>
          <Button
            sx={{
              color: "#FFF",
              cursor: "pointer",
              ":hover": "#efefef",
              paddingX: "0",
              fontSize: { xs: "14px", md: "18px" },
              fontWeight: "700",
              textTransform: "initial",
            }}
            endIcon={<ArrowRightAltIcon />}
          >
            Read More
          </Button>
        </Box>
        <ImagesModernInterior />
      </Stack>
    </Box>
  );
}
