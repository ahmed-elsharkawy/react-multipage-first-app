import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
    <div className="alret alert-success p-5 m-5">
      <h1>About Page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores cum,
        quibusdam animi alias perferendis quidem quos officiis incidunt eos
        accusantium dolorum quisquam facere officia exercitationem id voluptas
        possimus quasi adipisci aliquid, placeat iste.
      </p>
    </div>

    <div className="my-5">
        <h4>Nested Routing</h4>
        <div className="m-4 p-5 border rounded">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="left">
                            <h6>Select your item</h6>
                            <ul className="list-unstyled">
                                <li><NavLink to='phone'>Phone</NavLink></li>
                                <li><NavLink to='tablet'>Tablet</NavLink></li>
                                <li><NavLink to='laptop'>Laptop</NavLink></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
