"use client";

import Footer from "@/components/partials/Footer";
import Header from "@/components/partials/Header";
import { Loader } from "@/components/shared/Loader";
import { unstableSetRender } from "antd";
import { AppProgressBar } from "next-nprogress-bar";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PageRender = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setLoading] = useState(true);

  unstableSetRender((node, container) => {
    (container as any)._reactRoot ||= createRoot(container);
    const root = (container as any)._reactRoot;
    root.render(node);
    return async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
      root.unmount();
    };
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </>
      )}

      <ToastContainer
        draggable
        pauseOnHover
        closeOnClick
        autoClose={1000}
        pauseOnFocusLoss
      />

      <AppProgressBar
        height="2px"
        color="#09a4ff"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default PageRender;
