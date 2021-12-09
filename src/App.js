import { BrowserRouter as Router, Route } from "react-router-dom";
import NewPost from "./components/NewPost/NewPost";
import Posts from "./components/Posts/Posts";
import Docs from "./components/Docs/Docs";

function App() {
  return (
    <Router>
      <Route path="/" component={NewPost} exact />
      <Route path="/posts" component={Posts} exact />
      <Route path="/docs" component={Docs} exact />
    </Router>
  );
}

export default App;
