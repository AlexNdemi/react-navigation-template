import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Loader from './components/loader/Loader';
import {lazy,Suspense} from 'react';
import * as ROUTES from './constants/routes';
const Home=lazy(()=>
  import('../pages/home').then(module=>{return{default:module.Home}})
)
const Contact=lazy(()=>
  import('../pages/contact').then(module=>{return{default:module.Contact}})
)
const Services=lazy(()=>
  import('../pages/services').then(module=>{return{default:module.Services}})
)
const About_us=lazy(()=>
  import('../pages/about-us').then(module=>{return{default:module.About_us}})
)
function App() {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home/>}/>
          <Route path={ROUTES.SERVICES} element={<Services/>}/>
          <Route path={ROUTES.CONTACT} element={<Contact/>}/>
          <Route path={ROUTES.ABOUT_US} element={<About_us/>}/>
        </Routes>
      </Suspense>
    </Router>
  )
      
}

export default App
