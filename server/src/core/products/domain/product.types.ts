import { CategoryJson } from '../../category/domain';
import { EntityJSON } from '../../shared/domain';
import { Uuid } from '../../shared/domain/value-objects';

export interface ProductColor {
  name: string;
  picture?: string | null;
}

export interface ProductCostructorProps{
  product_id: ProductId;
  name: string;
  description: string;
  category: CategoryJson;
  SKU: string;
  size: string[];
  price: string;
  pictures?: string[] | null;
  colors: ProductColor[];
  removed_at?: Date | null;
  // review: string;
}

export interface ProductCreateCommand {
  name: string;
  description: string;
  category: CategoryJson;
  SKU: string;
  size: string[];
  price: string;
  colors: ProductColor[];
}

export type ProductJson = EntityJSON<{
  product_id: string;
  name: string;
  description: string;
  category: CategoryJson;
  SKU: string;
  size: string[];
  price: string;
  discounted_price: string;
  promotion: boolean;
  pictures: string[] | null;
  colors: ProductColor[];
  removed_at?: Date | null;
  new: boolean;
}>;

export class ProductId extends Uuid {}