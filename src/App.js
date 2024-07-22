// import './App.css';
import MainPage from './components/MainPage/MainPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Resume from './components/Resume/Resume';

const routes = createBrowserRouter([
  { path:'/', element: <MainPage/> },
  { path:'/resume', element: <Resume/> },
]);

function App() {
  return (<RouterProvider router={routes}/>)
}

export default App;
