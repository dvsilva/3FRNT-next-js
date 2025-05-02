import React from "react";
import PersonComponent from "./components/PersonComponent";
import type { Person } from "../interfaces";
import { GetServerSideProps } from "next"; // SSR
// import { GetStaticProps } from "next"; // SSG

// SSR: Server Side Rendering - renders the page on each request
// SSG: Static Site Generation - renders the page at build time
// SSG is faster than SSR, but SSR is more dynamic and can be used for pages that change frequently

interface Props {
  data: Person[];
}

const Index: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>Person List</h1>
      <ul>
        {data.map((p) => {
          <PersonComponent key={p.id} person={p} />;
        })}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/people");
    const data: Person[] = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return {
      props: {
        data: [],
      },
    };
  }
};

export default Index;
