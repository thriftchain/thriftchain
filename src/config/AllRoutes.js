
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../pages/home/Home";
import Login from "../pages/log-in/Login";
import Layout from '../layout/Layout';
import OnboardingData from '../pages/onboarding/OnboardingData';
import User from "../page-layout/dashboard/User";
import GroupModule from '../pages/group-module/GroupModule';
import IndividualModule from '../pages/individual-module/IndividualModule';




const path = {
  index:"/",
  user:"/user/*"
}

const AllRoutes = () => {
 
  

  return (
    <div>
      
     
        <BrowserRouter>
          <Layout>
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path='/log-in' element={<Login/>}/>
             <Route path='/onboarding-data' element={<OnboardingData/>}/>
             <Route path={path.user} element={<User/>}/>
             <Route path='/group-module' element={<GroupModule/>}/>
             <Route path='/individual-module' element={<IndividualModule/>}/>
             
            </Routes>
          </Layout>
        </BrowserRouter>
     
    </div>
  );
};

export default AllRoutes;
