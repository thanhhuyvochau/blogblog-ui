export interface Blog {
  id: string;
  title: string;
  description: string;
  detail?: string;
  tags: string[];
  created_at: string;
  modified_at: string;
  author: string;
}
