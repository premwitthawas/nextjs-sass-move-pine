import { Navbar } from '@/components/navbar'
import React from 'react'

interface LandingLayoutProps {
    children: React.ReactNode
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default LandingLayout