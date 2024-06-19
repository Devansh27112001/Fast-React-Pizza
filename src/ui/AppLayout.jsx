import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';
function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            {isLoading && <Loader />}
            <Header />
            {/* Here the outlet component is used to render component according to the url. So, according to /something -> The component specified in the element property of path: "/something" will be rendered by <Outlet/> component */}
            <div className="overflow-y-auto">
                <main className="mx-auto max-w-3xl">
                    <Outlet />
                </main>
            </div>

            <CartOverview />
        </div>
    );
}

export default AppLayout;
