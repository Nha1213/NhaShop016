import React from "react";
import Footerpage from "./Footerpage";
import { useState } from "react";
const PaymentPage = () => {
  const [number, setNumber] = useState();
  const [expire, setExpire] = useState();
  const [CVV, setCVV] = useState();
  return (
    <>
      <main className="container mt-5 mb-5">
        <div className="card shadow-lg border-0">
          <div className="card-header bg-primary text-white text-center">
            <h4 className="mb-0">Payment Information</h4>
          </div>
          <div className="card-body bg-light">
            <form>
              <div className="row mb-3">
                <div className="col">
                  <label className="form-label text-dark">Number Card</label>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col">
                  <label className="form-label text-dark">Expire Date</label>
                  <input
                    type="text"
                    placeholder="00/00"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col">
                  <label className="form-label text-dark">CVV</label>
                  <input
                    type="text"
                    placeholder="000"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col">
                  <label className="form-label text-dark">QR Code</label>
                  <input
                    type="button"
                    className="form-control"
                    required
                    value="QR CODE"
                     data-bs-toggle="modal" data-bs-target="#exampleModal"
                  />
                </div>
              </div>
              {/* Row 1 */}
              <div className="row mb-3">
                <div className="col">
                  <label className="form-label text-dark">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col">
                  <label className="form-label text-dark">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="row mb-3">
                <div className="col">
                  <label className="form-label text-dark">Address</label>
                  <input
                    type="text"
                    placeholder="Street Address"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col">
                  <label className="form-label text-dark">City</label>
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="row mb-3">
                <div className="col">
                  <label className="form-label text-dark">Postal Code</label>
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col">
                  <label className="form-label text-dark">Country</label>
                  <input
                    type="text"
                    placeholder="Country"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-success btn-lg">
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                QR Code
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" style={{ textAlign: "center", width: "100%" }}>

                <img src="../../public/RQ/QRCode.jpg" alt="" width={"100%"} height={"550px"}/>

            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footerpage />
    </>
  );
};

export default PaymentPage;
