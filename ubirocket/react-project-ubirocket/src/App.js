import CountDown from "./components/countDown/CountDown";
import CountDownBag from "./components/countDown/CountDownBag";
import NextLaunches from "./components/nextLaunches/NextLaunches";
import NextLaunchesBag from "./components/nextLaunches/NextLaunchesBag";
import {Switch, Route} from "react-router-dom";


function App() {
  return (
    <div>
    <Switch>
      <Route exact path="/" component={CountDownBag}/>
      <Route exact path="/next" component={NextLaunchesBag}/>
    </Switch>
    </div>
    
  );
}

export default App;
