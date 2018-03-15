import { put, takeEvery, all, call } from "redux-saga/effects";

const fetchUserReposApi = () => {
  const userName = "niki4810";  
}

const fetchApi = (url) => {
  return fetch(url)
    .then(response => {
      return response.json(); 
    })
    .then(data => ({data}))
    .catch(error => ({error}));
}

export function* fetchUserDetails({userName}) {
  const { data:userDetails } = yield call(fetchApi, `https://api.github.com/users/${userName}`); 
  const { data:repos } = yield call(fetchApi, `https://api.github.com/users/${userName}/repos`); 
  if (userDetails && repos ) {
    yield put({ type: "ON_USER_DETAILS_FETCH", userDetails, repos, userName})
  }  
}

export function* watchFetchUsers() {
  yield takeEvery("FETCH_USER_DETAILS", fetchUserDetails);
};

export default function* rootSaga() {
  yield all([
    watchFetchUsers()
  ]);
}