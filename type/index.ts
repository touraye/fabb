import { StaticImageData } from "next/image";

export type ProjectProps = {
    id: number;
    heading: string;
    img?: StaticImageData; // from next/image
    images?: StaticImageData[];
    description: string[];
    category: 'Quality Education' | 'Quality Healthcare' | 'Advocacy and Empowerment' | 'Infrastructure Development' | 'Others';
}

export interface Gallery {
  id: number;
  title: string;
}

export interface News {
  id: number;
  title:string;
  description: string;
  images: string[];
  date_created: string;
  created_at: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  created_date: string;
  images: string[];
  created_at: string;
}

export interface Category {
  id: number;
  title: string;
  description: string;
  image: string;
  created_at: string;
  updated_at: string;
  galleries: Gallery[];
  news: News[];
  projects: Project[];
}

export interface ApiResponse {
  data: Category[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}