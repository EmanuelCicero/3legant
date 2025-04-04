import { Category, CategoryId } from '../../../domain';
import { CategoryModel, CategoryModelProps } from './category.model';

export class CategoryModelMapper {
  public static toEntity(model: CategoryModel): Category {
    const { category_id, ...otherData } = model.toJSON();

    const category = new Category({
      ...otherData,
      category_id: new CategoryId(category_id),
    });

    return category;
  }

  public static toModelProps(entity: Category): CategoryModelProps {
    const result = entity.toJSON();

    return {
      ...result,
      category_id: entity.category_id.id,
    };
  }
}
