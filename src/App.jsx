import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar  from "./components/NavBar"
import Body from "./components/Body"
import Login from "./components/Login"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"
import Connections from "./components/Connections"
import Requests from "./components/Requests"
function App() {
  return(
    <>
    <Provider store={ appStore }> {/*giving the store access to app.jsx */}
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element = {<Body/>} >    {/* parent */}

          
          <Route path="/" element = {<Feed/>}>  </Route>
          <Route path="/login" element={<Login/>}>  </Route>       {/* Child */}
          <Route path="/profile" element={<Profile/>}>  </Route> {/* Child */}
          <Route path="/connections" element = {<Connections/>}></Route>
          <Route path ="/requests" element = {<Requests/>}></Route>

          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
      
    </>
  )
}

export default App
