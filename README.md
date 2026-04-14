# DevTinder
- create a Vite + React application
- Remove unecessary code and create a hello World app
- Install tailwind CSS
- Install Daisy UI
- Add Navbar component to App.jsx
- Create a seperate NavBar.jsx seperate component file
- Install react router dom
- Create BrowserRouter -> Routes -> Route = /body -> RouteChildren
- Create an Outlet in Your Body Component
- Create a footer
- Create a login page
- Install axios
- CORS - install CORS in backend => add middlware to the app.js with configuartion (origin : localhost:5173, credentials : true)
- (Front-end) Whenever you are making an API call, make sure to pass in axios => {withCredentials : true}
- Install react-redux and @reduxjs/toolkit
- configureStore => Provider => createSlice => export Reducers => add reducer to the Store
- add redux DevTools in chrome
- Login and see if the data is coming properly into the store
- NavBar should update as soon as teh user logs in
- Refactor our code to add constants file + create a components folder
- You should not be able to access other routes without login
- if token is not present, redirect user to the login page
- Logout Feature






Body
    NavBar
    Route= / > feed
        Route= /login >login
        Route= /profile >profile
    Footer