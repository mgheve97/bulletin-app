"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface BoardItemProps {
  id: string;
  title: string;
  datepost: string;
  content: string;
}

const BoardItem: React.FC<BoardItemProps> = ({
  id,
  title,
  datepost,
  content,
}) => {
  const router = useRouter();

  const [voting, setVoting] = React.useState({
    upvote: false,
    downvote: false,
    upvoteCount: 0,
    downvoteCount: 0,
  });

  const getFirst30Words = (text: string): string => {
    const words = text.trim().split(/\s+/);
    return words.slice(0, 30).join(" ");
  };

  const hasMoreContent = content.trim().split(/\s+/).length > 30;
  const displayContent = getFirst30Words(content);

  const handleSeeMore = () => {
    router.push(`/bulletin-app/view-article/${id}`);
  };

  const handleUpVote = () => {
    if (voting.upvote) {
      setVoting((prev) => ({
        ...prev,
        upvote: false,
        upvoteCount: prev.upvoteCount == 0 ? 0 : prev.upvoteCount - 1,
      }));
    } else {
      setVoting((prev) => ({
        ...prev,
        upvote: true,
        upvoteCount: prev.upvoteCount + 1,
      }));
    }
  };

  const handleDownVote = () => {
    if (voting.downvote) {
      setVoting((prev) => ({
        ...prev,
        downvote: false,
        downvoteCount: prev.downvoteCount == 0 ? 0 : prev.downvoteCount - 1,
      }));
    } else {
      setVoting((prev) => ({
        ...prev,
        downvote: true,
        downvoteCount: prev.downvoteCount + 1,
      }));
    }
  };

  return (
    <div className="h-auto w-auto p-10 rounded-md border-t-8 border-b-2 mb-10 border-t-green-700 border-b-slate-800 shadow-sm bg-green-50">
      <div className="flex justify-between items-center space-x-4">
        <div className="flex flex-col items-center">
          <p className="font-bold text-3xl mt-1">{title}</p>
          <p className="font-bold text-gray-500 text-md mt-2">{datepost}</p>
        </div>
        <svg
          width="61"
          height="59"
          viewBox="0 0 61 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_13_151)">
            <g filter="url(#filter0_d_13_151)">
              <path
                d="M37.4692 2.66236C37.7197 2.66192 37.9679 2.70925 38.1994 2.80163C38.431 2.89401 38.6415 3.02962 38.8188 3.20073L57.6907 21.4539C58.0481 21.7996 58.2488 22.2685 58.2488 22.7574C58.2488 23.2463 58.0481 23.7152 57.6907 24.0609C55.8607 25.8309 53.6037 26.2292 51.9605 26.2292C51.2857 26.2292 50.6833 26.1628 50.2068 26.0854L38.2584 37.642C38.5729 38.8677 38.777 40.1176 38.8684 41.3774C39.0438 43.966 38.7464 47.5982 36.1234 50.1352C35.7659 50.4809 35.2812 50.6751 34.7757 50.6751C34.2702 50.6751 33.7854 50.4809 33.428 50.1352L22.6424 39.707L10.511 51.4406C9.7676 52.1597 5.8636 54.7667 5.12016 54.0477C4.37672 53.3286 7.07216 49.5489 7.8156 48.8335L19.947 37.0999L9.16522 26.668C8.80785 26.3222 8.6071 25.8533 8.6071 25.3645C8.6071 24.8756 8.80785 24.4067 9.16522 24.0609C11.7882 21.5239 15.5435 21.2326 18.2199 21.4059C19.5225 21.4942 20.8147 21.6916 22.082 21.9959L34.0303 10.443C33.9306 9.88144 33.8796 9.31281 33.8778 8.74304C33.8778 7.15742 34.2896 4.97442 36.1234 3.20073C36.4807 2.85606 36.9646 2.66246 37.4692 2.66236Z"
                fill="#FFB1BA"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_13_151"
              x="0.99176"
              y="2.66235"
              width="61.2571"
              height="59.5095"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_13_151"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_13_151"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_13_151">
              <rect width="61" height="59" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="font-medium text-lg mt-4 break-words">
        {displayContent}
        {hasMoreContent && (
          <>
            {" "}
            <button
              className="text-blue-500 hover:text-blue-700 font-semibold inline"
              onClick={handleSeeMore}
            >
              {""}
              See more...
            </button>
          </>
        )}
      </p>
      {/* Buttons */}
      <div className="flex items-center space-x-4 pt-4">
        {/* Upvote */}
        <button className="" onClick={handleUpVote}>
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.9762 0.96875C12.5 0.375 11.5 0.375 11.0237 0.96875L1.02373 13.4688C0.877026 13.6528 0.785191 13.8744 0.758767 14.1083C0.732344 14.3421 0.772403 14.5787 0.874346 14.7908C0.976288 15.0029 1.13598 15.1819 1.33509 15.3074C1.53419 15.4328 1.76464 15.4996 1.99998 15.5H6.99998V24.25C6.99998 24.5815 7.13167 24.8995 7.36609 25.1339C7.60051 25.3683 7.91846 25.5 8.24998 25.5H15.75C16.0815 25.5 16.3994 25.3683 16.6339 25.1339C16.8683 24.8995 17 24.5815 17 24.25V15.5H22C22.2353 15.4996 22.4658 15.4328 22.6649 15.3074C22.864 15.1819 23.0237 15.0029 23.1256 14.7908C23.2276 14.5787 23.2676 14.3421 23.2412 14.1083C23.2148 13.8744 23.1229 13.6528 22.9762 13.4688L12.9762 0.96875ZM15.75 13H14.5V23H9.49998V13H4.60123L12 3.75125L19.3987 13H15.75Z"
                fill="#FFB1BA"
              />
            </svg>
            <p className="font-bold text-[18px] text-[#FFB1BA]">
              Upvote({voting.upvoteCount})
            </p>
          </div>
        </button>

        {/* Downvote */}
        <button className="" onClick={handleDownVote}>
          <div className="flex items-center gap-2">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.1262 13.2075C26.024 12.9956 25.8641 12.8169 25.6649 12.6917C25.4657 12.5666 25.2352 12.5001 25 12.5H20V3.75C20 3.41848 19.8683 3.10054 19.6339 2.86612C19.3994 2.6317 19.0815 2.5 18.75 2.5H11.25C10.9185 2.5 10.6005 2.6317 10.3661 2.86612C10.1317 3.10054 9.99998 3.41848 9.99998 3.75V12.5H4.99998C4.76464 12.5004 4.53419 12.5672 4.33509 12.6926C4.13598 12.8181 3.97629 12.9971 3.87435 13.2092C3.7724 13.4213 3.73234 13.6579 3.75877 13.8917C3.78519 14.1256 3.87703 14.3472 4.02373 14.5312L14.0237 27.0312C14.1408 27.1777 14.2894 27.2959 14.4584 27.3772C14.6274 27.4584 14.8125 27.5006 15 27.5006C15.1875 27.5006 15.3726 27.4584 15.5416 27.3772C15.7106 27.2959 15.8591 27.1777 15.9762 27.0312L25.9762 14.5312C26.2762 14.155 26.3337 13.6412 26.1262 13.2075ZM15 24.2488L7.60123 15H12.5V5H17.5V15H22.3987L15 24.2488Z"
                fill="#A089CB"
              />
            </svg>
            <p className="font-bold text-[18px] text-[#A089CB]">
              Downvote({voting.downvoteCount})
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BoardItem;
