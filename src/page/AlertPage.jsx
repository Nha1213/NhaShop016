import React from "react";
import CartProps from "../PropsCart/CartProps";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "antd";
import Swal from "sweetalert2";
import  useStore from "../Data/DataGloble";
const AlertPage = () => {

  const { SetSelectionCartItems, SelectionCartItems } = useStore();

//   total price when add products 
  const totalPrice = SelectionCartItems.reduce((sum, item) => sum + item.price,0);

//   clear card 
  const ClearCart = () => {
    SetSelectionCartItems([]);
    localStorage.removeItem("SelectionCartItems");
  };

//   delelte card 
  const Delete = (deleteIndex) => {
    const updated = SelectionCartItems.filter((_, i) => i !== deleteIndex);
    SetSelectionCartItems(updated);
    localStorage.setItem("SelectionCartItems", JSON.stringify(updated));
  };

//addmore cart 
  const addmore = (item) => {
    const updated = [...SelectionCartItems, item];
    SetSelectionCartItems(updated);
    localStorage.setItem("SelectionCartItems", JSON.stringify(updated));
  };

//modal alert 
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const navigator = useNavigate();
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      ClearCart();
      navigator("Payment");
    }, 1500);
  };

  const handleCancel = () => {
    setOpen(false);
  };
//  end modal alert

// CheckOut price
  const CheckOut = () => {
    if (SelectionCartItems.length > 0) {
      showModal();
    } else {
      Swal.fire({
        title: "Products Emty please add products before confilm",
        showClass: {
          popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
        },
        hideClass: {
          popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
        },
      });
    }
  };
//   end CheckOut price
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Cart Products</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          {SelectionCartItems.length > 0 ? (
            SelectionCartItems.map((item, index) => (
              <CartProps
                key={index}
                index={index}
                title={item.title}
                price={item.price}
                image={item.image}
                DeletePro={() => Delete(index)}
                AddMore={() => addmore(item)}
              />
            ))
          ) : (
            <p className="text-center">No items in cart.</p>
          )}
        </div>
        <div className="p-3 border-top">
          <div className="d-flex justify-content-between">
            <p>Total Items: {SelectionCartItems.length}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
          <button className="btn btn-danger w-100 mb-2" onClick={ClearCart}>
            Clear
          </button>
          <button
            className="btn btn-success w-100"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            onClick={CheckOut}
          >
            Checkout
          </button>
        </div>
        <Modal
          open={open}
          title="Order Summary"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            // <Link to="Payment" key="submit">
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={handleOk}
            >
              Confirm Order
            </Button>,
            // </Link>
          ]}
        >
          <p>Total Items: {SelectionCartItems.length}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <p>Thank you for shopping with us!</p>
        </Modal>
      </div>
    </>
  );
};

export default AlertPage;
