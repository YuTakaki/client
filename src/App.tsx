import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import NavBarPublic from "./components/public/NavBarPublic";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { VerifyTokenAction } from "./store/actions/userAction";

function App() {
  const auth = useSelector((state : RootStateOrAny) => state.userReducer.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(VerifyTokenAction());
  }, [dispatch])
  return (
    <div className="App">
      <Router>
        {!auth && (
          <NavBarPublic />
        )}
        {auth && (
          <NavBarPublic />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
