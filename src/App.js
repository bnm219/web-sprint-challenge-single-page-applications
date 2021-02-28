import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import PizzaForm from './PizzaForm'

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <div>
      <Link to='/'>Home</Link>
      </div>
      <div>
      <Link to = '/pizza-form'>Order Pizza</Link>
      </div>

      <Switch>
        <Route path = '/pizza-form'>
          <PizzaForm />
        </Route>
        <Route exact path = '/'/>
      </Switch>
    </div>
  )
};
export default App;
