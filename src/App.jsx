import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar  from "./NavBar"
import Body from "./Body"
import Login from "./Login"
import Profile from "./Profile"
function App() {
  return(
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element = {<Body></Body>} > {/* parent */}

          <Route path="/login" element={<Login></Login>}></Route>       {/* Child */}
          <Route path="/profile" element={<Profile></Profile>}></Route> {/* Child */}

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
