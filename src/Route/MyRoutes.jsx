import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../Pages/Main';
import Login from '../Pages/Login';
import Question from '../Pages/Question';
import Step2 from '../Pages/Step/Step_2';
import Step3 from '../Pages/Step/Step_3';
import Step4 from '../Pages/Step/Step_4';
import Step5 from '../Pages/Step/Step_5';
import Step6 from '../Pages/Step/Step_6';
import Step7 from '../Pages/Step/Step_7';
import Step8 from '../Pages/Step/Step_8';
import Step9 from '../Pages/Step/Step_9';
import Step10 from '../Pages/Step/Step_10';
import Step11 from '../Pages/Step/Step_11';
import Step12 from '../Pages/Step/Step_12';
import Step13 from '../Pages/Step/Step_13';
import UserDashboard from '../Pages/UserDashboard';
import Payment from '../Pages/Payment';
import NewRecipe from '../Pages/newReceipe';
import UserProfile from '../Pages/UserProfile';
import Mealplan from '../Pages/Mealplan';
import Record from '../Pages/Record';
// import Step from '../'
const MyRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path = "/" element = {<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path = '/main' element={<Main />} />
                <Route path = '/userdashboard' element={<UserDashboard />} />
                <Route path='/step2' element={<Step2 />} />
                <Route path='/step3' element={<Step3 />} />
                <Route path='/step4' element={<Step4 />} />
                <Route path='/step5' element={<Step5 />} />
                <Route path='/step6' element={<Step6 />} />
                <Route path='/step7' element={<Step7 />} />
                <Route path='/step8' element={<Step8 />} />
                <Route path='/step9' element={<Step9 />} />
                <Route path='/step10' element={<Step10 />} />
                <Route path='/step11' element={<Step11 />} />
                <Route path='/step12' element={<Step12 />} />
                <Route path='/step13' element={<Step13 />} />
                {/* <Route path='/step' element={<Step />} /> */}
                <Route path='/payment' element = {<Payment />} />
                <Route path='/recipe' element = {<NewRecipe />} />
                <Route path='/userprofile' element={<UserProfile />} />
                <Route path='/mealplan' element={<Mealplan />} />
                <Route path='/record' element={<Record />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoute;