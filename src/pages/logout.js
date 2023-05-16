import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LogoutPage = () => {
    const router = useRouter();

    useEffect(() => {
        // Clear JWT token from localStorage or any other client-side storage
        localStorage.removeItem('jwtToken');

        // Redirect the user to the login or home page
        router.push('/'); // Replace '/login' with the desired destination page
    }, []);

    return <div>Logging out...</div>;
};

export default LogoutPage;
