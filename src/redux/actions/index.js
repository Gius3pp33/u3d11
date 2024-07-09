export const SET_JOBS = 'SET_JOBS';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';
export const FETCH_JOBS_LOADING_OFF = 'FETCH_JOBS_LOADING_OFF';


export const addFavourite = (company) => ({
  type: ADD_FAVOURITE,
  payload: company,
});

export const removeFavourite = (company) => ({
  type: REMOVE_FAVOURITE,
  payload: company,
});

const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST,
});

const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs,
});

const fetchJobsFailure = (error) => ({
  type: FETCH_JOBS_FAILURE,
  payload: error,
});

const fetchJobsLoadingOff = () => ({
  type: FETCH_JOBS_LOADING_OFF,
});

const globalState = (getState) => {
 console.log("Get state", getState());
};

export const fetchJobs = (query) => {
  return async (dispatch, getState) => {
    dispatch(fetchJobsRequest());
    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(fetchJobsSuccess(data));
        globalState(getState);  
      } else {
        throw new Error('Errore nel recupero dei dati 😥');
      }
    } catch (error) {
      dispatch(fetchJobsFailure(error.message));
    } finally {
      dispatch(fetchJobsLoadingOff());
    }
  };
};
