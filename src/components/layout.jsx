import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { cx } from 'class-variance-authority';
import Header from '@/components/header';
import Footer from '@/components/footer';

function Layout({ children }) {
    return (
        <div className="min-h-screen max-w-7xl mx-auto px-3">
            <Header />
            <div className="mt-44">{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
