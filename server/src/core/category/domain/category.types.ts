import { EntityJSON } from '../../shared/domain';
import { Uuid } from '../../shared/domain/value-objects';

export interface CategoryConstructorProps {
  category_id: CategoryId;
  name: string;
  picture?: string | null;
  description?: string | null;
  removed_at?: Date | null;
}

export interface CategoryCreateCommand {
  name: string;
}

export type CategoryJson = EntityJSON<{
  category_id: string;
  name: string;
  picture: string | null;
  description: string | null;
  active: boolean;
  removed_at: Date | null;
}>;

export class CategoryId extends Uuid {}
