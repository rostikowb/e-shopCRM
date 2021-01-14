import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import "./style.css";
import page404 from "./components/arhiv/statusCodePages/404/404";
import loader from "./assets/img/loader.gif";
import { config } from "react-transition-group";
import { initLocalStorage } from "./localStorage/localStorFunc";
// import { Checkout } from "./components/pages/checkout/checkout";
import { GoodsRoute } from "./components/routes/goods";

// const AddNewsPage = React.lazy(() => import('./components/adminPanel/addNews/addNewsPage/addNewsPage'));
// const AdminPanel = React.lazy(() =>
//   import("./components/adminPanel/adminPanel")
// );
// const ContactPage = React.lazy(() =>
//   import("./components/informPage/contacts/contacts")
// );
// const StatutPage = React.lazy(() =>
//   import("./components/informPage/statut/statut")
// );

config.disabled = false;

class App extends Component {
  constructor(props) {
    super(props);
    initLocalStorage();
  }
  state = {
    AddNewsPage: null,
  };

  render() {
    return (
      <div className="App">
        <Router>
          <React.Suspense
            fallback={
              <div className="suspense">
                <img className="loader" src={loader} alt="loader" />
              </div>
            }
          >
            <Switch>
              {/*<Route path="/checkout" component={Checkout} />*/}
              <Route path="/" component={GoodsRoute} />
              <Route component={page404} />
            </Switch>
          </React.Suspense>
        </Router>
      </div>
    );
  }
}

export default App;
