import React,{useState} from "react";
import { BookAVaccine } from "../components/BookAVaccine";
import { Admin } from "../components/Admin";
import { Signup } from "../components/Signup";
import { Searchbypin } from "../components/Searchbypin";
import { Searchedtable } from "../components/Searchedtable";


const host = "localhost:5000";
export const mContext = React.createContext(

  
);



export default function MainContext () {

    //fetch hospital details commonn
    const [hospitalDetails, sethospitalDetails] = useState();
    sethospitalDetails([
      {
        "_id": "61b4493869ae803680159f47",
        "name": "abc Hospital",
        "address": "near jaygayatri dombivli east",
        "pincode": "421201",
        "vaccineType": "covaxin",
        "slots": 17,
        "date": "21 december 2021",
        "time": "2:30am",
        "__v": 0
      }
    ]);

    // async function fetchhospitaldetails(){
    //     const response = await fetch(`${host}/api/hosp/fetchhosptdetails` ,{
    //         method: 'GET', 
    //         mode: 'cors', 
    //         cache: 'no-cache', 
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({pincode:"421201"}) // body data type must match "Content-Type" header
    //       });
    //       const json = await response.json();
    //       sethospitalDetails(json);
    // }
    



    return (
        <div>
            
<mContext.Provider value={{hospitalDetails}}>
<Searchbypin />
</mContext.Provider>
        </div>
    )
}

