import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { getListContact } from "../../store/actions";
import { contactApi } from "../../services/contactApi";
import Card from "../../components/Card";
import UserForm from "../../components/Form";

import { customStyles } from "./properties";

const Contactify = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { contactList } = useSelector((state) => state);
  const closeModal = () => setShowModal(false);
  const fetchApi = useCallback(() => {
    try {
      dispatch(getListContact());
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  const createUser = () => {
    setShowModal(true);
  };

  const handleNewUser = (fields) => {
    contactApi
      .create(fields)
      .then(() => {
        fetchApi();
        setShowModal(false);
      })
      .catch((err) => console.error(err));
  };

  const handleEdit = (contact) => () => {
    setShowModal(true);
  };

  const handleRemove = (contact) => () => {};

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return (
    <>
      <div>
        <div className="contact-management__header mt-4">
          <h1 className="text-white">Contact Management</h1>
          <div className="my-auto card btn btn-add" onClick={createUser}>
            Add new user
          </div>
        </div>
        <div className="list-items p-4">
          {contactList?.map((contact, key) => (
            <Card
              contact={contact}
              key={key}
              handleEdit={handleEdit}
              handleRemove={handleRemove}
            />
          ))}
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <UserForm handleNewUser={handleNewUser} userData={contactList} />
      </Modal>
    </>
  );
};

Modal.setAppElement("#root");

export default Contactify;
