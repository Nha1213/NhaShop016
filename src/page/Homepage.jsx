
import useStore from '../Data/DataGloble.js';
import { useState } from 'react'
import React from 'react';
import "../style/Homepage.css";
import { Link } from 'react-router-dom';
import { brompton, montague, ebikes, terN, uniquebikes, moulton } from '../Data/pageimage.js';
import Oneslide from "../../public/Oneslide.jpg"; // Ensure this path is correct
import Footerpage from './Footerpage.jsx'; // Ensure this path is correct
import { IoIosStarOutline } from "react-icons/io";
import Sliding from './Sliding.jsx';


const Homepage = () => {
  const { DataGloble, getdataGloble } = useStore();
  const getdata = [DataGloble[0], DataGloble[1], DataGloble[2], DataGloble[3]];
  const newgetdata = [DataGloble[8], DataGloble[9], DataGloble[10]];
  return (
    <>

      <Sliding />

      {/* card menu  */}
      <section className='container'>
        <p className='fs-1 text-center mt-5'>Categories The month</p>
        <p className='fs-6 fw-light text-center ps-5 pe-5'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officeia deserunt molit anim id est laborum.</p>

        {/* card menu  */}
        <p className='text-dark fs-1'>Shop By Brand</p>
        <main className='mb-5 d-flex justify-content-center align-items-center flex-wrap gap-3 rows'>
          <ul className='d-flex justify-content-left align-items-center gap-3 list-unstyled flex-wrap col-lg-12'>
            <li className='border border-success' ><Link to="shop"><img width={"200px"} height={"200px"} src={brompton} alt="" /></Link></li>
            <li className='border border-success' ><Link to="shop"><img width={"200px"} height={"200px"} src={montague} alt="" /></Link></li>
            <li className='border border-success' ><Link to="shop"><img width={"200px"} height={"200px"} src={ebikes} alt="" /></Link></li>
            <li className='border border-success' ><Link to="shop"><img width={"200px"} height={"200px"} src={terN} alt="" /></Link></li>
            <li className='border border-success' ><Link to="shop"><img width={"200px"} height={"200px"} src={uniquebikes} alt="" /></Link></li>
            <li className='border border-success' ><Link to="shop"><img width={"200px"} height={"200px"} src={moulton} alt="" /></Link></li>
          </ul>

        </main>
        {/*end card menu  */}

        {/* card products  */}
        <p className='text-dark fs-1 mt-5'>Featured Products</p>
        <main className='justify-content-left d-flex rows align-items-center gap-3'>
          {
            getdata.map((item) => {
              return (
                <div key={item.id} className='mycard col-lg-3 col-sm-3 p-2' >
                  <Link to={item.id.toString()} className='text-decoration-none text-dark'>
                    <div className="con_img">
                      <img src={item.image} className='imag' alt={item.title} />
                    </div>
                    <div className='card-body'>
                      <p className='card-text fw-bold mt-1'>{item.description}</p>
                      <p className='card-text text-primary'>Price: ${item.price.toFixed(2)}</p>
                      <div className='d-flex justify-content-between align-items-center'>
                        <p className='card-text text-danger'> {item.stock}</p>
                        <button className='btn btn-primary'><Link to={item.id.toString()}>View Detail</Link></button>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </main>
        {/* end card products  */}
      </section>
      <div className=' mt-5 p-5' style={{ backgroundColor: "#cdd6deff" }}>

        <div>
          <p className='fs-1 mt-5 text-dark text-center'>Featured Products Rating</p>
          <p className='fs-5 fw-light text-center ps-5 pe-5'> Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur <br /> Excepreur sitnt occaescat cupidatat non proident.</p>
        </div>
        <div className='row mt-5 justify-content-center align-items-center gap-3'>
          {

            newgetdata.map((item) => {
              return (
                <div key={item.id} className='mycard col-lg-3 col-sm-3 p-2' style={{ height: "500px", border: "2px solid #4d4d4da0" }} >
                  <Link to={item.id.toString()} className='text-decoration-none text-dark'>
                    <div className="con_img">
                      <img src={item.image} alt={item.title} style={{ width: "100%", padding: "0rem" }} />
                    </div>
                    <div>
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                      <IoIosStarOutline />
                    </div>
                    <div className='card-body d-flex flex-column justify-content-between'>
                      <div>
                        <p className='card-text fw-bold mt-1'>{item.description}</p>
                        <p className='card-text text-primary'>Price: ${item.price.toFixed(2)}</p>
                      </div>
                      <div className='d-flex justify-content-between align-items-center mt-5'>
                        <p className='card-text text-danger'> {item.stock}</p>
                        <button className='btn btn-primary'><Link to={item.id.toString()}>View Detail</Link></button>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
      <Footerpage />
    </>
  )
}

export default Homepage