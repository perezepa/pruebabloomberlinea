import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const LifeStyle = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const obtenerContents = async () => {
      const url = "https://thronesapi.com/api/v2/Characters";
      const result = await axios.get(url);
      setContents(result.data);
    };
    obtenerContents();
  }, []);

  return (
    <Fragment>
      <div className="titleApp">
        <h1>
          <strong>
            Prueba Técnica Bloomberg <span>Línea</span>
          </strong>
        </h1>
      </div>
      {contents !== undefined && contents.length === 0 ? (
        <p>Cargando ...</p>
      ) : (
        <div className="containerTop">
          <div className="containertopLeft">
            <div className="containerleftResp">
              <div className="containerimgSmall">
                <img src={contents[0].imageUrl} alt="imageUrl" />
              </div>
              <div className="containerTitle">
                <div>
                  <h2>
                    {`${contents[0].title}`}{" "}
                    <span>{` rompedora de Cadenas ...`}</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="containerlrBottom">
              <div className="containerimgSmall">
                <img src={contents[1].imageUrl} alt="imageUrl" />
              </div>
              <div className="containerTitle">
                <h2>
                  {`${contents[1].title}`}{" "}
                  <span>{` considerado un miembro superior de la orden ....`}</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="containertopCenter">
            <div className="containerimgCenter">
              <img src={contents[2].imageUrl} alt="imageUrl" />
            </div>
            <div className="containertitleCenter">
              <h2>
                {`${contents[2].title}`}{" "}
                <span>{` considerado un gran estratega ....`}</span>
              </h2>
            </div>
          </div>
          <div className="containertopRight">
            <div className="containerrightTop">
              <div className="containerimgSmall">
                <img src={contents[3].imageUrl} alt="imageUrl" />
              </div>
              <div className="containerTitle">
                <h2>
                  {`${contents[3].title}`}{" "}
                  <span>{` trono de Hierro de los Siete Reinos ....`}</span>
                </h2>
              </div>
            </div>
            <div className="containerlrBottom">
              <div className="containerimgSmall">
                <img src={contents[4].imageUrl} alt="imageUrl" />
              </div>
              <div className="containerTitle">
                <h2>
                  {`${contents[4].title}`}{" "}
                  <span>{` la novela de estética medieval....`}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default LifeStyle;
