import { generatePath } from 'react-router-dom';
import qs from 'qs';
import _ from 'lodash';

export type BuildUrlOptions = {
  queryParams?: { [key: string]: unknown };
  pathParams?: { [key: string]: string | number | boolean | null | void };
};
  
/**
 * Build url with query and path params.
 *
 * @example
 * buildUrl('/products/:id', { pathParams: { id: 123 }, queryParams: { filter: 'someFilter' } }) // "/products/123?filter=someFilter"
 */
export const buildUrl = (path: string, options: BuildUrlOptions = {}): string => {
  let query = '';
  if (options.queryParams) {
    const queryParamsString = qs.stringify(options.queryParams, { skipNulls: true });
    query = queryParamsString.length > 0 ? `?${queryParamsString}` : '';
  }

  const filteredPathParams = _.omitBy(options.pathParams ?? {}, _.isNil);
  const strinifyPathParams = _.mapValues(filteredPathParams, val => String(val));
  const generatedPath = generatePath(path, strinifyPathParams);

  return `${generatedPath}${query}`;
};