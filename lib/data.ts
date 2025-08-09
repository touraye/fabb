import { ApiResponse, Category, News, Project } from "@/type";

const API_BASE_URL = "https://portal.fabbfoundation.com/api/v1";

// This function fetches data directly from the external API.
// We can use this on the server-side in our components.
export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${API_BASE_URL}/categories`, { next: { revalidate: 3600 } });
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  const result: ApiResponse = await response.json();
  return result.data;
};

export const getMostRecentProject = (categories: Category[]): Project | null => {
  let mostRecentProject: Project | null = null;
  let mostRecentDate: Date | null = null;

  categories.forEach(category => {
    category.projects.forEach(project => {
      const projectDate = new Date(project.created_at);
      if (!mostRecentDate || projectDate > mostRecentDate) {
        mostRecentDate = projectDate;
        mostRecentProject = project;
      }
    });
  });

  return mostRecentProject;
};

export const getMostRecentNews = (categories: Category[]): News | null => {
  let mostRecentNews: News | null = null;
  let mostRecentDate: Date | null = null;

  categories.forEach(category => {
    category.news.forEach(newsItem => {
      const newsDate = new Date(newsItem.created_at);
      if (!mostRecentDate || newsDate > mostRecentDate) {
        mostRecentDate = newsDate;
        mostRecentNews = newsItem;
      }
    });
  });

  return mostRecentNews;
};

export const getCategoryById = async (id: string): Promise<Category | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`, { next: { revalidate: 3600 } });
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch category');
    }
    // The API for a single category returns { "data": {...} }
    const result: { data: Category } = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Error fetching category ${id}:`, error);
    // Re-throwing the error is important so the caller knows the operation failed.
    // The page can then decide to show a not-found or an error page.
    throw error;
  }
};
