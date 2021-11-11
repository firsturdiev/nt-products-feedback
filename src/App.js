import { BrowserRouter, Switch, Route } from "react-router-dom";
import Suggestions from "./screens/Suggestions/Suggestions";
import NewFeedback from './screens/NewFeedback/NewFeedback';
import EditFeedback from "./screens/EditFeedback/EditFeedback";

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

        <Route exact path="/feedback/edit">
          <EditFeedback />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;