import { BrowserRouter, Switch, Route } from "react-router-dom";
import Suggestions from "./screens/Suggestions/Suggestions";
import EditFeedback from "./screens/EditFeedback/EditFeedback";
import NewFeedback from './screens/NewFeedback/NewFeedback';
import FeedbackDetails from './screens/FeedbackDetails/FeedbackDetails';

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

        <Route exact path="/feedback/details">
          <FeedbackDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;