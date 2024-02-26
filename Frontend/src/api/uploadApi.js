import axios from "axios";
const url = "http://localhost:8000";
export const upload = (file, setData) => {
  const formData = new FormData();

  formData.append("file", file);
  axios({
    method: "post",
    url: `${url}/upload`,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((response) => {
      setData(response.data.response.tables);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const getSource = (setSource) => {
  
  axios({
    method: "get",
    url: `${url}/getSourceJson`,
  })
    .then((response) => {
      console.log(response.data.response.tables);
      setSource(response.data.response.tables);
    })
    .catch((error) => {
      console.error(error);
    });
};
