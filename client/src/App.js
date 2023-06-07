import Login from "./pages/Login";
import BookTable from "./pages/table";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
  <Routes>
  <Route path="/books" element={<BookTable/>}/>
  <Route path="/" element={<Login/>}/>
  </Routes></BrowserRouter>
  );
}

export default App;
