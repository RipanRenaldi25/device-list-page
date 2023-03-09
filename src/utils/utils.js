import axios from "axios";

export const getAllDevices = async () => {
  try {
    const response = await axios.get(
      `http://${process.env.REACT_APP_BASE_URL}/userdevice`
    );
    return response.data;
  } catch (e) {
    return e.message;
  }
};

export const addNewDevice = async (payload) => {
  try {
    const response = await axios.post(
      "172.16.27.222:8080/api/userdevice/add",
      payload
    );
    return response.data[0];
  } catch (e) {
    return e.message;
  }
};
