import React from "react";

import { Person } from "../../interfaces/Person";

import styles from "./PersonComponent.module.css";
import { useRouter } from "next/router";

interface Props {
  person: Person;
}

const PersonComponent: React.FC<Props> = ({ person }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/person/${person.id}`);
  };

  return (
    <li className={styles.person} onClick={handleClick}>
      <h2>{person.name}</h2>
      <p>{person.age}</p>
    </li>
  );
};

export default PersonComponent;
