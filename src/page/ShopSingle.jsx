import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useStore from '../Data/DataGloble.js';
import '../style/card.css';
import '../style/ShopSing.css';
import AlertPage from './AlertPage.jsx';
import Footerpage from './Footerpage.jsx';
const ShopSingle = () => {
  const { id } = useParams();
  const {
    DataGloble,
    SelectionCartItems,
    SetSelectionCartItems,
    AddSelectionCartItem
  } = useStore();

  const data = DataGloble.find(item => item.id.toString() === id);

  // add to cart 
  const handleAddToCart = () => {
    AddSelectionCartItem(data);
    const existingItems = JSON.parse(localStorage.getItem("SelectionCartItems")) || [];
    const updatedItems = [...existingItems, data];
    localStorage.setItem("SelectionCartItems", JSON.stringify(updatedItems));
  };

  // Optional: restore from localStorage when visiting Shop
  useEffect(() => {
    const saved = localStorage.getItem("SelectionCartItems");
    if (saved) {
      SetSelectionCartItems(JSON.parse(saved));
    }
  }, [SetSelectionCartItems]);
  if (!data) return <p>Item not found</p>;
  const getRandomItems = (arr, excludeId, count = 4) => {
    const filtered = arr.filter(item => item.id.toString() !== excludeId);
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const getdata = getRandomItems(DataGloble, id);

  return (
    <>
      {/* Product Details */}
      <div className='container mt-5 mb-5'>
        <div className='con_all'>
          <div className='con-image'>
            <img src={data.image} alt={data.title} className='image' />
          </div>
          <div className='rightTitle'>
            <p className='des'>{data.description}</p>
            <p className=' Stock'>{data.stock}</p>
            <div className='ruler'>

            </div>
            <p className='price'>Price: ${data.price.toFixed(2)}</p>

            <p className='fs-5 mt-3'>Pay in 4 interest-free installments of $23.10 with Shop pay</p>
            <button
              onClick={handleAddToCart}
              className='btn btn-danger mt-3'
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              style={{ marginRight: "1rem" }}
            >
              Add to Cart
            </button>
            <button className='btn btn-primary mt-3 ' data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"> Buy With Shop pay</button>
            <p className='mt-4 fs-5'>Pickup available at 2054 East Southern AvenueUsually ready in 24 hours</p>
            <button data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight" className='btn btn-primary mt-3'>View store information</button>
          </div>
        </div>
        <div style={{ border: "2px solid gray", marginTop: " 2rem", }}>
          <p style={{ textAlign: "left", padding: " 2rem 5rem" }}>The ever-useful Brompton pouch. For transporting your everyday essentials — fixes to your handlebars or saddle with velcro straps. A concealed magnet keeps it secure. Use on its own or with other Brompton Luggage for added capacity.

            Made using tough-wearing fabric with welded seams and a waterproof TPU coating to keep your belongings nice and dry.

            Dimensions - w18 x h17 x d6 CM

            Weight - From 0.29 lb

            Capacity - 1L

            Compatible with ALL Brompton handlebars</p>
        </div>
        <main className='justify-content-left d-flex rows align-items-center gap-3' style={{ marginTop: "8rem" }}>
          {
            getdata.map((item) => {
              return (
                <div key={item.id} className='mycard col-lg-3 col-sm-3 p-2' >
                  <Link to={"/" + item.id.toString()} className='text-decoration-none text-dark'>
                    <div className="con_img">
                      <img src={item.image} className='imag' alt={item.title} />
                    </div>
                    <div className='card-body'>
                      <p className='card-text fw-bold mt-1'>{item.description}</p>
                      <p className='card-text text-primary'>Price: ${item.price.toFixed(2)}</p>
                      <div className='d-flex justify-content-between align-items-center'>
                        <p className='card-text text-danger'> {item.stock}</p>
                        <button className='btn btn-primary'><Link to={"/" + item.id.toString()}>View Detail</Link></button>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </main>
      </div>
      {/* end card products  */}

      <AlertPage />

      <Footerpage />
    </>
  );
};

export default ShopSingle;
