import mockAxios from "axios";
import { contactApi } from "../index";

const mockedData = {
  message: "Get contacts",
  data: [
    {
      id: "93ad6070-c92b-11e8-b02f-cbfa15db428b",
      firstName: "Bilbo",
      lastName: "Baggins",
      age: 100,
      photo:
        "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
    },
  ],
};

it("should call list contact", async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve(mockedData));
  const data = await contactApi.getList();

  expect(data).toEqual(mockedData);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    "https://simple-contact-crud.herokuapp.com/contact"
  );
});
