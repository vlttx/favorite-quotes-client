import React from 'react';
import { connect } from 'react-redux';
import QuickQuoteCard from './QuickQuoteCard';
import SearchCategory from '../search/SearchCategory';
// import CategoryList from '../categories/CategoryList'

const MyQuotes = props => {
	const quoteCards =
		props.quotes.length > 0 ? (
			<div className='myQuotes'>
				<SearchCategory />
				<br />
				{props.quotes.map(q => (
					<QuickQuoteCard key={q.id} quote={q} />
				))}
			</div>
		) : (
			'No quotes at the moment'
		);
	return quoteCards;
};

const mapStateToProps = state => {
	return {
		quotes: state.myQuotes
	};
};

export default connect(mapStateToProps)(MyQuotes);
