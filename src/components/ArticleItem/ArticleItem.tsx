import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Article } from '../../types/article';
import { formateDate } from '../../utils/helpers';

interface Props {
  show: boolean;
  article?: Article;
  setShow: (show: boolean) => void;
}

export const ArticleItem: React.FC<Props> = ({
  show,
  article,
  setShow,
}) => {
  if (!article) {
    return null;
  }

  const fullscreen = true;

  return (
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
      <Modal.Dialog fullscreen={fullscreen}>
        <Modal.Header closeButton>
          <Modal.Title>{article.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-2 text-muted">{formateDate(article.publishedAt)}</div>
          <div className="mb-2 text-muted">{article.author}</div>
          <p>{article.content}</p>
          <Button variant="primary" href={article.url}>
            Go to original
          </Button>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};
