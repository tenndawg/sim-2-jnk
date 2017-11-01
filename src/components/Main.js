import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={homePageHouser}/>
      <Route path='/dashboard' component={Dashboard}/>
    </Switch>
  </main>
)