// React
import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route, Outlet
} from 'react-router-dom'

// Pages
import Home from './components/pages/Home';
import FreelanceHome from './components/pages/FreelanceHome';

// Components
import Header from './components/common/Header';
import SubHeader from './components/common/SubHeader';
import Footer from './components/common/Footer';

// CSS
import './components/css/App.css';
import './components/css/Home.css';
import './components/css/FreelanceHome.css';
import './components/css/Header.css';
import './components/css/Footer.css';
import './components/css/PricingCard.css';

function App() {
  const Root = () => {
    return <>
      <Header />
      <Outlet />
      <Footer />
    </>
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/freelance" element={<FreelanceHome />} />
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
