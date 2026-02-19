// "use client";

export default function myImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // console.log(server, "server");
  // console.log(process.env);
  // const server = process.env.NEXT_PUBLIC_SERVER == "development" ? false : true;
  // if (server) {
  //   const url = new URL(
  //     `https://bitdeposit-dev-uat.s3.ap-southeast-1.amazonaws.com/frontend/user/public${src}`
  //   );
  //   url.searchParams.set("format", "auto");
  //   url.searchParams.set("width", width.toString());
  //   url.searchParams.set("quality", (quality || 75).toString());
  //   return url.href;
  // } else {
  return `${src}?w=${width}&q=${quality || 85}`;
  // }
}
