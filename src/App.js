// React
import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route, Outlet
} from 'react-router-dom'

// Pages
import Home from './components/pages/Home';

// CSS
import './components/css/App.css';
import './components/css/Home.css';

function App() {
  const Root = () => {
    return <>
      <Outlet />
    </>
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
      </Route >
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
