import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import "../App.css";

const LifeStyle = () => {
  const [load, setLoad] = useState(true);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const obtenerContents = async () => {
      const url = "https://thronesapi.com/api/v2/Characters";
      const result = await axios.get(url);

      //console.log(result.data);

      setContents(result.data);
      setLoad(false);
    };
    obtenerContents();
  }, []);

  //console.log(contents[0]);

  return (
    <Fragment>
      <div className="containerTop">
        <div className="containertopLeft">
          <div className="containerleftResp">
            <div className="containerimgSmall">
                {contents !== undefined && contents.length === 0 ? (<p>Cargando ...</p>) : 
                (
                    <img src={contents[0].imageUrl} alt="imgbloobergl" />
                )}
            </div>
            <div className="containerTitle">
                {contents !== undefined && contents.length === 0 ? (<p>Cargando ...</p> ) : (
                    <h2>{contents[0].title}</h2>
                )}
            </div>
          </div>
          <div className="containerlrBottom">
            <div className="containerimgSmall">
                {contents !== undefined && contents.length === 0 ? (<p>Cargando ...</p>) : 
                (
                    <img src={contents[1].imageUrl} alt="imgbloobergl" />
                )}
            </div>
            <div className="containerTitle">
                {contents !== undefined && contents.length === 0 ? (<p>Cargando ...</p> ) : (
                    <h2>{contents[1].title}</h2>
                )}
            </div>
          </div>
        </div>
        <div className="containertopCenter">
          <div className="containerimgCenter">
                {contents !== undefined && contents.length === 0 ? (<p>Cargando ...</p>) : 
                (
                    <img src={contents[2].imageUrl} alt="imgbloobergl" />
                )}
          </div>
          <div className="containertitleCenter">
                {contents !== undefined && contents.length === 0 ? (<p>Cargando ...</p> ) : (
                    <h2>{contents[2].title}</h2>
                )}
          </div>
        </div>
        <div className="containertopRight">
          <div className="containerrightTop">
            <div className="containerimgSmall">
                {contents !== undefined && contents.length === 0 ? (<p>Cargando ...</p>) : 
                (
                    <img src={contents[3].imageUrl} alt="imgbloobergl" />
                )}
            </div>
            <div className="containerTitle">
                {contents !== undefined && contents.length === 0 ? (<p>Cargando ...</p> ) : (
                    <h2>{contents[3].title}</h2>
                )}
            </div>
          </div>
          <div className="containerlrBottom">
            <div className="containerimgSmall">
                {contents !== undefined && contents.length === 0 ? (<p>Cargando ...</p>) : 
                (
                    <img src={contents[4].imageUrl} alt="imgbloobergl" />
                )}
            </div>
            <div className="containerTitle">
                {contents !== undefined && contents.length === 0 ? (<p>Cargando ...</p> ) : (
                    <h2>{contents[4].title}</h2>
                )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LifeStyle;
