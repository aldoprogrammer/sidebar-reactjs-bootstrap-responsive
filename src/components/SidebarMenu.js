import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import './SideBar.css';

const SidebarMenu = () => {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  // Function to toggle the collapse state
  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };
    return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100'>
                <div>
                    <a className='text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline' role='button'>
                        <span className='fs-4'>Side Menu</span>
                    </a>
                    <hr clasName='text-white d-none d-sm-block '></hr>
                    <ul class="nav nav-pills flex-column" id='parentM'>
                    <li class="nav-item my-1 py-2 py-sm-0">
                        <a class="nav-link text-white" href="#" aria-current="page">
                            <i className='bi bi-speedometer2'></i>
                            <span className='ms-2 d-none d-sm-inline'>
                                Home</span>
                        </a>
                    </li>
                    <li class="nav-item my-1 py-2 py-sm-0">
                        <a class="nav-link text-white" href="#" aria-current="page" data-bs-toggle="collapse" data-bs-target="#submenu"> 
                            <i className='bi bi-grid'></i>
                            <span className='ms-2 d-none d-sm-inline'>
                                Producsst</span>
                                <i className={`bi bi-arrow-down-short ms-3 ${isSubMenuOpen ? 'rotate180' : ''}`}></i>

                        </a>
                        <ul className='nav collapse ms-2 flex-column'  id='submenu' data-bs-parent="#parentM">
                            <li className='nav-item py-2 py-sm-0'>
                                <a className='nav-link text-white' href='#' aria-current='page'>Item 1</a>
                            </li>
                            <li className='nav-item '>
                                <a className='nav-link text-white' href='#'>Item 2</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item my-1 py-2 py-sm-0">
                        <a class="nav-link text-white" href="#" aria-current="page">
                            <i className='bi bi-house'></i>
                            <span className='ms-2 d-none d-sm-inline'>
                                House</span>
                        </a>
                    </li>
                    <li class="nav-item my-1 py-2 py-sm-0">
                        <a class="nav-link text-white" href="#" aria-current="page">
                            <i className='bi bi-people'></i>
                            <span className='ms-2 d-none d-sm-inline'>
                                Customers</span>
                        </a>
                    </li>
                </ul>
                </div>
                <div className='dropdown open'>
                    <a className='btn border-none btn-secondary dropdown-toggle' type='button' id='triggerId' data-bs-toggle="dropdown" aria-expanded="false">
                        <i className='bi bi-person fs-4'></i><span className='fs-5 ms-3 d-none d-sm-inline'>Aldo ls</span>
                    </a>
                    <div className='dropdown-menu' aria-labelledby='triggerId'>
                        <a className='dropdown-item' href='#'>Profile</a>
                        <a className='dropdown-item' href='#'>Settings</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SidebarMenu
