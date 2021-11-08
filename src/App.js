import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from "./pages/home"
import SingleBook from "./pages/singleBook.js"
import Header from "./components/header"
import Footer from "./components/footer"
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Header />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/:id">
            <SingleBook />
          </Route>

        </Switch>

      <Footer />
    </Router>
  );
}

export default App;
