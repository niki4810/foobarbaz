import { put, takeEvery, all, call } from "redux-saga/effects";

const fetchApi = (url) => {
  return fetch(url)
    .then(response => { return response.json();})
    .then(data => ({data}))
    .catch(error => ({error}));
}

export function* fetchUserRepos({userName}) {
  const { data:repos } = yield call(fetchApi, `https://api.github.com/users/${userName}/repos`);
  if (repos) {
    yield put({ type: "ON_USER_REPOS_FETCH", repos, userName});
  }
}

export function* fetchUserDetails({userName}) {
  const { data:userDetails } = yield call(fetchApi, `https://api.github.com/users/${userName}`);
  if (userDetails) {
    yield put({ type: "ON_USER_DETAILS_FETCH", userDetails, userName});
  }
}

export function* watchFetchUserRepos() {
  yield takeEvery("FETCH_USER_REPOS", fetchUserRepos);
};

export function* watchFetchUserDetails() {
  yield takeEvery("FETCH_USER_DETAILS", fetchUserDetails);
};

export default function* rootSaga() {
  yield all([
    watchFetchUserDetails(),
    watchFetchUserRepos()
  ]);
}
