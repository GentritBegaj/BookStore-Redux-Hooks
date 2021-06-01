import Book from "./Book";
import uniqid from "uniqid";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Favourites(props) {
  const fav = useSelector((state) => state.fav);
  return (
    <Container>
      <Row>
        {fav.length > 0 ? (
          fav.map((book) => (
            <Book book={book} key={uniqid()} isFavourite={true} />
          ))
        ) : (
          <Col xs={6} className="mx-auto my-5 text-muted">
            Click on the bookmark icons to add new favourites to this list
          </Col>
        )}
      </Row>
    </Container>
  );
}
