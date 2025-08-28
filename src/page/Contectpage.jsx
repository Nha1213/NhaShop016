import React, { useState } from "react";
import "../style/contect.css";
import Footerpage from "./Footerpage";
import { Button, message } from "antd";

const Contectpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    if (name === "" || email === "" || subject === "" || msg === "") {
      messageApi.info("Please fill in all fields.");
    } else {
      messageApi.success("Form submitted successfully!");
      // You could also send the form data to a backend here
    }
  };

  return (
    <>
      <main>
        <div className="Contact">
          <div className="container">
            <p className="fs-1">Contact US</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              dicta ipsa aspernatur impedit provident enim repudiandae veniam
              culpa quia minus harum id vitae voluptatibus totam eligendi
              voluptas dolorum architecto eius!
            </p>
          </div>
        </div>

        <section className="container py-5">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Message"
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
            </div>

            {/* alet massage  */}
            {contextHolder}
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </form>
        </section>
      </main>
      <Footerpage />
    </>
  );
};

export default Contectpage;
