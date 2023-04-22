import { ThemeProvider } from "@emotion/react";
import Catalog from "../../features/Catalog/Catalog";
import Header from "./Header";
import { Container, CssBaseline, createTheme } from "@mui/material";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palette = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: palette,
    },
  });

  const toggleDarkMode = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleDarkMode={toggleDarkMode} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
