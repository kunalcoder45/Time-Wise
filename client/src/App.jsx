import "../src/App.css";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import '@fontsource/inter/700.css';

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <AppRoutes />
    </>
  );
};

export default App;
