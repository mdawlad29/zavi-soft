import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-[33vh] flex-col items-center justify-center">
      <p className="text-xl text-red-400">Page not found</p>
      <Link href="/" className="text-base text-[#21ADFF] hover:underline">
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
