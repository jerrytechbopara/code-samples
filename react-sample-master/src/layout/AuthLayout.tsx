import React, { Suspense } from 'react';
import { Await, useLoaderData, useOutlet } from 'react-router-dom';
import { AuthProvider } from '../contextApi/authContext/AuthContext';

const AuthLayout = (): React.ReactElement => {
    const outlet = useOutlet();
    const { userPromise } = useLoaderData() as { userPromise: () => void };

    return (
        <Suspense fallback={<div>Loading ui</div>}>
            <Await resolve={userPromise} errorElement={<div>Something went wrong</div>}>
                <AuthProvider>{outlet}</AuthProvider>
            </Await>
        </Suspense>
    );
};

export default AuthLayout;
