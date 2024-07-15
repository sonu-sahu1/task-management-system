import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <section className="text-center">
        {/* Background image */}
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage:
              'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
            height: "300px",
          }}
        />
        {/* Background image */}
        <div
          className="card mx-4 mx-md-5 shadow-5-strong bg-body-tertiary"
          style={{ marginTop: "-100px", backdropFilter: "blur(30px)" }}
        >
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5 text-left">Sign up now</h2>
                <form>
                  {/* User Name */}
                  <div className="form-outline mb-4">
                    <label className="form-label d-flex justify-content-start" htmlFor="username">
                      Username
                    </label>

                    <input
                      type="text"
                      id="username"
                      className="form-control form-control-lg"
                      placeholder="username..."
                    />
                  </div>
                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <label
                      className="form-label d-flex justify-content-start "
                      htmlFor="form3Example3"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="abc@gmail.com"
                    />
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <label className="form-label d-flex justify-content-start" htmlFor="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="**********"
                    />
                  </div>

                  {/* Submit button */}
                  <Link
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                    to={"/"}
                  >
                    Sign up
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
