import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ENTIDADES_API } from "../../utils/Entidades_api";

export const EntidadForm = () => {
  const [selectedTipoDocumento, setselectedTipoDocumento] = useState([]);
  const [selectedTipoContribuyente, setselectedTipoContribuyente] = useState(
    []
  );

  useEffect(() => {
    ENTIDADES_API.get(`/tipo-documentos/`).then((res) => {
      setselectedTipoDocumento(res.data);
      console.log(res);
    });
  }, []);

  useEffect(() => {
    ENTIDADES_API.get(`/tipo-contribuyentes/`).then((res) => {
      setselectedTipoDocumento(res.data);
      console.log(res);
    });
  }, []);

  //const [codigo, setCodigo] = useState("");
  //const [nombre, Setnombre] = useState("");
  //const [descripcion, setDescripcion] = useState("");
  // const [razonSocial, setRazonSocial] = useState("");
  // const [nombreComercial, setNombreComercial] = useState("");
  // const [telefono, setTelefono] = useState("");
  // const [direccion, setDireccion] = useState("");

  //const registerEntidad = (event) => {
  //event.preventDefault();
  // const body = {
  // codigo: codigo,
  // nombre: nombre,
  // descripcion: descripcion,
  //};
  // console.log(body);
  // ENTIDADES_API.post("/api/tipo-documentos", body)
  // .then((res) => {
  //     console.log(res);
  // })
  //   .catch((error) => console.log(error));

  return (
    <div className="container pb-5">
      <div className="col-md-3 mx-auto">
        <h2 className="mb-3 text-center">Entidad</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Tipo de documento</label>
            <select
              name="tipodedocumento"
              type="select-multiple"
              value={[]}
              className="form-select"
              onChange={(e) => setselectedTipoDocumento(e.currentTarget.value)}
            >
              <option selected>Open this select menu</option>
              {selectedTipoDocumento.map((tipoDocumento) => {
                return (
                  <option key={tipoDocumento.pk} value={tipoDocumento.pk}>
                    {tipoDocumento.nombre}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Tipo de contribuyente</label>
            <input
              type="text"
              name="contribuyenteId"
              // value={contribuyenteId}
              // onChange={(event) =>
              //   setContribuyenteId(event.currentTarget.value)
              // }
              className="form-control"
              minLength="2"
              maxLength="50"
              autoFocus
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Numero de documento</label>
            <input
              type="text"
              name="documentoNumero"
              // value={documentoNumero}
              // onChange={(event) =>
              //   setDocumentoNumero(event.currentTarget.value)
              // }
              className="form-control"
              autoFocus
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Razon Social</label>
            <input
              type="text"
              name="razonSocial"
              // value={razonSocial}
              // onChange={(event) => setRazonSocial(event.currentTarget.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nombre Comercial</label>
            <input
              type="text"
              name="nombreComercial"
              // value={nombreComercial}
              // onChange={(event) =>
              //   setNombreComercial(event.currentTarget.value)
              // }
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Telefono</label>
            <input
              type="text"
              name="telefono"
              // value={telefono}
              // onChange={(event) => setTelefono(event.currentTarget.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Direción</label>
            <input
              type="text"
              name="direccion"
              // value={direccion}
              // onChange={(event) => setDireccion(event.currentTarget.value)}
              className="form-control"
              required
            />
          </div>
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-block btn-success"
              // onClick={registerEntidad}
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
