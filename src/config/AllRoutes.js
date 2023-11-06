
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/home/Home";
import Login from "../pages/log-in/Login";
import Layout from '../layout/Layout';
import OnboardingData from '../pages/onboarding/OnboardingData';

const AllRoutes = () => {
 
  

  return (
    <div>
      
      
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/log-in' element={<Login/>}/>
             <Route path='/onboarding-data' element={<OnboardingData/>}/>
            </Routes>
          </Layout>
        </BrowserRouter>
     
    </div>
  );
};

export default AllRoutes;
