/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Article } from '../../types/article';
import { ArticleItem } from '../ArticleItem';
import { ArticleCard } from '../ArticleCard';
import { Loader } from '../Loader';
import { ArticlePagination } from '../ArticlePagination';
import { getFilteredArticles } from '../../api/articles';

export const ArticleCatalog: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentArticle, setCurrentArticle] = useState<Article>();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const loadArticlesByPage = async (page: number) => {
    setIsLoading(true);

    const articlesData = await getFilteredArticles(`${page}`);

    setTotalResults(articlesData.totalArticles);
    setArticles(articlesData.articles);
    setIsLoading(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleShowModal = (article: Article) => {
    setCurrentArticle(article);
    setShowModal(true);
  };

  useEffect(() => {
    loadArticlesByPage(currentPage);
  }, [currentPage]);

  return (
    <>
      <Loader isLoading={isLoading} />

      <Row xs={1} sm={2} md={3} lg={4} className="g-4" style={{ margin: '0 20px' }}>
        {!isLoading && articles.map((article, index) => (
          <ArticleCard
            key={index}
            article={article}
            handleShowModal={handleShowModal}
          />
        ))}
      </Row>

      <ArticleItem show={showModal} article={currentArticle} setShow={setShowModal} />

      <ArticlePagination
        totalResults={totalResults}
        currentPage={Number(currentPage)}
        onPageChange={handlePageChange}
      />
    </>
  );
};
