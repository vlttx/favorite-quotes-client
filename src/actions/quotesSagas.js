import { takeEvery } from 'redux-saga/effects';
import quotesActionTypes from '../reducers/quotesTypes';

export function* fetchQuotes() {
	yield console.log('I am fired');
}

export function* fetchMyQuotesStart() {
	yield takeEvery(quotesActionTypes.FETCH_QUOTES_START, fetchQuotes);
}
