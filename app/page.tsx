// import Image from "next/image";

import HomeComponent from "app/pages/home";

{/* <Image
  className="dark:invert"
  src="/next.svg"
  alt="Next.js logo"
  width={180}
  height={38}
  priority
/> */}

export default function Home() {
  return (
    <HomeComponent lang="ru" />
  );
}
