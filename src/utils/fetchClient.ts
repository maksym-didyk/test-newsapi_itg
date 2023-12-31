/* eslint-disable @typescript-eslint/no-explicit-any */
// const API_KEY = 'b10949ce409b4f4aacd86b834a3ce573';
// const API_URL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=8&apiKey=${API_KEY}`;

const API_KEY = '5923dfea52977614e4a13f5a71df7aa9';
const API_URL = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&q=bitcoin&max=8&apikey=${API_KEY}`;

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return fetch(API_URL + url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.text();
    })
    .then(text => {
      return text ? JSON.parse(text) : null;
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
  patch: <T>(url: string, data: any) => request<T>(url, 'PATCH', data),
  delete: (url: string) => request(url, 'DELETE'),
};
