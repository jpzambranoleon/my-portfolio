import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Jean-Paul.dev
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
