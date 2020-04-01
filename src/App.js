import React from 'react';
import './App.css';
import Filters from './pages/Filters';
import CarOwners from './pages/CarOwners';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
      <div>
        <div className="text-center">
          <h2>CarFil</h2>
        </div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Filters} />
            <Route path="/car-owners/:filter" render={ (props)=> <CarOwners {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>

  );
}

export default App;
