import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Pagination({ page }) {
  let { id } = useParams();
  return (
    <Link to={"/" + page} className="">
      <span id={page} className="target:bg-white">
        {page}
      </span>
    </Link>
  );
}
