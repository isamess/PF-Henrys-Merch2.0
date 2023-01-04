export const url = "http://localhost:3001/api";

export const setHeaders = () => {
  const headers: any = {
    headers: {
      "x-auth-token": localStorage.getItem("token"),
    },
  };

  return headers;
};
