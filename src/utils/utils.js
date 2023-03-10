import axios from "axios";

export const getAllDevices = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/userdevice`
    );
    return response.data;
  } catch (e) {
    return e.message;
  }
};

export const addNewDevice = async (payload) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/userdevice/add`,
      payload
    );
    return response.data[0];
  } catch (e) {
    return e.message;
  }
};
