import React, { useEffect } from "react";
import useStore from "../Data/DataGloble.js";
import Footerpage from "./Footerpage.jsx";

const AddCard = () => {
  const { SetSelectionCartItems, SelectionCartItems } = useStore();
  useEffect(() => {
    const GetTake = localStorage.getItem("SelectionCartItems");
    if (GetTake) {
      SetSelectionCartItems(JSON.parse(GetTake));
    }
  }, [SetSelectionCartItems]);

  const Remove = (index) => {
    const updatedItems = SelectionCartItems.filter((_, i) => i !== index);
    SetSelectionCartItems(updatedItems);
    localStorage.setItem("SelectionCartItems", JSON.stringify(updatedItems));
  };
  return (
    <>
    <main className="container mt-5" style={{marginBottom:"450px"}}>
            <div>
        
      {SelectionCartItems.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th>No.</th>
                <th>Item</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {SelectionCartItems.map((item, index) => (
                <tr key={item.id || index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      width={60}
                      height={60}
                      className="rounded"
                    />
                  </td>
                  <td>{item.description}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => Remove(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center fs-4">No items in the cart.</p>
      )}

      </div>
    </main>


      <Footerpage/>
      
      
      </>
  );
};

export default AddCard;
