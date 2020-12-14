import React from 'react'
import Navbar from '../../components/commons/Navbar'
import Sidebar from '../../components/commons/Sidebar'
import Footer from '../../components/commons/Footer'


function MainLayout({ children }) {
    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content" >
                    <Navbar />
                    <div className="container-fluid">
                    {children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout
