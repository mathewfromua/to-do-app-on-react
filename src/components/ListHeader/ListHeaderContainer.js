import React from 'react';
import { ListHeaderComponent } from './ListHeaderComponent';

const ListHeaderContainer = ({ activeTasks }) => {
	return(
		<ListHeaderComponent activeTasks={ activeTasks } />
	)
};

export { ListHeaderContainer };


