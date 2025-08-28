import React from 'react';
import useStore from "../Data/DataGloble";
import { Link } from 'react-router-dom';
import "../style/Shop.css";
import Myheader from './Myheader';
const Moulton = () => {
  const { DataGloble } = useStore();
  const getData = DataGloble;

  // Filter only Brompton items
  const bromptonData = getData.filter(item => item.title == "Moulton");

  return (
    <>

      <Myheader getData={bromptonData.length} />
      <div className='d-flex gap-1 mt-4' style={{ flexWrap: "wrap", margin: "auto", height: "100vh", overflow: "auto" }}>
        {
          bromptonData.map((item) => (
            <div key={item.id} className='mycard col-lg-4 col-sm-4 p-2'>
              <Link to={`/${item.id}`} className='text-decoration-none text-dark'>
                <div className="con_img">
                  <img
                    src={item.image}
                    className='imag'
                    alt={item.title}
                    style={{ padding: "0.5rem 0.5rem 0rem 0.5rem" }}
                  />
                </div>
                <div className='card-body'>
                  <p className='card-text fw-bold mt-1'>{item.description}</p>
                  <p className='card-text text-primary'>Price: ${item.price.toFixed(2)}</p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='card-text text-danger'>Stock: {item.stock}</p>
                    <span className='btn btn-primary'>View Detail</span>
                  </div>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Moulton