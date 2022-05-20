import React from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";

function Main({ course }) {
  return (
    <main className={style.article}>
      <h1 className={style.title}>{course.title}</h1>
      <img src={course.image} alt="image" />
      {course.sections.map((section) => (
        <React.Fragment key={section.title}>
          <h2 dangerouslySetInnerHTML={{ __html: section.title }}></h2>
          <p dangerouslySetInnerHTML={{ __html: section.content }}></p>
        </React.Fragment>
      ))}
      <section className={style.btn_group}>
        <Link to="/" className={style.btn}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7068 5.29303C12.8943 5.48056 12.9996 5.73487 12.9996 6.00003C12.9996 6.26519 12.8943 6.5195 12.7068 6.70703L9.41379 10L12.7068 13.293C12.8889 13.4816 12.9897 13.7342 12.9875 13.9964C12.9852 14.2586 12.88 14.5094 12.6946 14.6948C12.5092 14.8803 12.2584 14.9854 11.9962 14.9877C11.734 14.99 11.4814 14.8892 11.2928 14.707L7.29279 10.707C7.10532 10.5195 7 10.2652 7 10C7 9.73487 7.10532 9.48056 7.29279 9.29303L11.2928 5.29303C11.4803 5.10556 11.7346 5.00024 11.9998 5.00024C12.265 5.00024 12.5193 5.10556 12.7068 5.29303V5.29303Z"
              fill="#009153"
            />
          </svg>
          Go Back
        </Link>
      </section>
    </main>
  );
}

export default Main;
