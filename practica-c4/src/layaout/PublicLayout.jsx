import React, { Children } from 'react'

const PublicLayout = ({ Children}) => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <main>{Children} </main>
            <Footer />
        </div>
    )
}

export default PublicLayout
