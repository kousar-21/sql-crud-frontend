import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            This is Main Lay out Page.
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;