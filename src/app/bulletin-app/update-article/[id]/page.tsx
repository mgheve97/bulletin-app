"use client";
import { useRouter } from "next/navigation";
import { useArticle } from "../../Context/BulletinContext";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Article {
  id: string;
  title: string;
  content: string;
  datepost: string;
}

function UpdateArticle({ params }: { params: Promise<{ id: string }> }) {
  const { articleContent, updatearticle, deletearticle } = useArticle();
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      const resolvedParams = await params; // Await the promise to resolve `params`
      const foundArticle = articleContent.find(
        (article) => article.id === resolvedParams.id
      );
      if (foundArticle) {
        setArticle(foundArticle);
        setTitle(foundArticle.title);
      }
    };

    fetchArticle();
  }, [params, articleContent]);

  const handleChange = (field: keyof Article, value: string) => {
    setArticle((prev) => prev && { ...prev, [field]: value });
  };

  const handleUpdate = () => {
    if (title.length === 0 || !title.trim()) {
      deletearticle(article?.id || "");
    }
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
    <div className="w-screen lg:h-screen h-screen px-4 sm:px-16 bg-green-100">
      <div className="flex flex-col">
        <nav className="flex justify-between sm:pt-[133px] pt-5 gap-2">
          <p className="font-bold sm:text-5xl text-[24px] text-slate-700">
            UPDATE ARTICLE
          </p>
          <div className="flex sm:flex-row flex-col space-y-2 space-x-0 sm:space-y-0 sm:space-x-4">
            <button
              className="font-bold text-slate-700 bg-white sm:text-3xl text-[12px] sm:px-4 px-2 sm:py-2 py-1 border-2 border-green-700 rounded-md shadow-lg "
              onClick={GotoBoard}
            >
              View Board
            </button>
            <button
              className="font-bold sm:text-3xl text-[12px] text-slate-700 bg-green-200 sm:px-4 px-2 sm:py-2 py-1 border-2 border-green-700 rounded-md shadow-lg ml-4"
              onClick={GotoHome}
            >
              <div className="flex items-center gap-4">
                Home
                <svg
                  width="32"
                  height="30"
                  viewBox="0 0 32 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto sm:max-w-[32px] max-w-[16px]" // Responsive classes
                  preserveAspectRatio="xMidYMid meet" // Ensures proper scaling
                >
                  <path
                    d="M27.6681 14.3414L15.7283 3.02693L14.928 2.26814C14.7456 2.09639 14.499 2 14.242 2C13.9849 2 13.7383 2.09639 13.556 2.26814L0.815846 14.3414C0.628996 14.5178 0.481325 14.728 0.381551 14.9595C0.281776 15.1909 0.231919 15.439 0.234923 15.689C0.247283 16.7203 1.15266 17.5435 2.24034 17.5435H3.5536V27.0855H24.9304V17.5435H26.2714C26.7998 17.5435 27.2973 17.3472 27.6712 16.9927C27.8553 16.8188 28.0012 16.6119 28.1004 16.3841C28.1995 16.1563 28.2501 15.9121 28.249 15.6656C28.249 15.1676 28.042 14.6959 27.6681 14.3414ZM15.9724 24.9761H12.5116V18.9996H15.9724V24.9761ZM22.7055 15.4342V24.9761H17.95V18.2965C17.95 17.649 17.3969 17.1246 16.714 17.1246H11.77C11.0871 17.1246 10.534 17.649 10.534 18.2965V24.9761H5.77842V15.4342H2.812L14.2451 4.6031L14.9589 5.27986L25.675 15.4342H22.7055Z"
                    className="fill-slate-700"
                  />
                </svg>
              </div>
            </button>
          </div>
        </nav>

        {/* title and content */}

        <div className="flex flex-col lg:flex-row sm:justify-between mt-20 sm:mt-28">
          <div className="">
            <div className="flex flex-col">
              <input
                className="border-b-2 border-green-700 w-full lg:w-[800px] max-w-[800px] text-lg p-3 rounded-md font-bold"
                placeholder="Insert title here"
                type="text"
                name="title"
                id="title"
                value={article?.title || ""}
                onChange={(e) => handleChange("title", e.target.value)}
              />
              <div className="mt-12">
                <textarea
                  className="resize-y border-b-2 border-green-700 w-full lg:w-[800px] max-w-[800px] text-lg p-3 rounded-md font-bold"
                  placeholder="Insert content here"
                  name="content"
                  id="content"
                  value={article?.content || ""}
                  onChange={(e) => handleChange("content", e.target.value)}
                />
              </div>
            </div>
            <div className="mt-10">
              <button
                className="font-bold text-slate-700 bg-white text-2xl px-4 py-2 border-2 border-green-700 rounded-md shadow-lg mt-6"
                onClick={handleUpdate}
              >
                <div className="flex items-center gap-4">
                  Update Article
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 15.625L13.75 19.375L20 11.875"
                      stroke="#334155"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
                      stroke="#334155"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src="/updateimage.png"
              alt="search"
              className="hidden lg:block"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateArticle;
