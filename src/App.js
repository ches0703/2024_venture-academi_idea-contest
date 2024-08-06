import { 
  Container,
  Box
} from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Container maxWidth='xl'>

      <Header></Header>
      <Outlet></Outlet>
    </Container>
  );
}

export default App;
