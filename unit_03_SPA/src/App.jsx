import {Switch, Route} from 'react-router-dom';
import { useState } from 'react'; 

import { Header } from './components/Header';
import { Main } from './components/Main';

import {Details} from './pages/Details';
import {NotFaund} from './pages/NotFaund';
import {HomePage} from './pages/HomePage';

function App() {

  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header/>
      <Main>
        <Switch>
          <Route exact path='/'>
            <HomePage countries={countries} setCountries={setCountries}/>
          </Route>
          <Route path='/country/:name' component={Details}/>
          <Route component={NotFaund}/>
        </Switch>
      </Main>
    </>
  );
}

export default App;
