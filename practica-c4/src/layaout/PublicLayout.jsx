import Navbar from '/componentes/Navbar';
import Footer from 'componentes/Footer';
import React from 'react'; 
const PublicLayout = ({children}) => {
    return (
        <div className='flex flex-col justify-between h-screen'>
           <Navbar/>
            <main>{children}</main>
            <Footer/>   
    </div>
    )
}

export default PublicLayout
