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

  const totalPages = Math.ceil(totalResults / 8);

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
