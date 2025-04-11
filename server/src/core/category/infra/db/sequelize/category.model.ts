import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

export interface CategoryModelProps {
  category_id: string;
  name: string;
  picture: string | null;
  description: string | null;
  removed_at: Date | null;
}

@Table({ tableName: 't_category', timestamps: false })
export class CategoryModel extends Model<CategoryModelProps> {
  @PrimaryKey
  @Column({ type: DataType.UUID })
  declare public category_id: string;

  @Column({ allowNull: false, type: DataType.STRING(255) })
  declare public name: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  declare public picture?: string;

  @Column({ allowNull: true, type: DataType.STRING(1000) })
  declare public description?: string;

  @Column({ allowNull: true, type: DataType.DATE(6) })
  declare public removed_at?: Date;
}
