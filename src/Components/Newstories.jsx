import "./Stories.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewStoriesData } from "../Redux/actions";

export const Newstories = () => {
  const dispatch = useDispatch();

  const { newStories, isError, isLoading } = useSelector((state) => ({
    newStories: state.newStories,
    isError: state.isError,
    isLoading: state.isLoading,
  }));

  useEffect(() => {
    dispatch(NewStoriesData());
  }, [dispatch]);

  return (
    <div className="stories_wrapper">
      {isLoading && (
        <img
          className="loading"
          src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
          alt="loading_gif"
        />
      )}
      {isError && <h1>404 NOT FOUND</h1>}
      {newStories &&
        !isLoading &&
        !isError &&
        newStories.map((e) => {
          return (
            <div key={e.id} className="stories_sections">
              <img
                src="https://niemanreports.org/wp-content/uploads/2020/02/audio-chase-final-copy-e1582564392398.jpg"
                alt="image"
                className="stories_image"
              />
              <div className="stories_time">
                {new Date(e.time * 1000).toISOString().slice(11, -1)}
              </div>
              <div className="stories_title">{e.title}</div>
              <div className="stories_type">Type:{e.type}</div>
            </div>
          );
        })}
    </div>
  );
};
