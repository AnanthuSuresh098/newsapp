import "./Stories.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BestStoriesData } from "../Redux/actions";

export const Beststories = () => {
  const dispatch = useDispatch();

  const { bestStories, isError, isLoading } = useSelector((state) => ({
    bestStories: state.bestStories,
    isError: state.isError,
    isLoading: state.isLoading,
  }));

  useEffect(() => {
    dispatch(BestStoriesData());
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
      {bestStories &&
        !isLoading &&
        !isError &&
        bestStories.map((e) => {
          return (
            <div key={e.id} className="stories_sections">
              <img
                src="https://images.wsj.net/im-535653/?width=860&height=573"
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
