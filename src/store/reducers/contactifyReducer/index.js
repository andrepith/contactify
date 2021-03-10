import { CONTACT_LIST } from "../../types";

export const contactList = (state = [], { type, payload }) => {
  switch (type) {
    case CONTACT_LIST:
      return payload?.data;
    default:
      return state;
  }
};
