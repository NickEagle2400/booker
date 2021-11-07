import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from "./pages/home"
import SingleBook from "./pages/singleBook.js"
import Header from "./components/header"
import Footer from "./components/footer"
import PageNotFound from './pages/404';

function App() {
  return (
    <Router>
      <Header />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/:id">
            <SingleBook />
          </Route>

          <Route exact path="/404">
            <PageNotFound />
          </Route>

          <Redirect to="/404" />

        </Switch>

      <Footer />
    </Router>
  );
}

export default App;
