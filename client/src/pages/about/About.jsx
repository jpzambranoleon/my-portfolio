import { CardMedia, Container, Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <CardMedia
            component="img"
            height="280"
            image="/static/images/laptop_code.jpg"
            alt="laptop_code"
            sx={{ borderRadius: 4 }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="body2"
            color="primary"
            fontWeight={500}
            gutterBottom
          >
            ABOUT ME
          </Typography>
          <Typography variant="h6" fontWeight={500} paragraph>
            A dedicated Front-End Web Developer based in Hot Springs, Arkansas
            📍
          </Typography>
          <Typography variant="body2" color="text.secondary">
            As a junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, CSS. I excel in designing
            and maintaining responsive websites that offer a smooth user
            experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
