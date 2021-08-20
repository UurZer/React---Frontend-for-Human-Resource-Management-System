import React from "react";
import { Link } from "react-router-dom";
import "./LoggedIn.css"
export default function LoggedIn() {
  return (
    <div>
      <Link to="/profile">
        <button className="font-weight-light border btn btn-light rounded shadow-sm p-1 my-auto">
          <img
            src="https://res.cloudinary.com/uurzer/image/upload/v1624189984/v6stublypkekbodqo9ja.jpg"
            className="logged-in-profile-picture mr-1 shadow profile-picture"
            alt="profilePicture"
          ></img>
          <strong className="small">Uğur ÖZER</strong>
        </button>
      </Link>
    </div>
  );
}
