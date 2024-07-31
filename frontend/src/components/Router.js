import {BrowserRouter,Routes,Route,Outlet} from 'react-router-dom'
import Header from './Header'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'

export default function Router() {

    const Layout = () => {
        return (
            <>
                <Header/>
                <Outlet/>
            </>
        )
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/sign-up" element={<SignUp/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}