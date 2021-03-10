const Card = ({ contact, handleEdit, handleRemove }) => {
  return (
    <div className="card p-2">
      <div>
        Name: {contact?.firstName} {contact?.lastName}
      </div>
      <div>Age: {contact?.age}</div>
      <div className="d-flex justify-content-end mt-2">
        <div onClick={handleEdit(contact)} className="card px-4 mr-2 btn">
          Edit
        </div>
        <div onClick={handleRemove(contact)} className="card px-4 btn">
          Delete
        </div>
      </div>
    </div>
  );
};

export default Card;
