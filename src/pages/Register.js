import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { CustomInput } from "../component/custom-input/CustomInput";
import { Layout } from "../component/layout/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { postUser } from "../utils/axiosHelper";

export const Register = () => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setForm({
      //using destructure method
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const { data } = await postUser(form);
    setResponse(data);
  };

  const inputFields = [
    {
      label: "First Name",
      placeholder: "John ",
      required: true,
      name: "name",
      type: "text",
    },
    {
      label: "Last Name",
      placeholder: "John ",
      required: true,
      name: "name",
      type: "text",
    },
    {
      label: "Email",
      placeholder: "your@gmail.com",
      required: true,
      name: "email",
      type: "email",
    },
    {
      label: "Password",
      placeholder: "1234",
      required: true,
      name: "password",
      type: "number",
      min: 1000,
      max: 9999,
    },
    {
      label: "Confirm Password",
      placeholder: "1234",
      required: true,
      name: "password",
      type: "number",
      min: 1000,
      max: 9999,
    },
  ];

  console.log(form);

  return (
    <Layout>
      <Form className="login-page" onSubmit={handleOnSubmit}>
        <h2>Register here!</h2>
        <hr />

        <Form.Select
          onChange={handleOnChange}
          name="type"
          required
        >
          <option>Please select your ID</option>
          <option type="text" value="student">
            Student
          </option>
          <option type="text" value="teacher ">
            Teacher
          </option>
        </Form.Select>


        {response.message && (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        )}

        {inputFields.map((item) => (
          <CustomInput {...item} onChange={handleOnChange} />
        ))}

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className="text-end mt-5">
          Already have an account? <Link to="/">Login now</Link>
        </div>
      </Form>
    </Layout>
  );
};
export default Register;
