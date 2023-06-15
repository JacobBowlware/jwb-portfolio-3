// React
import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route, Outlet
} from 'react-router-dom'

// Pages
import Home from './components/pages/Home';

// Components
import Header from './components/common/Header';
import SubHeader from './components/common/SubHeader';

// CSS
import './components/css/App.css';
import './components/css/Home.css';
import './components/css/Header.css';

function App() {
  const Root = () => {
    return <>
      <Header />
      <SubHeader />
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
