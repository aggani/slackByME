import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
    <Router>
      <>
      <Header />
      <AppBody>
        <Sidebar />
        <Switch> 
          <Route path="/" exact>

          </Route>
        </Switch>
      </AppBody>
      </>
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;