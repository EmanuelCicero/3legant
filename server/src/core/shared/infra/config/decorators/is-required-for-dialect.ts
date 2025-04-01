import { Dialect } from 'sequelize';
import { ValidateIf } from 'class-validator';

export function IsRequiredForDialect(requiredDialects: Dialect[]) {
  return ValidateIf(
    ({ dialect }) => dialect && requiredDialects.includes(dialect),
  );
}
