import React, { useState, useEffect } from "react";
import TotalCasesCont from "./TotalCasesCont";
export const TotalCases = () => {
  localStorage.removeItem("token");
  let currentdate = new Date().toJSON().slice(8,10);
  //17
  let date1 = currentdate-1;



  let month = new Date().toJSON().slice(5,7);
  // 12
  let year = new Date().toJSON().slice(0,4);
  //2021

let completedate=new Date().toDateString();

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const [data, setdata] = useState([{ Date:"empty",Cases: "" }]);
  async function getData() {
    const response = await fetch(
      //external api
      `https://api.covid19api.com/total/country/IN/status/confirmed?from=${year}-${month}-${date1}T00:00:00Z&to=${year}-${month}-${currentdate}T00:00:00Z`,
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
  //eslint-disable-next-line
  data==""?<div className="container">Data Not Available Currently</div>:data.map((ele)=>{
return <TotalCasesCont key={ele.Date} totalcases={ele.Cases} date={completedate} />
  })
}

</div>

    </div>
  );
};
