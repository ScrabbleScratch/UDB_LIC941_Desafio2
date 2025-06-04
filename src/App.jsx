import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";

function App() {
  return (
    <>
      <Navbar />
      <Box width="100%" px={20} py={4}>
        <Catalog />
      </Box>
    </>
  );
}

export default App;
