import React, { Children } from 'react'
import Navbar from './../componentes/Navbar';
import Footer from './../componentes/Footer';

const PublicLayout = ({ Children }) => {
    return (
        <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='h-full overflow-y-scroll '>{Children}</main>
            <Footer/>
        </div>
    )
}

export default PublicLayout

