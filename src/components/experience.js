import { Card, CardContent, Typography, Container, Grid } from "@mui/material";

const experienceData = [
  {
    company: "EndureAir Systems Pvt Ltd",
    position: "Software Developer - 1",
    duration: "Feb 2024 - Present",
    tech: "React • Electron • Python • Jetson • MAVLink • UAV Systems",
    highlights: [
      "Designed and implemented a real-time Antenna Tracking System, improving drone-to-ground communication stability by 50%.",
      "Integrated PWM-based claw control mechanism via Jetson device, enabling automated payload pickup capabilities.",
      "Engineered an electromagnet payload control system using Jetson GPIO signals, enhancing operational versatility.",
      "Developed a distributed mesh control system enabling simultaneous operation of six UAVs via a centralized GCS.",
      "Built an internal UAV log analysis platform using Electron, React, and Python, reducing analysis time by over 50% and enabling remote field access.",
    ],
  },
  {
    company: "MattsenKumar LLC",
    position: "Software Developer",
    duration: "Sept 2023 - Jan 2024",
    tech: "React • AWS Textract • Node.js • System Design",
    highlights: [
      "Led development of an in-house authentication system, reducing mobile device dependency and increasing productivity by 25%.",
      "Built a Visiting Card Data Extraction tool using Amazon Textract, cutting manual data entry time by 50%.",
      "Designed an intuitive real-time frontend interface, improving workflow efficiency by 30%.",
    ],
  },
  {
    company: "MattsenKumar LLC",
    position: "Software Developer Intern",
    duration: "Feb 2023 - Sept 2023",
    tech: "React • Backend APIs • Data Optimization • NLP",
    highlights: [
      "Developed an Attendance Management System, reducing reporting errors by 20% and improving processing speed by 30%.",
      "Optimized data retrieval workflows, achieving 25% faster system performance.",
      "Contributed to system architecture improvements, reducing administrative workload by 20%.",
      "Fine-tuned GPT-based sentiment models on customer reviews to improve classification accuracy.",
    ],
  },
];

const Experience = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ mb: 6, fontWeight: 600 }}
      >
        Experience
      </Typography>

      <Grid container justifyContent="center" spacing={4}>
        {experienceData.map((experience, index) => (
          <Grid item xs={15} md={12} key={index}>
            <Card elevation={2} sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    backgroundColor: "#ffb400",
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    fontWeight: 600,
                    display: "inline-block",
                    mb: 1,
                  }}
                >
                  {experience.company}
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {experience.position} | {experience.duration}
                </Typography>

                <Typography variant="body1" sx={{ fontWeight: 500, mb: 2 }}>
                  {experience.tech}
                </Typography>

                <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
                  {experience.highlights.map((point, i) => (
                    <li key={i} style={{ marginBottom: "0.5rem" }}>
                      <Typography variant="body1">{point}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Experience;
