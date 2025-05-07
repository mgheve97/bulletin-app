"use client";
import React from "react";

interface ArticleItemProps {
  title: string;
  onView: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const ArticleItem: React.FC<ArticleItemProps> = ({
  title,
  onView,
  onEdit,
  onDelete,
}) => (
  <div>
    <div className="bg-sky-100 px-5 py-3 rounded-lg border-2 border-green-700 flex justify-between shadow  mt-4">
      <p className="text-2xl text-slate-500 font-bold">{title}</p>
      <div>
        <button
          className="text-2xl font-semibold py-[3px] ml-1"
          onClick={onView}
        >
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.4569 14.1592C28.0692 14.9601 28.0692 16.0412 27.4569 16.8407C25.5285 19.3582 20.9017 24.5417 15.5 24.5417C10.0982 24.5417 5.47147 19.3582 3.54302 16.8407C3.24514 16.4573 3.08344 15.9856 3.08344 15.5C3.08344 15.0144 3.24514 14.5427 3.54302 14.1592C5.47147 11.6418 10.0982 6.45833 15.5 6.45833C20.9017 6.45833 25.5285 11.6418 27.4569 14.1592Z"
              fill="#15803d"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 19.375C17.6401 19.375 19.375 17.6401 19.375 15.5C19.375 13.3599 17.6401 11.625 15.5 11.625C13.3599 11.625 11.625 13.3599 11.625 15.5C11.625 17.6401 13.3599 19.375 15.5 19.375Z"
              fill="#15803d"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="text-2xl font-semibold ml-1" onClick={onEdit}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.41625 20.06L20.7125 4.76249C21.3168 4.1842 22.1235 3.8655 22.9599 3.87464C23.7963 3.88378 24.5958 4.22003 25.1874 4.8114C25.7789 5.40276 26.1154 6.20222 26.1247 7.0386C26.1341 7.87497 25.8156 8.68177 25.2375 9.28624L9.93875 24.5837C9.58975 24.9328 9.14524 25.1707 8.66125 25.2675L3.75 26.25L4.7325 21.3375C4.82931 20.8535 5.06722 20.409 5.41625 20.06Z"
              fill="#15803d"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.125 8.125L21.875 11.875"
              stroke="#ffffff"
              strokeWidth="2"
            />
          </svg>
        </button>
        <button className="text-2xl font-semibold ml-1" onClick={onDelete}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5H25L23.025 25.275C22.9573 25.8867 22.6663 26.452 22.2078 26.8625C21.7493 27.2731 21.1555 27.5 20.54 27.5H9.46C8.84455 27.5 8.2507 27.2731 7.79218 26.8625C7.33367 26.452 7.0427 25.8867 6.975 25.275L5 7.5ZM9.18125 3.93375C9.38344 3.50496 9.70338 3.1425 10.1038 2.88864C10.5041 2.63478 10.9684 2.49999 11.4425 2.5H18.5575C19.0318 2.49976 19.4964 2.63443 19.897 2.8883C20.2976 3.14218 20.6177 3.50477 20.82 3.93375L22.5 7.5H7.5L9.18125 3.93375ZM17.5 13.75V20V13.75Z"
              fill="#15803d"
            />
            <path
              d="M2.5 7.5H27.5M12.5 13.75V20M17.5 13.75V20M5 7.5H25L23.025 25.275C22.9573 25.8867 22.6663 26.452 22.2078 26.8625C21.7493 27.2731 21.1555 27.5 20.54 27.5H9.46C8.84455 27.5 8.2507 27.2731 7.79218 26.8625C7.33367 26.452 7.0427 25.8867 6.975 25.275L5 7.5ZM9.18125 3.93375C9.38344 3.50496 9.70338 3.1425 10.1038 2.88864C10.5041 2.63478 10.9684 2.49999 11.4425 2.5H18.5575C19.0318 2.49976 19.4964 2.63443 19.897 2.8883C20.2976 3.14218 20.6177 3.50477 20.82 3.93375L22.5 7.5H7.5L9.18125 3.93375Z"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default ArticleItem;
