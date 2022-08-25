import {Routes, Route} from 'react-router-dom'
import Home from './routes/home/home';
import Navigation from './routes/navigation/Navigation';
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
      </Route>
    </Routes>
  ); 
}

export default App;
