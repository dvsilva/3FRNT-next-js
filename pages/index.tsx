import React from "react";
import PersonComponent from "../components/PersonComponent";
import type { Person } from "../interfaces/Person";
// import { GetServerSideProps } from "next"; // SSR
import { GetStaticProps } from "next"; // SSG

interface Props {
  data: Person[];
}

const Index: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>Person List</h1>
      <ul>
        {data.map((p) => (
          <PersonComponent key={p.id} person={p} />
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/people");
    const data: Person[] = await response.json();

    return {
      props: {
        data,
      },
      revalidate: 60, // Revalidate every 60 seconds
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
