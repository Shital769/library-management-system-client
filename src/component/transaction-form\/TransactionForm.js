import React from "react";
import { useState } from "react";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { postBookTransaction } from "../../utils/axiosHelper";
import { toast } from "react-toastify";
const initialState = {
  bookTitle: "",
  isbn: "",
  author: "",
  summary: "",
  rating: "",
  publishedYear: "",
};

export const TrasnsactionForm = ({ getTransaction }) => {
  const [trasnsactionForm, setTransactionForm] = useState(initialState);
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);

    setTransactionForm({
      //using destructure method
      ...trasnsactionForm,
      [name]: value,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log(transactioForm);

    //call the api to send data to database
    const { status, message } = await postBookTransaction(trasnsactionForm);
    console.log(status, message);
    toast[status](message);
    toast(message);
  };

  return (
    import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }} onSubmit = {handleOnSubmit} >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text onChange={handleOnChange}
         publishedYear >
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
  )
};
