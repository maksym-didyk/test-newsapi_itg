import React from 'react';
import {
  Card,
  Col,
  Button,
} from 'react-bootstrap';
import { Article } from '../../types/article';
import { formateDate } from '../../utils/helpers';

interface Props {
  article: Article;
  handleShowModal: (article: Article) => void;
}

export const ArticleCard: React.FC<Props> = ({ article, handleShowModal }) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={`${article.urlToImage}`} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{formateDate(article.publishedAt)}</Card.Subtitle>
          <Card.Text>
            {article.description}
          </Card.Text>
          <Button variant="primary" onClick={() => handleShowModal(article)}>Read more</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
