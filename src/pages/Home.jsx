import React, { useState } from "react";
import { Link } from "react-router-dom";

export const EntidadItem = ({ entidad }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="card fixed-height">
              <div className="card-body">
                <h5 className="card-title">{entidad.numero_documento}</h5>
                <p className="card-text">
                  <strong> Razón social:</strong> {entidad.razon_social}
                </p>
                <Link
                  key={entidad.pk}
                  to={"/entidad/" + entidad.pk}
                  className="btn btn-primary"
                >
                  Visitar empresa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-md-4 mb-4">
        <div className="card card-body">
          <h4 className="card-title mt-2 mb-4"></h4>
          <div className="card-text">
            <p>
              <strong> Razón social:</strong> {entidad.razon_social}
            </p>
          </div>
          <div className="card-text">
            <p>
              <strong> Nombre Comercial:</strong> {entidad.nombre_comercial}
            </p>
          </div>
          <div className="card-text">
            <p>
              <strong>Dirección: {entidad.direccion}</strong>{" "}
            </p>
          </div>
          <div className="card-text">
            <p>
              <strong>Teléfono: {entidad.telefono}</strong>{" "}
            </p>
          </div>
          <div>
            <p className="text-muted">Descripción</p>
          </div>
          <div className=" card-text">
            <p>
              <strong>Tipo de documento: </strong>
              {entidad.tipo_documento.codigo}
            </p>
          </div>
          <div className=" card-text">
            <p>
              <strong>Nombre </strong>
              {entidad.tipo_documento.nombre}
            </p>
          </div>
          <div className="card-text">
            <p>
              <strong>Descripción </strong>
              {entidad.tipo_documento.descripcion}
            </p>
          </div>
          <div className=" card-text">
            <p>
              <strong>Tipo de contribuyente </strong>
              {entidad.tipo_contribuyente.nombre}
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};
