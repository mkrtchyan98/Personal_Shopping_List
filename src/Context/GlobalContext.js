import React from 'react';
import ItemsContextProvider from './ItemsContextProvider';
import ListsContextProvider from './ListsContextProvider';

const globalContext = ({children}) => {
	return (
		<ListsContextProvider>
		<ItemsContextProvider>
		{children}
		</ItemsContextProvider>
		</ListsContextProvider>
		);
};

export default globalContext