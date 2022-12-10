import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UpdateProduct from './components/UpdateProduct';
import NewProduct from './components/NewProduct';
import AllProducts from './components/AllProducts';
import Error from './components/Error';
import Login from './components/Login';
import Register from './components/Register';
import SingleProduct from './components/SingleProduct';
import './App.css';

const App = () => {
  
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact render={() => <Login />} />
          <Route path="/register" exact render={() => <Register />} />
          <Route path="/" exact render={() => <AllProducts />} />
          <Route path="/product/new/" render={() => <NewProduct />} />
          <Route path="/product/show/:id" render={() => <SingleProduct />} />
          <Route path="/product/edit/:id" render={(pathParams) => <UpdateProduct {...pathParams} />} />
          <Route path="/error" render={() => <Error />} />
          <Route path="*" render={() => <Error />} />
        </Switch>
      </BrowserRouter>
    </div>
  )

}


export default App;
