import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import Spinner from "../spineer/Spinner";
import Header from "../../rout/Header";
export default function About() {
  const [fetching, setFetching] = useState(true);
  console.log("Fetching Status", fetching);
  let url = "https://api.github.com/users/Sajjad-Aleem";
  let data = "";
  let token =
    "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";
  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: `token ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("my data from github", data);
        console.log("User Name", data.login);
        data = data;
        setFetching(false);
        console.log("Fetching Status", fetching);
      })
      .catch((error) => {
        console.error("Error in the fetching process ", error);
        setFetching(true);
      });
  }, [fetching]);
  return (
    <>
      {fetching ? (
        <Spinner />
      ) : (
        <div className={`container ${styles.about_container}`}>
          <h1>About Page</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            reiciendis provident consequatur quibusdam, labore animi ipsam
            voluptatum nobis architecto eaque. Est error fugiat molestiae, fugit
            consequuntur, quibusdam iusto possimus quo itaque iste aliquam
            repellat. Voluptatum recusandae perspiciatis debitis numquam quos
            praesentium culpa voluptates, aut enim officiis.
          </p>
          <img src={`${data.avatar_url}`} alt="profile picture" />
        </div>
      )}
    </>
  );
}
