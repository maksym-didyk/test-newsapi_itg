import { Article } from './article';

export interface ArticleData {
  status: string;
  totalResults: number;
  articles: Article[];
}
