import { Blog } from './models/blog.model';

export const mockBlogs: Blog[] = [
  {
    id: '1',
    title: 'Understanding TypeScript',
    description: 'An introduction to TypeScript and its features.',
    detail:
      'This blog covers the basics of TypeScript, including types, interfaces, and classes. We will also dive into some advanced features such as generics and decorators.',
    tags: ['typescript', 'javascript', 'programming'],
    created_at: '2024-09-15T10:30:00Z',
    modified_at: '2024-09-16T08:45:00Z',
    author: 'Jane Doe',
  },
  {
    id: '2',
    title: 'Getting Started with Angular',
    description: 'A beginner’s guide to building web applications using Angular.',
    detail:
      'This blog post will walk you through setting up an Angular project, understanding its file structure, and creating your first component.',
    tags: ['angular', 'frontend', 'javascript'],
    created_at: '2024-09-18T12:00:00Z',
    modified_at: '2024-09-19T09:20:00Z',
    author: 'John Smith',
  },
  {
    id: '3',
    title: 'Microservices with Spring Boot',
    description: 'Learn how to build and manage microservices using Spring Boot.',
    tags: ['spring boot', 'microservices', 'java'],
    created_at: '2024-09-20T15:00:00Z',
    modified_at: '2024-09-21T12:35:00Z',
    author: 'Alex Johnson',
  },
  {
    id: '4',
    title: 'Introduction to Docker',
    description: 'A comprehensive guide to containerizing applications using Docker.',
    detail:
      'This article explains the basics of Docker, how containers work, and how to create Dockerfiles for your applications.',
    tags: ['docker', 'devops', 'containers'],
    created_at: '2024-09-22T14:15:00Z',
    modified_at: '2024-09-23T10:50:00Z',
    author: 'Emily Clark',
  },
];
