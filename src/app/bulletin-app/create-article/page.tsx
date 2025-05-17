"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useArticle } from "../Context/BulletinContext";
import Image from "next/image";

const CreateArticle = () => {
  const [articleContent, setArticleContent] = useState({
    title: "",
    content: "",
  });

  const { post } = useArticle();
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setArticleContent((prevarticle) => ({
      ...prevarticle,
      [name]: value,
    }));
  };

  const GotoBoard = () => {
    router.push("/bulletin-app/board-article/");
  };

  const GotoHome = () => {
    router.push("/bulletin-app/");
  };

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    }).format(date);
  };

  const HandleCreateArticle = () => {
    const currentDate = formatDate(new Date());

    const newArticle = {
      id: "",
      title: articleContent.title,
      content: articleContent.content,
      datepost: currentDate,
    };

    post(newArticle);
    router.push("/bulletin-app/");
  };

  return (
    <div className="w-screen h-screen px-4 sm:px-16 bg-green-100">
      <div className="flex flex-col">
        <nav className="flex justify-between sm:pt-[133px] pt-5">
          <p className="font-bold sm:text-5xl text-[24px] text-slate-700">
            CREATE A NEW ARTICLE
          </p>
          <div className="flex sm:flex-row flex-col space-y-2 space-x-0 sm:space-y-0 sm:space-x-4">
            <button
              className="font-bold text-slate-700 bg-white sm:text-3xl text-[12px] sm:px-4 px-2 sm:py-2 py-1 border-2 border-green-700 rounded-md shadow-lg "
              onClick={GotoBoard}
            >
              View Board
            </button>
            <button
              className="font-bold sm:text-3xl text-[12px] text-slate-700 bg-green-200 sm:px-4 px-2 sm:py-2 py-1 border-2 border-green-700 rounded-md shadow-lg sm:ml-4 ml-[28px]"
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
                placeholder="Title"
                type="text"
                id="title"
                name="title"
                onChange={handleChange}
                value={articleContent.title}
                height={52}
                width={476}
              />
              <div className="mt-12">
                <textarea
                  className="resize-y border-b-2 border-green-700 w-full lg:w-[800px] max-w-[800px] text-lg p-3 rounded-md font-bold"
                  placeholder="Content"
                  id="content"
                  name="content"
                  onChange={handleChange}
                  value={articleContent.content}
                  rows={5}
                  cols={40}
                ></textarea>
              </div>
            </div>
            <button
              className="font-bold text-slate-700 bg-white text-2xl px-4 py-2 border-2 border-green-700 rounded-md shadow-lg mt-6"
              onClick={HandleCreateArticle}
            >
              <div className="flex items-center gap-4">
                Post Article
                <svg
                  width="32"
                  height="30"
                  viewBox="0 0 32 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6146 4.52999L19.3755 1.79999L29.0235 11.325L26.2475 14.055C25.4525 13.5472 24.5058 13.3239 23.5646 13.4222C22.6235 13.5204 21.7447 13.9343 21.0746 14.595L19.9368 15.72C18.5412 17.115 18.3592 19.245 19.4059 20.835L16.6298 23.565L12.9739 19.95L8.72633 24.135C8.0892 24.765 3.59894 28.2 2.96181 27.57C2.32468 26.94 5.78339 22.485 6.42052 21.855L10.6529 17.67L6.99698 14.04L9.77305 11.31C11.3659 12.345 13.5352 12.165 14.9308 10.77L16.0685 9.64499C17.4793 8.26499 17.6614 6.11999 16.6146 4.52999Z"
                    className="fill-slate-700"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div className="flex items-center">
            <Image
              src="/noteimage.png"
              alt="search"
              className="hidden lg:block"
              width={421}
              height={421}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;
