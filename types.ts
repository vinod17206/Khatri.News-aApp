export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string | null;
  url: string;
  author: string | null;
  publishedAt: string;
  category: string;
  source: {
    id: string | null;
    name: string;
  };
}

export type Category = 'World' | 'Politics' | 'Sports' | 'Technology' | 'Entertainment' | 'Business' | 'Health' | 'Trending';
