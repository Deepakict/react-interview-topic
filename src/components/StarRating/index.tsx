import React, { useState } from "react";
import "./styles.css";
interface StarRatingProps{
    limits:number;
    rating:number;
}
export default function StarRating(props:StarRatingProps) {
  const limits = props.limits || 5;

  const [rating, satRating] = useState(props.rating || 2);

  const handleChange = (e:any) => {
    console.log("e.target.getAttribute",e.target.getAttribute("data"))
    satRating(e.target.getAttribute("data"));
  };
  return (
    <div>
      {[...new Array(limits).keys()].map((i) => (
        <span
          onClick={handleChange}
          key={i}
          data={i + 1}
          className={i < rating ? "starRating" : "star"}
        />
      ))}
    </div>
  );
}
