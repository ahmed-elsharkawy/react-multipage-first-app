import React from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  let { id } = useParams();
  console.log(id);
  return (
    <div className="alret alert-info p-5 m-5">
      <h1>Profile Page</h1>
      <p>current user id : {id}</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores cum,
        quibusdam animi alias perferendis quidem quos officiis incidunt eos
        accusantium dolorum quisquam facere officia exercitationem id voluptas
        possimus quasi adipisci aliquid, placeat iste.
      </p>
    </div>
  );
}
