import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : "http://localhost:8000/api/v1";

const userUrl = rootUrl + "/user";
const bookUrl = rootUrl + "/books";

const getUserIdFromStorage = () => {
  const user = sessionStorage.getItem("user");
  if (user) {
    const userObj = JSON.parse(user);
    return userObj?._id;
  }
  return;
};

//user section
//send data to server to add to db

export const postUser = (formData) => {
  try {
    return axios.post(userUrl, formData);
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

//login user

export const loginUser = (formData) => {
  try {
    return axios.post(userUrl + "/login", formData);
  } catch (error) {
    console.log(error);
    return { status: "error", message: error.message };
  }
};

//postBookTransaction section

export const postBookTransaction = async (formData) => {
  try {
    const userId = getUserIdFromStorage();
    if (!userId) {
      return {
        status: "error",
        message: "You must be logged in first ",
      };
    }
    const { data } = await axios.post(bookUrl, formData, {
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//delete user specific transactions
export const deleteTransactions = async (ids) => {
  try {
    const userId = getUserIdFromStorage();
    if (!userId) {
      return {
        status: "error",
        message: "Yout must be loggen in",
      };
    }

    const { data } = await axios.delete(bookUrl, {
      data: ids,
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      messsage: error.message,
    };
  }
};

export const fetchTransactions = async () => {
  try {
    const userId = getUserIdFromStorage();
    if (!userId) {
      return {
        status: "error",
        message: "Yout must be loggen in",
      };
    }

    const { data } = await axios.get(bookUrl, {
      headers: {
        Authorization: userId,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      messsage: error.message,
    };
  }
};
