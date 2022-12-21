import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./App.css";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["Montserrat", "serif"].join(","),
      fontSize: 16,
    },
  },
});



function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Header />
      

      <Content />
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
