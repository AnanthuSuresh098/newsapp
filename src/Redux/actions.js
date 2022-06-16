import {
  TOPSTORIES_REQ,
  TOPSTORIES_SUCCESS,
  TOPSTORIES_FAILURE,
  BESTSTORIES_REQ,
  BESTSTORIES_SUCCESS,
  BESTSTORIES_FAILURE,
  NEWSTORIES_REQ,
  NEWSTORIES_SUCCESS,
  NEWSTORIES_FAILURE,
} from "./actionTypes";

import axios from "axios";

// action for Top stories request

const topStoriesReq = () => ({
  type: TOPSTORIES_REQ,
});

// action for Top stories success

const topStoriesSuccess = (payload) => ({
  type: TOPSTORIES_SUCCESS,
  payload,
});

// action for Top stories failure

const topStoriesFailure = () => ({
  type: TOPSTORIES_FAILURE,
});

// thunk call to fetch Top stories

export const TopStoriesData = () => (dispatch) => {
  dispatch(topStoriesReq());
  axios
    .get("http://newsapp-backend00.herokuapp.com/topstories")
    .then((res) => dispatch(topStoriesSuccess(res.data.TopStories)))
    .catch(() => dispatch(topStoriesFailure()));
};




// action for Best stories request

const bestStoriesReq = () => ({
  type: BESTSTORIES_REQ,
});

// action for Best stories success

const bestStoriesSuccess = (payload) => ({
  type: BESTSTORIES_SUCCESS,
  payload,
});

// action for Best stories failure

const bestStoriesFailure = () => ({
  type: BESTSTORIES_FAILURE,
});

// thunk call to fetch Best stories

export const BestStoriesData = () => (dispatch) => {
  dispatch(bestStoriesReq());
  axios
    .get("https://newsapp-backend00.herokuapp.com/beststories")
    .then((res) => dispatch(bestStoriesSuccess(res.data.BestStories)))
    .catch(() => dispatch(bestStoriesFailure()));
};


// action for new stories request

const newStoriesReq = () => ({
  type: NEWSTORIES_REQ,
});

// action for new stories success

const newStoriesSuccess = (payload) => ({
  type: NEWSTORIES_SUCCESS,
  payload,
});

// action for new stories failure

const newStoriesFailure = () => ({
  type: NEWSTORIES_FAILURE,
});

// thunk call to fetch new stories

export const NewStoriesData = () => (dispatch) => {
  dispatch(newStoriesReq());
  axios
    .get("https://newsapp-backend00.herokuapp.com/newstories")
    .then((res) => dispatch(newStoriesSuccess(res.data.NewStories)))
    .catch(() => dispatch(newStoriesFailure()));
};
