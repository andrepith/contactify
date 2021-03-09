import axios from "axios";

const url = "https://simple-contact-crud.herokuapp.com/contact/";

export const contactApi = {
  getList: () =>
    axios
      .get(url)
      .then((res) => res.data)
      .catch((err) => console.error(err)),
  getContact: (id) =>
    axios
      .get(url + id)
      .then((res) => res.data)
      .catch((err) => console.error(err)),
  create: (data) =>
    axios
      .post(url, data)
      .then((res) => res.data)
      .catch((err) => console.error(err)),
  update: (data, id) =>
    axios
      .put(url + id, data)
      .then((res) => res.data)
      .catch((err) => console.error(err)),
  delete: (id) =>
    axios
      .delete(url + id)
      .then((res) => res.data)
      .catch((err) => console.error(err)),
};
