import "./../styles/Reprogrammation.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Branddetails()
{

  const {brandname} = useParams();
  
  const [mods, setMods] = useState([]);
  const [selectedMod, setSelectedMod] = useState(null);
  const [yrs, setYrs] = useState([]);
  const [pws, setPws] = useState([]);

  useEffect(() => {
        document.title = `${brandname} - PSK Performance`;
        axios.post("http://localhost:8000/brand", {brandname})
        .then((res)=> setMods(res.data));
      }, [brandname]);

      const handleModelClick=(mname)=>{
        setSelectedMod(mname);
        setPws([]);
        axios.post("http://localhost:8000/brand/model/year", {brandname, mname})
        .then((res)=>setYrs(res.data));
      }

      const handleYearClick=(yvalue)=>{
        axios.post(`http://localhost:8000/brand/model/year/power`, {brandname, selectedMod, yvalue})
        .then((res)=>setPws(res.data));
      }

    	return (<div className="motod">
        <p className="motop1">Choose A Motor Type</p>
        <p>PSK Performance has no particular commercial relationship with these	brands, therefore logos are for information only.</p>
        <h2>{brandname.toUpperCase()}</h2>
        <div className="motohead"><div className="models">{mods.length > 0 && (<ul>{mods.map((item) => (
                <li key={item} onClick={() => handleModelClick(item)}>
                  {item}
                </li>))}</ul>)}</div>
        <div className="years">{yrs.length > 0 && (<ul>{yrs.map((item) => (
                <li key={item} onClick={() => handleYearClick(item)}>
                  {item}
                </li>
              ))}</ul>)}</div>
        <div className="powers">{pws.length > 0 && (<ul>{pws.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}</ul>)}</div>
	      </div>
        </div>);
}

export default Branddetails;
