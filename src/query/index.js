// @flow

import {schemaToQueriesObject, objectToQueries} from './utils';
import {get, set} from 'lodash';

export class Query {
  schema: Object
  queries: Object

  constructor({schema}: {schema: Object}) {
    this.schema = schema;
    this.queries = schemaToQueriesObject(schema, schema, {
      firstLayer: true
    });
  }

  updateQueries = (pathArr: Array<string>, field: string, value: any) => {
    const path = `${pathArr.join('.fields.')}.${field}`;
    set(this.queries, path, value);
  }

  getQueries = (pathArr: Array<string>): Object => {
    const path = pathArr.join('.fields.');
    return get(this.queries, path);
  }

  toGQL = (key: string): string => {
    const obj = this.getQueries([key]);
    return objectToQueries({[key]: obj});
  }
}