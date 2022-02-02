import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./components/hof/PrivateRoute";
import NavBarPublic from "./components/public/NavBarPublic";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { VerifyTokenAction } from "./store/actions/userAction";
import "./styles/global.scss";

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
        <Routes>
          <Route path="/" element={<PrivateRoute Component={Home} />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
