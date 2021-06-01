import React, { useState, useEffect, useCallback } from "react";
import {
  Col,
  Container,
  Row,
  ButtonGroup,
  DropdownButton,
  Pagination,
  Button,
} from "react-bootstrap";
import { ArrowCounterclockwise } from "react-bootstrap-icons";
import uniqid from "uniqid";
import Book from "./Book";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const categories = ["scifi", "romance", "horror", "history", "fantasy"];
const endpoint = "https://be-strive-bookstore.herokuapp.com/books";

export default function Main() {
  const [category, setCategory] = useState(categories[0]);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [pages, setPages] = useState(10);
  const [selectedPage, setSelectedPage] = useState(1);
  const [bookList, setBooklist] = useState(BOOKLIST);

  useEffect(() => {
    const newOffset = (selectedPage - 1) * limit;
    setOffset(newOffset);
  }, [selectedPage, limit]);

  const query = `?category=${category}&limit=${limit}&offset=${offset}`;

  const fetchBooks = useCallback(async () => {
    const response = await fetch(endpoint + query);
    const { numberOfItems, data } = await response.json();

    const nOfPages = Math.ceil(numberOfItems / limit);

    setPages(nOfPages);
    setBooklist(data);
  }, [query, limit]);

  useEffect(fetchBooks, [fetchBooks]);

  return (
    <Container>
      <Row>
        <Col xs={12} className="d-flex justify-content-center mt-5 pt-3">
          <Pagination>
            {(() => {
              let items = [];
              for (let pageN = 1; pageN <= pages; pageN++) {
                items.push(
                  <Pagination.Item
                    key={uniqid()}
                    active={pageN === selectedPage}
                    onClick={() => {
                      setSelectedPage(pageN);
                    }}
                  >
                    {pageN}
                  </Pagination.Item>
                );
              }
              return items;
            })()}
          </Pagination>
        </Col>
        <Col xs={4} className="d-flex flex-column justify-content-around">
          <span>Category:</span>
          <DropdownButton as={ButtonGroup} variant="primary" title={category}>
            {categories.map((category, index) => (
              <DropdownItem
                key={uniqid()}
                onClick={() => setCategory(categories[index])}
              >
                {category}
              </DropdownItem>
            ))}
          </DropdownButton>
        </Col>
        <Col xs={4} className="d-flex flex-column justify-content-around">
          <span>Items per page:</span>
          <DropdownButton as={ButtonGroup} variant="primary" title={limit}>
            {[10, 20, 30].map((number) => (
              <DropdownItem key={uniqid()} onClick={() => setLimit(number)}>
                {number}
              </DropdownItem>
            ))}
          </DropdownButton>
        </Col>
        <Col xs={4} className="d-flex flex-column justify-content-around">
          <span>Refresh:</span>
          <Button onClick={fetchBooks}>
            <ArrowCounterclockwise />
          </Button>
        </Col>
        {bookList.map((book, index) => (
          <Book book={book} index={index} offset={offset} key={uniqid()} />
        ))}
      </Row>
    </Container>
  );
}

const BOOKLIST = [
  {
    asin: "1940026091",
    title: "Pandemic (The Extinction Files, Book 1)",
    img: "https://images-na.ssl-images-amazon.com/images/I/91xrEMcvmQL.jpg",
    price: 7.81,
    category: "scifi",
  },
  {
    asin: "0425264041",
    title: "Shards of Hope (Psy-Changeling Novel, A)",
    img: "https://images-na.ssl-images-amazon.com/images/I/91ku%2B0LppPL.jpg",
    price: 7.59,
    category: "scifi",
  },
  {
    asin: "1250082757",
    title: "Born of Vengeance: The League: Nemesis Rising",
    img: "https://images-na.ssl-images-amazon.com/images/I/91J28bj3PYL.jpg",
    price: 26.09,
    category: "scifi",
  },
  {
    asin: "045146799X",
    title: "Gameboard of the Gods",
    img: "https://images-na.ssl-images-amazon.com/images/I/81-vppSolJL.jpg",
    price: 7.59,
    category: "scifi",
  },
  {
    asin: "1101987790",
    title: "Silver Silence (Psy-Changeling Trinity)",
    img: "https://images-na.ssl-images-amazon.com/images/I/91eGxsWGH7L.jpg",
    price: 17.6,
    category: "scifi",
  },
  {
    asin: "0987575422",
    title:
      "The Battle of Evernight - Special Edition: The Bitterbynde Book #3 (The Bitterbynde Trilogy)",
    img: "https://images-na.ssl-images-amazon.com/images/I/51vw%2Bn7xZCL.jpg",
    price: 9.6,
    category: "scifi",
  },
  {
    asin: "1492667137",
    title: "Nightchaser",
    img: "https://images-na.ssl-images-amazon.com/images/I/514%2BSppz8AL.jpg",
    price: 4.84,
    category: "scifi",
  },
  {
    asin: "1635551226",
    title: "Proxima Five",
    img: "https://images-na.ssl-images-amazon.com/images/I/61pDS5vOIdL.jpg",
    price: 16.34,
    category: "scifi",
  },
  {
    asin: "1773840509",
    title: "The Cyborg's Stowaway: In the Stars Romance (Gypsy Moth)",
    img: "https://images-na.ssl-images-amazon.com/images/I/51mV63NrjdL.jpg",
    price: 3.73,
    category: "scifi",
  },
  {
    asin: "1732587035",
    title: "Apparent Power: Diazem Trilogy, Book One",
    img: "https://images-na.ssl-images-amazon.com/images/I/61Q5NcIAeaL.jpg",
    price: 8.65,
    category: "scifi",
  },
];
