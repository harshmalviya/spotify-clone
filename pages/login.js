import Head from "next/head";
import { getProviders, signIn } from "next-auth/react";
import React from "react";

function Login({ providers }) {
  return (
    <>
      <Head>
        <title>Login to Spotify</title>
      </Head>
      <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
        <img
          src="https://links.papareact.com/9xl"
          alt="Spotify"
          className="w-52 mb-5"
        />

        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className="bg-[#18D860] text-white p-4 rounded-xl"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Login with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  };
}
