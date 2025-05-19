"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useArticle } from "./Context/BulletinContext";
import ArticleItem from "./article-components/ArticleItem";
import Image from "next/image";

const Homepage = () => {
  const router = useRouter();
  const { articleContent, deletearticle } = useArticle();

  const HandleCreateArticle = () => {
    router.push("/bulletin-app/create-article/");
  };

  const GotoBoard = () => {
    router.push("/bulletin-app/board-article/");
  };

  const GotoView = (id: string) => {
    router.push(`/bulletin-app/view-article/${id}`);
  };

  const GotoUpdate = (id: string) => {
    router.push(`/bulletin-app/update-article/${id}`);
  };

  const handleDelete = (id: string) => {
    deletearticle(id);
  };

  return (
    <div className="w-screen h-screen px-4 md:px-16 bg-green-100">
      <div className="flex flex-col ">
        <nav className="flex justify-between pt-[82px]">
          <p className="font-bold sm:text-6xl text-[45px] text-slate-700 lg:border-b-2 lg:border-green-800">
            Bulletin Board
          </p>
          <button
            className="bg-green-200 sm:px-4 sm:py-2 px-2 py-1 border-2 border-green-700 rounded-md shadow text-slate-700 font-bold sm:text-3xl text-[25px]"
            onClick={HandleCreateArticle}
          >
            <div className="flex items-center gap-4 p-2">
              Create Article
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3906 14.0625H15.9375V9.60938C15.9375 9.48047 15.832 9.375 15.7031 9.375H14.2969C14.168 9.375 14.0625 9.48047 14.0625 9.60938V14.0625H9.60938C9.48047 14.0625 9.375 14.168 9.375 14.2969V15.7031C9.375 15.832 9.48047 15.9375 9.60938 15.9375H14.0625V20.3906C14.0625 20.5195 14.168 20.625 14.2969 20.625H15.7031C15.832 20.625 15.9375 20.5195 15.9375 20.3906V15.9375H20.3906C20.5195 15.9375 20.625 15.832 20.625 15.7031V14.2969C20.625 14.168 20.5195 14.0625 20.3906 14.0625Z"
                  className="fill-slate-700"
                />
                <path
                  d="M15 1.875C7.75195 1.875 1.875 7.75195 1.875 15C1.875 22.248 7.75195 28.125 15 28.125C22.248 28.125 28.125 22.248 28.125 15C28.125 7.75195 22.248 1.875 15 1.875ZM15 25.8984C8.98242 25.8984 4.10156 21.0176 4.10156 15C4.10156 8.98242 8.98242 4.10156 15 4.10156C21.0176 4.10156 25.8984 8.98242 25.8984 15C25.8984 21.0176 21.0176 25.8984 15 25.8984Z"
                  className="fill-slate-700"
                />
              </svg>
            </div>
          </button>
        </nav>
        <div className="md:grid md:grid-cols-2 ">
          <div className="mt-32 bg-green-200 shadow-lg p-10">
            {/* view board */}
            <div className=" flex justify-between items-center ">
              <p className="font-bold sm:text-[36px] text-[25px] text-slate-700">
                Articles:
              </p>
              <button
                className="font-bold text-slate-700 bg-white sm:text-[23px] sm:px-6 sm:py-2 text-[21px] px-3 py-2 border-2 border-green-700 hover:bg-green-700 hover:text-white rounded-md shadow"
                onClick={GotoBoard}
              >
                View Board
              </button>
            </div>

            {articleContent.map((article, index) => (
              <ArticleItem
                key={index}
                title={article.title}
                onView={() => GotoView(article.id)}
                onEdit={() => GotoUpdate(article.id)}
                onDelete={() => handleDelete(article.id)}
              />
            ))}
          </div>
          <div className="pl-12 flex items-center justify-center">
            <Image
              src="/searchimage.png"
              alt="search"
              className="hidden md:block mt-32 ml-10"
              width={421}
              height={421}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
