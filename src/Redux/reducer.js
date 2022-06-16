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

const initState = {
  topStories: null,
  bestStories: null,
  newStories: null,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  console.log(state, action);

  switch (action.type) {

    //Top stories

    case TOPSTORIES_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case TOPSTORIES_SUCCESS:
      return {
        ...state,
        topStories:  action.payload,
        isLoading: false,
      };
    case TOPSTORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    //Best stories

    case BESTSTORIES_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case BESTSTORIES_SUCCESS:
      return {
        ...state,
        bestStories: action.payload,
        isLoading: false,
      };
    case BESTSTORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    //New stories

    case NEWSTORIES_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case NEWSTORIES_SUCCESS:
      return {
        ...state,
        newStories: action.payload,
        isLoading: false,
      };
    case NEWSTORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
