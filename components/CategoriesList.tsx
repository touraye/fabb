"use client";

import { useEffect, useState } from "react";
import { ApiResponse, Category } from "@/type";

const CategoriesList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/categories");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result: ApiResponse = await response.json();
        setCategories(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      {categories.length > 0 ? (
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category.id} className="p-4 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
              {category.image && (
                <img src={category.image} alt={category.title} className="mt-2 w-32 h-32 object-cover rounded" />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No categories found.</p>
      )}
    </div>
  );
};

export default CategoriesList;
