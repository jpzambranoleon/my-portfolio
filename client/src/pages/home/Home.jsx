import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  keyframes,
} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const animate = keyframes`  
    0% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  `;

const wave = keyframes`
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(20deg);
    }
    40% {
      transform: rotate(-10deg);
    }
    60% {
      transform: rotate(15deg);
    }
    80% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  `;

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="md" sx={{ my: 10 }}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h3" fontWeight={600} gutterBottom>
              Full-Stack Web Developer{" "}
              <Box
                sx={{
                  display: "inline-block",
                  animationName: `${wave}`,
                  animationDuration: "2s",
                  animationIterationCount: "infinite",
                }}
              >
                👋
              </Box>
            </Typography>
            <Typography variant="body2" paragraph>
              <span style={{ color: grey[600] }}>
                Hi, I'm Jean-Paul Zambrano-Leon. A passionate Full-Stack Web
                Developer based in Hot Springs, Arkansas.
              </span>{" "}
              📍
            </Typography>
            <Stack direction="row">
              <IconButton>
                <LinkedIn />
              </IconButton>
              <IconButton>
                <GitHub />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              src="/static/images/jpzl_espresso_time.jpg"
              variant="square"
              sx={{
                height: 230,
                width: 230,
                boxShadow: "0 20px 5px 5px rgba(0, 0, 0, 0.2)",
                animation: `${animate} 5s ease-in-out infinite`,
                border: 2,
                transition: "all 1s ease-in-out",
              }}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", alignItems: "center", my: 8 }}>
          <Typography fontWeight={500}>Tech Stack</Typography>
          <Divider
            sx={{ height: 20, mr: 8, ml: 2, bgcolor: "black", border: 0.7 }}
            orientation="vertical"
          />
          <Stack direction="row" spacing={5}>
            <img
              src="/static/logos/html.png"
              alt="html-logo"
              style={{ width: 27, height: 30 }}
            />
            <img
              src="/static/logos/css.png"
              alt="css-logo"
              style={{ width: 33, height: 33 }}
            />
            <img
              src="/static/logos/javascript.png"
              alt="javascript-logo"
              style={{ width: 30, height: 34 }}
            />
            <img
              src="/static/logos/react.png"
              alt="react-logo"
              style={{ width: 35, height: 35 }}
            />
            <img
              src="/static/logos/materialUI.png"
              alt="mui-logo"
              style={{ width: 34, height: 34 }}
            />
            <img
              src="/static/logos/node.png"
              alt="node-logo"
              style={{ width: 30, height: 30 }}
            />
            <img
              src="/static/logos/mongoDB.png"
              alt="mongoDB-logo"
              style={{ width: 35, height: 35 }}
            />
            <img
              src="/static/logos/python.png"
              alt="python-logo"
              style={{ width: 35, height: 35 }}
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
