import { createAction } from '@reduxjs/toolkit';
import { DocumentData } from '../types/document';
import { Genre } from '../types/genre';
import { Hierarchy, HierarchyParams } from '../types/hierarchy';
import { SearchParams } from '../types/search';
import { Table } from '../types/table';

export const getGenres = createAction<Genre[]>('search/getGenres');

export const getAuthors = createAction<string[]>('search/getAuthors');

export const getSearchResult = createAction<Table | null>(
  'search/getSearchResult'
);

export const getHierarchy = createAction<Hierarchy>(
  'genreStructure/getHierarchy'
);

export const getDocument = createAction<DocumentData>('document/getDocument');

export const showText = createAction<string>('document/showText');

export const getServerMessage = createAction<string>('document/addText');

export const setError = createAction<string>('error/setError');

export const setSearchParams = createAction<SearchParams>(
  'search/setSearchParams'
);

export const setHierarchyParams = createAction<HierarchyParams>(
  'genreStructure/setHierarchyParams'
);
