"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface Article {
  id: string;
  title: string;
  content: string;
  datepost: string;
}

interface ArticleContextType {
  article: Article | null;
  articleContent: Article[];
  post: (content: Article) => void;
  updatearticle: (id: string, updatedContent: Partial<Article>) => void;
  deletearticle: (id: string) => void;
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [articleContent, setArticleContent] = useState<Article[]>([]);

  useEffect(() => {
    try {
      const storedArticles = localStorage.getItem("articles");
      if (storedArticles) {
        setArticleContent(JSON.parse(storedArticles));
      }
    } catch (error) {
      console.error("Error parsing localStorage Article", error);
      setArticleContent([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articleContent));
  }, [articleContent]);

  const post = (content: Article) => {
    const newUpdatedArticle = {
      ...content,
      id: Date.now().toString(), // Generate a unique ID based on the current timestamp
    };
    setArticleContent((prevArticles) => [...prevArticles, newUpdatedArticle]);
    setArticle(content);
    console.log("Article posted successfully", content);
  };

  const updatearticle = (id: string, updatedContent: Partial<Article>) => {
    const updatedDateContent = {
      ...updatedContent,
      datepost: new Date().toISOString(), // Automatically set the current date
    };

    setArticleContent((prevArticles) =>
      prevArticles.map((article) =>
        article.id === id
          ? {
              ...article,
              ...updatedDateContent,
            }
          : article
      )
    );

    const updatedArticle = articleContent.find((article) => article.id === id);
    if (updatedArticle) {
      setArticle({ ...updatedArticle, ...updatedDateContent });
      console.log("Article updated successfully", updatedArticle);
    }
  };

  const deletearticle = (id: string) => {
    setArticleContent((prevArticles) =>
      prevArticles.filter((article) => article.id !== id)
    );
    console.log(`Article with the id ${id} deleted successfully`);
  };

  return (
    <ArticleContext.Provider
      value={{ article, articleContent, post, updatearticle, deletearticle }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticle = () => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error("useArticle must be used within an ArticleProvider");
  }
  return context;
};
