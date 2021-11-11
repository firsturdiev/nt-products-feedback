import { BrowserRouter, Switch, Route } from "react-router-dom";
import Suggestions from "./screens/Suggestions/Suggestions";
import NewFeedback from './screens/NewFeedback/NewFeedback';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Suggestions />
        </Route>
        
        <Route exact path="/feedback/new">
          <NewFeedback />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;