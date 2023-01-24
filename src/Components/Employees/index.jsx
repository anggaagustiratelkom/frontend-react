import React, { useEffect, useState, useRef } from "react";
import { Modal } from "bootstrap";
import "./index.css";

const Index = () => {
  const [employees, setEmployees] = useState([]);
  //   const [modal, setModal] = useState([]);
  const parseExpectionModal = useRef();

  const retrieveData = () => {
    fetch("http://127.0.0.1:3100/employees")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEmployees(data);
      });
  };

  //   const modalView = () => {
  //     const modal = new Modal(parseExpectionModal.current, { keyboard: false });
  //     setModal(modal);
  //     modal.show();
  //   };

  useEffect(() => {
    retrieveData();
    // modalView();
  }, []);

  const data = () => {
    const [idEmployee, setidEmployee] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(idEmployee);
    console.log(name);
    console.log(email);
    console.log(password);
  };

  return (
    <div className="m-4">
      <h1 className="text-center">Employees</h1>

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#inputPegawai">
        Tambah Pegawai
      </button>

      <div
        className="modal fade"
        id="inputPegawai"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="inputPegawaiLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="inputPegawai Label">
                Tambah Data Pegawai
              </h5>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="mb-3">
                  <label
                    htmlFor="inputIdEmployee"
                    className="form-label me-md-2">
                    ID Employee
                  </label>
                  <input
                    type="number"
                    name="inputIdEmployee"
                    id="inputIdEmployee"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label me-md-2">
                    Nama
                  </label>
                  <input type="text" name="inputName" id="inputName" />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label me-md-2">
                    Email
                  </label>
                  <input type="email" name="inputEmail" id="inputEmail" />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword" className="form-label me-md-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="inputPassword"
                    id="inputPassword"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Batal
              </button>
              <button type="button" className="btn btn-success">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>

      <table className="table table-bordered mt-5">
        <thead>
          <tr>
            <th>ID Employee</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        {employees.length > 0 && (
          <tbody>
            {employees.map((employee) => (
              <tr>
                <>
                  <td>{employee.id_employee}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-warning me-md-2">
                      Ubah
                    </button>
                    <button type="button" className="btn btn-danger">
                      Hapus
                    </button>
                  </div>
                </>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Index;
