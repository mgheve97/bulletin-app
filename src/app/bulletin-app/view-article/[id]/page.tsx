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

function ViewArticle({ params }: { params: Promise<{ id: string }> }) {
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
    <div className="h-screen w-screen  bg-green-100">
      <div className="flex flex-col sm:px-[174px] sm:pt-[133px] px-2 pt-5">
        <nav className="flex justify-between">
          <p className="font-bold text-6xl">Article</p>
          <div className="flex sm:flex-row flex-col space-y-2 space-x-0 sm:space-y-0 sm:space-x-4">
            <button
              className="font-bold sm:text-3xl text-[12px] bg-white sm:px-4 sm:py-2 px-2 py-1 border-2 border-black rounded-md shadow-lg "
              onClick={() => router.push("/bulletin-app/board-article/")}
            >
              View Board
            </button>
            <button
              className="font-bold sm:text-3xl text-[12px] bg-white sm:px-4 sm:py-2 px-2 py-1 border-2 border-black rounded-md shadow-lg ml-4"
              onClick={() => router.push("/bulletin-app/")}
            >
              Back to Home
            </button>
          </div>
        </nav>

        {/* view content */}
        <div className="mt-16">
          <div className="flex flex-col justify-center items-center p-10 rounded-md border-t-8 border-b-2 border-x-1 border-t-green-700 border-b-slate-800 border-x-slate-500 mb-10 bg-green-50 mx-20 sm:mx-0">
            <p className="font-bold text-3xl mt-1">{article.title}</p>
            <p className="font-bold text-gray-500 text-md mt-2">
              {article.datepost}
            </p>
            <p className="font-medium text-lg mt-4">{article.content}</p>
          </div>

          <div className="flex justify-center items-center">
            <button
              className="font-bold sm:text-3xl text-[12px] bg-sky-100 sm:px-4 sm:py-2 px-2 py-1 border-2 border-black rounded-md shadow-lg"
              onClick={() =>
                router.push(`/bulletin-app/update-article/${article.id}/`)
              }
            >
              Update Article
            </button>
            <button
              className="font-bold sm:text-3xl text-[12px] bg-red-100 sm:px-4 sm:py-2 px-2 py-1 border-2 border-black rounded-md shadow-lg ml-10"
              onClick={() => handleDelete(article.id)}
            >
              Delete Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewArticle;
