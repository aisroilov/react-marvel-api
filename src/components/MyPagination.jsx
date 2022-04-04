import React from "react";
import { Col, Pagination, Container, Row } from "react-bootstrap";

const MyPagination = ({
  totalPages,
  currentPage,
  maxPageLimit,
  handleClick,
}) => {
  const onPageChange = (pageNumber) => {
    handleClick(pageNumber);
    console.log(pageNumber);
  };

  return (
    <div>
      {currentPage !== 0 ? (
        <Container>
          <Row>
            <Col>
              <Pagination className="float-end">
                {currentPage > 3 ? (
                  <Pagination.First onClick={() => onPageChange(1)} />
                ) : (
                  ""
                )}
                {currentPage > 2 ? (
                  <Pagination.Prev
                    onClick={() => onPageChange(currentPage - 1)}
                  />
                ) : (
                  ""
                )}
                {currentPage > 2 ? (
                  <Pagination.Item
                    onClick={() => onPageChange(currentPage - 2)}
                  >
                    {currentPage - 2}
                  </Pagination.Item>
                ) : (
                  ""
                )}
                {currentPage > 1 ? (
                  <Pagination.Item
                    onClick={() => onPageChange(currentPage - 1)}
                  >
                    {currentPage - 1}
                  </Pagination.Item>
                ) : (
                  ""
                )}

                <Pagination.Item active>{currentPage}</Pagination.Item>
                {totalPages - currentPage > 0 ? (
                  <Pagination.Item
                    onClick={() => onPageChange(currentPage + 1)}
                  >
                    {currentPage + 1}
                  </Pagination.Item>
                ) : (
                  ""
                )}
                {totalPages - currentPage > 1 ? (
                  <Pagination.Item
                    onClick={() => onPageChange(currentPage + 2)}
                  >
                    {currentPage + 2}
                  </Pagination.Item>
                ) : (
                  ""
                )}

                {totalPages - currentPage > 1 ? (
                  <Pagination.Next
                    onClick={() => onPageChange(currentPage + 1)}
                  />
                ) : (
                  ""
                )}
                {totalPages - currentPage > 1 ? (
                  <Pagination.Last onClick={() => onPageChange(totalPages)} />
                ) : (
                  ""
                )}
              </Pagination>
            </Col>
          </Row>
        </Container>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyPagination;
