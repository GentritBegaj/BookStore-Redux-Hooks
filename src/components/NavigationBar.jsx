import React from "react";
import { Navbar } from "react-bootstrap";
import { BookmarkStarFill } from "react-bootstrap-icons";
import ThemeToggler from "./ThemeToggler";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default withRouter(function NavigationBar() {
  const history = useHistory();

  return (
    <Navbar className={`styled-navbar no-select text-white bg-primary`}>
      <ThemeToggler />
      {window.location.pathname !== "/favourites" && (
        <div
          className="d-flex align-items-center ml-auto cursor-pointer"
          onClick={() => history.push("/favourites")}
        >
          <BookmarkStarFill className="mx-2" />
          Favourite Books
        </div>
      )}
    </Navbar>
  );
});
