import React from "react";
import { Header } from "./Header";
import Container from "react-bootstrap/esm/Container";
export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Container className="mt-5" style={{ minHeight: "70vh" }}>
        {children}
      </Container>
      <footer className="text-center bg-dark text-light p-5 mt-5">
        &copy; All rights reserved 2022 || Made with inspiration
      </footer>
    </div>
  );
};
