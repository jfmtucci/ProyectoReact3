import "../../App.css";
import { useState } from "react";

export const Login = () => {
  const [errMess, setErrMess] = useState({
    resEmail: "",
    resPassword: "",
  });
  const emailPattern =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const newErrMess = {
    resEmail: "",
    resPassword: "",
  };
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let ok = true;

    if (!form.email) {
      newErrMess.resEmail = "Debe ingresar un Email válido";
      ok = false;
    } else if (!emailPattern.test(form.email)) {
      newErrMess.resEmail = `Formato de Email no válido
           \n ejemplo@algo.com`;
      ok = false;
    }
    if (!form.password) {
      newErrMess.resPassword = "Debe ingresar una contraseña";
      ok = false;
    } else if (form.password.length < 6) {
      newErrMess.resPassword = "La contraseña debe tener mas de 6 caracteres";
      ok = false;
    }

    setErrMess(newErrMess);

    if (ok) {
      setSuccessMessage("Informacion Registrada Exitosamente");

      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);
      setForm({
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <div className="modal-content">
        <div className="modal-body">
          <form className="d-flex flex-column justify-content-center gap-2">
            <div>
              <h6 className="text-danger">{errMess.resEmail}</h6>
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                title="Ingresar un correo valido"
                required
              />
            </div>
            <div>
              <h6 className="text-danger">{errMess.resPassword}</h6>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>

            <h4 className="text-success">{successMessage}</h4>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Guardar cambios
            </button>
          </form>
        </div>

        <div className="modal-footer"></div>
      </div>
    </>
  );
};
