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
import Footer from './components/common/Footer';

// CSS
import './components/css/App.css';
import './components/css/Home.css';
import './components/css/Header.css';
import './components/css/Footer.css';

function App() {
  const Root = () => {
    return <>
      <Header />
      <SubHeader />
      <Outlet />
      <Footer />
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
