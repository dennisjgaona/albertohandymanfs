import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { servicesPagesInfo } from "../utils";

export default function ServicesDetail() {
  const [data, setData] = useState({});

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    setData(servicesPagesInfo.find((obj) => obj.id === id));
  }, []);

  return (
    <>
      <div className="services-detail-hero">
        <div>
          <h1>{data && data.heroName}</h1>
          <form></form>
        </div>
      </div>
      <div>
        <h2>{data ? data.mainTitle : ""}</h2>
        <p className="services-detail-paragraph">
          {data ? data.mainDescription : ""}
        </p>
        <img src={data && data.imgSrc} alt={data && data.heroName}></img>
      </div>
    </>
  );
}
