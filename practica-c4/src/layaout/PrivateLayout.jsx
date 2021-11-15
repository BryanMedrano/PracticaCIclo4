import React from 'react'
import Sidebar from './../componentes/Sidebar';

const PrivateLayout = ({Children}) => {
    return (
        <div>
            <Sidebar />
            {Children}
        </div>
    )
}

export default PrivateLayout

