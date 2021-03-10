import { CONTACT_LIST } from "../../types";
import { contactApi } from "../../../services/contactApi";

export const getListContact = () => async (dispatch) => {
  const payload = await contactApi.getList();

  dispatch({
    type: CONTACT_LIST,
    payload,
  });
};
