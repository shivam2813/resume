import { Card, CardContent, Typography, Container, Grid } from "@mui/material";

const experienceData = [
  {
    company: "EndureAir Systems Pvt Ltd",
    position: "Software Developer - 1",
    duration: "Feb 2024 - Present",
    tech: "React • Electron • JavaScript • Context API • Linux",
    highlights: [
      "Developed and maintained production-grade desktop applications using React and Electron.",
      "Built and managed multi-window Electron architectures, handling window lifecycle, routing, and inter-process communication (IPC).",
      "Extensively used React Hooks (useState, useEffect, useMemo, useCallback) and Context API to manage complex application state.",
      "Optimized UI performance by virtualizing and efficiently rendering 1,300+ data entries, improving performance by ~70% and preventing crashes.",
      "Integrated real-time backend APIs and system data into frontend dashboards, ensuring smooth user interactions.",
      "Debugged and resolved critical UI stability issues, improving reliability based on real-world usage feedback.",
    ],
  },
  {
    company: "MattsenKumar LLC",
    position: "Software Developer",
    duration: "Sept 2023 - Feb 2024",
    tech: "React • Flask • REST APIs • LangChain",
    highlights: [
      "Designed and developed responsive React-based web interfaces for internal and client-facing applications.",
      "Built a chatbot frontend integrated with Flask and LangChain, increasing employee engagement by 60%.",
      "Led frontend development of an in-house authentication system, reducing mobile dependency and improving productivity by 25%.",
      "Developed clean, user-friendly dashboards to visualize extracted data in real time.",
      "Collaborated closely with backend teams to integrate APIs and ensure seamless frontend-backend communication.",
    ],
  },
  {
    company: "MattsenKumar LLC",
    position: "Software Developer Intern",
    duration: "Feb 2023 - Sept 2023",
    tech: "React • Python • Flask",
    highlights: [
      "Developed a web-based Attendance Management System with a focus on usability and clarity.",
      "Improved frontend performance and optimized data flow, reducing reporting errors by 20%.",
      "Collaborated on UI and workflow redesigns to enhance overall user experience.",
      "Worked across frontend and backend components to support system improvements.",
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
