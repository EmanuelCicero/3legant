import {
  IRepository,
  SearchParams,
  SearchParamsConstructorProps,
  SearchResult,
} from '../../shared/domain/repository';
import { Category } from './category.entity';
import { CategoryId } from './category.types';

export interface CategoryFilter {
  category_id?: string[];
  name?: string[];
  include_removed?: boolean;
}

export class CategorySearchParams extends SearchParams<CategoryFilter> {
  static create(props?: Partial<SearchParamsConstructorProps<CategoryFilter>>) {
    return new CategorySearchParams({
      ...props,
      page: props?.page ?? 1,
      per_page: props?.per_page ?? 15,
      sort: props?.sort ?? 'name',
      sort_dir: props?.sort_dir ?? 'asc',
    });
  }

  public get Filter(): CategoryFilter | null {
    return this._filter;
  }
}

export class CategorySearchResult extends SearchResult<Category> {}

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface ICategoryRepository
  extends IRepository<
    Category,
    CategoryId,
    CategoryFilter,
    CategorySearchParams,
    CategorySearchResult
  > {}
