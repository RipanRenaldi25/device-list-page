export const fetchDevices = () => {
  return {
    type: "FETCH_DEVICE",
  };
};

export const fetchDeviceSuccess = (payload) => {
  return {
    type: "FETCH_DEVICE_SUCCESS",
    payload,
  };
};
export const fetchDeviceFailed = (err) => {
  return {
    type: "FETCH_DEVICE_FAILED",
    payload: err,
  };
};
