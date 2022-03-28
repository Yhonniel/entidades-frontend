import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ENTIDADES_API } from "../utils/Entidades_api";

export const Entidad = () => {
  const { id } = useParams();
  const [entidad, setEntidad] = useState({});

  useEffect(() => {
    ENTIDADES_API.get(`/entidad/${id}/`).then((res) => {
      console.log(res);
      setEntidad(res.data);
    });
  }, [id]);

  return (
    <>
      <section className="bg-light">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-5 mt-5">
              <div className="card mb-3">
                <img
                  id="comic_image"
                  className="card-img img-fluid"
                  src="https://img.freepik.com/foto-gratis/angulo-vista-rascacielos_1359-1105.jpg?t=st=1648506606~exp=1648507206~hmac=dc2e0403f20eb2e65714812f84ff45ff25578f921509833a6cdf7731a33f1259&w=2000"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-7 mt-5">
              <div id="comic_card" className="card h-100">
                <div className="card-body">
                  <h1 id="title" className="h2">
                    {entidad.numero_documento}
                  </h1>
                  <p id="price" className="h3 py-2">
                    {entidad.razon_social}
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Nombre comercial:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted">
                        <strong id="format">{entidad.nombre_comercial}</strong>
                      </p>
                    </li>
                  </ul>

                  <h6>Description:</h6>
                  {/* <p>Direccion: {entidad.direccion}</p> */}
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Dirección :</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted">
                        <strong id="stock">{entidad.direccion} </strong>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
