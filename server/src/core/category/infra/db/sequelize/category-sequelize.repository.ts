import { OpBuilder } from '../../../../shared/infra/db/sequelize';
import {
  Category,
  CategoryFilter,
  CategoryId,
  CategorySearchParams,
  CategorySearchResult,
  ICategoryRepository,
} from '../../../domain';
import { CategoryModel, CategoryModelProps } from './category.model';
import { CategoryModelMapper } from './category.model-mapper';

export class CategorySequelizeRepository implements ICategoryRepository {
  public sortableFields: (keyof CategoryModelProps)[] = ['name'];

  constructor(private categoryModel: typeof CategoryModel) {}

  public async insert(entity: Category): Promise<void> {
    await this.categoryModel.create(CategoryModelMapper.toModelProps(entity));
  }

  public async findOne(filter: CategoryFilter): Promise<Category | null> {
    const { rows, count } = await this._search(
      CategorySearchParams.create({ filter }),
    );

    if (count > 1) {
      throw new Error(
        `Duplicated entity found for filter: ${JSON.stringify(filter)}`,
      );
    }

    return rows[0] || null;
  }

  public async findAll(
    props: CategorySearchParams,
  ): Promise<CategorySearchResult> {
    const { rows, count } = await this._search(props);

    return new CategorySearchResult({
      items: rows,
      total: count,
      current_page: props.page,
      per_page: props.per_page,
    });
  }

  public async update(entity: Category): Promise<void> {
    const { id } = entity.category_id;
    const modelProps = CategoryModelMapper.toModelProps(entity);
    const [affectedRows] = await this.categoryModel.update(modelProps, {
      where: { category_id: id },
    });

    if (!affectedRows) {
      throw new Error(`Not found entity: ${JSON.stringify(entity)}`);
    }
  }

  public async delete(entity_id: CategoryId): Promise<void> {
    const [affectedRows] = await this.categoryModel.update(
      { removed_at: new Date() },
      {
        where: { category_id: entity_id.id },
      },
    );

    if (!affectedRows) {
      throw new Error(
        `Not found an category with this id: ${JSON.stringify(entity_id.id)}`,
      );
    }
  }

  private async _search(props: CategorySearchParams) {
    const { offset, filter, per_page } = props;
    const { name, include_removed, category_id } = filter || {};

    const data = await this.categoryModel.findAndCountAll({
      where: {
        ...OpBuilder.MultipleExact('category_id', category_id),
        ...OpBuilder.MultipleLike('name', name),
        ...(!include_removed && { removed_at: null }),
      },
      order: OpBuilder.Order(props),
      limit: per_page,
      offset,
    });

    return {
      ...data,
      rows: data.rows.map(CategoryModelMapper.toEntity),
    };
  }
}
