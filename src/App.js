import React from "react";
import { Routes, Route } from 'react-router-dom';

// import PrivateRoute from "./hook/PrivateRoute";
// import './style/css/index.css';

//components

//pages


const App = () => {
    return (
        <>
            hello
            <Routes>
                {/* <Route path="/*" element={<Post />}></Route> */}

                {/* <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}></Route>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/signup" element={<SignUp />}></Route> */}
            </Routes>
        </>
    )
}

export default React.memo(App);