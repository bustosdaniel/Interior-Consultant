import { Avatar, Box, Stack, Typography } from "@mui/material";

export default function ImagesModernInterior() {
  return (
    <Box>
      <Box
        height={{ xs: "260px", md: "555px" }}
        width={{ xs: "350px", md: "737px" }}
        margin="0 auto"
        position="relative"
      >
        <img
          width="100%"
          height="100%"
          src="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg"
          alt=""
        />
      </Box>
      <Box
        position="absolute"
        top={{ xs: "570px", md: "710px" }}
        left={{ xs: "23px", md: "1240px" }}
        padding="15px"
        width="300px"
        margin="10px auto 0"
        bgcolor="#181719"
        boxShadow="-4px -5px 51px -1px rgba(0,0,0,0.57)"
      >
        <Stack flexDirection="row" alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            sx={{ width: 40, height: 40, margin: "10px" }}
          />
          <Box paddingLeft="10px">
            <Typography fontSize="14px" fontWeight="500" padding="0">
              Aliza Webber
            </Typography>
            <Typography
              fontSize="12px"
              fontWeight="500"
              padding="0"
              color="#828282"
            >
              Interior designer
            </Typography>
          </Box>
        </Stack>
        <Box marginTop="15px" width="180px" paddingLeft="12px">
          <Typography fontSize="18px" fontWeight="700">
            Designed in 2020 by Aliza Webber
          </Typography>
        </Box>
      </Box>
      {/* <Box marginTop="198px">
        <Typography
          textAlign="center"
          color="#A9A9A9"
          fontSize="14px"
          fontWeight="500"
        >
          created by
          <a
            style={{ fontWeight: 700 }}
            color="#A9A9A9"
            href="https://github.com/bustosdaniel?tab=repositories"
          >
            <b> Neifer Bustos </b>
          </a>
          - devChallenges.io
        </Typography>
      </Box> */}
    </Box>
  );
}
