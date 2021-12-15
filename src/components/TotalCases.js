import React, { useState, useEffect } from "react";
import TotalCasesCont from "./TotalCasesCont";
export const TotalCases = () => {
  localStorage.removeItem("token");
  let date1 = new Date().toLocaleString().slice(0, 2);
  // "15/12/2021, 11:39:46 am"
  //15

  let date2 = new Date().toLocaleString().slice(0, 2) - 1;
  //14

  let month = new Date().toLocaleString().slice(3, 5);
  let year = new Date().toLocaleString().slice(6, 10);
let date = new Date().toDateString();

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const [data, setdata] = useState([{ Date:"empty",Cases: "" }]);
  async function getData() {
    const response = await fetch(
      //external api
      `https://api.covid19api.com/total/country/IN/status/confirmed?from=${year}-${month}-${date2}T00:00:00Z&to=${year}-${month}-${date1}T00:00:00Z`,
      {
        method: "GET",
      }
    );
    const json = await response.json();
    setdata(json);
  }
  
  return (
    <div className="top-more moremargin">
<div className="container">
{
  data.map((ele)=>{
return <TotalCasesCont key={ele.Date} totalcases={ele.Cases} date={date} />
  })
}

</div>

    </div>
  );
};
