import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../component/custom-input/CustomInput";
import { Layout } from "../component/layout/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../utils/axiosHelper";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "yahoo@gmail.com",
    pin: 1234,
  });
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const inputFields = [
    {
      label: "Email",
      placeholder: "your@gmail.com",
      required: true,
      name: "email",
      type: "email",
      value: form.email,
    },
    {
      label: "password",
      placeholder: "1234",
      required: true,
      name: "pin",
      type: "number",
      min: 1000,
      max: 9999,
      value: form.pin,
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { data } = await loginUser(form);
    setResponse(data);
    if (data.status === "success") {
      navigate("/dashboard");
    }

    sessionStorage.setItem("user", JSON.stringify(data.user));
  };
  console.log(response);

  return (
    <Layout>
      <Form className="login-page" onSubmit={handleOnSubmit}>
        <h2>Welcome to Login Page!</h2>
        <hr />

        {response.message && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )}

        {inputFields.map((item) => (
          <CustomInput {...item} onChange={handleOnChange} />
        ))}

        <Button variant="primary" type="submit">
          Login
        </Button>

        <div className="text-end">
          New here? <Link to="/register"> register </Link>
        </div>
      </Form>
    </Layout>
  );
};

export default Login;
