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

const ViewArticle = ({ params }: { params: { id: string } }) => {
  const { articleContent, deletearticle } = useArticle();
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

  const handleDelete = (id: string) => {
    deletearticle(id);
    router.push("/bulletin-app/");
  };

  if (!article) {
    return (
      <div className="container mx-auto mt-12">
        <p className="text-center text-3xl">Article Not Found</p>
        <button
          className="Bold text-3xl bg-sky-100 px-4 py-2 border-2 border-black rounded-md shadow-lg ml-4"
          onClick={() => router.push("/bulletin-app/")}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto mt-12">
        <nav className="flex justify-between">
          <p className="Bold text-6xl">Article</p>
          <div>
            <button
              className="Bold text-3xl bg-white px-4 py-2 border-2 border-black rounded-md shadow-lg "
              onClick={() => router.push("/bulletin-app/board-article/")}
            >
              View Board
            </button>
            <button
              className="Bold text-3xl bg-sky-100 px-4 py-2 border-2 border-black rounded-md shadow-lg ml-4"
              onClick={() => router.push("/bulletin-app/")}
            >
              Back to Home
            </button>
          </div>
        </nav>

        {/* view content */}
        <div className="mt-16">
          <div className="p-10 rounded-md border-2 mb-10">
            <p className="font-bold text-3xl mt-1">{article.title}</p>
            <p className="font-bold text-gray-500 text-md mt-2">
              {article.datepost}
            </p>
            <p className="font-medium text-lg mt-4">{article.content}</p>
          </div>

          <button
            className="Bold text-3xl bg-sky-100 px-4 py-2 border-2 border-black rounded-md shadow-lg"
            onClick={() =>
              router.push(`/bulletin-app/update-article/${article.id}/`)
            }
          >
            Update Article
          </button>
          <button
            className="Bold text-3xl bg-red-100 px-4 py-2 border-2 border-black rounded-md shadow-lg ml-10"
            onClick={() => handleDelete(article.id)}
          >
            Delete Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewArticle;
