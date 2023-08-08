/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
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
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const currentPage = searchParams.get('page') || '1';

  const loadArticlesByPage = async (page: string) => {
    setIsLoading(true);

    const searchString = `&${page.slice(1)}`;
    const articlesData = await getFilteredArticles(searchString);

    setTotalResults(articlesData.totalArticles);
    setArticles(articlesData.articles);
    setIsLoading(false);
  };

  const handlePageChange = (page: number) => {
    searchParams.set('page', `${String(page)}`);
    setSearchParams(searchParams);
  };

  const handleShowModal = (article: Article) => {
    setCurrentArticle(article);
    setShowModal(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    loadArticlesByPage(location.search);
    scrollToTop();
  }, [currentPage]);

  return (
    <>
      <Loader isLoading={isLoading} />

      <Row xs={1} sm={2} lg={4} className="g-4" style={{ margin: '0 20px' }}>
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
