import { 
  Container,
  Box
} from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Container maxWidth='lg'>
      <Header></Header>
      <Outlet></Outlet>
    </Container>
  );
}

export default App;
