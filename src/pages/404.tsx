import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Error = () => {
    // const router = useRouter();
    // redirect path
  // useEffect(() => {
  //   router.push("/");
  // }, [router]);
    
  return (
    <>
      <Head>
        <title>Error page</title>
      </Head>
      <h1>Error</h1>
    </>
  );
};

export default Error;
