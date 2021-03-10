import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { getListContact } from "../../store/actions";
import Card from "../../components/Card";

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
        <h1>Contact Management</h1>
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
        <div>Henlo</div>
      </Modal>
    </>
  );
};

Modal.setAppElement("#root");

export default Contactify;
