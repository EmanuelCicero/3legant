import { Entity } from "src/core/shared/domain";
import { ProductColor, ProductCostructorProps, ProductCreateCommand, ProductId, ProductJson } from "./product.types";
import { Category } from "../../category/domain";

export class Product extends Entity<ProductJson, ProductId> {
  private readonly _product_id: ProductId;
  private readonly _name: string;
  private readonly _description: string;
  // private readonly _category: Category;
  private readonly _SKU: string;
  private readonly _size: string[];
  private readonly _price: string;
  private readonly _pictures: string[];
  private readonly _colors: ProductColor[];
  private _removed_at: Date

  public get entity_id(): ProductId {
    return this._product_id;
  }

  public get product_id(): ProductId {
    return this._product_id;
  }

  public get name(): string{
    return this._name;  
  }

  public get pictures(): string[]{
    return this._pictures;  
  }

  public get description(): string{
    return this._description
  }

  public get price(): string{
    return this._price;  
  }

  public get colors(): ProductColor[]{
    return this._colors;  
  }

  public get size(): string[]{
    return this._size;  
  }

  // public get category(): Category{
  //   return this._category;
  // }

  public get removed_at(): Date{
    return this._removed_at
  }

  public static create(props: ProductCreateCommand): Product {
    const product = new Product({
      ...props,
      product_id: new ProductId(),
    });
    return product;
  }

  constructor(props: ProductCostructorProps){
    super();
    this._product_id = props.product_id;
    this._name = props.name;
    this._pictures = props.pictures;
    this._description = props.description;
    this._price = props.price;
    this._colors = props.colors;
    this._size = props.size;
    // this._category = new Category(props.category);
  }

  toJSON(): ProductJson {
    return {
      product_id: this._product_id.id,
      name: this._name,
      pictures: this._pictures,
      description: this._description,
      price: this._price,
      color: this._colors,
      size: this._size,
      // category: this._category,
      SKU: this._SKU,
      removed_at: this._removed_at,
      new: this.new
    };
  }
}