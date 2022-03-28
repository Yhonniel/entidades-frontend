import axios from "axios";
import React, { useEffect, useState } from "react";
import * as Entidades_api from "../../utils/Entidades_api";
import { ENTIDADES_API } from "../../utils/Entidades_api";
import { EntidadItem } from "../../pages/Home";

export const EntidadesList = () => {
  const [entidades, setEntidades] = useState([]);

  // const listEntidades = async () => {
  //   try {
  //     const res = await Entidades_api.listEntidades();
  //     const data = await res.json();
  //     setEntidades(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    ENTIDADES_API.get(`/entidades/`).then((res) => {
      setEntidades(res.data);
      console.log(res);
    });
  }, []);

  return (
    <>
      <div>
        {entidades.map((entidad) => (
          // <h2>{entidad.pk}</h2>
          <EntidadItem key={entidad.pk} entidad={entidad} />
        ))}
      </div>
    </>
  );
};
