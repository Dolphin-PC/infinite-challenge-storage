
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model episode_info
 * 
 */
export type episode_info = $Result.DefaultSelection<Prisma.$episode_infoPayload>
/**
 * Model meme_info
 * 
 */
export type meme_info = $Result.DefaultSelection<Prisma.$meme_infoPayload>
/**
 * Model season_info
 * 
 */
export type season_info = $Result.DefaultSelection<Prisma.$season_infoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Episode_infos
 * const episode_infos = await prisma.episode_info.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Episode_infos
   * const episode_infos = await prisma.episode_info.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.episode_info`: Exposes CRUD operations for the **episode_info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episode_infos
    * const episode_infos = await prisma.episode_info.findMany()
    * ```
    */
  get episode_info(): Prisma.episode_infoDelegate<ExtArgs>;

  /**
   * `prisma.meme_info`: Exposes CRUD operations for the **meme_info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meme_infos
    * const meme_infos = await prisma.meme_info.findMany()
    * ```
    */
  get meme_info(): Prisma.meme_infoDelegate<ExtArgs>;

  /**
   * `prisma.season_info`: Exposes CRUD operations for the **season_info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Season_infos
    * const season_infos = await prisma.season_info.findMany()
    * ```
    */
  get season_info(): Prisma.season_infoDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    episode_info: 'episode_info',
    meme_info: 'meme_info',
    season_info: 'season_info'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'episode_info' | 'meme_info' | 'season_info'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      episode_info: {
        payload: Prisma.$episode_infoPayload<ExtArgs>
        fields: Prisma.episode_infoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.episode_infoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$episode_infoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.episode_infoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$episode_infoPayload>
          }
          findFirst: {
            args: Prisma.episode_infoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$episode_infoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.episode_infoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$episode_infoPayload>
          }
          findMany: {
            args: Prisma.episode_infoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$episode_infoPayload>[]
          }
          create: {
            args: Prisma.episode_infoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$episode_infoPayload>
          }
          createMany: {
            args: Prisma.episode_infoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.episode_infoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$episode_infoPayload>
          }
          update: {
            args: Prisma.episode_infoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$episode_infoPayload>
          }
          deleteMany: {
            args: Prisma.episode_infoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.episode_infoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.episode_infoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$episode_infoPayload>
          }
          aggregate: {
            args: Prisma.Episode_infoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEpisode_info>
          }
          groupBy: {
            args: Prisma.episode_infoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Episode_infoGroupByOutputType>[]
          }
          count: {
            args: Prisma.episode_infoCountArgs<ExtArgs>,
            result: $Utils.Optional<Episode_infoCountAggregateOutputType> | number
          }
        }
      }
      meme_info: {
        payload: Prisma.$meme_infoPayload<ExtArgs>
        fields: Prisma.meme_infoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.meme_infoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$meme_infoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.meme_infoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$meme_infoPayload>
          }
          findFirst: {
            args: Prisma.meme_infoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$meme_infoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.meme_infoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$meme_infoPayload>
          }
          findMany: {
            args: Prisma.meme_infoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$meme_infoPayload>[]
          }
          create: {
            args: Prisma.meme_infoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$meme_infoPayload>
          }
          createMany: {
            args: Prisma.meme_infoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.meme_infoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$meme_infoPayload>
          }
          update: {
            args: Prisma.meme_infoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$meme_infoPayload>
          }
          deleteMany: {
            args: Prisma.meme_infoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.meme_infoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.meme_infoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$meme_infoPayload>
          }
          aggregate: {
            args: Prisma.Meme_infoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMeme_info>
          }
          groupBy: {
            args: Prisma.meme_infoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Meme_infoGroupByOutputType>[]
          }
          count: {
            args: Prisma.meme_infoCountArgs<ExtArgs>,
            result: $Utils.Optional<Meme_infoCountAggregateOutputType> | number
          }
        }
      }
      season_info: {
        payload: Prisma.$season_infoPayload<ExtArgs>
        fields: Prisma.season_infoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.season_infoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$season_infoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.season_infoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$season_infoPayload>
          }
          findFirst: {
            args: Prisma.season_infoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$season_infoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.season_infoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$season_infoPayload>
          }
          findMany: {
            args: Prisma.season_infoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$season_infoPayload>[]
          }
          create: {
            args: Prisma.season_infoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$season_infoPayload>
          }
          createMany: {
            args: Prisma.season_infoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.season_infoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$season_infoPayload>
          }
          update: {
            args: Prisma.season_infoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$season_infoPayload>
          }
          deleteMany: {
            args: Prisma.season_infoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.season_infoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.season_infoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$season_infoPayload>
          }
          aggregate: {
            args: Prisma.Season_infoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSeason_info>
          }
          groupBy: {
            args: Prisma.season_infoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Season_infoGroupByOutputType>[]
          }
          count: {
            args: Prisma.season_infoCountArgs<ExtArgs>,
            result: $Utils.Optional<Season_infoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model episode_info
   */

  export type AggregateEpisode_info = {
    _count: Episode_infoCountAggregateOutputType | null
    _avg: Episode_infoAvgAggregateOutputType | null
    _sum: Episode_infoSumAggregateOutputType | null
    _min: Episode_infoMinAggregateOutputType | null
    _max: Episode_infoMaxAggregateOutputType | null
  }

  export type Episode_infoAvgAggregateOutputType = {
    id: number | null
  }

  export type Episode_infoSumAggregateOutputType = {
    id: number | null
  }

  export type Episode_infoMinAggregateOutputType = {
    season: string | null
    id: number | null
    title: string | null
    description: string | null
    air_date: string | null
    air_time: string | null
    img_src: string | null
  }

  export type Episode_infoMaxAggregateOutputType = {
    season: string | null
    id: number | null
    title: string | null
    description: string | null
    air_date: string | null
    air_time: string | null
    img_src: string | null
  }

  export type Episode_infoCountAggregateOutputType = {
    season: number
    id: number
    title: number
    description: number
    air_date: number
    air_time: number
    img_src: number
    actor: number
    _all: number
  }


  export type Episode_infoAvgAggregateInputType = {
    id?: true
  }

  export type Episode_infoSumAggregateInputType = {
    id?: true
  }

  export type Episode_infoMinAggregateInputType = {
    season?: true
    id?: true
    title?: true
    description?: true
    air_date?: true
    air_time?: true
    img_src?: true
  }

  export type Episode_infoMaxAggregateInputType = {
    season?: true
    id?: true
    title?: true
    description?: true
    air_date?: true
    air_time?: true
    img_src?: true
  }

  export type Episode_infoCountAggregateInputType = {
    season?: true
    id?: true
    title?: true
    description?: true
    air_date?: true
    air_time?: true
    img_src?: true
    actor?: true
    _all?: true
  }

  export type Episode_infoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which episode_info to aggregate.
     */
    where?: episode_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of episode_infos to fetch.
     */
    orderBy?: episode_infoOrderByWithRelationInput | episode_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: episode_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` episode_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` episode_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned episode_infos
    **/
    _count?: true | Episode_infoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Episode_infoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Episode_infoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Episode_infoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Episode_infoMaxAggregateInputType
  }

  export type GetEpisode_infoAggregateType<T extends Episode_infoAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode_info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode_info[P]>
      : GetScalarType<T[P], AggregateEpisode_info[P]>
  }




  export type episode_infoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: episode_infoWhereInput
    orderBy?: episode_infoOrderByWithAggregationInput | episode_infoOrderByWithAggregationInput[]
    by: Episode_infoScalarFieldEnum[] | Episode_infoScalarFieldEnum
    having?: episode_infoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Episode_infoCountAggregateInputType | true
    _avg?: Episode_infoAvgAggregateInputType
    _sum?: Episode_infoSumAggregateInputType
    _min?: Episode_infoMinAggregateInputType
    _max?: Episode_infoMaxAggregateInputType
  }

  export type Episode_infoGroupByOutputType = {
    season: string
    id: number
    title: string | null
    description: string | null
    air_date: string | null
    air_time: string | null
    img_src: string
    actor: string[]
    _count: Episode_infoCountAggregateOutputType | null
    _avg: Episode_infoAvgAggregateOutputType | null
    _sum: Episode_infoSumAggregateOutputType | null
    _min: Episode_infoMinAggregateOutputType | null
    _max: Episode_infoMaxAggregateOutputType | null
  }

  type GetEpisode_infoGroupByPayload<T extends episode_infoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Episode_infoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Episode_infoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Episode_infoGroupByOutputType[P]>
            : GetScalarType<T[P], Episode_infoGroupByOutputType[P]>
        }
      >
    >


  export type episode_infoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    season?: boolean
    id?: boolean
    title?: boolean
    description?: boolean
    air_date?: boolean
    air_time?: boolean
    img_src?: boolean
    actor?: boolean
  }, ExtArgs["result"]["episode_info"]>

  export type episode_infoSelectScalar = {
    season?: boolean
    id?: boolean
    title?: boolean
    description?: boolean
    air_date?: boolean
    air_time?: boolean
    img_src?: boolean
    actor?: boolean
  }


  export type $episode_infoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "episode_info"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      season: string
      id: number
      title: string | null
      description: string | null
      air_date: string | null
      air_time: string | null
      img_src: string
      actor: string[]
    }, ExtArgs["result"]["episode_info"]>
    composites: {}
  }


  type episode_infoGetPayload<S extends boolean | null | undefined | episode_infoDefaultArgs> = $Result.GetResult<Prisma.$episode_infoPayload, S>

  type episode_infoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<episode_infoFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Episode_infoCountAggregateInputType | true
    }

  export interface episode_infoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['episode_info'], meta: { name: 'episode_info' } }
    /**
     * Find zero or one Episode_info that matches the filter.
     * @param {episode_infoFindUniqueArgs} args - Arguments to find a Episode_info
     * @example
     * // Get one Episode_info
     * const episode_info = await prisma.episode_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends episode_infoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, episode_infoFindUniqueArgs<ExtArgs>>
    ): Prisma__episode_infoClient<$Result.GetResult<Prisma.$episode_infoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Episode_info that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {episode_infoFindUniqueOrThrowArgs} args - Arguments to find a Episode_info
     * @example
     * // Get one Episode_info
     * const episode_info = await prisma.episode_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends episode_infoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, episode_infoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__episode_infoClient<$Result.GetResult<Prisma.$episode_infoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Episode_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episode_infoFindFirstArgs} args - Arguments to find a Episode_info
     * @example
     * // Get one Episode_info
     * const episode_info = await prisma.episode_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends episode_infoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, episode_infoFindFirstArgs<ExtArgs>>
    ): Prisma__episode_infoClient<$Result.GetResult<Prisma.$episode_infoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Episode_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episode_infoFindFirstOrThrowArgs} args - Arguments to find a Episode_info
     * @example
     * // Get one Episode_info
     * const episode_info = await prisma.episode_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends episode_infoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, episode_infoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__episode_infoClient<$Result.GetResult<Prisma.$episode_infoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Episode_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episode_infoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episode_infos
     * const episode_infos = await prisma.episode_info.findMany()
     * 
     * // Get first 10 Episode_infos
     * const episode_infos = await prisma.episode_info.findMany({ take: 10 })
     * 
     * // Only select the `season`
     * const episode_infoWithSeasonOnly = await prisma.episode_info.findMany({ select: { season: true } })
     * 
    **/
    findMany<T extends episode_infoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, episode_infoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$episode_infoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Episode_info.
     * @param {episode_infoCreateArgs} args - Arguments to create a Episode_info.
     * @example
     * // Create one Episode_info
     * const Episode_info = await prisma.episode_info.create({
     *   data: {
     *     // ... data to create a Episode_info
     *   }
     * })
     * 
    **/
    create<T extends episode_infoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, episode_infoCreateArgs<ExtArgs>>
    ): Prisma__episode_infoClient<$Result.GetResult<Prisma.$episode_infoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Episode_infos.
     *     @param {episode_infoCreateManyArgs} args - Arguments to create many Episode_infos.
     *     @example
     *     // Create many Episode_infos
     *     const episode_info = await prisma.episode_info.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends episode_infoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, episode_infoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Episode_info.
     * @param {episode_infoDeleteArgs} args - Arguments to delete one Episode_info.
     * @example
     * // Delete one Episode_info
     * const Episode_info = await prisma.episode_info.delete({
     *   where: {
     *     // ... filter to delete one Episode_info
     *   }
     * })
     * 
    **/
    delete<T extends episode_infoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, episode_infoDeleteArgs<ExtArgs>>
    ): Prisma__episode_infoClient<$Result.GetResult<Prisma.$episode_infoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Episode_info.
     * @param {episode_infoUpdateArgs} args - Arguments to update one Episode_info.
     * @example
     * // Update one Episode_info
     * const episode_info = await prisma.episode_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends episode_infoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, episode_infoUpdateArgs<ExtArgs>>
    ): Prisma__episode_infoClient<$Result.GetResult<Prisma.$episode_infoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Episode_infos.
     * @param {episode_infoDeleteManyArgs} args - Arguments to filter Episode_infos to delete.
     * @example
     * // Delete a few Episode_infos
     * const { count } = await prisma.episode_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends episode_infoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, episode_infoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episode_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episode_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episode_infos
     * const episode_info = await prisma.episode_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends episode_infoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, episode_infoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Episode_info.
     * @param {episode_infoUpsertArgs} args - Arguments to update or create a Episode_info.
     * @example
     * // Update or create a Episode_info
     * const episode_info = await prisma.episode_info.upsert({
     *   create: {
     *     // ... data to create a Episode_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode_info we want to update
     *   }
     * })
    **/
    upsert<T extends episode_infoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, episode_infoUpsertArgs<ExtArgs>>
    ): Prisma__episode_infoClient<$Result.GetResult<Prisma.$episode_infoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Episode_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episode_infoCountArgs} args - Arguments to filter Episode_infos to count.
     * @example
     * // Count the number of Episode_infos
     * const count = await prisma.episode_info.count({
     *   where: {
     *     // ... the filter for the Episode_infos we want to count
     *   }
     * })
    **/
    count<T extends episode_infoCountArgs>(
      args?: Subset<T, episode_infoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Episode_infoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Episode_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Episode_infoAggregateArgs>(args: Subset<T, Episode_infoAggregateArgs>): Prisma.PrismaPromise<GetEpisode_infoAggregateType<T>>

    /**
     * Group by Episode_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {episode_infoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends episode_infoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: episode_infoGroupByArgs['orderBy'] }
        : { orderBy?: episode_infoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, episode_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisode_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the episode_info model
   */
  readonly fields: episode_infoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for episode_info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__episode_infoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the episode_info model
   */ 
  interface episode_infoFieldRefs {
    readonly season: FieldRef<"episode_info", 'String'>
    readonly id: FieldRef<"episode_info", 'Int'>
    readonly title: FieldRef<"episode_info", 'String'>
    readonly description: FieldRef<"episode_info", 'String'>
    readonly air_date: FieldRef<"episode_info", 'String'>
    readonly air_time: FieldRef<"episode_info", 'String'>
    readonly img_src: FieldRef<"episode_info", 'String'>
    readonly actor: FieldRef<"episode_info", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * episode_info findUnique
   */
  export type episode_infoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode_info
     */
    select?: episode_infoSelect<ExtArgs> | null
    /**
     * Filter, which episode_info to fetch.
     */
    where: episode_infoWhereUniqueInput
  }


  /**
   * episode_info findUniqueOrThrow
   */
  export type episode_infoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode_info
     */
    select?: episode_infoSelect<ExtArgs> | null
    /**
     * Filter, which episode_info to fetch.
     */
    where: episode_infoWhereUniqueInput
  }


  /**
   * episode_info findFirst
   */
  export type episode_infoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode_info
     */
    select?: episode_infoSelect<ExtArgs> | null
    /**
     * Filter, which episode_info to fetch.
     */
    where?: episode_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of episode_infos to fetch.
     */
    orderBy?: episode_infoOrderByWithRelationInput | episode_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for episode_infos.
     */
    cursor?: episode_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` episode_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` episode_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of episode_infos.
     */
    distinct?: Episode_infoScalarFieldEnum | Episode_infoScalarFieldEnum[]
  }


  /**
   * episode_info findFirstOrThrow
   */
  export type episode_infoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode_info
     */
    select?: episode_infoSelect<ExtArgs> | null
    /**
     * Filter, which episode_info to fetch.
     */
    where?: episode_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of episode_infos to fetch.
     */
    orderBy?: episode_infoOrderByWithRelationInput | episode_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for episode_infos.
     */
    cursor?: episode_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` episode_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` episode_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of episode_infos.
     */
    distinct?: Episode_infoScalarFieldEnum | Episode_infoScalarFieldEnum[]
  }


  /**
   * episode_info findMany
   */
  export type episode_infoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode_info
     */
    select?: episode_infoSelect<ExtArgs> | null
    /**
     * Filter, which episode_infos to fetch.
     */
    where?: episode_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of episode_infos to fetch.
     */
    orderBy?: episode_infoOrderByWithRelationInput | episode_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing episode_infos.
     */
    cursor?: episode_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` episode_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` episode_infos.
     */
    skip?: number
    distinct?: Episode_infoScalarFieldEnum | Episode_infoScalarFieldEnum[]
  }


  /**
   * episode_info create
   */
  export type episode_infoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode_info
     */
    select?: episode_infoSelect<ExtArgs> | null
    /**
     * The data needed to create a episode_info.
     */
    data: XOR<episode_infoCreateInput, episode_infoUncheckedCreateInput>
  }


  /**
   * episode_info createMany
   */
  export type episode_infoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many episode_infos.
     */
    data: episode_infoCreateManyInput | episode_infoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * episode_info update
   */
  export type episode_infoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode_info
     */
    select?: episode_infoSelect<ExtArgs> | null
    /**
     * The data needed to update a episode_info.
     */
    data: XOR<episode_infoUpdateInput, episode_infoUncheckedUpdateInput>
    /**
     * Choose, which episode_info to update.
     */
    where: episode_infoWhereUniqueInput
  }


  /**
   * episode_info updateMany
   */
  export type episode_infoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update episode_infos.
     */
    data: XOR<episode_infoUpdateManyMutationInput, episode_infoUncheckedUpdateManyInput>
    /**
     * Filter which episode_infos to update
     */
    where?: episode_infoWhereInput
  }


  /**
   * episode_info upsert
   */
  export type episode_infoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode_info
     */
    select?: episode_infoSelect<ExtArgs> | null
    /**
     * The filter to search for the episode_info to update in case it exists.
     */
    where: episode_infoWhereUniqueInput
    /**
     * In case the episode_info found by the `where` argument doesn't exist, create a new episode_info with this data.
     */
    create: XOR<episode_infoCreateInput, episode_infoUncheckedCreateInput>
    /**
     * In case the episode_info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<episode_infoUpdateInput, episode_infoUncheckedUpdateInput>
  }


  /**
   * episode_info delete
   */
  export type episode_infoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode_info
     */
    select?: episode_infoSelect<ExtArgs> | null
    /**
     * Filter which episode_info to delete.
     */
    where: episode_infoWhereUniqueInput
  }


  /**
   * episode_info deleteMany
   */
  export type episode_infoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which episode_infos to delete
     */
    where?: episode_infoWhereInput
  }


  /**
   * episode_info without action
   */
  export type episode_infoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the episode_info
     */
    select?: episode_infoSelect<ExtArgs> | null
  }



  /**
   * Model meme_info
   */

  export type AggregateMeme_info = {
    _count: Meme_infoCountAggregateOutputType | null
    _avg: Meme_infoAvgAggregateOutputType | null
    _sum: Meme_infoSumAggregateOutputType | null
    _min: Meme_infoMinAggregateOutputType | null
    _max: Meme_infoMaxAggregateOutputType | null
  }

  export type Meme_infoAvgAggregateOutputType = {
    id: number | null
    download_cnt: number | null
    like_cnt: number | null
  }

  export type Meme_infoSumAggregateOutputType = {
    id: number | null
    download_cnt: number | null
    like_cnt: number | null
  }

  export type Meme_infoMinAggregateOutputType = {
    id: number | null
    img_src: string | null
    thumnail_src: string | null
    alt: string | null
    download_cnt: number | null
    like_cnt: number | null
  }

  export type Meme_infoMaxAggregateOutputType = {
    id: number | null
    img_src: string | null
    thumnail_src: string | null
    alt: string | null
    download_cnt: number | null
    like_cnt: number | null
  }

  export type Meme_infoCountAggregateOutputType = {
    id: number
    img_src: number
    thumnail_src: number
    alt: number
    tag: number
    download_cnt: number
    like_cnt: number
    _all: number
  }


  export type Meme_infoAvgAggregateInputType = {
    id?: true
    download_cnt?: true
    like_cnt?: true
  }

  export type Meme_infoSumAggregateInputType = {
    id?: true
    download_cnt?: true
    like_cnt?: true
  }

  export type Meme_infoMinAggregateInputType = {
    id?: true
    img_src?: true
    thumnail_src?: true
    alt?: true
    download_cnt?: true
    like_cnt?: true
  }

  export type Meme_infoMaxAggregateInputType = {
    id?: true
    img_src?: true
    thumnail_src?: true
    alt?: true
    download_cnt?: true
    like_cnt?: true
  }

  export type Meme_infoCountAggregateInputType = {
    id?: true
    img_src?: true
    thumnail_src?: true
    alt?: true
    tag?: true
    download_cnt?: true
    like_cnt?: true
    _all?: true
  }

  export type Meme_infoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meme_info to aggregate.
     */
    where?: meme_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meme_infos to fetch.
     */
    orderBy?: meme_infoOrderByWithRelationInput | meme_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meme_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meme_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meme_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meme_infos
    **/
    _count?: true | Meme_infoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Meme_infoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Meme_infoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Meme_infoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Meme_infoMaxAggregateInputType
  }

  export type GetMeme_infoAggregateType<T extends Meme_infoAggregateArgs> = {
        [P in keyof T & keyof AggregateMeme_info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeme_info[P]>
      : GetScalarType<T[P], AggregateMeme_info[P]>
  }




  export type meme_infoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meme_infoWhereInput
    orderBy?: meme_infoOrderByWithAggregationInput | meme_infoOrderByWithAggregationInput[]
    by: Meme_infoScalarFieldEnum[] | Meme_infoScalarFieldEnum
    having?: meme_infoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Meme_infoCountAggregateInputType | true
    _avg?: Meme_infoAvgAggregateInputType
    _sum?: Meme_infoSumAggregateInputType
    _min?: Meme_infoMinAggregateInputType
    _max?: Meme_infoMaxAggregateInputType
  }

  export type Meme_infoGroupByOutputType = {
    id: number
    img_src: string
    thumnail_src: string
    alt: string | null
    tag: string[]
    download_cnt: number
    like_cnt: number
    _count: Meme_infoCountAggregateOutputType | null
    _avg: Meme_infoAvgAggregateOutputType | null
    _sum: Meme_infoSumAggregateOutputType | null
    _min: Meme_infoMinAggregateOutputType | null
    _max: Meme_infoMaxAggregateOutputType | null
  }

  type GetMeme_infoGroupByPayload<T extends meme_infoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Meme_infoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Meme_infoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Meme_infoGroupByOutputType[P]>
            : GetScalarType<T[P], Meme_infoGroupByOutputType[P]>
        }
      >
    >


  export type meme_infoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    img_src?: boolean
    thumnail_src?: boolean
    alt?: boolean
    tag?: boolean
    download_cnt?: boolean
    like_cnt?: boolean
  }, ExtArgs["result"]["meme_info"]>

  export type meme_infoSelectScalar = {
    id?: boolean
    img_src?: boolean
    thumnail_src?: boolean
    alt?: boolean
    tag?: boolean
    download_cnt?: boolean
    like_cnt?: boolean
  }


  export type $meme_infoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meme_info"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      img_src: string
      thumnail_src: string
      alt: string | null
      tag: string[]
      download_cnt: number
      like_cnt: number
    }, ExtArgs["result"]["meme_info"]>
    composites: {}
  }


  type meme_infoGetPayload<S extends boolean | null | undefined | meme_infoDefaultArgs> = $Result.GetResult<Prisma.$meme_infoPayload, S>

  type meme_infoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<meme_infoFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Meme_infoCountAggregateInputType | true
    }

  export interface meme_infoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meme_info'], meta: { name: 'meme_info' } }
    /**
     * Find zero or one Meme_info that matches the filter.
     * @param {meme_infoFindUniqueArgs} args - Arguments to find a Meme_info
     * @example
     * // Get one Meme_info
     * const meme_info = await prisma.meme_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends meme_infoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, meme_infoFindUniqueArgs<ExtArgs>>
    ): Prisma__meme_infoClient<$Result.GetResult<Prisma.$meme_infoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Meme_info that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {meme_infoFindUniqueOrThrowArgs} args - Arguments to find a Meme_info
     * @example
     * // Get one Meme_info
     * const meme_info = await prisma.meme_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends meme_infoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, meme_infoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__meme_infoClient<$Result.GetResult<Prisma.$meme_infoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Meme_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meme_infoFindFirstArgs} args - Arguments to find a Meme_info
     * @example
     * // Get one Meme_info
     * const meme_info = await prisma.meme_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends meme_infoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, meme_infoFindFirstArgs<ExtArgs>>
    ): Prisma__meme_infoClient<$Result.GetResult<Prisma.$meme_infoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Meme_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meme_infoFindFirstOrThrowArgs} args - Arguments to find a Meme_info
     * @example
     * // Get one Meme_info
     * const meme_info = await prisma.meme_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends meme_infoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, meme_infoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__meme_infoClient<$Result.GetResult<Prisma.$meme_infoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Meme_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meme_infoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meme_infos
     * const meme_infos = await prisma.meme_info.findMany()
     * 
     * // Get first 10 Meme_infos
     * const meme_infos = await prisma.meme_info.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meme_infoWithIdOnly = await prisma.meme_info.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends meme_infoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, meme_infoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meme_infoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Meme_info.
     * @param {meme_infoCreateArgs} args - Arguments to create a Meme_info.
     * @example
     * // Create one Meme_info
     * const Meme_info = await prisma.meme_info.create({
     *   data: {
     *     // ... data to create a Meme_info
     *   }
     * })
     * 
    **/
    create<T extends meme_infoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, meme_infoCreateArgs<ExtArgs>>
    ): Prisma__meme_infoClient<$Result.GetResult<Prisma.$meme_infoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Meme_infos.
     *     @param {meme_infoCreateManyArgs} args - Arguments to create many Meme_infos.
     *     @example
     *     // Create many Meme_infos
     *     const meme_info = await prisma.meme_info.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends meme_infoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, meme_infoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Meme_info.
     * @param {meme_infoDeleteArgs} args - Arguments to delete one Meme_info.
     * @example
     * // Delete one Meme_info
     * const Meme_info = await prisma.meme_info.delete({
     *   where: {
     *     // ... filter to delete one Meme_info
     *   }
     * })
     * 
    **/
    delete<T extends meme_infoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, meme_infoDeleteArgs<ExtArgs>>
    ): Prisma__meme_infoClient<$Result.GetResult<Prisma.$meme_infoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Meme_info.
     * @param {meme_infoUpdateArgs} args - Arguments to update one Meme_info.
     * @example
     * // Update one Meme_info
     * const meme_info = await prisma.meme_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends meme_infoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, meme_infoUpdateArgs<ExtArgs>>
    ): Prisma__meme_infoClient<$Result.GetResult<Prisma.$meme_infoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Meme_infos.
     * @param {meme_infoDeleteManyArgs} args - Arguments to filter Meme_infos to delete.
     * @example
     * // Delete a few Meme_infos
     * const { count } = await prisma.meme_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends meme_infoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, meme_infoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meme_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meme_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meme_infos
     * const meme_info = await prisma.meme_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends meme_infoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, meme_infoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meme_info.
     * @param {meme_infoUpsertArgs} args - Arguments to update or create a Meme_info.
     * @example
     * // Update or create a Meme_info
     * const meme_info = await prisma.meme_info.upsert({
     *   create: {
     *     // ... data to create a Meme_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meme_info we want to update
     *   }
     * })
    **/
    upsert<T extends meme_infoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, meme_infoUpsertArgs<ExtArgs>>
    ): Prisma__meme_infoClient<$Result.GetResult<Prisma.$meme_infoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Meme_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meme_infoCountArgs} args - Arguments to filter Meme_infos to count.
     * @example
     * // Count the number of Meme_infos
     * const count = await prisma.meme_info.count({
     *   where: {
     *     // ... the filter for the Meme_infos we want to count
     *   }
     * })
    **/
    count<T extends meme_infoCountArgs>(
      args?: Subset<T, meme_infoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Meme_infoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meme_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Meme_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Meme_infoAggregateArgs>(args: Subset<T, Meme_infoAggregateArgs>): Prisma.PrismaPromise<GetMeme_infoAggregateType<T>>

    /**
     * Group by Meme_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meme_infoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends meme_infoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: meme_infoGroupByArgs['orderBy'] }
        : { orderBy?: meme_infoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, meme_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeme_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meme_info model
   */
  readonly fields: meme_infoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meme_info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__meme_infoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the meme_info model
   */ 
  interface meme_infoFieldRefs {
    readonly id: FieldRef<"meme_info", 'Int'>
    readonly img_src: FieldRef<"meme_info", 'String'>
    readonly thumnail_src: FieldRef<"meme_info", 'String'>
    readonly alt: FieldRef<"meme_info", 'String'>
    readonly tag: FieldRef<"meme_info", 'String[]'>
    readonly download_cnt: FieldRef<"meme_info", 'Int'>
    readonly like_cnt: FieldRef<"meme_info", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * meme_info findUnique
   */
  export type meme_infoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meme_info
     */
    select?: meme_infoSelect<ExtArgs> | null
    /**
     * Filter, which meme_info to fetch.
     */
    where: meme_infoWhereUniqueInput
  }


  /**
   * meme_info findUniqueOrThrow
   */
  export type meme_infoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meme_info
     */
    select?: meme_infoSelect<ExtArgs> | null
    /**
     * Filter, which meme_info to fetch.
     */
    where: meme_infoWhereUniqueInput
  }


  /**
   * meme_info findFirst
   */
  export type meme_infoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meme_info
     */
    select?: meme_infoSelect<ExtArgs> | null
    /**
     * Filter, which meme_info to fetch.
     */
    where?: meme_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meme_infos to fetch.
     */
    orderBy?: meme_infoOrderByWithRelationInput | meme_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meme_infos.
     */
    cursor?: meme_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meme_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meme_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meme_infos.
     */
    distinct?: Meme_infoScalarFieldEnum | Meme_infoScalarFieldEnum[]
  }


  /**
   * meme_info findFirstOrThrow
   */
  export type meme_infoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meme_info
     */
    select?: meme_infoSelect<ExtArgs> | null
    /**
     * Filter, which meme_info to fetch.
     */
    where?: meme_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meme_infos to fetch.
     */
    orderBy?: meme_infoOrderByWithRelationInput | meme_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meme_infos.
     */
    cursor?: meme_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meme_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meme_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meme_infos.
     */
    distinct?: Meme_infoScalarFieldEnum | Meme_infoScalarFieldEnum[]
  }


  /**
   * meme_info findMany
   */
  export type meme_infoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meme_info
     */
    select?: meme_infoSelect<ExtArgs> | null
    /**
     * Filter, which meme_infos to fetch.
     */
    where?: meme_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meme_infos to fetch.
     */
    orderBy?: meme_infoOrderByWithRelationInput | meme_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meme_infos.
     */
    cursor?: meme_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meme_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meme_infos.
     */
    skip?: number
    distinct?: Meme_infoScalarFieldEnum | Meme_infoScalarFieldEnum[]
  }


  /**
   * meme_info create
   */
  export type meme_infoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meme_info
     */
    select?: meme_infoSelect<ExtArgs> | null
    /**
     * The data needed to create a meme_info.
     */
    data: XOR<meme_infoCreateInput, meme_infoUncheckedCreateInput>
  }


  /**
   * meme_info createMany
   */
  export type meme_infoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meme_infos.
     */
    data: meme_infoCreateManyInput | meme_infoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * meme_info update
   */
  export type meme_infoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meme_info
     */
    select?: meme_infoSelect<ExtArgs> | null
    /**
     * The data needed to update a meme_info.
     */
    data: XOR<meme_infoUpdateInput, meme_infoUncheckedUpdateInput>
    /**
     * Choose, which meme_info to update.
     */
    where: meme_infoWhereUniqueInput
  }


  /**
   * meme_info updateMany
   */
  export type meme_infoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meme_infos.
     */
    data: XOR<meme_infoUpdateManyMutationInput, meme_infoUncheckedUpdateManyInput>
    /**
     * Filter which meme_infos to update
     */
    where?: meme_infoWhereInput
  }


  /**
   * meme_info upsert
   */
  export type meme_infoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meme_info
     */
    select?: meme_infoSelect<ExtArgs> | null
    /**
     * The filter to search for the meme_info to update in case it exists.
     */
    where: meme_infoWhereUniqueInput
    /**
     * In case the meme_info found by the `where` argument doesn't exist, create a new meme_info with this data.
     */
    create: XOR<meme_infoCreateInput, meme_infoUncheckedCreateInput>
    /**
     * In case the meme_info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meme_infoUpdateInput, meme_infoUncheckedUpdateInput>
  }


  /**
   * meme_info delete
   */
  export type meme_infoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meme_info
     */
    select?: meme_infoSelect<ExtArgs> | null
    /**
     * Filter which meme_info to delete.
     */
    where: meme_infoWhereUniqueInput
  }


  /**
   * meme_info deleteMany
   */
  export type meme_infoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meme_infos to delete
     */
    where?: meme_infoWhereInput
  }


  /**
   * meme_info without action
   */
  export type meme_infoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meme_info
     */
    select?: meme_infoSelect<ExtArgs> | null
  }



  /**
   * Model season_info
   */

  export type AggregateSeason_info = {
    _count: Season_infoCountAggregateOutputType | null
    _min: Season_infoMinAggregateOutputType | null
    _max: Season_infoMaxAggregateOutputType | null
  }

  export type Season_infoMinAggregateOutputType = {
    season: string | null
    title: string | null
    description: string | null
    outline: string | null
    img_src: string | null
    view_url: string | null
  }

  export type Season_infoMaxAggregateOutputType = {
    season: string | null
    title: string | null
    description: string | null
    outline: string | null
    img_src: string | null
    view_url: string | null
  }

  export type Season_infoCountAggregateOutputType = {
    season: number
    title: number
    description: number
    outline: number
    img_src: number
    view_url: number
    actor: number
    _all: number
  }


  export type Season_infoMinAggregateInputType = {
    season?: true
    title?: true
    description?: true
    outline?: true
    img_src?: true
    view_url?: true
  }

  export type Season_infoMaxAggregateInputType = {
    season?: true
    title?: true
    description?: true
    outline?: true
    img_src?: true
    view_url?: true
  }

  export type Season_infoCountAggregateInputType = {
    season?: true
    title?: true
    description?: true
    outline?: true
    img_src?: true
    view_url?: true
    actor?: true
    _all?: true
  }

  export type Season_infoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which season_info to aggregate.
     */
    where?: season_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of season_infos to fetch.
     */
    orderBy?: season_infoOrderByWithRelationInput | season_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: season_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` season_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` season_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned season_infos
    **/
    _count?: true | Season_infoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Season_infoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Season_infoMaxAggregateInputType
  }

  export type GetSeason_infoAggregateType<T extends Season_infoAggregateArgs> = {
        [P in keyof T & keyof AggregateSeason_info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeason_info[P]>
      : GetScalarType<T[P], AggregateSeason_info[P]>
  }




  export type season_infoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: season_infoWhereInput
    orderBy?: season_infoOrderByWithAggregationInput | season_infoOrderByWithAggregationInput[]
    by: Season_infoScalarFieldEnum[] | Season_infoScalarFieldEnum
    having?: season_infoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Season_infoCountAggregateInputType | true
    _min?: Season_infoMinAggregateInputType
    _max?: Season_infoMaxAggregateInputType
  }

  export type Season_infoGroupByOutputType = {
    season: string
    title: string | null
    description: string | null
    outline: string | null
    img_src: string
    view_url: string | null
    actor: string[]
    _count: Season_infoCountAggregateOutputType | null
    _min: Season_infoMinAggregateOutputType | null
    _max: Season_infoMaxAggregateOutputType | null
  }

  type GetSeason_infoGroupByPayload<T extends season_infoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Season_infoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Season_infoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Season_infoGroupByOutputType[P]>
            : GetScalarType<T[P], Season_infoGroupByOutputType[P]>
        }
      >
    >


  export type season_infoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    season?: boolean
    title?: boolean
    description?: boolean
    outline?: boolean
    img_src?: boolean
    view_url?: boolean
    actor?: boolean
  }, ExtArgs["result"]["season_info"]>

  export type season_infoSelectScalar = {
    season?: boolean
    title?: boolean
    description?: boolean
    outline?: boolean
    img_src?: boolean
    view_url?: boolean
    actor?: boolean
  }


  export type $season_infoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "season_info"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      season: string
      title: string | null
      description: string | null
      outline: string | null
      img_src: string
      view_url: string | null
      actor: string[]
    }, ExtArgs["result"]["season_info"]>
    composites: {}
  }


  type season_infoGetPayload<S extends boolean | null | undefined | season_infoDefaultArgs> = $Result.GetResult<Prisma.$season_infoPayload, S>

  type season_infoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<season_infoFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Season_infoCountAggregateInputType | true
    }

  export interface season_infoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['season_info'], meta: { name: 'season_info' } }
    /**
     * Find zero or one Season_info that matches the filter.
     * @param {season_infoFindUniqueArgs} args - Arguments to find a Season_info
     * @example
     * // Get one Season_info
     * const season_info = await prisma.season_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends season_infoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, season_infoFindUniqueArgs<ExtArgs>>
    ): Prisma__season_infoClient<$Result.GetResult<Prisma.$season_infoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Season_info that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {season_infoFindUniqueOrThrowArgs} args - Arguments to find a Season_info
     * @example
     * // Get one Season_info
     * const season_info = await prisma.season_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends season_infoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, season_infoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__season_infoClient<$Result.GetResult<Prisma.$season_infoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Season_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {season_infoFindFirstArgs} args - Arguments to find a Season_info
     * @example
     * // Get one Season_info
     * const season_info = await prisma.season_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends season_infoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, season_infoFindFirstArgs<ExtArgs>>
    ): Prisma__season_infoClient<$Result.GetResult<Prisma.$season_infoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Season_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {season_infoFindFirstOrThrowArgs} args - Arguments to find a Season_info
     * @example
     * // Get one Season_info
     * const season_info = await prisma.season_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends season_infoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, season_infoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__season_infoClient<$Result.GetResult<Prisma.$season_infoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Season_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {season_infoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Season_infos
     * const season_infos = await prisma.season_info.findMany()
     * 
     * // Get first 10 Season_infos
     * const season_infos = await prisma.season_info.findMany({ take: 10 })
     * 
     * // Only select the `season`
     * const season_infoWithSeasonOnly = await prisma.season_info.findMany({ select: { season: true } })
     * 
    **/
    findMany<T extends season_infoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, season_infoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$season_infoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Season_info.
     * @param {season_infoCreateArgs} args - Arguments to create a Season_info.
     * @example
     * // Create one Season_info
     * const Season_info = await prisma.season_info.create({
     *   data: {
     *     // ... data to create a Season_info
     *   }
     * })
     * 
    **/
    create<T extends season_infoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, season_infoCreateArgs<ExtArgs>>
    ): Prisma__season_infoClient<$Result.GetResult<Prisma.$season_infoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Season_infos.
     *     @param {season_infoCreateManyArgs} args - Arguments to create many Season_infos.
     *     @example
     *     // Create many Season_infos
     *     const season_info = await prisma.season_info.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends season_infoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, season_infoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Season_info.
     * @param {season_infoDeleteArgs} args - Arguments to delete one Season_info.
     * @example
     * // Delete one Season_info
     * const Season_info = await prisma.season_info.delete({
     *   where: {
     *     // ... filter to delete one Season_info
     *   }
     * })
     * 
    **/
    delete<T extends season_infoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, season_infoDeleteArgs<ExtArgs>>
    ): Prisma__season_infoClient<$Result.GetResult<Prisma.$season_infoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Season_info.
     * @param {season_infoUpdateArgs} args - Arguments to update one Season_info.
     * @example
     * // Update one Season_info
     * const season_info = await prisma.season_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends season_infoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, season_infoUpdateArgs<ExtArgs>>
    ): Prisma__season_infoClient<$Result.GetResult<Prisma.$season_infoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Season_infos.
     * @param {season_infoDeleteManyArgs} args - Arguments to filter Season_infos to delete.
     * @example
     * // Delete a few Season_infos
     * const { count } = await prisma.season_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends season_infoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, season_infoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Season_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {season_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Season_infos
     * const season_info = await prisma.season_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends season_infoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, season_infoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Season_info.
     * @param {season_infoUpsertArgs} args - Arguments to update or create a Season_info.
     * @example
     * // Update or create a Season_info
     * const season_info = await prisma.season_info.upsert({
     *   create: {
     *     // ... data to create a Season_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Season_info we want to update
     *   }
     * })
    **/
    upsert<T extends season_infoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, season_infoUpsertArgs<ExtArgs>>
    ): Prisma__season_infoClient<$Result.GetResult<Prisma.$season_infoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Season_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {season_infoCountArgs} args - Arguments to filter Season_infos to count.
     * @example
     * // Count the number of Season_infos
     * const count = await prisma.season_info.count({
     *   where: {
     *     // ... the filter for the Season_infos we want to count
     *   }
     * })
    **/
    count<T extends season_infoCountArgs>(
      args?: Subset<T, season_infoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Season_infoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Season_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Season_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Season_infoAggregateArgs>(args: Subset<T, Season_infoAggregateArgs>): Prisma.PrismaPromise<GetSeason_infoAggregateType<T>>

    /**
     * Group by Season_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {season_infoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends season_infoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: season_infoGroupByArgs['orderBy'] }
        : { orderBy?: season_infoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, season_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeason_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the season_info model
   */
  readonly fields: season_infoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for season_info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__season_infoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the season_info model
   */ 
  interface season_infoFieldRefs {
    readonly season: FieldRef<"season_info", 'String'>
    readonly title: FieldRef<"season_info", 'String'>
    readonly description: FieldRef<"season_info", 'String'>
    readonly outline: FieldRef<"season_info", 'String'>
    readonly img_src: FieldRef<"season_info", 'String'>
    readonly view_url: FieldRef<"season_info", 'String'>
    readonly actor: FieldRef<"season_info", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * season_info findUnique
   */
  export type season_infoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season_info
     */
    select?: season_infoSelect<ExtArgs> | null
    /**
     * Filter, which season_info to fetch.
     */
    where: season_infoWhereUniqueInput
  }


  /**
   * season_info findUniqueOrThrow
   */
  export type season_infoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season_info
     */
    select?: season_infoSelect<ExtArgs> | null
    /**
     * Filter, which season_info to fetch.
     */
    where: season_infoWhereUniqueInput
  }


  /**
   * season_info findFirst
   */
  export type season_infoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season_info
     */
    select?: season_infoSelect<ExtArgs> | null
    /**
     * Filter, which season_info to fetch.
     */
    where?: season_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of season_infos to fetch.
     */
    orderBy?: season_infoOrderByWithRelationInput | season_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for season_infos.
     */
    cursor?: season_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` season_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` season_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of season_infos.
     */
    distinct?: Season_infoScalarFieldEnum | Season_infoScalarFieldEnum[]
  }


  /**
   * season_info findFirstOrThrow
   */
  export type season_infoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season_info
     */
    select?: season_infoSelect<ExtArgs> | null
    /**
     * Filter, which season_info to fetch.
     */
    where?: season_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of season_infos to fetch.
     */
    orderBy?: season_infoOrderByWithRelationInput | season_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for season_infos.
     */
    cursor?: season_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` season_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` season_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of season_infos.
     */
    distinct?: Season_infoScalarFieldEnum | Season_infoScalarFieldEnum[]
  }


  /**
   * season_info findMany
   */
  export type season_infoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season_info
     */
    select?: season_infoSelect<ExtArgs> | null
    /**
     * Filter, which season_infos to fetch.
     */
    where?: season_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of season_infos to fetch.
     */
    orderBy?: season_infoOrderByWithRelationInput | season_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing season_infos.
     */
    cursor?: season_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` season_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` season_infos.
     */
    skip?: number
    distinct?: Season_infoScalarFieldEnum | Season_infoScalarFieldEnum[]
  }


  /**
   * season_info create
   */
  export type season_infoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season_info
     */
    select?: season_infoSelect<ExtArgs> | null
    /**
     * The data needed to create a season_info.
     */
    data: XOR<season_infoCreateInput, season_infoUncheckedCreateInput>
  }


  /**
   * season_info createMany
   */
  export type season_infoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many season_infos.
     */
    data: season_infoCreateManyInput | season_infoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * season_info update
   */
  export type season_infoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season_info
     */
    select?: season_infoSelect<ExtArgs> | null
    /**
     * The data needed to update a season_info.
     */
    data: XOR<season_infoUpdateInput, season_infoUncheckedUpdateInput>
    /**
     * Choose, which season_info to update.
     */
    where: season_infoWhereUniqueInput
  }


  /**
   * season_info updateMany
   */
  export type season_infoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update season_infos.
     */
    data: XOR<season_infoUpdateManyMutationInput, season_infoUncheckedUpdateManyInput>
    /**
     * Filter which season_infos to update
     */
    where?: season_infoWhereInput
  }


  /**
   * season_info upsert
   */
  export type season_infoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season_info
     */
    select?: season_infoSelect<ExtArgs> | null
    /**
     * The filter to search for the season_info to update in case it exists.
     */
    where: season_infoWhereUniqueInput
    /**
     * In case the season_info found by the `where` argument doesn't exist, create a new season_info with this data.
     */
    create: XOR<season_infoCreateInput, season_infoUncheckedCreateInput>
    /**
     * In case the season_info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<season_infoUpdateInput, season_infoUncheckedUpdateInput>
  }


  /**
   * season_info delete
   */
  export type season_infoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season_info
     */
    select?: season_infoSelect<ExtArgs> | null
    /**
     * Filter which season_info to delete.
     */
    where: season_infoWhereUniqueInput
  }


  /**
   * season_info deleteMany
   */
  export type season_infoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which season_infos to delete
     */
    where?: season_infoWhereInput
  }


  /**
   * season_info without action
   */
  export type season_infoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the season_info
     */
    select?: season_infoSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Episode_infoScalarFieldEnum: {
    season: 'season',
    id: 'id',
    title: 'title',
    description: 'description',
    air_date: 'air_date',
    air_time: 'air_time',
    img_src: 'img_src',
    actor: 'actor'
  };

  export type Episode_infoScalarFieldEnum = (typeof Episode_infoScalarFieldEnum)[keyof typeof Episode_infoScalarFieldEnum]


  export const Meme_infoScalarFieldEnum: {
    id: 'id',
    img_src: 'img_src',
    thumnail_src: 'thumnail_src',
    alt: 'alt',
    tag: 'tag',
    download_cnt: 'download_cnt',
    like_cnt: 'like_cnt'
  };

  export type Meme_infoScalarFieldEnum = (typeof Meme_infoScalarFieldEnum)[keyof typeof Meme_infoScalarFieldEnum]


  export const Season_infoScalarFieldEnum: {
    season: 'season',
    title: 'title',
    description: 'description',
    outline: 'outline',
    img_src: 'img_src',
    view_url: 'view_url',
    actor: 'actor'
  };

  export type Season_infoScalarFieldEnum = (typeof Season_infoScalarFieldEnum)[keyof typeof Season_infoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type episode_infoWhereInput = {
    AND?: episode_infoWhereInput | episode_infoWhereInput[]
    OR?: episode_infoWhereInput[]
    NOT?: episode_infoWhereInput | episode_infoWhereInput[]
    season?: StringFilter<"episode_info"> | string
    id?: IntFilter<"episode_info"> | number
    title?: StringNullableFilter<"episode_info"> | string | null
    description?: StringNullableFilter<"episode_info"> | string | null
    air_date?: StringNullableFilter<"episode_info"> | string | null
    air_time?: StringNullableFilter<"episode_info"> | string | null
    img_src?: StringFilter<"episode_info"> | string
    actor?: StringNullableListFilter<"episode_info">
  }

  export type episode_infoOrderByWithRelationInput = {
    season?: SortOrder
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    air_date?: SortOrderInput | SortOrder
    air_time?: SortOrderInput | SortOrder
    img_src?: SortOrder
    actor?: SortOrder
  }

  export type episode_infoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: episode_infoWhereInput | episode_infoWhereInput[]
    OR?: episode_infoWhereInput[]
    NOT?: episode_infoWhereInput | episode_infoWhereInput[]
    season?: StringFilter<"episode_info"> | string
    title?: StringNullableFilter<"episode_info"> | string | null
    description?: StringNullableFilter<"episode_info"> | string | null
    air_date?: StringNullableFilter<"episode_info"> | string | null
    air_time?: StringNullableFilter<"episode_info"> | string | null
    img_src?: StringFilter<"episode_info"> | string
    actor?: StringNullableListFilter<"episode_info">
  }, "id">

  export type episode_infoOrderByWithAggregationInput = {
    season?: SortOrder
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    air_date?: SortOrderInput | SortOrder
    air_time?: SortOrderInput | SortOrder
    img_src?: SortOrder
    actor?: SortOrder
    _count?: episode_infoCountOrderByAggregateInput
    _avg?: episode_infoAvgOrderByAggregateInput
    _max?: episode_infoMaxOrderByAggregateInput
    _min?: episode_infoMinOrderByAggregateInput
    _sum?: episode_infoSumOrderByAggregateInput
  }

  export type episode_infoScalarWhereWithAggregatesInput = {
    AND?: episode_infoScalarWhereWithAggregatesInput | episode_infoScalarWhereWithAggregatesInput[]
    OR?: episode_infoScalarWhereWithAggregatesInput[]
    NOT?: episode_infoScalarWhereWithAggregatesInput | episode_infoScalarWhereWithAggregatesInput[]
    season?: StringWithAggregatesFilter<"episode_info"> | string
    id?: IntWithAggregatesFilter<"episode_info"> | number
    title?: StringNullableWithAggregatesFilter<"episode_info"> | string | null
    description?: StringNullableWithAggregatesFilter<"episode_info"> | string | null
    air_date?: StringNullableWithAggregatesFilter<"episode_info"> | string | null
    air_time?: StringNullableWithAggregatesFilter<"episode_info"> | string | null
    img_src?: StringWithAggregatesFilter<"episode_info"> | string
    actor?: StringNullableListFilter<"episode_info">
  }

  export type meme_infoWhereInput = {
    AND?: meme_infoWhereInput | meme_infoWhereInput[]
    OR?: meme_infoWhereInput[]
    NOT?: meme_infoWhereInput | meme_infoWhereInput[]
    id?: IntFilter<"meme_info"> | number
    img_src?: StringFilter<"meme_info"> | string
    thumnail_src?: StringFilter<"meme_info"> | string
    alt?: StringNullableFilter<"meme_info"> | string | null
    tag?: StringNullableListFilter<"meme_info">
    download_cnt?: IntFilter<"meme_info"> | number
    like_cnt?: IntFilter<"meme_info"> | number
  }

  export type meme_infoOrderByWithRelationInput = {
    id?: SortOrder
    img_src?: SortOrder
    thumnail_src?: SortOrder
    alt?: SortOrderInput | SortOrder
    tag?: SortOrder
    download_cnt?: SortOrder
    like_cnt?: SortOrder
  }

  export type meme_infoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: meme_infoWhereInput | meme_infoWhereInput[]
    OR?: meme_infoWhereInput[]
    NOT?: meme_infoWhereInput | meme_infoWhereInput[]
    img_src?: StringFilter<"meme_info"> | string
    thumnail_src?: StringFilter<"meme_info"> | string
    alt?: StringNullableFilter<"meme_info"> | string | null
    tag?: StringNullableListFilter<"meme_info">
    download_cnt?: IntFilter<"meme_info"> | number
    like_cnt?: IntFilter<"meme_info"> | number
  }, "id">

  export type meme_infoOrderByWithAggregationInput = {
    id?: SortOrder
    img_src?: SortOrder
    thumnail_src?: SortOrder
    alt?: SortOrderInput | SortOrder
    tag?: SortOrder
    download_cnt?: SortOrder
    like_cnt?: SortOrder
    _count?: meme_infoCountOrderByAggregateInput
    _avg?: meme_infoAvgOrderByAggregateInput
    _max?: meme_infoMaxOrderByAggregateInput
    _min?: meme_infoMinOrderByAggregateInput
    _sum?: meme_infoSumOrderByAggregateInput
  }

  export type meme_infoScalarWhereWithAggregatesInput = {
    AND?: meme_infoScalarWhereWithAggregatesInput | meme_infoScalarWhereWithAggregatesInput[]
    OR?: meme_infoScalarWhereWithAggregatesInput[]
    NOT?: meme_infoScalarWhereWithAggregatesInput | meme_infoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"meme_info"> | number
    img_src?: StringWithAggregatesFilter<"meme_info"> | string
    thumnail_src?: StringWithAggregatesFilter<"meme_info"> | string
    alt?: StringNullableWithAggregatesFilter<"meme_info"> | string | null
    tag?: StringNullableListFilter<"meme_info">
    download_cnt?: IntWithAggregatesFilter<"meme_info"> | number
    like_cnt?: IntWithAggregatesFilter<"meme_info"> | number
  }

  export type season_infoWhereInput = {
    AND?: season_infoWhereInput | season_infoWhereInput[]
    OR?: season_infoWhereInput[]
    NOT?: season_infoWhereInput | season_infoWhereInput[]
    season?: StringFilter<"season_info"> | string
    title?: StringNullableFilter<"season_info"> | string | null
    description?: StringNullableFilter<"season_info"> | string | null
    outline?: StringNullableFilter<"season_info"> | string | null
    img_src?: StringFilter<"season_info"> | string
    view_url?: StringNullableFilter<"season_info"> | string | null
    actor?: StringNullableListFilter<"season_info">
  }

  export type season_infoOrderByWithRelationInput = {
    season?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    outline?: SortOrderInput | SortOrder
    img_src?: SortOrder
    view_url?: SortOrderInput | SortOrder
    actor?: SortOrder
  }

  export type season_infoWhereUniqueInput = Prisma.AtLeast<{
    season?: string
    AND?: season_infoWhereInput | season_infoWhereInput[]
    OR?: season_infoWhereInput[]
    NOT?: season_infoWhereInput | season_infoWhereInput[]
    title?: StringNullableFilter<"season_info"> | string | null
    description?: StringNullableFilter<"season_info"> | string | null
    outline?: StringNullableFilter<"season_info"> | string | null
    img_src?: StringFilter<"season_info"> | string
    view_url?: StringNullableFilter<"season_info"> | string | null
    actor?: StringNullableListFilter<"season_info">
  }, "season">

  export type season_infoOrderByWithAggregationInput = {
    season?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    outline?: SortOrderInput | SortOrder
    img_src?: SortOrder
    view_url?: SortOrderInput | SortOrder
    actor?: SortOrder
    _count?: season_infoCountOrderByAggregateInput
    _max?: season_infoMaxOrderByAggregateInput
    _min?: season_infoMinOrderByAggregateInput
  }

  export type season_infoScalarWhereWithAggregatesInput = {
    AND?: season_infoScalarWhereWithAggregatesInput | season_infoScalarWhereWithAggregatesInput[]
    OR?: season_infoScalarWhereWithAggregatesInput[]
    NOT?: season_infoScalarWhereWithAggregatesInput | season_infoScalarWhereWithAggregatesInput[]
    season?: StringWithAggregatesFilter<"season_info"> | string
    title?: StringNullableWithAggregatesFilter<"season_info"> | string | null
    description?: StringNullableWithAggregatesFilter<"season_info"> | string | null
    outline?: StringNullableWithAggregatesFilter<"season_info"> | string | null
    img_src?: StringWithAggregatesFilter<"season_info"> | string
    view_url?: StringNullableWithAggregatesFilter<"season_info"> | string | null
    actor?: StringNullableListFilter<"season_info">
  }

  export type episode_infoCreateInput = {
    season: string
    title?: string | null
    description?: string | null
    air_date?: string | null
    air_time?: string | null
    img_src: string
    actor?: episode_infoCreateactorInput | string[]
  }

  export type episode_infoUncheckedCreateInput = {
    season: string
    id?: number
    title?: string | null
    description?: string | null
    air_date?: string | null
    air_time?: string | null
    img_src: string
    actor?: episode_infoCreateactorInput | string[]
  }

  export type episode_infoUpdateInput = {
    season?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    air_date?: NullableStringFieldUpdateOperationsInput | string | null
    air_time?: NullableStringFieldUpdateOperationsInput | string | null
    img_src?: StringFieldUpdateOperationsInput | string
    actor?: episode_infoUpdateactorInput | string[]
  }

  export type episode_infoUncheckedUpdateInput = {
    season?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    air_date?: NullableStringFieldUpdateOperationsInput | string | null
    air_time?: NullableStringFieldUpdateOperationsInput | string | null
    img_src?: StringFieldUpdateOperationsInput | string
    actor?: episode_infoUpdateactorInput | string[]
  }

  export type episode_infoCreateManyInput = {
    season: string
    id?: number
    title?: string | null
    description?: string | null
    air_date?: string | null
    air_time?: string | null
    img_src: string
    actor?: episode_infoCreateactorInput | string[]
  }

  export type episode_infoUpdateManyMutationInput = {
    season?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    air_date?: NullableStringFieldUpdateOperationsInput | string | null
    air_time?: NullableStringFieldUpdateOperationsInput | string | null
    img_src?: StringFieldUpdateOperationsInput | string
    actor?: episode_infoUpdateactorInput | string[]
  }

  export type episode_infoUncheckedUpdateManyInput = {
    season?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    air_date?: NullableStringFieldUpdateOperationsInput | string | null
    air_time?: NullableStringFieldUpdateOperationsInput | string | null
    img_src?: StringFieldUpdateOperationsInput | string
    actor?: episode_infoUpdateactorInput | string[]
  }

  export type meme_infoCreateInput = {
    img_src: string
    thumnail_src: string
    alt?: string | null
    tag?: meme_infoCreatetagInput | string[]
    download_cnt: number
    like_cnt: number
  }

  export type meme_infoUncheckedCreateInput = {
    id?: number
    img_src: string
    thumnail_src: string
    alt?: string | null
    tag?: meme_infoCreatetagInput | string[]
    download_cnt: number
    like_cnt: number
  }

  export type meme_infoUpdateInput = {
    img_src?: StringFieldUpdateOperationsInput | string
    thumnail_src?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: meme_infoUpdatetagInput | string[]
    download_cnt?: IntFieldUpdateOperationsInput | number
    like_cnt?: IntFieldUpdateOperationsInput | number
  }

  export type meme_infoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_src?: StringFieldUpdateOperationsInput | string
    thumnail_src?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: meme_infoUpdatetagInput | string[]
    download_cnt?: IntFieldUpdateOperationsInput | number
    like_cnt?: IntFieldUpdateOperationsInput | number
  }

  export type meme_infoCreateManyInput = {
    id?: number
    img_src: string
    thumnail_src: string
    alt?: string | null
    tag?: meme_infoCreatetagInput | string[]
    download_cnt: number
    like_cnt: number
  }

  export type meme_infoUpdateManyMutationInput = {
    img_src?: StringFieldUpdateOperationsInput | string
    thumnail_src?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: meme_infoUpdatetagInput | string[]
    download_cnt?: IntFieldUpdateOperationsInput | number
    like_cnt?: IntFieldUpdateOperationsInput | number
  }

  export type meme_infoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    img_src?: StringFieldUpdateOperationsInput | string
    thumnail_src?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: meme_infoUpdatetagInput | string[]
    download_cnt?: IntFieldUpdateOperationsInput | number
    like_cnt?: IntFieldUpdateOperationsInput | number
  }

  export type season_infoCreateInput = {
    season: string
    title?: string | null
    description?: string | null
    outline?: string | null
    img_src: string
    view_url?: string | null
    actor?: season_infoCreateactorInput | string[]
  }

  export type season_infoUncheckedCreateInput = {
    season: string
    title?: string | null
    description?: string | null
    outline?: string | null
    img_src: string
    view_url?: string | null
    actor?: season_infoCreateactorInput | string[]
  }

  export type season_infoUpdateInput = {
    season?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    outline?: NullableStringFieldUpdateOperationsInput | string | null
    img_src?: StringFieldUpdateOperationsInput | string
    view_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: season_infoUpdateactorInput | string[]
  }

  export type season_infoUncheckedUpdateInput = {
    season?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    outline?: NullableStringFieldUpdateOperationsInput | string | null
    img_src?: StringFieldUpdateOperationsInput | string
    view_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: season_infoUpdateactorInput | string[]
  }

  export type season_infoCreateManyInput = {
    season: string
    title?: string | null
    description?: string | null
    outline?: string | null
    img_src: string
    view_url?: string | null
    actor?: season_infoCreateactorInput | string[]
  }

  export type season_infoUpdateManyMutationInput = {
    season?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    outline?: NullableStringFieldUpdateOperationsInput | string | null
    img_src?: StringFieldUpdateOperationsInput | string
    view_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: season_infoUpdateactorInput | string[]
  }

  export type season_infoUncheckedUpdateManyInput = {
    season?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    outline?: NullableStringFieldUpdateOperationsInput | string | null
    img_src?: StringFieldUpdateOperationsInput | string
    view_url?: NullableStringFieldUpdateOperationsInput | string | null
    actor?: season_infoUpdateactorInput | string[]
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type episode_infoCountOrderByAggregateInput = {
    season?: SortOrder
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    air_date?: SortOrder
    air_time?: SortOrder
    img_src?: SortOrder
    actor?: SortOrder
  }

  export type episode_infoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type episode_infoMaxOrderByAggregateInput = {
    season?: SortOrder
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    air_date?: SortOrder
    air_time?: SortOrder
    img_src?: SortOrder
  }

  export type episode_infoMinOrderByAggregateInput = {
    season?: SortOrder
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    air_date?: SortOrder
    air_time?: SortOrder
    img_src?: SortOrder
  }

  export type episode_infoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type meme_infoCountOrderByAggregateInput = {
    id?: SortOrder
    img_src?: SortOrder
    thumnail_src?: SortOrder
    alt?: SortOrder
    tag?: SortOrder
    download_cnt?: SortOrder
    like_cnt?: SortOrder
  }

  export type meme_infoAvgOrderByAggregateInput = {
    id?: SortOrder
    download_cnt?: SortOrder
    like_cnt?: SortOrder
  }

  export type meme_infoMaxOrderByAggregateInput = {
    id?: SortOrder
    img_src?: SortOrder
    thumnail_src?: SortOrder
    alt?: SortOrder
    download_cnt?: SortOrder
    like_cnt?: SortOrder
  }

  export type meme_infoMinOrderByAggregateInput = {
    id?: SortOrder
    img_src?: SortOrder
    thumnail_src?: SortOrder
    alt?: SortOrder
    download_cnt?: SortOrder
    like_cnt?: SortOrder
  }

  export type meme_infoSumOrderByAggregateInput = {
    id?: SortOrder
    download_cnt?: SortOrder
    like_cnt?: SortOrder
  }

  export type season_infoCountOrderByAggregateInput = {
    season?: SortOrder
    title?: SortOrder
    description?: SortOrder
    outline?: SortOrder
    img_src?: SortOrder
    view_url?: SortOrder
    actor?: SortOrder
  }

  export type season_infoMaxOrderByAggregateInput = {
    season?: SortOrder
    title?: SortOrder
    description?: SortOrder
    outline?: SortOrder
    img_src?: SortOrder
    view_url?: SortOrder
  }

  export type season_infoMinOrderByAggregateInput = {
    season?: SortOrder
    title?: SortOrder
    description?: SortOrder
    outline?: SortOrder
    img_src?: SortOrder
    view_url?: SortOrder
  }

  export type episode_infoCreateactorInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type episode_infoUpdateactorInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type meme_infoCreatetagInput = {
    set: string[]
  }

  export type meme_infoUpdatetagInput = {
    set?: string[]
    push?: string | string[]
  }

  export type season_infoCreateactorInput = {
    set: string[]
  }

  export type season_infoUpdateactorInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use episode_infoDefaultArgs instead
     */
    export type episode_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = episode_infoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use meme_infoDefaultArgs instead
     */
    export type meme_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = meme_infoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use season_infoDefaultArgs instead
     */
    export type season_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = season_infoDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}