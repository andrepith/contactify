import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListContact } from "../../store/actions";
import Card from "../../components/Card";

const Contactify = () => {
  const dispatch = useDispatch();
  const { contactList } = useSelector((state) => state);
  const fetchApi = useCallback(() => {
    try {
      dispatch(getListContact());
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  const handleEdit = (contact) => () => {};

  const handleRemove = (contact) => () => {};

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return (
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
  );
};

export default Contactify;
