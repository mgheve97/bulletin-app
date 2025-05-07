"use client";
import { useRouter } from "next/navigation";
import { useArticle } from "../../Context/BulletinContext";
import { useState, useEffect } from "react";

interface Article {
  id: string;
  title: string;
  content: string;
  datepost: string;
}

const UpdateArticle = ({ params }: { params: { id: string } }) => {
  const { articleContent, updatearticle } = useArticle();
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const resolvedParams = await params; // Await the promise to resolve `params`
      const foundArticle = articleContent.find(
        (article) => article.id === resolvedParams.id
      );
      setArticle(foundArticle || null);
    };

    fetchArticle();
  }, [params, articleContent]);

  const handleChange = (field: keyof Article, value: string) => {
    setArticle((prev) => prev && { ...prev, [field]: value });
  };

  const handleUpdate = () => {
    if (article) {
      updatearticle(article.id, {
        title: article.title,
        content: article.content,
      });
      router.push("/bulletin-app/");
    }
  };

  const GotoBoard = () => {
    router.push("/bulletin-app/board-article/");
  };

  const GotoHome = () => {
    router.push("/bulletin-app/");
  };

  return (
    <div>
      <div className="container mx-auto mt-12">
        <nav className="flex justify-between">
          <p className="Bold text-6xl">Edit an Article</p>
          <div>
            <button
              className="Bold text-3xl bg-white px-4 py-2 border-2 border-black rounded-md shadow-lg "
              onClick={GotoBoard}
            >
              View Board
            </button>
            <button
              className="Bold text-3xl bg-sky-100 px-4 py-2 border-2 border-black rounded-md shadow-lg ml-4"
              onClick={GotoHome}
            >
              Back to Home
            </button>
          </div>
        </nav>

        {/* title and content */}
        <div className="mt-16">
          <input
            className="border-2 border-black w-[800px] text-lg p-3 rounded-md"
            placeholder="Insert title here"
            type="text"
            name="title"
            id="title"
            value={article?.title || ""}
            onChange={(e) => handleChange("title", e.target.value)}
          />
          <div className="mt-12">
            <textarea
              className=" resize-y h-2/3  border-2 border-black w-[800px] text-lg p-3 rounded-md"
              placeholder="Insert content here"
              name="content"
              id="content"
              value={article?.content || ""}
              onChange={(e) => handleChange("content", e.target.value)}
            />
          </div>

          <button
            className="Bold text-3xl bg-sky-100 px-4 py-2 border-2 border-black rounded-md shadow-lg mt-6"
            onClick={handleUpdate}
          >
            Update Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateArticle;
