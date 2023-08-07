import { ArticleData } from '../types/articleData';
import { client } from '../utils/fetchClient';

export const getArticles = () => client.get<ArticleData>('');
export const getFilteredArticles = (searchParams: string) => {
  return client.get<ArticleData>(`&page=${searchParams}`);
};
