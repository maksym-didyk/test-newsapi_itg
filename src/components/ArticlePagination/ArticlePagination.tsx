import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';

interface Props {
  totalResults: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const ArticlePagination: React.FC<Props> = ({ totalResults, currentPage, onPageChange }) => {
  const [activePage, setActivePage] = useState(currentPage);

  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);

  const totalPagesCount = (results: number) => {
    if (results > 40) {
      return 10;
    }

    return Math.ceil(results / 8);
  };

  const totalPages = totalPagesCount(totalResults);

  const handlePageChange = (page: number) => {
    setActivePage(page);
    onPageChange(page);
  };

  return (
    <div className="pagination">
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <Pagination.Item
              key={page}
              active={page === activePage}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
};
