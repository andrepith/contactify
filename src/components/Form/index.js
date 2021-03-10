import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserForm = ({ handleNewUser, handleEditUser, editData }) => {
  const isEdit = !!Object.keys(editData).length;
  return (
    <Formik
      initialValues={{
        firstName: isEdit ? editData?.firstName : "",
        lastName: isEdit ? editData?.lastName : "",
        age: isEdit ? editData?.age : "",
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        age: Yup.string()
          .matches(
            /(?=^\d+$)(?=^(0|[1-9][0-9]?|100)$)/,
            "Age must be number and between 1 and 100"
          )
          .required("Age is required"),
      })}
      onSubmit={(fields) => {
        const data = {
          ...fields,
          age: Number(fields.age),
        };
        if (isEdit) {
          return handleEditUser(data);
        } else {
          return handleNewUser(data);
        }
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="employee_name">First Name</label>
            <Field
              name="firstName"
              type="text"
              className={
                "form-control" +
                (errors.firstName && touched.firstName ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group">
            <label htmlFor="employee_name">Last Name</label>
            <Field
              name="lastName"
              type="text"
              className={
                "form-control" +
                (errors.lastName && touched.lastName ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group">
            <label htmlFor="employee_name">Age</label>
            <Field
              name="age"
              type="text"
              className={
                "form-control" +
                (errors.age && touched.age ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="age"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group justify-content-end d-flex">
            <button type="submit" className="btn btn-primary mr-2">
              {isEdit ? "Update Data Contact" : "Add New Contact"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
