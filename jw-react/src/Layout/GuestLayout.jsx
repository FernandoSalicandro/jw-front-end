import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';


export default function GuestLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}