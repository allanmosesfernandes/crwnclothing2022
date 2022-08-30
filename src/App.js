import {Routes, Route} from 'react-router-dom'
import Home from './routes/home/home';
import Navigation from './routes/navigation/Navigation';
import Auth from './routes/auth/Auth';

const Shop = () => {
  return (
    <h1>Hi I am the shop page</h1>
  )
}
const App = () => { 

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
      </Route>
    </Routes>
  ); 
}

export default App;
