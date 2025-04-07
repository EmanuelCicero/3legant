import { Entity } from '../../shared/domain';
import {
  CategoryConstructorProps,
  CategoryCreateCommand,
  CategoryId,
  CategoryJson,
} from './category.types';

export class Category extends Entity<CategoryJson, CategoryId> {
  private readonly _category_id: CategoryId;
  private readonly _name: string;
  private readonly _picture?: string | null;
  private readonly _description?: string | null;
  private _removed_at?: Date | null;

  public get entity_id(): CategoryId {
    return this._category_id;
  }

  public get category_id(): CategoryId {
    return this._category_id;
  }

  public get name(): string {
    return this._name;
  }

  public get picture(): string | null {
    return this._picture ?? null;
  }

  public get description(): string | null {
    return this._description ?? null;
  }

  public get removed_at(): Date | null {
    return this._removed_at ?? null;
  }

  public get active(): boolean {
    return !this._removed_at;
  }

  public static create(props: CategoryCreateCommand): Category {
    const category = new Category({
      ...props,
      category_id: new CategoryId(),
    });
    return category;
  }

  constructor(props: CategoryConstructorProps) {
    super();
    this._category_id = props.category_id;
    this._name = props.name;
    this._picture = props.picture;
    this._description = props.description;
    this._removed_at = props.removed_at;
  }

  public activate(): void {
    this._removed_at = null;
  }

  public deactivate(): void {
    this._removed_at = new Date();
  }

  toJSON(): CategoryJson {
    return {
      category_id: this.category_id.id,
      name: this.name,
      picture: this.picture ?? null,
      description: this.description ?? null,
      active: this.active,
      removed_at: this.removed_at ?? null,
    };
  }
}
