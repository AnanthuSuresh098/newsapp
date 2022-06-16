import "./Stories.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TopStoriesData } from "../Redux/actions";

export const Topstories = () => {
  const dispatch = useDispatch();

  const { topStories, isError, isLoading } = useSelector((state) => ({
    topStories: state.topStories,
    isError: state.isError,
    isLoading: state.isLoading,
  }));

  useEffect(() => {
    dispatch(TopStoriesData());
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
      {topStories &&
        !isLoading &&
        !isError &&
        topStories.map((e) => {
          return (
            <div key={e.id} className="stories_sections">
              <img
                src="https://www.poynter.org/wp-content/uploads/2022/05/shutterstock_1668092182-768x512.jpg"
                alt="image"
                className="stories_image"
              />
              <div className="stories_time">
                {new Date(e.time * 1000).toISOString().slice(11, -1)}
              </div>
              <div className="stories_title">{e.title}</div>
              <div className="stories_type">Type : {e.type}</div>
            </div>
          );
        })}
    </div>
  );
};
