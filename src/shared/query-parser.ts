import { FindOptions } from "sequelize";
import { ACCOUNT_TYPES, ICriteria, IInclude } from "src/interface/interface";
import { QueryHelper } from "./query-helper";

export class QueryParser {
  private queryHelper
  constructor () {
    this.queryHelper = new QueryHelper()
  }
  parse(rawCriteria: ICriteria): FindOptions {
    let finalResult: FindOptions = {};

    if (!rawCriteria) {
      return finalResult;
    }

    const { select, filters, limit, page, includes, sort, search, groupBy, offset, ...otherCriterias } = rawCriteria;

    if (select && select.length) {
      finalResult.attributes = this.queryHelper._parseSelect(select);
    }

    if (groupBy && groupBy.length) {
      finalResult.group = this.queryHelper._parseGroupBy(groupBy);
    }

    let newFilters = filters
    if (typeof(filters) === 'string') {
      newFilters = JSON.parse(filters)
    }

    if (newFilters && newFilters.length) {
      finalResult.where = this.queryHelper._parseFilters(newFilters);
    }

    if (limit && (page || offset !== undefined)) {
      finalResult.limit = limit;
      finalResult.offset = page ? (page - 1) * limit : offset;
    }
    
    let parsedInclude: IInclude[] = []
    try {
      parsedInclude = JSON.parse(includes.toString())
    } catch {
      parsedInclude = []
    }
    if (parsedInclude && parsedInclude.length) {
      finalResult.include = this.queryHelper._parseIncludes(parsedInclude);
    }

    if (sort) {
      finalResult.order = this.queryHelper._parseSort(sort);
    }

    if (search) {
      finalResult.where = finalResult.where
        && Object.assign(finalResult.where, this.queryHelper._parseSearch(search))
        || this.queryHelper._parseSearch(search);
    }

    finalResult = {
      ...finalResult,
      ...otherCriterias,
    };
    
    return finalResult;
  }
  
}