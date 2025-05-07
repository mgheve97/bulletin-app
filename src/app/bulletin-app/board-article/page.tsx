"use client";
import { useArticle } from "../Context/BulletinContext";
import BoardItem from "../article-components/BoardItem";
import { useRouter } from "next/navigation";

const BoardArticle = () => {
  const { articleContent } = useArticle();
  const router = useRouter();

  const GotoHome = () => {
    router.push("/bulletin-app/");
  };

  return (
    <div>
      <div className="container mx-auto mt-12">
        <nav className="flex justify-between">
          <p className="Bold text-6xl">Board</p>
          <div>
            <button
              className="Bold text-3xl bg-sky-100 px-4 py-2 border-2 border-black rounded-md shadow-lg "
              onClick={GotoHome}
            >
              Back to Home
            </button>
          </div>
        </nav>

        {/* view content */}
        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-10">
            {articleContent.map((article, index) => (
              <BoardItem
                key={index}
                title={article.title}
                datepost={article.datepost}
                content={article.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardArticle;
