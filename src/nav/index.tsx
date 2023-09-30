import {
  Box,
  Dialog,
  IconButton,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box marginBottom={{ xs: "40px", md: "171px" }}>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography borderColor="#FFF" border="1px solid #FFF" padding="10px">
          This Interior
        </Typography>
        <IconButton
          onClick={handleOpen}
          sx={{ color: "#FFF", display: { xs: "inline-block", md: "none" } }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Stack
          display={{ xs: "none", md: "flex" }}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          height="80%"
          gap="80px"
        >
          <Typography fontSize="18px" fontWeight="500">
            Home
          </Typography>
          <Typography fontSize="18px" fontWeight="500">
            Collection
          </Typography>
          <Typography fontSize="18px" fontWeight="500">
            About
          </Typography>
          <Typography fontSize="18px" fontWeight="500">
            Contact
          </Typography>
        </Stack>
      </Stack>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{ sx: { background: "#181719", color: "#FFFFFF" } }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            color: "#FFF",
            justifyContent: "flex-end",
            margin: "10px",
          }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <Stack
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="80%"
          gap="30px"
        >
          <Typography fontSize="18px" fontWeight="500">
            Home
          </Typography>
          <Typography fontSize="18px" fontWeight="500">
            Collection
          </Typography>
          <Typography fontSize="18px" fontWeight="500">
            About
          </Typography>
          <Typography fontSize="18px" fontWeight="500">
            Contact
          </Typography>
        </Stack>
      </Dialog>
    </Box>
  );
}
