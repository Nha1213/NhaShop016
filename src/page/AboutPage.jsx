import React, { useEffect } from 'react';
import Sliding from './Sliding';
import { CiDeliveryTruck } from "react-icons/ci";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import "../style/About.css"
import Footerpage from './Footerpage.jsx';
import { brompton, montague, ebikes, terN, uniquebikes, moulton } from '../Data/pageimage.js';
const AboutPage = () => {

  return (
    <>
      <Sliding />

      <div className='Our container'>
        <p className='OurService'>Our Services</p>
        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus iure vitae debitis aliquid ut tenetur quisquam maiores, itaque atque nam incidunt delectus. Odit, soluta iure itaque non nulla neque.</p>
      </div>

      <div className='Cord'>
        <div className='CordOne'>
          <CiDeliveryTruck className='fs-1 text-success' />
          <p>Delivery Services</p>
        </div>
        <div className='CordOne'>
          <FaDownLeftAndUpRightToCenter className='fs-1 text-success' />
          <p>Shipping & Return</p>
        </div>
        <div className='CordOne'>
          <FaPercent className='fs-1 text-success' />
          <p>Promotion</p>
        </div>
        <div className='CordOne'>
          <IoMdPerson className='fs-1 text-success' />
          <p>24 Hours Service</p>
        </div>
      </div>

      <div className='OurBrand'>
        <div className='container'>
          <p className='br'>
            Our Brands
          </p>

          <p className='Brand'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, delectus illo, perspiciatis sunt eum eaque adipisci eius doloribus mollitia, officiis ab dolores suscipit! Aperiam eligendi sit id fuga, aliquid exercitationem!</p>
        </div>

        <div className='mt-5 d-flex gap-2 justify-content-center alin-item-center'>
          <img width={"100px"} height={"100px"} src={terN} alt="" />
          <img width={"100px"} height={"100px"} src={brompton} alt="" />
          <img width={"100px"} height={"100px"} src={montague} alt="" />
          <img width={"100px"} height={"100px"} src={ebikes} alt="" />
          <img width={"100px"} height={"100px"} src={uniquebikes} alt="" />
          <img width={"100px"} height={"100px"} src={moulton} alt="" />
        </div>
      </div>
      <Footerpage />
    </>
  )
};

export default AboutPage;
