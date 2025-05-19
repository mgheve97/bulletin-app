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
    <div className="sh-screen w-screen bg-green-100">
      <div className=" flex flex-col sm:px-[174px] sm:pt-[133px] px-2 pt-5">
        <nav className="flex justify-between">
          <p className="font-bold sm:text-6xl text-[45px]">Board</p>
          <div>
            <button
              className="font-bold text-3xl text-slate-700 bg-green-200 px-4 py-2 border-2 border-green-700 rounded-md shadow-lg ml-4"
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

        {/* view content */}
        <div className="mt-16">
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-10">
            {articleContent.map((article, index) => (
              <BoardItem
                key={index}
                id={article.id}
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
