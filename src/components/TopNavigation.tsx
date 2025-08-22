import React from 'react';
import logo from '../assets/logo.svg'; // Adjust the path as necessary
import OrderHistoryButton from './buttons/OrderHistoryButton';
import SignUpButton from './buttons/SignUpButton';
import LoginButton from './buttons/LoginButton';
import HomeLogoButton from './buttons/HomeLogoButton';
import LogoutButton from './buttons/LogoutButton';

function TopNavigation() {
    const isLoggedIn = false; 

    return (
        !isLoggedIn ? (
            <nav
                style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                height: '64px'
                }}
            >
                {/* Left: Logo */}
                <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <HomeLogoButton />
                </div>
                {/* Center: Order History Button */}
                <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
                <OrderHistoryButton />
                </div>
                {/* Right: Sign Up and Login Buttons */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
                <SignUpButton />
                <LoginButton />
                </div>
            </nav>
        ) : (
            <nav
                style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                height: '64px'
                }}
            >
                {/* Left: Logo */}
                <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <HomeLogoButton />
                </div>
                {/* Center: Order History Button */}
                <div style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
                <OrderHistoryButton />
                </div>
                {/* Right: Sign Up and Login Buttons */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
                <LogoutButton />
                </div>
            </nav>
        )
    );
}

export default TopNavigation;