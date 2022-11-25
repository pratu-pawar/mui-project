
//import './App.css';
import Sidebar from './Components/Sidebar';
import Feed from './Components/feed';
import Rightbar from './Components/Rightbar';
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material"
import Navbar from './Components/Navbar';
import Add from './Components/Add'
import { useState} from  "react";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({ 
    palette:{ 
      mode:mode,
    }
  })
  return (
   <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar></Navbar>
      <Stack direction="row" spacing={2} justifyContent="space-between"> 
      <Sidebar  setMode={setMode} mode={mode}/>
      <Feed></Feed>
      <Rightbar></Rightbar>
      <Add/>
     </Stack>
    </Box>
    </ThemeProvider>
  );
}

export default App;
