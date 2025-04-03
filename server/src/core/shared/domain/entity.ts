import { ValueObject } from './value-objects';

export type EntityJSON<E = unknown> = Record<string, unknown> & E;

export abstract class Entity<JSON = EntityJSON, Id = ValueObject> {
  abstract get entity_id(): Id;

  abstract toJSON(): JSON;
}
