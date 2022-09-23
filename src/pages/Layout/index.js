import { Outlet } from 'react-router-dom';
import { ProductsProvider } from 'contexts/ProductsContext';
import { RWDProvider } from 'contexts/RWDContext';
import { UIToastProvider } from 'contexts/ToastContext';
import { AuthProvider } from 'contexts/AuthContext';
import { LoadingProvider } from 'contexts/LoadingContext';
// import { CartProvider } from 'contexts/CartContext';
// import { OrderProvider } from 'contexts/OrderContext';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Layout() {
    const location = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [location.pathname]);

    return (
        <>
            <RWDProvider>
                <UIToastProvider>
                    <LoadingProvider>
                        <AuthProvider>
                            <ProductsProvider>
                                <div className="web-content">
                                    <Navbar />
                                    <Outlet />
                                    <Footer />
                                </div>
                            </ProductsProvider>
                        </AuthProvider>
                    </LoadingProvider>
                </UIToastProvider>
            </RWDProvider>
        </>
    );
}

export default Layout;
