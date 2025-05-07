import React from "react";
import { ArticleProvider } from "./Context/BulletinContext";

const BulletinLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ArticleProvider>
      <div>{children}</div>
    </ArticleProvider>
  );
};

export default BulletinLayout;
