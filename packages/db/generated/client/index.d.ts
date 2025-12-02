
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AdminConfig
 * 
 */
export type AdminConfig = $Result.DefaultSelection<Prisma.$AdminConfigPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model PhoneBrand
 * 
 */
export type PhoneBrand = $Result.DefaultSelection<Prisma.$PhoneBrandPayload>
/**
 * Model PhoneModel
 * 
 */
export type PhoneModel = $Result.DefaultSelection<Prisma.$PhoneModelPayload>
/**
 * Model PhoneSpecs
 * 
 */
export type PhoneSpecs = $Result.DefaultSelection<Prisma.$PhoneSpecsPayload>
/**
 * Model PhoneMedia
 * 
 */
export type PhoneMedia = $Result.DefaultSelection<Prisma.$PhoneMediaPayload>
/**
 * Model AffiliateLink
 * 
 */
export type AffiliateLink = $Result.DefaultSelection<Prisma.$AffiliateLinkPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MediaType: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO'
};

export type MediaType = (typeof MediaType)[keyof typeof MediaType]

}

export type MediaType = $Enums.MediaType

export const MediaType: typeof $Enums.MediaType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AdminConfigs
 * const adminConfigs = await prisma.adminConfig.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more AdminConfigs
   * const adminConfigs = await prisma.adminConfig.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.adminConfig`: Exposes CRUD operations for the **AdminConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminConfigs
    * const adminConfigs = await prisma.adminConfig.findMany()
    * ```
    */
  get adminConfig(): Prisma.AdminConfigDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.phoneBrand`: Exposes CRUD operations for the **PhoneBrand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhoneBrands
    * const phoneBrands = await prisma.phoneBrand.findMany()
    * ```
    */
  get phoneBrand(): Prisma.PhoneBrandDelegate<ExtArgs>;

  /**
   * `prisma.phoneModel`: Exposes CRUD operations for the **PhoneModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhoneModels
    * const phoneModels = await prisma.phoneModel.findMany()
    * ```
    */
  get phoneModel(): Prisma.PhoneModelDelegate<ExtArgs>;

  /**
   * `prisma.phoneSpecs`: Exposes CRUD operations for the **PhoneSpecs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhoneSpecs
    * const phoneSpecs = await prisma.phoneSpecs.findMany()
    * ```
    */
  get phoneSpecs(): Prisma.PhoneSpecsDelegate<ExtArgs>;

  /**
   * `prisma.phoneMedia`: Exposes CRUD operations for the **PhoneMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhoneMedias
    * const phoneMedias = await prisma.phoneMedia.findMany()
    * ```
    */
  get phoneMedia(): Prisma.PhoneMediaDelegate<ExtArgs>;

  /**
   * `prisma.affiliateLink`: Exposes CRUD operations for the **AffiliateLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AffiliateLinks
    * const affiliateLinks = await prisma.affiliateLink.findMany()
    * ```
    */
  get affiliateLink(): Prisma.AffiliateLinkDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    AdminConfig: 'AdminConfig',
    Admin: 'Admin',
    PhoneBrand: 'PhoneBrand',
    PhoneModel: 'PhoneModel',
    PhoneSpecs: 'PhoneSpecs',
    PhoneMedia: 'PhoneMedia',
    AffiliateLink: 'AffiliateLink'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "adminConfig" | "admin" | "phoneBrand" | "phoneModel" | "phoneSpecs" | "phoneMedia" | "affiliateLink"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AdminConfig: {
        payload: Prisma.$AdminConfigPayload<ExtArgs>
        fields: Prisma.AdminConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload>
          }
          findFirst: {
            args: Prisma.AdminConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload>
          }
          findMany: {
            args: Prisma.AdminConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload>[]
          }
          create: {
            args: Prisma.AdminConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload>
          }
          createMany: {
            args: Prisma.AdminConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload>[]
          }
          delete: {
            args: Prisma.AdminConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload>
          }
          update: {
            args: Prisma.AdminConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload>
          }
          deleteMany: {
            args: Prisma.AdminConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminConfigPayload>
          }
          aggregate: {
            args: Prisma.AdminConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminConfig>
          }
          groupBy: {
            args: Prisma.AdminConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminConfigCountArgs<ExtArgs>
            result: $Utils.Optional<AdminConfigCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      PhoneBrand: {
        payload: Prisma.$PhoneBrandPayload<ExtArgs>
        fields: Prisma.PhoneBrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhoneBrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhoneBrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBrandPayload>
          }
          findFirst: {
            args: Prisma.PhoneBrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhoneBrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBrandPayload>
          }
          findMany: {
            args: Prisma.PhoneBrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBrandPayload>[]
          }
          create: {
            args: Prisma.PhoneBrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBrandPayload>
          }
          createMany: {
            args: Prisma.PhoneBrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhoneBrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBrandPayload>[]
          }
          delete: {
            args: Prisma.PhoneBrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBrandPayload>
          }
          update: {
            args: Prisma.PhoneBrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBrandPayload>
          }
          deleteMany: {
            args: Prisma.PhoneBrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhoneBrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhoneBrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneBrandPayload>
          }
          aggregate: {
            args: Prisma.PhoneBrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoneBrand>
          }
          groupBy: {
            args: Prisma.PhoneBrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhoneBrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhoneBrandCountArgs<ExtArgs>
            result: $Utils.Optional<PhoneBrandCountAggregateOutputType> | number
          }
        }
      }
      PhoneModel: {
        payload: Prisma.$PhoneModelPayload<ExtArgs>
        fields: Prisma.PhoneModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhoneModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhoneModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneModelPayload>
          }
          findFirst: {
            args: Prisma.PhoneModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhoneModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneModelPayload>
          }
          findMany: {
            args: Prisma.PhoneModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneModelPayload>[]
          }
          create: {
            args: Prisma.PhoneModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneModelPayload>
          }
          createMany: {
            args: Prisma.PhoneModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhoneModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneModelPayload>[]
          }
          delete: {
            args: Prisma.PhoneModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneModelPayload>
          }
          update: {
            args: Prisma.PhoneModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneModelPayload>
          }
          deleteMany: {
            args: Prisma.PhoneModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhoneModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhoneModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneModelPayload>
          }
          aggregate: {
            args: Prisma.PhoneModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoneModel>
          }
          groupBy: {
            args: Prisma.PhoneModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhoneModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhoneModelCountArgs<ExtArgs>
            result: $Utils.Optional<PhoneModelCountAggregateOutputType> | number
          }
        }
      }
      PhoneSpecs: {
        payload: Prisma.$PhoneSpecsPayload<ExtArgs>
        fields: Prisma.PhoneSpecsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhoneSpecsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSpecsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhoneSpecsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSpecsPayload>
          }
          findFirst: {
            args: Prisma.PhoneSpecsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSpecsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhoneSpecsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSpecsPayload>
          }
          findMany: {
            args: Prisma.PhoneSpecsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSpecsPayload>[]
          }
          create: {
            args: Prisma.PhoneSpecsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSpecsPayload>
          }
          createMany: {
            args: Prisma.PhoneSpecsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhoneSpecsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSpecsPayload>[]
          }
          delete: {
            args: Prisma.PhoneSpecsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSpecsPayload>
          }
          update: {
            args: Prisma.PhoneSpecsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSpecsPayload>
          }
          deleteMany: {
            args: Prisma.PhoneSpecsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhoneSpecsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhoneSpecsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneSpecsPayload>
          }
          aggregate: {
            args: Prisma.PhoneSpecsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoneSpecs>
          }
          groupBy: {
            args: Prisma.PhoneSpecsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhoneSpecsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhoneSpecsCountArgs<ExtArgs>
            result: $Utils.Optional<PhoneSpecsCountAggregateOutputType> | number
          }
        }
      }
      PhoneMedia: {
        payload: Prisma.$PhoneMediaPayload<ExtArgs>
        fields: Prisma.PhoneMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhoneMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhoneMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneMediaPayload>
          }
          findFirst: {
            args: Prisma.PhoneMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhoneMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneMediaPayload>
          }
          findMany: {
            args: Prisma.PhoneMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneMediaPayload>[]
          }
          create: {
            args: Prisma.PhoneMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneMediaPayload>
          }
          createMany: {
            args: Prisma.PhoneMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhoneMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneMediaPayload>[]
          }
          delete: {
            args: Prisma.PhoneMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneMediaPayload>
          }
          update: {
            args: Prisma.PhoneMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneMediaPayload>
          }
          deleteMany: {
            args: Prisma.PhoneMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhoneMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhoneMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneMediaPayload>
          }
          aggregate: {
            args: Prisma.PhoneMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoneMedia>
          }
          groupBy: {
            args: Prisma.PhoneMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhoneMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhoneMediaCountArgs<ExtArgs>
            result: $Utils.Optional<PhoneMediaCountAggregateOutputType> | number
          }
        }
      }
      AffiliateLink: {
        payload: Prisma.$AffiliateLinkPayload<ExtArgs>
        fields: Prisma.AffiliateLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AffiliateLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AffiliateLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateLinkPayload>
          }
          findFirst: {
            args: Prisma.AffiliateLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AffiliateLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateLinkPayload>
          }
          findMany: {
            args: Prisma.AffiliateLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateLinkPayload>[]
          }
          create: {
            args: Prisma.AffiliateLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateLinkPayload>
          }
          createMany: {
            args: Prisma.AffiliateLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AffiliateLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateLinkPayload>[]
          }
          delete: {
            args: Prisma.AffiliateLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateLinkPayload>
          }
          update: {
            args: Prisma.AffiliateLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateLinkPayload>
          }
          deleteMany: {
            args: Prisma.AffiliateLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AffiliateLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AffiliateLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliateLinkPayload>
          }
          aggregate: {
            args: Prisma.AffiliateLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAffiliateLink>
          }
          groupBy: {
            args: Prisma.AffiliateLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<AffiliateLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.AffiliateLinkCountArgs<ExtArgs>
            result: $Utils.Optional<AffiliateLinkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'createManyAndReturn'
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
   * Count Type PhoneBrandCountOutputType
   */

  export type PhoneBrandCountOutputType = {
    models: number
  }

  export type PhoneBrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | PhoneBrandCountOutputTypeCountModelsArgs
  }

  // Custom InputTypes
  /**
   * PhoneBrandCountOutputType without action
   */
  export type PhoneBrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBrandCountOutputType
     */
    select?: PhoneBrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhoneBrandCountOutputType without action
   */
  export type PhoneBrandCountOutputTypeCountModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneModelWhereInput
  }


  /**
   * Count Type PhoneModelCountOutputType
   */

  export type PhoneModelCountOutputType = {
    media: number
    affiliates: number
  }

  export type PhoneModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    media?: boolean | PhoneModelCountOutputTypeCountMediaArgs
    affiliates?: boolean | PhoneModelCountOutputTypeCountAffiliatesArgs
  }

  // Custom InputTypes
  /**
   * PhoneModelCountOutputType without action
   */
  export type PhoneModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneModelCountOutputType
     */
    select?: PhoneModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PhoneModelCountOutputType without action
   */
  export type PhoneModelCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneMediaWhereInput
  }

  /**
   * PhoneModelCountOutputType without action
   */
  export type PhoneModelCountOutputTypeCountAffiliatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AffiliateLinkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AdminConfig
   */

  export type AggregateAdminConfig = {
    _count: AdminConfigCountAggregateOutputType | null
    _avg: AdminConfigAvgAggregateOutputType | null
    _sum: AdminConfigSumAggregateOutputType | null
    _min: AdminConfigMinAggregateOutputType | null
    _max: AdminConfigMaxAggregateOutputType | null
  }

  export type AdminConfigAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminConfigSumAggregateOutputType = {
    id: number | null
  }

  export type AdminConfigMinAggregateOutputType = {
    id: number | null
    key: string | null
    value: string | null
  }

  export type AdminConfigMaxAggregateOutputType = {
    id: number | null
    key: string | null
    value: string | null
  }

  export type AdminConfigCountAggregateOutputType = {
    id: number
    key: number
    value: number
    _all: number
  }


  export type AdminConfigAvgAggregateInputType = {
    id?: true
  }

  export type AdminConfigSumAggregateInputType = {
    id?: true
  }

  export type AdminConfigMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
  }

  export type AdminConfigMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
  }

  export type AdminConfigCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    _all?: true
  }

  export type AdminConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminConfig to aggregate.
     */
    where?: AdminConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminConfigs to fetch.
     */
    orderBy?: AdminConfigOrderByWithRelationInput | AdminConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminConfigs
    **/
    _count?: true | AdminConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminConfigMaxAggregateInputType
  }

  export type GetAdminConfigAggregateType<T extends AdminConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminConfig[P]>
      : GetScalarType<T[P], AggregateAdminConfig[P]>
  }




  export type AdminConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminConfigWhereInput
    orderBy?: AdminConfigOrderByWithAggregationInput | AdminConfigOrderByWithAggregationInput[]
    by: AdminConfigScalarFieldEnum[] | AdminConfigScalarFieldEnum
    having?: AdminConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminConfigCountAggregateInputType | true
    _avg?: AdminConfigAvgAggregateInputType
    _sum?: AdminConfigSumAggregateInputType
    _min?: AdminConfigMinAggregateInputType
    _max?: AdminConfigMaxAggregateInputType
  }

  export type AdminConfigGroupByOutputType = {
    id: number
    key: string
    value: string
    _count: AdminConfigCountAggregateOutputType | null
    _avg: AdminConfigAvgAggregateOutputType | null
    _sum: AdminConfigSumAggregateOutputType | null
    _min: AdminConfigMinAggregateOutputType | null
    _max: AdminConfigMaxAggregateOutputType | null
  }

  type GetAdminConfigGroupByPayload<T extends AdminConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminConfigGroupByOutputType[P]>
            : GetScalarType<T[P], AdminConfigGroupByOutputType[P]>
        }
      >
    >


  export type AdminConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["adminConfig"]>

  export type AdminConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
  }, ExtArgs["result"]["adminConfig"]>

  export type AdminConfigSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
  }


  export type $AdminConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key: string
      value: string
    }, ExtArgs["result"]["adminConfig"]>
    composites: {}
  }

  type AdminConfigGetPayload<S extends boolean | null | undefined | AdminConfigDefaultArgs> = $Result.GetResult<Prisma.$AdminConfigPayload, S>

  type AdminConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminConfigCountAggregateInputType | true
    }

  export interface AdminConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminConfig'], meta: { name: 'AdminConfig' } }
    /**
     * Find zero or one AdminConfig that matches the filter.
     * @param {AdminConfigFindUniqueArgs} args - Arguments to find a AdminConfig
     * @example
     * // Get one AdminConfig
     * const adminConfig = await prisma.adminConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminConfigFindUniqueArgs>(args: SelectSubset<T, AdminConfigFindUniqueArgs<ExtArgs>>): Prisma__AdminConfigClient<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminConfigFindUniqueOrThrowArgs} args - Arguments to find a AdminConfig
     * @example
     * // Get one AdminConfig
     * const adminConfig = await prisma.adminConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminConfigClient<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminConfigFindFirstArgs} args - Arguments to find a AdminConfig
     * @example
     * // Get one AdminConfig
     * const adminConfig = await prisma.adminConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminConfigFindFirstArgs>(args?: SelectSubset<T, AdminConfigFindFirstArgs<ExtArgs>>): Prisma__AdminConfigClient<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminConfigFindFirstOrThrowArgs} args - Arguments to find a AdminConfig
     * @example
     * // Get one AdminConfig
     * const adminConfig = await prisma.adminConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminConfigClient<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminConfigs
     * const adminConfigs = await prisma.adminConfig.findMany()
     * 
     * // Get first 10 AdminConfigs
     * const adminConfigs = await prisma.adminConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminConfigWithIdOnly = await prisma.adminConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminConfigFindManyArgs>(args?: SelectSubset<T, AdminConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminConfig.
     * @param {AdminConfigCreateArgs} args - Arguments to create a AdminConfig.
     * @example
     * // Create one AdminConfig
     * const AdminConfig = await prisma.adminConfig.create({
     *   data: {
     *     // ... data to create a AdminConfig
     *   }
     * })
     * 
     */
    create<T extends AdminConfigCreateArgs>(args: SelectSubset<T, AdminConfigCreateArgs<ExtArgs>>): Prisma__AdminConfigClient<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminConfigs.
     * @param {AdminConfigCreateManyArgs} args - Arguments to create many AdminConfigs.
     * @example
     * // Create many AdminConfigs
     * const adminConfig = await prisma.adminConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminConfigCreateManyArgs>(args?: SelectSubset<T, AdminConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminConfigs and returns the data saved in the database.
     * @param {AdminConfigCreateManyAndReturnArgs} args - Arguments to create many AdminConfigs.
     * @example
     * // Create many AdminConfigs
     * const adminConfig = await prisma.adminConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminConfigs and only return the `id`
     * const adminConfigWithIdOnly = await prisma.adminConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdminConfig.
     * @param {AdminConfigDeleteArgs} args - Arguments to delete one AdminConfig.
     * @example
     * // Delete one AdminConfig
     * const AdminConfig = await prisma.adminConfig.delete({
     *   where: {
     *     // ... filter to delete one AdminConfig
     *   }
     * })
     * 
     */
    delete<T extends AdminConfigDeleteArgs>(args: SelectSubset<T, AdminConfigDeleteArgs<ExtArgs>>): Prisma__AdminConfigClient<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminConfig.
     * @param {AdminConfigUpdateArgs} args - Arguments to update one AdminConfig.
     * @example
     * // Update one AdminConfig
     * const adminConfig = await prisma.adminConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminConfigUpdateArgs>(args: SelectSubset<T, AdminConfigUpdateArgs<ExtArgs>>): Prisma__AdminConfigClient<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminConfigs.
     * @param {AdminConfigDeleteManyArgs} args - Arguments to filter AdminConfigs to delete.
     * @example
     * // Delete a few AdminConfigs
     * const { count } = await prisma.adminConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminConfigDeleteManyArgs>(args?: SelectSubset<T, AdminConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminConfigs
     * const adminConfig = await prisma.adminConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminConfigUpdateManyArgs>(args: SelectSubset<T, AdminConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminConfig.
     * @param {AdminConfigUpsertArgs} args - Arguments to update or create a AdminConfig.
     * @example
     * // Update or create a AdminConfig
     * const adminConfig = await prisma.adminConfig.upsert({
     *   create: {
     *     // ... data to create a AdminConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminConfig we want to update
     *   }
     * })
     */
    upsert<T extends AdminConfigUpsertArgs>(args: SelectSubset<T, AdminConfigUpsertArgs<ExtArgs>>): Prisma__AdminConfigClient<$Result.GetResult<Prisma.$AdminConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminConfigCountArgs} args - Arguments to filter AdminConfigs to count.
     * @example
     * // Count the number of AdminConfigs
     * const count = await prisma.adminConfig.count({
     *   where: {
     *     // ... the filter for the AdminConfigs we want to count
     *   }
     * })
    **/
    count<T extends AdminConfigCountArgs>(
      args?: Subset<T, AdminConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminConfigAggregateArgs>(args: Subset<T, AdminConfigAggregateArgs>): Prisma.PrismaPromise<GetAdminConfigAggregateType<T>>

    /**
     * Group by AdminConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminConfigGroupByArgs} args - Group by arguments.
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
      T extends AdminConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminConfigGroupByArgs['orderBy'] }
        : { orderBy?: AdminConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminConfig model
   */
  readonly fields: AdminConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminConfig model
   */ 
  interface AdminConfigFieldRefs {
    readonly id: FieldRef<"AdminConfig", 'Int'>
    readonly key: FieldRef<"AdminConfig", 'String'>
    readonly value: FieldRef<"AdminConfig", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AdminConfig findUnique
   */
  export type AdminConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * Filter, which AdminConfig to fetch.
     */
    where: AdminConfigWhereUniqueInput
  }

  /**
   * AdminConfig findUniqueOrThrow
   */
  export type AdminConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * Filter, which AdminConfig to fetch.
     */
    where: AdminConfigWhereUniqueInput
  }

  /**
   * AdminConfig findFirst
   */
  export type AdminConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * Filter, which AdminConfig to fetch.
     */
    where?: AdminConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminConfigs to fetch.
     */
    orderBy?: AdminConfigOrderByWithRelationInput | AdminConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminConfigs.
     */
    cursor?: AdminConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminConfigs.
     */
    distinct?: AdminConfigScalarFieldEnum | AdminConfigScalarFieldEnum[]
  }

  /**
   * AdminConfig findFirstOrThrow
   */
  export type AdminConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * Filter, which AdminConfig to fetch.
     */
    where?: AdminConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminConfigs to fetch.
     */
    orderBy?: AdminConfigOrderByWithRelationInput | AdminConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminConfigs.
     */
    cursor?: AdminConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminConfigs.
     */
    distinct?: AdminConfigScalarFieldEnum | AdminConfigScalarFieldEnum[]
  }

  /**
   * AdminConfig findMany
   */
  export type AdminConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * Filter, which AdminConfigs to fetch.
     */
    where?: AdminConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminConfigs to fetch.
     */
    orderBy?: AdminConfigOrderByWithRelationInput | AdminConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminConfigs.
     */
    cursor?: AdminConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminConfigs.
     */
    skip?: number
    distinct?: AdminConfigScalarFieldEnum | AdminConfigScalarFieldEnum[]
  }

  /**
   * AdminConfig create
   */
  export type AdminConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * The data needed to create a AdminConfig.
     */
    data: XOR<AdminConfigCreateInput, AdminConfigUncheckedCreateInput>
  }

  /**
   * AdminConfig createMany
   */
  export type AdminConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminConfigs.
     */
    data: AdminConfigCreateManyInput | AdminConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminConfig createManyAndReturn
   */
  export type AdminConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdminConfigs.
     */
    data: AdminConfigCreateManyInput | AdminConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminConfig update
   */
  export type AdminConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * The data needed to update a AdminConfig.
     */
    data: XOR<AdminConfigUpdateInput, AdminConfigUncheckedUpdateInput>
    /**
     * Choose, which AdminConfig to update.
     */
    where: AdminConfigWhereUniqueInput
  }

  /**
   * AdminConfig updateMany
   */
  export type AdminConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminConfigs.
     */
    data: XOR<AdminConfigUpdateManyMutationInput, AdminConfigUncheckedUpdateManyInput>
    /**
     * Filter which AdminConfigs to update
     */
    where?: AdminConfigWhereInput
  }

  /**
   * AdminConfig upsert
   */
  export type AdminConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * The filter to search for the AdminConfig to update in case it exists.
     */
    where: AdminConfigWhereUniqueInput
    /**
     * In case the AdminConfig found by the `where` argument doesn't exist, create a new AdminConfig with this data.
     */
    create: XOR<AdminConfigCreateInput, AdminConfigUncheckedCreateInput>
    /**
     * In case the AdminConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminConfigUpdateInput, AdminConfigUncheckedUpdateInput>
  }

  /**
   * AdminConfig delete
   */
  export type AdminConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
    /**
     * Filter which AdminConfig to delete.
     */
    where: AdminConfigWhereUniqueInput
  }

  /**
   * AdminConfig deleteMany
   */
  export type AdminConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminConfigs to delete
     */
    where?: AdminConfigWhereInput
  }

  /**
   * AdminConfig without action
   */
  export type AdminConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminConfig
     */
    select?: AdminConfigSelect<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
  }


  /**
   * Model PhoneBrand
   */

  export type AggregatePhoneBrand = {
    _count: PhoneBrandCountAggregateOutputType | null
    _avg: PhoneBrandAvgAggregateOutputType | null
    _sum: PhoneBrandSumAggregateOutputType | null
    _min: PhoneBrandMinAggregateOutputType | null
    _max: PhoneBrandMaxAggregateOutputType | null
  }

  export type PhoneBrandAvgAggregateOutputType = {
    id: number | null
  }

  export type PhoneBrandSumAggregateOutputType = {
    id: number | null
  }

  export type PhoneBrandMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneBrandMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneBrandCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhoneBrandAvgAggregateInputType = {
    id?: true
  }

  export type PhoneBrandSumAggregateInputType = {
    id?: true
  }

  export type PhoneBrandMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneBrandMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneBrandCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhoneBrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneBrand to aggregate.
     */
    where?: PhoneBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneBrands to fetch.
     */
    orderBy?: PhoneBrandOrderByWithRelationInput | PhoneBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhoneBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhoneBrands
    **/
    _count?: true | PhoneBrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhoneBrandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhoneBrandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhoneBrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhoneBrandMaxAggregateInputType
  }

  export type GetPhoneBrandAggregateType<T extends PhoneBrandAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoneBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoneBrand[P]>
      : GetScalarType<T[P], AggregatePhoneBrand[P]>
  }




  export type PhoneBrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneBrandWhereInput
    orderBy?: PhoneBrandOrderByWithAggregationInput | PhoneBrandOrderByWithAggregationInput[]
    by: PhoneBrandScalarFieldEnum[] | PhoneBrandScalarFieldEnum
    having?: PhoneBrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhoneBrandCountAggregateInputType | true
    _avg?: PhoneBrandAvgAggregateInputType
    _sum?: PhoneBrandSumAggregateInputType
    _min?: PhoneBrandMinAggregateInputType
    _max?: PhoneBrandMaxAggregateInputType
  }

  export type PhoneBrandGroupByOutputType = {
    id: number
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: PhoneBrandCountAggregateOutputType | null
    _avg: PhoneBrandAvgAggregateOutputType | null
    _sum: PhoneBrandSumAggregateOutputType | null
    _min: PhoneBrandMinAggregateOutputType | null
    _max: PhoneBrandMaxAggregateOutputType | null
  }

  type GetPhoneBrandGroupByPayload<T extends PhoneBrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhoneBrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhoneBrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhoneBrandGroupByOutputType[P]>
            : GetScalarType<T[P], PhoneBrandGroupByOutputType[P]>
        }
      >
    >


  export type PhoneBrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    models?: boolean | PhoneBrand$modelsArgs<ExtArgs>
    _count?: boolean | PhoneBrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneBrand"]>

  export type PhoneBrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["phoneBrand"]>

  export type PhoneBrandSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhoneBrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | PhoneBrand$modelsArgs<ExtArgs>
    _count?: boolean | PhoneBrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PhoneBrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PhoneBrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhoneBrand"
    objects: {
      models: Prisma.$PhoneModelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["phoneBrand"]>
    composites: {}
  }

  type PhoneBrandGetPayload<S extends boolean | null | undefined | PhoneBrandDefaultArgs> = $Result.GetResult<Prisma.$PhoneBrandPayload, S>

  type PhoneBrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhoneBrandFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhoneBrandCountAggregateInputType | true
    }

  export interface PhoneBrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhoneBrand'], meta: { name: 'PhoneBrand' } }
    /**
     * Find zero or one PhoneBrand that matches the filter.
     * @param {PhoneBrandFindUniqueArgs} args - Arguments to find a PhoneBrand
     * @example
     * // Get one PhoneBrand
     * const phoneBrand = await prisma.phoneBrand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhoneBrandFindUniqueArgs>(args: SelectSubset<T, PhoneBrandFindUniqueArgs<ExtArgs>>): Prisma__PhoneBrandClient<$Result.GetResult<Prisma.$PhoneBrandPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PhoneBrand that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PhoneBrandFindUniqueOrThrowArgs} args - Arguments to find a PhoneBrand
     * @example
     * // Get one PhoneBrand
     * const phoneBrand = await prisma.phoneBrand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhoneBrandFindUniqueOrThrowArgs>(args: SelectSubset<T, PhoneBrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhoneBrandClient<$Result.GetResult<Prisma.$PhoneBrandPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PhoneBrand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneBrandFindFirstArgs} args - Arguments to find a PhoneBrand
     * @example
     * // Get one PhoneBrand
     * const phoneBrand = await prisma.phoneBrand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhoneBrandFindFirstArgs>(args?: SelectSubset<T, PhoneBrandFindFirstArgs<ExtArgs>>): Prisma__PhoneBrandClient<$Result.GetResult<Prisma.$PhoneBrandPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PhoneBrand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneBrandFindFirstOrThrowArgs} args - Arguments to find a PhoneBrand
     * @example
     * // Get one PhoneBrand
     * const phoneBrand = await prisma.phoneBrand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhoneBrandFindFirstOrThrowArgs>(args?: SelectSubset<T, PhoneBrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhoneBrandClient<$Result.GetResult<Prisma.$PhoneBrandPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PhoneBrands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneBrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhoneBrands
     * const phoneBrands = await prisma.phoneBrand.findMany()
     * 
     * // Get first 10 PhoneBrands
     * const phoneBrands = await prisma.phoneBrand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phoneBrandWithIdOnly = await prisma.phoneBrand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhoneBrandFindManyArgs>(args?: SelectSubset<T, PhoneBrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneBrandPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PhoneBrand.
     * @param {PhoneBrandCreateArgs} args - Arguments to create a PhoneBrand.
     * @example
     * // Create one PhoneBrand
     * const PhoneBrand = await prisma.phoneBrand.create({
     *   data: {
     *     // ... data to create a PhoneBrand
     *   }
     * })
     * 
     */
    create<T extends PhoneBrandCreateArgs>(args: SelectSubset<T, PhoneBrandCreateArgs<ExtArgs>>): Prisma__PhoneBrandClient<$Result.GetResult<Prisma.$PhoneBrandPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PhoneBrands.
     * @param {PhoneBrandCreateManyArgs} args - Arguments to create many PhoneBrands.
     * @example
     * // Create many PhoneBrands
     * const phoneBrand = await prisma.phoneBrand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhoneBrandCreateManyArgs>(args?: SelectSubset<T, PhoneBrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhoneBrands and returns the data saved in the database.
     * @param {PhoneBrandCreateManyAndReturnArgs} args - Arguments to create many PhoneBrands.
     * @example
     * // Create many PhoneBrands
     * const phoneBrand = await prisma.phoneBrand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhoneBrands and only return the `id`
     * const phoneBrandWithIdOnly = await prisma.phoneBrand.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhoneBrandCreateManyAndReturnArgs>(args?: SelectSubset<T, PhoneBrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneBrandPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PhoneBrand.
     * @param {PhoneBrandDeleteArgs} args - Arguments to delete one PhoneBrand.
     * @example
     * // Delete one PhoneBrand
     * const PhoneBrand = await prisma.phoneBrand.delete({
     *   where: {
     *     // ... filter to delete one PhoneBrand
     *   }
     * })
     * 
     */
    delete<T extends PhoneBrandDeleteArgs>(args: SelectSubset<T, PhoneBrandDeleteArgs<ExtArgs>>): Prisma__PhoneBrandClient<$Result.GetResult<Prisma.$PhoneBrandPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PhoneBrand.
     * @param {PhoneBrandUpdateArgs} args - Arguments to update one PhoneBrand.
     * @example
     * // Update one PhoneBrand
     * const phoneBrand = await prisma.phoneBrand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhoneBrandUpdateArgs>(args: SelectSubset<T, PhoneBrandUpdateArgs<ExtArgs>>): Prisma__PhoneBrandClient<$Result.GetResult<Prisma.$PhoneBrandPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PhoneBrands.
     * @param {PhoneBrandDeleteManyArgs} args - Arguments to filter PhoneBrands to delete.
     * @example
     * // Delete a few PhoneBrands
     * const { count } = await prisma.phoneBrand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhoneBrandDeleteManyArgs>(args?: SelectSubset<T, PhoneBrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneBrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhoneBrands
     * const phoneBrand = await prisma.phoneBrand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhoneBrandUpdateManyArgs>(args: SelectSubset<T, PhoneBrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PhoneBrand.
     * @param {PhoneBrandUpsertArgs} args - Arguments to update or create a PhoneBrand.
     * @example
     * // Update or create a PhoneBrand
     * const phoneBrand = await prisma.phoneBrand.upsert({
     *   create: {
     *     // ... data to create a PhoneBrand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhoneBrand we want to update
     *   }
     * })
     */
    upsert<T extends PhoneBrandUpsertArgs>(args: SelectSubset<T, PhoneBrandUpsertArgs<ExtArgs>>): Prisma__PhoneBrandClient<$Result.GetResult<Prisma.$PhoneBrandPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PhoneBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneBrandCountArgs} args - Arguments to filter PhoneBrands to count.
     * @example
     * // Count the number of PhoneBrands
     * const count = await prisma.phoneBrand.count({
     *   where: {
     *     // ... the filter for the PhoneBrands we want to count
     *   }
     * })
    **/
    count<T extends PhoneBrandCountArgs>(
      args?: Subset<T, PhoneBrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhoneBrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhoneBrand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneBrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhoneBrandAggregateArgs>(args: Subset<T, PhoneBrandAggregateArgs>): Prisma.PrismaPromise<GetPhoneBrandAggregateType<T>>

    /**
     * Group by PhoneBrand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneBrandGroupByArgs} args - Group by arguments.
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
      T extends PhoneBrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhoneBrandGroupByArgs['orderBy'] }
        : { orderBy?: PhoneBrandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhoneBrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhoneBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhoneBrand model
   */
  readonly fields: PhoneBrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhoneBrand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhoneBrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    models<T extends PhoneBrand$modelsArgs<ExtArgs> = {}>(args?: Subset<T, PhoneBrand$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneModelPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhoneBrand model
   */ 
  interface PhoneBrandFieldRefs {
    readonly id: FieldRef<"PhoneBrand", 'Int'>
    readonly name: FieldRef<"PhoneBrand", 'String'>
    readonly slug: FieldRef<"PhoneBrand", 'String'>
    readonly createdAt: FieldRef<"PhoneBrand", 'DateTime'>
    readonly updatedAt: FieldRef<"PhoneBrand", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhoneBrand findUnique
   */
  export type PhoneBrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBrand
     */
    select?: PhoneBrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBrandInclude<ExtArgs> | null
    /**
     * Filter, which PhoneBrand to fetch.
     */
    where: PhoneBrandWhereUniqueInput
  }

  /**
   * PhoneBrand findUniqueOrThrow
   */
  export type PhoneBrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBrand
     */
    select?: PhoneBrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBrandInclude<ExtArgs> | null
    /**
     * Filter, which PhoneBrand to fetch.
     */
    where: PhoneBrandWhereUniqueInput
  }

  /**
   * PhoneBrand findFirst
   */
  export type PhoneBrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBrand
     */
    select?: PhoneBrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBrandInclude<ExtArgs> | null
    /**
     * Filter, which PhoneBrand to fetch.
     */
    where?: PhoneBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneBrands to fetch.
     */
    orderBy?: PhoneBrandOrderByWithRelationInput | PhoneBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneBrands.
     */
    cursor?: PhoneBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneBrands.
     */
    distinct?: PhoneBrandScalarFieldEnum | PhoneBrandScalarFieldEnum[]
  }

  /**
   * PhoneBrand findFirstOrThrow
   */
  export type PhoneBrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBrand
     */
    select?: PhoneBrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBrandInclude<ExtArgs> | null
    /**
     * Filter, which PhoneBrand to fetch.
     */
    where?: PhoneBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneBrands to fetch.
     */
    orderBy?: PhoneBrandOrderByWithRelationInput | PhoneBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneBrands.
     */
    cursor?: PhoneBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneBrands.
     */
    distinct?: PhoneBrandScalarFieldEnum | PhoneBrandScalarFieldEnum[]
  }

  /**
   * PhoneBrand findMany
   */
  export type PhoneBrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBrand
     */
    select?: PhoneBrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBrandInclude<ExtArgs> | null
    /**
     * Filter, which PhoneBrands to fetch.
     */
    where?: PhoneBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneBrands to fetch.
     */
    orderBy?: PhoneBrandOrderByWithRelationInput | PhoneBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhoneBrands.
     */
    cursor?: PhoneBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneBrands.
     */
    skip?: number
    distinct?: PhoneBrandScalarFieldEnum | PhoneBrandScalarFieldEnum[]
  }

  /**
   * PhoneBrand create
   */
  export type PhoneBrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBrand
     */
    select?: PhoneBrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBrandInclude<ExtArgs> | null
    /**
     * The data needed to create a PhoneBrand.
     */
    data: XOR<PhoneBrandCreateInput, PhoneBrandUncheckedCreateInput>
  }

  /**
   * PhoneBrand createMany
   */
  export type PhoneBrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhoneBrands.
     */
    data: PhoneBrandCreateManyInput | PhoneBrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneBrand createManyAndReturn
   */
  export type PhoneBrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBrand
     */
    select?: PhoneBrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PhoneBrands.
     */
    data: PhoneBrandCreateManyInput | PhoneBrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneBrand update
   */
  export type PhoneBrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBrand
     */
    select?: PhoneBrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBrandInclude<ExtArgs> | null
    /**
     * The data needed to update a PhoneBrand.
     */
    data: XOR<PhoneBrandUpdateInput, PhoneBrandUncheckedUpdateInput>
    /**
     * Choose, which PhoneBrand to update.
     */
    where: PhoneBrandWhereUniqueInput
  }

  /**
   * PhoneBrand updateMany
   */
  export type PhoneBrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhoneBrands.
     */
    data: XOR<PhoneBrandUpdateManyMutationInput, PhoneBrandUncheckedUpdateManyInput>
    /**
     * Filter which PhoneBrands to update
     */
    where?: PhoneBrandWhereInput
  }

  /**
   * PhoneBrand upsert
   */
  export type PhoneBrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBrand
     */
    select?: PhoneBrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBrandInclude<ExtArgs> | null
    /**
     * The filter to search for the PhoneBrand to update in case it exists.
     */
    where: PhoneBrandWhereUniqueInput
    /**
     * In case the PhoneBrand found by the `where` argument doesn't exist, create a new PhoneBrand with this data.
     */
    create: XOR<PhoneBrandCreateInput, PhoneBrandUncheckedCreateInput>
    /**
     * In case the PhoneBrand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhoneBrandUpdateInput, PhoneBrandUncheckedUpdateInput>
  }

  /**
   * PhoneBrand delete
   */
  export type PhoneBrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBrand
     */
    select?: PhoneBrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBrandInclude<ExtArgs> | null
    /**
     * Filter which PhoneBrand to delete.
     */
    where: PhoneBrandWhereUniqueInput
  }

  /**
   * PhoneBrand deleteMany
   */
  export type PhoneBrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneBrands to delete
     */
    where?: PhoneBrandWhereInput
  }

  /**
   * PhoneBrand.models
   */
  export type PhoneBrand$modelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneModel
     */
    select?: PhoneModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneModelInclude<ExtArgs> | null
    where?: PhoneModelWhereInput
    orderBy?: PhoneModelOrderByWithRelationInput | PhoneModelOrderByWithRelationInput[]
    cursor?: PhoneModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhoneModelScalarFieldEnum | PhoneModelScalarFieldEnum[]
  }

  /**
   * PhoneBrand without action
   */
  export type PhoneBrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneBrand
     */
    select?: PhoneBrandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneBrandInclude<ExtArgs> | null
  }


  /**
   * Model PhoneModel
   */

  export type AggregatePhoneModel = {
    _count: PhoneModelCountAggregateOutputType | null
    _avg: PhoneModelAvgAggregateOutputType | null
    _sum: PhoneModelSumAggregateOutputType | null
    _min: PhoneModelMinAggregateOutputType | null
    _max: PhoneModelMaxAggregateOutputType | null
  }

  export type PhoneModelAvgAggregateOutputType = {
    id: number | null
    brandId: number | null
  }

  export type PhoneModelSumAggregateOutputType = {
    id: number | null
    brandId: number | null
  }

  export type PhoneModelMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    image: string | null
    brandId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneModelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    image: string | null
    brandId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneModelCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    image: number
    colors: number
    variants: number
    brandId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhoneModelAvgAggregateInputType = {
    id?: true
    brandId?: true
  }

  export type PhoneModelSumAggregateInputType = {
    id?: true
    brandId?: true
  }

  export type PhoneModelMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    image?: true
    brandId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneModelMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    image?: true
    brandId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneModelCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    image?: true
    colors?: true
    variants?: true
    brandId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhoneModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneModel to aggregate.
     */
    where?: PhoneModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneModels to fetch.
     */
    orderBy?: PhoneModelOrderByWithRelationInput | PhoneModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhoneModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhoneModels
    **/
    _count?: true | PhoneModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhoneModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhoneModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhoneModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhoneModelMaxAggregateInputType
  }

  export type GetPhoneModelAggregateType<T extends PhoneModelAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoneModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoneModel[P]>
      : GetScalarType<T[P], AggregatePhoneModel[P]>
  }




  export type PhoneModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneModelWhereInput
    orderBy?: PhoneModelOrderByWithAggregationInput | PhoneModelOrderByWithAggregationInput[]
    by: PhoneModelScalarFieldEnum[] | PhoneModelScalarFieldEnum
    having?: PhoneModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhoneModelCountAggregateInputType | true
    _avg?: PhoneModelAvgAggregateInputType
    _sum?: PhoneModelSumAggregateInputType
    _min?: PhoneModelMinAggregateInputType
    _max?: PhoneModelMaxAggregateInputType
  }

  export type PhoneModelGroupByOutputType = {
    id: number
    name: string
    slug: string
    image: string | null
    colors: string[]
    variants: string[]
    brandId: number
    createdAt: Date
    updatedAt: Date
    _count: PhoneModelCountAggregateOutputType | null
    _avg: PhoneModelAvgAggregateOutputType | null
    _sum: PhoneModelSumAggregateOutputType | null
    _min: PhoneModelMinAggregateOutputType | null
    _max: PhoneModelMaxAggregateOutputType | null
  }

  type GetPhoneModelGroupByPayload<T extends PhoneModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhoneModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhoneModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhoneModelGroupByOutputType[P]>
            : GetScalarType<T[P], PhoneModelGroupByOutputType[P]>
        }
      >
    >


  export type PhoneModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    image?: boolean
    colors?: boolean
    variants?: boolean
    brandId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | PhoneBrandDefaultArgs<ExtArgs>
    specs?: boolean | PhoneModel$specsArgs<ExtArgs>
    media?: boolean | PhoneModel$mediaArgs<ExtArgs>
    affiliates?: boolean | PhoneModel$affiliatesArgs<ExtArgs>
    _count?: boolean | PhoneModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneModel"]>

  export type PhoneModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    image?: boolean
    colors?: boolean
    variants?: boolean
    brandId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | PhoneBrandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneModel"]>

  export type PhoneModelSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    image?: boolean
    colors?: boolean
    variants?: boolean
    brandId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhoneModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | PhoneBrandDefaultArgs<ExtArgs>
    specs?: boolean | PhoneModel$specsArgs<ExtArgs>
    media?: boolean | PhoneModel$mediaArgs<ExtArgs>
    affiliates?: boolean | PhoneModel$affiliatesArgs<ExtArgs>
    _count?: boolean | PhoneModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PhoneModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | PhoneBrandDefaultArgs<ExtArgs>
  }

  export type $PhoneModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhoneModel"
    objects: {
      brand: Prisma.$PhoneBrandPayload<ExtArgs>
      specs: Prisma.$PhoneSpecsPayload<ExtArgs> | null
      media: Prisma.$PhoneMediaPayload<ExtArgs>[]
      affiliates: Prisma.$AffiliateLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      image: string | null
      colors: string[]
      variants: string[]
      brandId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["phoneModel"]>
    composites: {}
  }

  type PhoneModelGetPayload<S extends boolean | null | undefined | PhoneModelDefaultArgs> = $Result.GetResult<Prisma.$PhoneModelPayload, S>

  type PhoneModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhoneModelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhoneModelCountAggregateInputType | true
    }

  export interface PhoneModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhoneModel'], meta: { name: 'PhoneModel' } }
    /**
     * Find zero or one PhoneModel that matches the filter.
     * @param {PhoneModelFindUniqueArgs} args - Arguments to find a PhoneModel
     * @example
     * // Get one PhoneModel
     * const phoneModel = await prisma.phoneModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhoneModelFindUniqueArgs>(args: SelectSubset<T, PhoneModelFindUniqueArgs<ExtArgs>>): Prisma__PhoneModelClient<$Result.GetResult<Prisma.$PhoneModelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PhoneModel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PhoneModelFindUniqueOrThrowArgs} args - Arguments to find a PhoneModel
     * @example
     * // Get one PhoneModel
     * const phoneModel = await prisma.phoneModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhoneModelFindUniqueOrThrowArgs>(args: SelectSubset<T, PhoneModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhoneModelClient<$Result.GetResult<Prisma.$PhoneModelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PhoneModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneModelFindFirstArgs} args - Arguments to find a PhoneModel
     * @example
     * // Get one PhoneModel
     * const phoneModel = await prisma.phoneModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhoneModelFindFirstArgs>(args?: SelectSubset<T, PhoneModelFindFirstArgs<ExtArgs>>): Prisma__PhoneModelClient<$Result.GetResult<Prisma.$PhoneModelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PhoneModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneModelFindFirstOrThrowArgs} args - Arguments to find a PhoneModel
     * @example
     * // Get one PhoneModel
     * const phoneModel = await prisma.phoneModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhoneModelFindFirstOrThrowArgs>(args?: SelectSubset<T, PhoneModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhoneModelClient<$Result.GetResult<Prisma.$PhoneModelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PhoneModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhoneModels
     * const phoneModels = await prisma.phoneModel.findMany()
     * 
     * // Get first 10 PhoneModels
     * const phoneModels = await prisma.phoneModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phoneModelWithIdOnly = await prisma.phoneModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhoneModelFindManyArgs>(args?: SelectSubset<T, PhoneModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneModelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PhoneModel.
     * @param {PhoneModelCreateArgs} args - Arguments to create a PhoneModel.
     * @example
     * // Create one PhoneModel
     * const PhoneModel = await prisma.phoneModel.create({
     *   data: {
     *     // ... data to create a PhoneModel
     *   }
     * })
     * 
     */
    create<T extends PhoneModelCreateArgs>(args: SelectSubset<T, PhoneModelCreateArgs<ExtArgs>>): Prisma__PhoneModelClient<$Result.GetResult<Prisma.$PhoneModelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PhoneModels.
     * @param {PhoneModelCreateManyArgs} args - Arguments to create many PhoneModels.
     * @example
     * // Create many PhoneModels
     * const phoneModel = await prisma.phoneModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhoneModelCreateManyArgs>(args?: SelectSubset<T, PhoneModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhoneModels and returns the data saved in the database.
     * @param {PhoneModelCreateManyAndReturnArgs} args - Arguments to create many PhoneModels.
     * @example
     * // Create many PhoneModels
     * const phoneModel = await prisma.phoneModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhoneModels and only return the `id`
     * const phoneModelWithIdOnly = await prisma.phoneModel.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhoneModelCreateManyAndReturnArgs>(args?: SelectSubset<T, PhoneModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneModelPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PhoneModel.
     * @param {PhoneModelDeleteArgs} args - Arguments to delete one PhoneModel.
     * @example
     * // Delete one PhoneModel
     * const PhoneModel = await prisma.phoneModel.delete({
     *   where: {
     *     // ... filter to delete one PhoneModel
     *   }
     * })
     * 
     */
    delete<T extends PhoneModelDeleteArgs>(args: SelectSubset<T, PhoneModelDeleteArgs<ExtArgs>>): Prisma__PhoneModelClient<$Result.GetResult<Prisma.$PhoneModelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PhoneModel.
     * @param {PhoneModelUpdateArgs} args - Arguments to update one PhoneModel.
     * @example
     * // Update one PhoneModel
     * const phoneModel = await prisma.phoneModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhoneModelUpdateArgs>(args: SelectSubset<T, PhoneModelUpdateArgs<ExtArgs>>): Prisma__PhoneModelClient<$Result.GetResult<Prisma.$PhoneModelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PhoneModels.
     * @param {PhoneModelDeleteManyArgs} args - Arguments to filter PhoneModels to delete.
     * @example
     * // Delete a few PhoneModels
     * const { count } = await prisma.phoneModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhoneModelDeleteManyArgs>(args?: SelectSubset<T, PhoneModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhoneModels
     * const phoneModel = await prisma.phoneModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhoneModelUpdateManyArgs>(args: SelectSubset<T, PhoneModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PhoneModel.
     * @param {PhoneModelUpsertArgs} args - Arguments to update or create a PhoneModel.
     * @example
     * // Update or create a PhoneModel
     * const phoneModel = await prisma.phoneModel.upsert({
     *   create: {
     *     // ... data to create a PhoneModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhoneModel we want to update
     *   }
     * })
     */
    upsert<T extends PhoneModelUpsertArgs>(args: SelectSubset<T, PhoneModelUpsertArgs<ExtArgs>>): Prisma__PhoneModelClient<$Result.GetResult<Prisma.$PhoneModelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PhoneModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneModelCountArgs} args - Arguments to filter PhoneModels to count.
     * @example
     * // Count the number of PhoneModels
     * const count = await prisma.phoneModel.count({
     *   where: {
     *     // ... the filter for the PhoneModels we want to count
     *   }
     * })
    **/
    count<T extends PhoneModelCountArgs>(
      args?: Subset<T, PhoneModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhoneModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhoneModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhoneModelAggregateArgs>(args: Subset<T, PhoneModelAggregateArgs>): Prisma.PrismaPromise<GetPhoneModelAggregateType<T>>

    /**
     * Group by PhoneModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneModelGroupByArgs} args - Group by arguments.
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
      T extends PhoneModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhoneModelGroupByArgs['orderBy'] }
        : { orderBy?: PhoneModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhoneModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhoneModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhoneModel model
   */
  readonly fields: PhoneModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhoneModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhoneModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends PhoneBrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhoneBrandDefaultArgs<ExtArgs>>): Prisma__PhoneBrandClient<$Result.GetResult<Prisma.$PhoneBrandPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    specs<T extends PhoneModel$specsArgs<ExtArgs> = {}>(args?: Subset<T, PhoneModel$specsArgs<ExtArgs>>): Prisma__PhoneSpecsClient<$Result.GetResult<Prisma.$PhoneSpecsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    media<T extends PhoneModel$mediaArgs<ExtArgs> = {}>(args?: Subset<T, PhoneModel$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneMediaPayload<ExtArgs>, T, "findMany"> | Null>
    affiliates<T extends PhoneModel$affiliatesArgs<ExtArgs> = {}>(args?: Subset<T, PhoneModel$affiliatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliateLinkPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhoneModel model
   */ 
  interface PhoneModelFieldRefs {
    readonly id: FieldRef<"PhoneModel", 'Int'>
    readonly name: FieldRef<"PhoneModel", 'String'>
    readonly slug: FieldRef<"PhoneModel", 'String'>
    readonly image: FieldRef<"PhoneModel", 'String'>
    readonly colors: FieldRef<"PhoneModel", 'String[]'>
    readonly variants: FieldRef<"PhoneModel", 'String[]'>
    readonly brandId: FieldRef<"PhoneModel", 'Int'>
    readonly createdAt: FieldRef<"PhoneModel", 'DateTime'>
    readonly updatedAt: FieldRef<"PhoneModel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhoneModel findUnique
   */
  export type PhoneModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneModel
     */
    select?: PhoneModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneModelInclude<ExtArgs> | null
    /**
     * Filter, which PhoneModel to fetch.
     */
    where: PhoneModelWhereUniqueInput
  }

  /**
   * PhoneModel findUniqueOrThrow
   */
  export type PhoneModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneModel
     */
    select?: PhoneModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneModelInclude<ExtArgs> | null
    /**
     * Filter, which PhoneModel to fetch.
     */
    where: PhoneModelWhereUniqueInput
  }

  /**
   * PhoneModel findFirst
   */
  export type PhoneModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneModel
     */
    select?: PhoneModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneModelInclude<ExtArgs> | null
    /**
     * Filter, which PhoneModel to fetch.
     */
    where?: PhoneModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneModels to fetch.
     */
    orderBy?: PhoneModelOrderByWithRelationInput | PhoneModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneModels.
     */
    cursor?: PhoneModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneModels.
     */
    distinct?: PhoneModelScalarFieldEnum | PhoneModelScalarFieldEnum[]
  }

  /**
   * PhoneModel findFirstOrThrow
   */
  export type PhoneModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneModel
     */
    select?: PhoneModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneModelInclude<ExtArgs> | null
    /**
     * Filter, which PhoneModel to fetch.
     */
    where?: PhoneModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneModels to fetch.
     */
    orderBy?: PhoneModelOrderByWithRelationInput | PhoneModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneModels.
     */
    cursor?: PhoneModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneModels.
     */
    distinct?: PhoneModelScalarFieldEnum | PhoneModelScalarFieldEnum[]
  }

  /**
   * PhoneModel findMany
   */
  export type PhoneModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneModel
     */
    select?: PhoneModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneModelInclude<ExtArgs> | null
    /**
     * Filter, which PhoneModels to fetch.
     */
    where?: PhoneModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneModels to fetch.
     */
    orderBy?: PhoneModelOrderByWithRelationInput | PhoneModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhoneModels.
     */
    cursor?: PhoneModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneModels.
     */
    skip?: number
    distinct?: PhoneModelScalarFieldEnum | PhoneModelScalarFieldEnum[]
  }

  /**
   * PhoneModel create
   */
  export type PhoneModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneModel
     */
    select?: PhoneModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneModelInclude<ExtArgs> | null
    /**
     * The data needed to create a PhoneModel.
     */
    data: XOR<PhoneModelCreateInput, PhoneModelUncheckedCreateInput>
  }

  /**
   * PhoneModel createMany
   */
  export type PhoneModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhoneModels.
     */
    data: PhoneModelCreateManyInput | PhoneModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneModel createManyAndReturn
   */
  export type PhoneModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneModel
     */
    select?: PhoneModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PhoneModels.
     */
    data: PhoneModelCreateManyInput | PhoneModelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneModelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhoneModel update
   */
  export type PhoneModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneModel
     */
    select?: PhoneModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneModelInclude<ExtArgs> | null
    /**
     * The data needed to update a PhoneModel.
     */
    data: XOR<PhoneModelUpdateInput, PhoneModelUncheckedUpdateInput>
    /**
     * Choose, which PhoneModel to update.
     */
    where: PhoneModelWhereUniqueInput
  }

  /**
   * PhoneModel updateMany
   */
  export type PhoneModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhoneModels.
     */
    data: XOR<PhoneModelUpdateManyMutationInput, PhoneModelUncheckedUpdateManyInput>
    /**
     * Filter which PhoneModels to update
     */
    where?: PhoneModelWhereInput
  }

  /**
   * PhoneModel upsert
   */
  export type PhoneModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneModel
     */
    select?: PhoneModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneModelInclude<ExtArgs> | null
    /**
     * The filter to search for the PhoneModel to update in case it exists.
     */
    where: PhoneModelWhereUniqueInput
    /**
     * In case the PhoneModel found by the `where` argument doesn't exist, create a new PhoneModel with this data.
     */
    create: XOR<PhoneModelCreateInput, PhoneModelUncheckedCreateInput>
    /**
     * In case the PhoneModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhoneModelUpdateInput, PhoneModelUncheckedUpdateInput>
  }

  /**
   * PhoneModel delete
   */
  export type PhoneModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneModel
     */
    select?: PhoneModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneModelInclude<ExtArgs> | null
    /**
     * Filter which PhoneModel to delete.
     */
    where: PhoneModelWhereUniqueInput
  }

  /**
   * PhoneModel deleteMany
   */
  export type PhoneModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneModels to delete
     */
    where?: PhoneModelWhereInput
  }

  /**
   * PhoneModel.specs
   */
  export type PhoneModel$specsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSpecs
     */
    select?: PhoneSpecsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneSpecsInclude<ExtArgs> | null
    where?: PhoneSpecsWhereInput
  }

  /**
   * PhoneModel.media
   */
  export type PhoneModel$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneMedia
     */
    select?: PhoneMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneMediaInclude<ExtArgs> | null
    where?: PhoneMediaWhereInput
    orderBy?: PhoneMediaOrderByWithRelationInput | PhoneMediaOrderByWithRelationInput[]
    cursor?: PhoneMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhoneMediaScalarFieldEnum | PhoneMediaScalarFieldEnum[]
  }

  /**
   * PhoneModel.affiliates
   */
  export type PhoneModel$affiliatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateLink
     */
    select?: AffiliateLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateLinkInclude<ExtArgs> | null
    where?: AffiliateLinkWhereInput
    orderBy?: AffiliateLinkOrderByWithRelationInput | AffiliateLinkOrderByWithRelationInput[]
    cursor?: AffiliateLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AffiliateLinkScalarFieldEnum | AffiliateLinkScalarFieldEnum[]
  }

  /**
   * PhoneModel without action
   */
  export type PhoneModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneModel
     */
    select?: PhoneModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneModelInclude<ExtArgs> | null
  }


  /**
   * Model PhoneSpecs
   */

  export type AggregatePhoneSpecs = {
    _count: PhoneSpecsCountAggregateOutputType | null
    _avg: PhoneSpecsAvgAggregateOutputType | null
    _sum: PhoneSpecsSumAggregateOutputType | null
    _min: PhoneSpecsMinAggregateOutputType | null
    _max: PhoneSpecsMaxAggregateOutputType | null
  }

  export type PhoneSpecsAvgAggregateOutputType = {
    id: number | null
    modelId: number | null
  }

  export type PhoneSpecsSumAggregateOutputType = {
    id: number | null
    modelId: number | null
  }

  export type PhoneSpecsMinAggregateOutputType = {
    id: number | null
    modelId: number | null
    os: string | null
    chipset: string | null
    cpu: string | null
    gpu: string | null
    displayType: string | null
    displaySize: string | null
    resolution: string | null
    refreshRate: string | null
    protection: string | null
    mainCamera: string | null
    selfieCamera: string | null
    videoRecording: string | null
    batteryCapacity: string | null
    chargingSpeed: string | null
    network: string | null
    sim: string | null
    wifi: string | null
    bluetooth: string | null
    usb: string | null
    sensors: string | null
    dimensions: string | null
    weight: string | null
    buildMaterial: string | null
    releaseDate: string | null
    otherFeatures: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneSpecsMaxAggregateOutputType = {
    id: number | null
    modelId: number | null
    os: string | null
    chipset: string | null
    cpu: string | null
    gpu: string | null
    displayType: string | null
    displaySize: string | null
    resolution: string | null
    refreshRate: string | null
    protection: string | null
    mainCamera: string | null
    selfieCamera: string | null
    videoRecording: string | null
    batteryCapacity: string | null
    chargingSpeed: string | null
    network: string | null
    sim: string | null
    wifi: string | null
    bluetooth: string | null
    usb: string | null
    sensors: string | null
    dimensions: string | null
    weight: string | null
    buildMaterial: string | null
    releaseDate: string | null
    otherFeatures: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhoneSpecsCountAggregateOutputType = {
    id: number
    modelId: number
    os: number
    chipset: number
    cpu: number
    gpu: number
    displayType: number
    displaySize: number
    resolution: number
    refreshRate: number
    protection: number
    mainCamera: number
    selfieCamera: number
    videoRecording: number
    batteryCapacity: number
    chargingSpeed: number
    network: number
    sim: number
    wifi: number
    bluetooth: number
    usb: number
    sensors: number
    dimensions: number
    weight: number
    buildMaterial: number
    releaseDate: number
    otherFeatures: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhoneSpecsAvgAggregateInputType = {
    id?: true
    modelId?: true
  }

  export type PhoneSpecsSumAggregateInputType = {
    id?: true
    modelId?: true
  }

  export type PhoneSpecsMinAggregateInputType = {
    id?: true
    modelId?: true
    os?: true
    chipset?: true
    cpu?: true
    gpu?: true
    displayType?: true
    displaySize?: true
    resolution?: true
    refreshRate?: true
    protection?: true
    mainCamera?: true
    selfieCamera?: true
    videoRecording?: true
    batteryCapacity?: true
    chargingSpeed?: true
    network?: true
    sim?: true
    wifi?: true
    bluetooth?: true
    usb?: true
    sensors?: true
    dimensions?: true
    weight?: true
    buildMaterial?: true
    releaseDate?: true
    otherFeatures?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneSpecsMaxAggregateInputType = {
    id?: true
    modelId?: true
    os?: true
    chipset?: true
    cpu?: true
    gpu?: true
    displayType?: true
    displaySize?: true
    resolution?: true
    refreshRate?: true
    protection?: true
    mainCamera?: true
    selfieCamera?: true
    videoRecording?: true
    batteryCapacity?: true
    chargingSpeed?: true
    network?: true
    sim?: true
    wifi?: true
    bluetooth?: true
    usb?: true
    sensors?: true
    dimensions?: true
    weight?: true
    buildMaterial?: true
    releaseDate?: true
    otherFeatures?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhoneSpecsCountAggregateInputType = {
    id?: true
    modelId?: true
    os?: true
    chipset?: true
    cpu?: true
    gpu?: true
    displayType?: true
    displaySize?: true
    resolution?: true
    refreshRate?: true
    protection?: true
    mainCamera?: true
    selfieCamera?: true
    videoRecording?: true
    batteryCapacity?: true
    chargingSpeed?: true
    network?: true
    sim?: true
    wifi?: true
    bluetooth?: true
    usb?: true
    sensors?: true
    dimensions?: true
    weight?: true
    buildMaterial?: true
    releaseDate?: true
    otherFeatures?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhoneSpecsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneSpecs to aggregate.
     */
    where?: PhoneSpecsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneSpecs to fetch.
     */
    orderBy?: PhoneSpecsOrderByWithRelationInput | PhoneSpecsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhoneSpecsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhoneSpecs
    **/
    _count?: true | PhoneSpecsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhoneSpecsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhoneSpecsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhoneSpecsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhoneSpecsMaxAggregateInputType
  }

  export type GetPhoneSpecsAggregateType<T extends PhoneSpecsAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoneSpecs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoneSpecs[P]>
      : GetScalarType<T[P], AggregatePhoneSpecs[P]>
  }




  export type PhoneSpecsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneSpecsWhereInput
    orderBy?: PhoneSpecsOrderByWithAggregationInput | PhoneSpecsOrderByWithAggregationInput[]
    by: PhoneSpecsScalarFieldEnum[] | PhoneSpecsScalarFieldEnum
    having?: PhoneSpecsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhoneSpecsCountAggregateInputType | true
    _avg?: PhoneSpecsAvgAggregateInputType
    _sum?: PhoneSpecsSumAggregateInputType
    _min?: PhoneSpecsMinAggregateInputType
    _max?: PhoneSpecsMaxAggregateInputType
  }

  export type PhoneSpecsGroupByOutputType = {
    id: number
    modelId: number
    os: string | null
    chipset: string | null
    cpu: string | null
    gpu: string | null
    displayType: string | null
    displaySize: string | null
    resolution: string | null
    refreshRate: string | null
    protection: string | null
    mainCamera: string | null
    selfieCamera: string | null
    videoRecording: string | null
    batteryCapacity: string | null
    chargingSpeed: string | null
    network: string | null
    sim: string | null
    wifi: string | null
    bluetooth: string | null
    usb: string | null
    sensors: string | null
    dimensions: string | null
    weight: string | null
    buildMaterial: string | null
    releaseDate: string | null
    otherFeatures: string | null
    createdAt: Date
    updatedAt: Date
    _count: PhoneSpecsCountAggregateOutputType | null
    _avg: PhoneSpecsAvgAggregateOutputType | null
    _sum: PhoneSpecsSumAggregateOutputType | null
    _min: PhoneSpecsMinAggregateOutputType | null
    _max: PhoneSpecsMaxAggregateOutputType | null
  }

  type GetPhoneSpecsGroupByPayload<T extends PhoneSpecsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhoneSpecsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhoneSpecsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhoneSpecsGroupByOutputType[P]>
            : GetScalarType<T[P], PhoneSpecsGroupByOutputType[P]>
        }
      >
    >


  export type PhoneSpecsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    os?: boolean
    chipset?: boolean
    cpu?: boolean
    gpu?: boolean
    displayType?: boolean
    displaySize?: boolean
    resolution?: boolean
    refreshRate?: boolean
    protection?: boolean
    mainCamera?: boolean
    selfieCamera?: boolean
    videoRecording?: boolean
    batteryCapacity?: boolean
    chargingSpeed?: boolean
    network?: boolean
    sim?: boolean
    wifi?: boolean
    bluetooth?: boolean
    usb?: boolean
    sensors?: boolean
    dimensions?: boolean
    weight?: boolean
    buildMaterial?: boolean
    releaseDate?: boolean
    otherFeatures?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    model?: boolean | PhoneModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneSpecs"]>

  export type PhoneSpecsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    os?: boolean
    chipset?: boolean
    cpu?: boolean
    gpu?: boolean
    displayType?: boolean
    displaySize?: boolean
    resolution?: boolean
    refreshRate?: boolean
    protection?: boolean
    mainCamera?: boolean
    selfieCamera?: boolean
    videoRecording?: boolean
    batteryCapacity?: boolean
    chargingSpeed?: boolean
    network?: boolean
    sim?: boolean
    wifi?: boolean
    bluetooth?: boolean
    usb?: boolean
    sensors?: boolean
    dimensions?: boolean
    weight?: boolean
    buildMaterial?: boolean
    releaseDate?: boolean
    otherFeatures?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    model?: boolean | PhoneModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneSpecs"]>

  export type PhoneSpecsSelectScalar = {
    id?: boolean
    modelId?: boolean
    os?: boolean
    chipset?: boolean
    cpu?: boolean
    gpu?: boolean
    displayType?: boolean
    displaySize?: boolean
    resolution?: boolean
    refreshRate?: boolean
    protection?: boolean
    mainCamera?: boolean
    selfieCamera?: boolean
    videoRecording?: boolean
    batteryCapacity?: boolean
    chargingSpeed?: boolean
    network?: boolean
    sim?: boolean
    wifi?: boolean
    bluetooth?: boolean
    usb?: boolean
    sensors?: boolean
    dimensions?: boolean
    weight?: boolean
    buildMaterial?: boolean
    releaseDate?: boolean
    otherFeatures?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhoneSpecsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | PhoneModelDefaultArgs<ExtArgs>
  }
  export type PhoneSpecsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | PhoneModelDefaultArgs<ExtArgs>
  }

  export type $PhoneSpecsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhoneSpecs"
    objects: {
      model: Prisma.$PhoneModelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modelId: number
      os: string | null
      chipset: string | null
      cpu: string | null
      gpu: string | null
      displayType: string | null
      displaySize: string | null
      resolution: string | null
      refreshRate: string | null
      protection: string | null
      mainCamera: string | null
      selfieCamera: string | null
      videoRecording: string | null
      batteryCapacity: string | null
      chargingSpeed: string | null
      network: string | null
      sim: string | null
      wifi: string | null
      bluetooth: string | null
      usb: string | null
      sensors: string | null
      dimensions: string | null
      weight: string | null
      buildMaterial: string | null
      releaseDate: string | null
      otherFeatures: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["phoneSpecs"]>
    composites: {}
  }

  type PhoneSpecsGetPayload<S extends boolean | null | undefined | PhoneSpecsDefaultArgs> = $Result.GetResult<Prisma.$PhoneSpecsPayload, S>

  type PhoneSpecsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhoneSpecsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhoneSpecsCountAggregateInputType | true
    }

  export interface PhoneSpecsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhoneSpecs'], meta: { name: 'PhoneSpecs' } }
    /**
     * Find zero or one PhoneSpecs that matches the filter.
     * @param {PhoneSpecsFindUniqueArgs} args - Arguments to find a PhoneSpecs
     * @example
     * // Get one PhoneSpecs
     * const phoneSpecs = await prisma.phoneSpecs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhoneSpecsFindUniqueArgs>(args: SelectSubset<T, PhoneSpecsFindUniqueArgs<ExtArgs>>): Prisma__PhoneSpecsClient<$Result.GetResult<Prisma.$PhoneSpecsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PhoneSpecs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PhoneSpecsFindUniqueOrThrowArgs} args - Arguments to find a PhoneSpecs
     * @example
     * // Get one PhoneSpecs
     * const phoneSpecs = await prisma.phoneSpecs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhoneSpecsFindUniqueOrThrowArgs>(args: SelectSubset<T, PhoneSpecsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhoneSpecsClient<$Result.GetResult<Prisma.$PhoneSpecsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PhoneSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneSpecsFindFirstArgs} args - Arguments to find a PhoneSpecs
     * @example
     * // Get one PhoneSpecs
     * const phoneSpecs = await prisma.phoneSpecs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhoneSpecsFindFirstArgs>(args?: SelectSubset<T, PhoneSpecsFindFirstArgs<ExtArgs>>): Prisma__PhoneSpecsClient<$Result.GetResult<Prisma.$PhoneSpecsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PhoneSpecs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneSpecsFindFirstOrThrowArgs} args - Arguments to find a PhoneSpecs
     * @example
     * // Get one PhoneSpecs
     * const phoneSpecs = await prisma.phoneSpecs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhoneSpecsFindFirstOrThrowArgs>(args?: SelectSubset<T, PhoneSpecsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhoneSpecsClient<$Result.GetResult<Prisma.$PhoneSpecsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PhoneSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneSpecsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhoneSpecs
     * const phoneSpecs = await prisma.phoneSpecs.findMany()
     * 
     * // Get first 10 PhoneSpecs
     * const phoneSpecs = await prisma.phoneSpecs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phoneSpecsWithIdOnly = await prisma.phoneSpecs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhoneSpecsFindManyArgs>(args?: SelectSubset<T, PhoneSpecsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneSpecsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PhoneSpecs.
     * @param {PhoneSpecsCreateArgs} args - Arguments to create a PhoneSpecs.
     * @example
     * // Create one PhoneSpecs
     * const PhoneSpecs = await prisma.phoneSpecs.create({
     *   data: {
     *     // ... data to create a PhoneSpecs
     *   }
     * })
     * 
     */
    create<T extends PhoneSpecsCreateArgs>(args: SelectSubset<T, PhoneSpecsCreateArgs<ExtArgs>>): Prisma__PhoneSpecsClient<$Result.GetResult<Prisma.$PhoneSpecsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PhoneSpecs.
     * @param {PhoneSpecsCreateManyArgs} args - Arguments to create many PhoneSpecs.
     * @example
     * // Create many PhoneSpecs
     * const phoneSpecs = await prisma.phoneSpecs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhoneSpecsCreateManyArgs>(args?: SelectSubset<T, PhoneSpecsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhoneSpecs and returns the data saved in the database.
     * @param {PhoneSpecsCreateManyAndReturnArgs} args - Arguments to create many PhoneSpecs.
     * @example
     * // Create many PhoneSpecs
     * const phoneSpecs = await prisma.phoneSpecs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhoneSpecs and only return the `id`
     * const phoneSpecsWithIdOnly = await prisma.phoneSpecs.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhoneSpecsCreateManyAndReturnArgs>(args?: SelectSubset<T, PhoneSpecsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneSpecsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PhoneSpecs.
     * @param {PhoneSpecsDeleteArgs} args - Arguments to delete one PhoneSpecs.
     * @example
     * // Delete one PhoneSpecs
     * const PhoneSpecs = await prisma.phoneSpecs.delete({
     *   where: {
     *     // ... filter to delete one PhoneSpecs
     *   }
     * })
     * 
     */
    delete<T extends PhoneSpecsDeleteArgs>(args: SelectSubset<T, PhoneSpecsDeleteArgs<ExtArgs>>): Prisma__PhoneSpecsClient<$Result.GetResult<Prisma.$PhoneSpecsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PhoneSpecs.
     * @param {PhoneSpecsUpdateArgs} args - Arguments to update one PhoneSpecs.
     * @example
     * // Update one PhoneSpecs
     * const phoneSpecs = await prisma.phoneSpecs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhoneSpecsUpdateArgs>(args: SelectSubset<T, PhoneSpecsUpdateArgs<ExtArgs>>): Prisma__PhoneSpecsClient<$Result.GetResult<Prisma.$PhoneSpecsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PhoneSpecs.
     * @param {PhoneSpecsDeleteManyArgs} args - Arguments to filter PhoneSpecs to delete.
     * @example
     * // Delete a few PhoneSpecs
     * const { count } = await prisma.phoneSpecs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhoneSpecsDeleteManyArgs>(args?: SelectSubset<T, PhoneSpecsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneSpecsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhoneSpecs
     * const phoneSpecs = await prisma.phoneSpecs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhoneSpecsUpdateManyArgs>(args: SelectSubset<T, PhoneSpecsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PhoneSpecs.
     * @param {PhoneSpecsUpsertArgs} args - Arguments to update or create a PhoneSpecs.
     * @example
     * // Update or create a PhoneSpecs
     * const phoneSpecs = await prisma.phoneSpecs.upsert({
     *   create: {
     *     // ... data to create a PhoneSpecs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhoneSpecs we want to update
     *   }
     * })
     */
    upsert<T extends PhoneSpecsUpsertArgs>(args: SelectSubset<T, PhoneSpecsUpsertArgs<ExtArgs>>): Prisma__PhoneSpecsClient<$Result.GetResult<Prisma.$PhoneSpecsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PhoneSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneSpecsCountArgs} args - Arguments to filter PhoneSpecs to count.
     * @example
     * // Count the number of PhoneSpecs
     * const count = await prisma.phoneSpecs.count({
     *   where: {
     *     // ... the filter for the PhoneSpecs we want to count
     *   }
     * })
    **/
    count<T extends PhoneSpecsCountArgs>(
      args?: Subset<T, PhoneSpecsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhoneSpecsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhoneSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneSpecsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhoneSpecsAggregateArgs>(args: Subset<T, PhoneSpecsAggregateArgs>): Prisma.PrismaPromise<GetPhoneSpecsAggregateType<T>>

    /**
     * Group by PhoneSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneSpecsGroupByArgs} args - Group by arguments.
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
      T extends PhoneSpecsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhoneSpecsGroupByArgs['orderBy'] }
        : { orderBy?: PhoneSpecsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhoneSpecsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhoneSpecsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhoneSpecs model
   */
  readonly fields: PhoneSpecsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhoneSpecs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhoneSpecsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends PhoneModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhoneModelDefaultArgs<ExtArgs>>): Prisma__PhoneModelClient<$Result.GetResult<Prisma.$PhoneModelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhoneSpecs model
   */ 
  interface PhoneSpecsFieldRefs {
    readonly id: FieldRef<"PhoneSpecs", 'Int'>
    readonly modelId: FieldRef<"PhoneSpecs", 'Int'>
    readonly os: FieldRef<"PhoneSpecs", 'String'>
    readonly chipset: FieldRef<"PhoneSpecs", 'String'>
    readonly cpu: FieldRef<"PhoneSpecs", 'String'>
    readonly gpu: FieldRef<"PhoneSpecs", 'String'>
    readonly displayType: FieldRef<"PhoneSpecs", 'String'>
    readonly displaySize: FieldRef<"PhoneSpecs", 'String'>
    readonly resolution: FieldRef<"PhoneSpecs", 'String'>
    readonly refreshRate: FieldRef<"PhoneSpecs", 'String'>
    readonly protection: FieldRef<"PhoneSpecs", 'String'>
    readonly mainCamera: FieldRef<"PhoneSpecs", 'String'>
    readonly selfieCamera: FieldRef<"PhoneSpecs", 'String'>
    readonly videoRecording: FieldRef<"PhoneSpecs", 'String'>
    readonly batteryCapacity: FieldRef<"PhoneSpecs", 'String'>
    readonly chargingSpeed: FieldRef<"PhoneSpecs", 'String'>
    readonly network: FieldRef<"PhoneSpecs", 'String'>
    readonly sim: FieldRef<"PhoneSpecs", 'String'>
    readonly wifi: FieldRef<"PhoneSpecs", 'String'>
    readonly bluetooth: FieldRef<"PhoneSpecs", 'String'>
    readonly usb: FieldRef<"PhoneSpecs", 'String'>
    readonly sensors: FieldRef<"PhoneSpecs", 'String'>
    readonly dimensions: FieldRef<"PhoneSpecs", 'String'>
    readonly weight: FieldRef<"PhoneSpecs", 'String'>
    readonly buildMaterial: FieldRef<"PhoneSpecs", 'String'>
    readonly releaseDate: FieldRef<"PhoneSpecs", 'String'>
    readonly otherFeatures: FieldRef<"PhoneSpecs", 'String'>
    readonly createdAt: FieldRef<"PhoneSpecs", 'DateTime'>
    readonly updatedAt: FieldRef<"PhoneSpecs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhoneSpecs findUnique
   */
  export type PhoneSpecsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSpecs
     */
    select?: PhoneSpecsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneSpecsInclude<ExtArgs> | null
    /**
     * Filter, which PhoneSpecs to fetch.
     */
    where: PhoneSpecsWhereUniqueInput
  }

  /**
   * PhoneSpecs findUniqueOrThrow
   */
  export type PhoneSpecsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSpecs
     */
    select?: PhoneSpecsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneSpecsInclude<ExtArgs> | null
    /**
     * Filter, which PhoneSpecs to fetch.
     */
    where: PhoneSpecsWhereUniqueInput
  }

  /**
   * PhoneSpecs findFirst
   */
  export type PhoneSpecsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSpecs
     */
    select?: PhoneSpecsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneSpecsInclude<ExtArgs> | null
    /**
     * Filter, which PhoneSpecs to fetch.
     */
    where?: PhoneSpecsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneSpecs to fetch.
     */
    orderBy?: PhoneSpecsOrderByWithRelationInput | PhoneSpecsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneSpecs.
     */
    cursor?: PhoneSpecsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneSpecs.
     */
    distinct?: PhoneSpecsScalarFieldEnum | PhoneSpecsScalarFieldEnum[]
  }

  /**
   * PhoneSpecs findFirstOrThrow
   */
  export type PhoneSpecsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSpecs
     */
    select?: PhoneSpecsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneSpecsInclude<ExtArgs> | null
    /**
     * Filter, which PhoneSpecs to fetch.
     */
    where?: PhoneSpecsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneSpecs to fetch.
     */
    orderBy?: PhoneSpecsOrderByWithRelationInput | PhoneSpecsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneSpecs.
     */
    cursor?: PhoneSpecsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneSpecs.
     */
    distinct?: PhoneSpecsScalarFieldEnum | PhoneSpecsScalarFieldEnum[]
  }

  /**
   * PhoneSpecs findMany
   */
  export type PhoneSpecsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSpecs
     */
    select?: PhoneSpecsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneSpecsInclude<ExtArgs> | null
    /**
     * Filter, which PhoneSpecs to fetch.
     */
    where?: PhoneSpecsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneSpecs to fetch.
     */
    orderBy?: PhoneSpecsOrderByWithRelationInput | PhoneSpecsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhoneSpecs.
     */
    cursor?: PhoneSpecsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneSpecs.
     */
    skip?: number
    distinct?: PhoneSpecsScalarFieldEnum | PhoneSpecsScalarFieldEnum[]
  }

  /**
   * PhoneSpecs create
   */
  export type PhoneSpecsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSpecs
     */
    select?: PhoneSpecsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneSpecsInclude<ExtArgs> | null
    /**
     * The data needed to create a PhoneSpecs.
     */
    data: XOR<PhoneSpecsCreateInput, PhoneSpecsUncheckedCreateInput>
  }

  /**
   * PhoneSpecs createMany
   */
  export type PhoneSpecsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhoneSpecs.
     */
    data: PhoneSpecsCreateManyInput | PhoneSpecsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneSpecs createManyAndReturn
   */
  export type PhoneSpecsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSpecs
     */
    select?: PhoneSpecsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PhoneSpecs.
     */
    data: PhoneSpecsCreateManyInput | PhoneSpecsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneSpecsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhoneSpecs update
   */
  export type PhoneSpecsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSpecs
     */
    select?: PhoneSpecsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneSpecsInclude<ExtArgs> | null
    /**
     * The data needed to update a PhoneSpecs.
     */
    data: XOR<PhoneSpecsUpdateInput, PhoneSpecsUncheckedUpdateInput>
    /**
     * Choose, which PhoneSpecs to update.
     */
    where: PhoneSpecsWhereUniqueInput
  }

  /**
   * PhoneSpecs updateMany
   */
  export type PhoneSpecsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhoneSpecs.
     */
    data: XOR<PhoneSpecsUpdateManyMutationInput, PhoneSpecsUncheckedUpdateManyInput>
    /**
     * Filter which PhoneSpecs to update
     */
    where?: PhoneSpecsWhereInput
  }

  /**
   * PhoneSpecs upsert
   */
  export type PhoneSpecsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSpecs
     */
    select?: PhoneSpecsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneSpecsInclude<ExtArgs> | null
    /**
     * The filter to search for the PhoneSpecs to update in case it exists.
     */
    where: PhoneSpecsWhereUniqueInput
    /**
     * In case the PhoneSpecs found by the `where` argument doesn't exist, create a new PhoneSpecs with this data.
     */
    create: XOR<PhoneSpecsCreateInput, PhoneSpecsUncheckedCreateInput>
    /**
     * In case the PhoneSpecs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhoneSpecsUpdateInput, PhoneSpecsUncheckedUpdateInput>
  }

  /**
   * PhoneSpecs delete
   */
  export type PhoneSpecsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSpecs
     */
    select?: PhoneSpecsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneSpecsInclude<ExtArgs> | null
    /**
     * Filter which PhoneSpecs to delete.
     */
    where: PhoneSpecsWhereUniqueInput
  }

  /**
   * PhoneSpecs deleteMany
   */
  export type PhoneSpecsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneSpecs to delete
     */
    where?: PhoneSpecsWhereInput
  }

  /**
   * PhoneSpecs without action
   */
  export type PhoneSpecsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneSpecs
     */
    select?: PhoneSpecsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneSpecsInclude<ExtArgs> | null
  }


  /**
   * Model PhoneMedia
   */

  export type AggregatePhoneMedia = {
    _count: PhoneMediaCountAggregateOutputType | null
    _avg: PhoneMediaAvgAggregateOutputType | null
    _sum: PhoneMediaSumAggregateOutputType | null
    _min: PhoneMediaMinAggregateOutputType | null
    _max: PhoneMediaMaxAggregateOutputType | null
  }

  export type PhoneMediaAvgAggregateOutputType = {
    id: number | null
    modelId: number | null
    width: number | null
    height: number | null
    duration: number | null
  }

  export type PhoneMediaSumAggregateOutputType = {
    id: number | null
    modelId: number | null
    width: number | null
    height: number | null
    duration: number | null
  }

  export type PhoneMediaMinAggregateOutputType = {
    id: number | null
    modelId: number | null
    url: string | null
    publicId: string | null
    type: $Enums.MediaType | null
    alt: string | null
    width: number | null
    height: number | null
    duration: number | null
    createdAt: Date | null
  }

  export type PhoneMediaMaxAggregateOutputType = {
    id: number | null
    modelId: number | null
    url: string | null
    publicId: string | null
    type: $Enums.MediaType | null
    alt: string | null
    width: number | null
    height: number | null
    duration: number | null
    createdAt: Date | null
  }

  export type PhoneMediaCountAggregateOutputType = {
    id: number
    modelId: number
    url: number
    publicId: number
    type: number
    alt: number
    width: number
    height: number
    duration: number
    createdAt: number
    _all: number
  }


  export type PhoneMediaAvgAggregateInputType = {
    id?: true
    modelId?: true
    width?: true
    height?: true
    duration?: true
  }

  export type PhoneMediaSumAggregateInputType = {
    id?: true
    modelId?: true
    width?: true
    height?: true
    duration?: true
  }

  export type PhoneMediaMinAggregateInputType = {
    id?: true
    modelId?: true
    url?: true
    publicId?: true
    type?: true
    alt?: true
    width?: true
    height?: true
    duration?: true
    createdAt?: true
  }

  export type PhoneMediaMaxAggregateInputType = {
    id?: true
    modelId?: true
    url?: true
    publicId?: true
    type?: true
    alt?: true
    width?: true
    height?: true
    duration?: true
    createdAt?: true
  }

  export type PhoneMediaCountAggregateInputType = {
    id?: true
    modelId?: true
    url?: true
    publicId?: true
    type?: true
    alt?: true
    width?: true
    height?: true
    duration?: true
    createdAt?: true
    _all?: true
  }

  export type PhoneMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneMedia to aggregate.
     */
    where?: PhoneMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneMedias to fetch.
     */
    orderBy?: PhoneMediaOrderByWithRelationInput | PhoneMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhoneMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhoneMedias
    **/
    _count?: true | PhoneMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhoneMediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhoneMediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhoneMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhoneMediaMaxAggregateInputType
  }

  export type GetPhoneMediaAggregateType<T extends PhoneMediaAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoneMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoneMedia[P]>
      : GetScalarType<T[P], AggregatePhoneMedia[P]>
  }




  export type PhoneMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneMediaWhereInput
    orderBy?: PhoneMediaOrderByWithAggregationInput | PhoneMediaOrderByWithAggregationInput[]
    by: PhoneMediaScalarFieldEnum[] | PhoneMediaScalarFieldEnum
    having?: PhoneMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhoneMediaCountAggregateInputType | true
    _avg?: PhoneMediaAvgAggregateInputType
    _sum?: PhoneMediaSumAggregateInputType
    _min?: PhoneMediaMinAggregateInputType
    _max?: PhoneMediaMaxAggregateInputType
  }

  export type PhoneMediaGroupByOutputType = {
    id: number
    modelId: number
    url: string
    publicId: string | null
    type: $Enums.MediaType
    alt: string | null
    width: number | null
    height: number | null
    duration: number | null
    createdAt: Date
    _count: PhoneMediaCountAggregateOutputType | null
    _avg: PhoneMediaAvgAggregateOutputType | null
    _sum: PhoneMediaSumAggregateOutputType | null
    _min: PhoneMediaMinAggregateOutputType | null
    _max: PhoneMediaMaxAggregateOutputType | null
  }

  type GetPhoneMediaGroupByPayload<T extends PhoneMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhoneMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhoneMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhoneMediaGroupByOutputType[P]>
            : GetScalarType<T[P], PhoneMediaGroupByOutputType[P]>
        }
      >
    >


  export type PhoneMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    url?: boolean
    publicId?: boolean
    type?: boolean
    alt?: boolean
    width?: boolean
    height?: boolean
    duration?: boolean
    createdAt?: boolean
    model?: boolean | PhoneModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneMedia"]>

  export type PhoneMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    url?: boolean
    publicId?: boolean
    type?: boolean
    alt?: boolean
    width?: boolean
    height?: boolean
    duration?: boolean
    createdAt?: boolean
    model?: boolean | PhoneModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phoneMedia"]>

  export type PhoneMediaSelectScalar = {
    id?: boolean
    modelId?: boolean
    url?: boolean
    publicId?: boolean
    type?: boolean
    alt?: boolean
    width?: boolean
    height?: boolean
    duration?: boolean
    createdAt?: boolean
  }

  export type PhoneMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | PhoneModelDefaultArgs<ExtArgs>
  }
  export type PhoneMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | PhoneModelDefaultArgs<ExtArgs>
  }

  export type $PhoneMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhoneMedia"
    objects: {
      model: Prisma.$PhoneModelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modelId: number
      url: string
      publicId: string | null
      type: $Enums.MediaType
      alt: string | null
      width: number | null
      height: number | null
      duration: number | null
      createdAt: Date
    }, ExtArgs["result"]["phoneMedia"]>
    composites: {}
  }

  type PhoneMediaGetPayload<S extends boolean | null | undefined | PhoneMediaDefaultArgs> = $Result.GetResult<Prisma.$PhoneMediaPayload, S>

  type PhoneMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhoneMediaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhoneMediaCountAggregateInputType | true
    }

  export interface PhoneMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhoneMedia'], meta: { name: 'PhoneMedia' } }
    /**
     * Find zero or one PhoneMedia that matches the filter.
     * @param {PhoneMediaFindUniqueArgs} args - Arguments to find a PhoneMedia
     * @example
     * // Get one PhoneMedia
     * const phoneMedia = await prisma.phoneMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhoneMediaFindUniqueArgs>(args: SelectSubset<T, PhoneMediaFindUniqueArgs<ExtArgs>>): Prisma__PhoneMediaClient<$Result.GetResult<Prisma.$PhoneMediaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PhoneMedia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PhoneMediaFindUniqueOrThrowArgs} args - Arguments to find a PhoneMedia
     * @example
     * // Get one PhoneMedia
     * const phoneMedia = await prisma.phoneMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhoneMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, PhoneMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhoneMediaClient<$Result.GetResult<Prisma.$PhoneMediaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PhoneMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneMediaFindFirstArgs} args - Arguments to find a PhoneMedia
     * @example
     * // Get one PhoneMedia
     * const phoneMedia = await prisma.phoneMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhoneMediaFindFirstArgs>(args?: SelectSubset<T, PhoneMediaFindFirstArgs<ExtArgs>>): Prisma__PhoneMediaClient<$Result.GetResult<Prisma.$PhoneMediaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PhoneMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneMediaFindFirstOrThrowArgs} args - Arguments to find a PhoneMedia
     * @example
     * // Get one PhoneMedia
     * const phoneMedia = await prisma.phoneMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhoneMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, PhoneMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhoneMediaClient<$Result.GetResult<Prisma.$PhoneMediaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PhoneMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhoneMedias
     * const phoneMedias = await prisma.phoneMedia.findMany()
     * 
     * // Get first 10 PhoneMedias
     * const phoneMedias = await prisma.phoneMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const phoneMediaWithIdOnly = await prisma.phoneMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhoneMediaFindManyArgs>(args?: SelectSubset<T, PhoneMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneMediaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PhoneMedia.
     * @param {PhoneMediaCreateArgs} args - Arguments to create a PhoneMedia.
     * @example
     * // Create one PhoneMedia
     * const PhoneMedia = await prisma.phoneMedia.create({
     *   data: {
     *     // ... data to create a PhoneMedia
     *   }
     * })
     * 
     */
    create<T extends PhoneMediaCreateArgs>(args: SelectSubset<T, PhoneMediaCreateArgs<ExtArgs>>): Prisma__PhoneMediaClient<$Result.GetResult<Prisma.$PhoneMediaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PhoneMedias.
     * @param {PhoneMediaCreateManyArgs} args - Arguments to create many PhoneMedias.
     * @example
     * // Create many PhoneMedias
     * const phoneMedia = await prisma.phoneMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhoneMediaCreateManyArgs>(args?: SelectSubset<T, PhoneMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhoneMedias and returns the data saved in the database.
     * @param {PhoneMediaCreateManyAndReturnArgs} args - Arguments to create many PhoneMedias.
     * @example
     * // Create many PhoneMedias
     * const phoneMedia = await prisma.phoneMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhoneMedias and only return the `id`
     * const phoneMediaWithIdOnly = await prisma.phoneMedia.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhoneMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, PhoneMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneMediaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PhoneMedia.
     * @param {PhoneMediaDeleteArgs} args - Arguments to delete one PhoneMedia.
     * @example
     * // Delete one PhoneMedia
     * const PhoneMedia = await prisma.phoneMedia.delete({
     *   where: {
     *     // ... filter to delete one PhoneMedia
     *   }
     * })
     * 
     */
    delete<T extends PhoneMediaDeleteArgs>(args: SelectSubset<T, PhoneMediaDeleteArgs<ExtArgs>>): Prisma__PhoneMediaClient<$Result.GetResult<Prisma.$PhoneMediaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PhoneMedia.
     * @param {PhoneMediaUpdateArgs} args - Arguments to update one PhoneMedia.
     * @example
     * // Update one PhoneMedia
     * const phoneMedia = await prisma.phoneMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhoneMediaUpdateArgs>(args: SelectSubset<T, PhoneMediaUpdateArgs<ExtArgs>>): Prisma__PhoneMediaClient<$Result.GetResult<Prisma.$PhoneMediaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PhoneMedias.
     * @param {PhoneMediaDeleteManyArgs} args - Arguments to filter PhoneMedias to delete.
     * @example
     * // Delete a few PhoneMedias
     * const { count } = await prisma.phoneMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhoneMediaDeleteManyArgs>(args?: SelectSubset<T, PhoneMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhoneMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhoneMedias
     * const phoneMedia = await prisma.phoneMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhoneMediaUpdateManyArgs>(args: SelectSubset<T, PhoneMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PhoneMedia.
     * @param {PhoneMediaUpsertArgs} args - Arguments to update or create a PhoneMedia.
     * @example
     * // Update or create a PhoneMedia
     * const phoneMedia = await prisma.phoneMedia.upsert({
     *   create: {
     *     // ... data to create a PhoneMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhoneMedia we want to update
     *   }
     * })
     */
    upsert<T extends PhoneMediaUpsertArgs>(args: SelectSubset<T, PhoneMediaUpsertArgs<ExtArgs>>): Prisma__PhoneMediaClient<$Result.GetResult<Prisma.$PhoneMediaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PhoneMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneMediaCountArgs} args - Arguments to filter PhoneMedias to count.
     * @example
     * // Count the number of PhoneMedias
     * const count = await prisma.phoneMedia.count({
     *   where: {
     *     // ... the filter for the PhoneMedias we want to count
     *   }
     * })
    **/
    count<T extends PhoneMediaCountArgs>(
      args?: Subset<T, PhoneMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhoneMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhoneMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhoneMediaAggregateArgs>(args: Subset<T, PhoneMediaAggregateArgs>): Prisma.PrismaPromise<GetPhoneMediaAggregateType<T>>

    /**
     * Group by PhoneMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneMediaGroupByArgs} args - Group by arguments.
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
      T extends PhoneMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhoneMediaGroupByArgs['orderBy'] }
        : { orderBy?: PhoneMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhoneMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhoneMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhoneMedia model
   */
  readonly fields: PhoneMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhoneMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhoneMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends PhoneModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhoneModelDefaultArgs<ExtArgs>>): Prisma__PhoneModelClient<$Result.GetResult<Prisma.$PhoneModelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhoneMedia model
   */ 
  interface PhoneMediaFieldRefs {
    readonly id: FieldRef<"PhoneMedia", 'Int'>
    readonly modelId: FieldRef<"PhoneMedia", 'Int'>
    readonly url: FieldRef<"PhoneMedia", 'String'>
    readonly publicId: FieldRef<"PhoneMedia", 'String'>
    readonly type: FieldRef<"PhoneMedia", 'MediaType'>
    readonly alt: FieldRef<"PhoneMedia", 'String'>
    readonly width: FieldRef<"PhoneMedia", 'Int'>
    readonly height: FieldRef<"PhoneMedia", 'Int'>
    readonly duration: FieldRef<"PhoneMedia", 'Float'>
    readonly createdAt: FieldRef<"PhoneMedia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhoneMedia findUnique
   */
  export type PhoneMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneMedia
     */
    select?: PhoneMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneMediaInclude<ExtArgs> | null
    /**
     * Filter, which PhoneMedia to fetch.
     */
    where: PhoneMediaWhereUniqueInput
  }

  /**
   * PhoneMedia findUniqueOrThrow
   */
  export type PhoneMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneMedia
     */
    select?: PhoneMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneMediaInclude<ExtArgs> | null
    /**
     * Filter, which PhoneMedia to fetch.
     */
    where: PhoneMediaWhereUniqueInput
  }

  /**
   * PhoneMedia findFirst
   */
  export type PhoneMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneMedia
     */
    select?: PhoneMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneMediaInclude<ExtArgs> | null
    /**
     * Filter, which PhoneMedia to fetch.
     */
    where?: PhoneMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneMedias to fetch.
     */
    orderBy?: PhoneMediaOrderByWithRelationInput | PhoneMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneMedias.
     */
    cursor?: PhoneMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneMedias.
     */
    distinct?: PhoneMediaScalarFieldEnum | PhoneMediaScalarFieldEnum[]
  }

  /**
   * PhoneMedia findFirstOrThrow
   */
  export type PhoneMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneMedia
     */
    select?: PhoneMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneMediaInclude<ExtArgs> | null
    /**
     * Filter, which PhoneMedia to fetch.
     */
    where?: PhoneMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneMedias to fetch.
     */
    orderBy?: PhoneMediaOrderByWithRelationInput | PhoneMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhoneMedias.
     */
    cursor?: PhoneMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhoneMedias.
     */
    distinct?: PhoneMediaScalarFieldEnum | PhoneMediaScalarFieldEnum[]
  }

  /**
   * PhoneMedia findMany
   */
  export type PhoneMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneMedia
     */
    select?: PhoneMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneMediaInclude<ExtArgs> | null
    /**
     * Filter, which PhoneMedias to fetch.
     */
    where?: PhoneMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhoneMedias to fetch.
     */
    orderBy?: PhoneMediaOrderByWithRelationInput | PhoneMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhoneMedias.
     */
    cursor?: PhoneMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhoneMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhoneMedias.
     */
    skip?: number
    distinct?: PhoneMediaScalarFieldEnum | PhoneMediaScalarFieldEnum[]
  }

  /**
   * PhoneMedia create
   */
  export type PhoneMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneMedia
     */
    select?: PhoneMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a PhoneMedia.
     */
    data: XOR<PhoneMediaCreateInput, PhoneMediaUncheckedCreateInput>
  }

  /**
   * PhoneMedia createMany
   */
  export type PhoneMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhoneMedias.
     */
    data: PhoneMediaCreateManyInput | PhoneMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhoneMedia createManyAndReturn
   */
  export type PhoneMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneMedia
     */
    select?: PhoneMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PhoneMedias.
     */
    data: PhoneMediaCreateManyInput | PhoneMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhoneMedia update
   */
  export type PhoneMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneMedia
     */
    select?: PhoneMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a PhoneMedia.
     */
    data: XOR<PhoneMediaUpdateInput, PhoneMediaUncheckedUpdateInput>
    /**
     * Choose, which PhoneMedia to update.
     */
    where: PhoneMediaWhereUniqueInput
  }

  /**
   * PhoneMedia updateMany
   */
  export type PhoneMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhoneMedias.
     */
    data: XOR<PhoneMediaUpdateManyMutationInput, PhoneMediaUncheckedUpdateManyInput>
    /**
     * Filter which PhoneMedias to update
     */
    where?: PhoneMediaWhereInput
  }

  /**
   * PhoneMedia upsert
   */
  export type PhoneMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneMedia
     */
    select?: PhoneMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the PhoneMedia to update in case it exists.
     */
    where: PhoneMediaWhereUniqueInput
    /**
     * In case the PhoneMedia found by the `where` argument doesn't exist, create a new PhoneMedia with this data.
     */
    create: XOR<PhoneMediaCreateInput, PhoneMediaUncheckedCreateInput>
    /**
     * In case the PhoneMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhoneMediaUpdateInput, PhoneMediaUncheckedUpdateInput>
  }

  /**
   * PhoneMedia delete
   */
  export type PhoneMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneMedia
     */
    select?: PhoneMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneMediaInclude<ExtArgs> | null
    /**
     * Filter which PhoneMedia to delete.
     */
    where: PhoneMediaWhereUniqueInput
  }

  /**
   * PhoneMedia deleteMany
   */
  export type PhoneMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhoneMedias to delete
     */
    where?: PhoneMediaWhereInput
  }

  /**
   * PhoneMedia without action
   */
  export type PhoneMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhoneMedia
     */
    select?: PhoneMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneMediaInclude<ExtArgs> | null
  }


  /**
   * Model AffiliateLink
   */

  export type AggregateAffiliateLink = {
    _count: AffiliateLinkCountAggregateOutputType | null
    _avg: AffiliateLinkAvgAggregateOutputType | null
    _sum: AffiliateLinkSumAggregateOutputType | null
    _min: AffiliateLinkMinAggregateOutputType | null
    _max: AffiliateLinkMaxAggregateOutputType | null
  }

  export type AffiliateLinkAvgAggregateOutputType = {
    id: number | null
    modelId: number | null
  }

  export type AffiliateLinkSumAggregateOutputType = {
    id: number | null
    modelId: number | null
  }

  export type AffiliateLinkMinAggregateOutputType = {
    id: number | null
    modelId: number | null
    storeName: string | null
    url: string | null
    price: string | null
    currency: string | null
    createdAt: Date | null
  }

  export type AffiliateLinkMaxAggregateOutputType = {
    id: number | null
    modelId: number | null
    storeName: string | null
    url: string | null
    price: string | null
    currency: string | null
    createdAt: Date | null
  }

  export type AffiliateLinkCountAggregateOutputType = {
    id: number
    modelId: number
    storeName: number
    url: number
    price: number
    currency: number
    createdAt: number
    _all: number
  }


  export type AffiliateLinkAvgAggregateInputType = {
    id?: true
    modelId?: true
  }

  export type AffiliateLinkSumAggregateInputType = {
    id?: true
    modelId?: true
  }

  export type AffiliateLinkMinAggregateInputType = {
    id?: true
    modelId?: true
    storeName?: true
    url?: true
    price?: true
    currency?: true
    createdAt?: true
  }

  export type AffiliateLinkMaxAggregateInputType = {
    id?: true
    modelId?: true
    storeName?: true
    url?: true
    price?: true
    currency?: true
    createdAt?: true
  }

  export type AffiliateLinkCountAggregateInputType = {
    id?: true
    modelId?: true
    storeName?: true
    url?: true
    price?: true
    currency?: true
    createdAt?: true
    _all?: true
  }

  export type AffiliateLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AffiliateLink to aggregate.
     */
    where?: AffiliateLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AffiliateLinks to fetch.
     */
    orderBy?: AffiliateLinkOrderByWithRelationInput | AffiliateLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AffiliateLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AffiliateLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AffiliateLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AffiliateLinks
    **/
    _count?: true | AffiliateLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AffiliateLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AffiliateLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AffiliateLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AffiliateLinkMaxAggregateInputType
  }

  export type GetAffiliateLinkAggregateType<T extends AffiliateLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateAffiliateLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAffiliateLink[P]>
      : GetScalarType<T[P], AggregateAffiliateLink[P]>
  }




  export type AffiliateLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AffiliateLinkWhereInput
    orderBy?: AffiliateLinkOrderByWithAggregationInput | AffiliateLinkOrderByWithAggregationInput[]
    by: AffiliateLinkScalarFieldEnum[] | AffiliateLinkScalarFieldEnum
    having?: AffiliateLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AffiliateLinkCountAggregateInputType | true
    _avg?: AffiliateLinkAvgAggregateInputType
    _sum?: AffiliateLinkSumAggregateInputType
    _min?: AffiliateLinkMinAggregateInputType
    _max?: AffiliateLinkMaxAggregateInputType
  }

  export type AffiliateLinkGroupByOutputType = {
    id: number
    modelId: number
    storeName: string
    url: string
    price: string | null
    currency: string | null
    createdAt: Date
    _count: AffiliateLinkCountAggregateOutputType | null
    _avg: AffiliateLinkAvgAggregateOutputType | null
    _sum: AffiliateLinkSumAggregateOutputType | null
    _min: AffiliateLinkMinAggregateOutputType | null
    _max: AffiliateLinkMaxAggregateOutputType | null
  }

  type GetAffiliateLinkGroupByPayload<T extends AffiliateLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AffiliateLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AffiliateLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AffiliateLinkGroupByOutputType[P]>
            : GetScalarType<T[P], AffiliateLinkGroupByOutputType[P]>
        }
      >
    >


  export type AffiliateLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    storeName?: boolean
    url?: boolean
    price?: boolean
    currency?: boolean
    createdAt?: boolean
    model?: boolean | PhoneModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["affiliateLink"]>

  export type AffiliateLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    storeName?: boolean
    url?: boolean
    price?: boolean
    currency?: boolean
    createdAt?: boolean
    model?: boolean | PhoneModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["affiliateLink"]>

  export type AffiliateLinkSelectScalar = {
    id?: boolean
    modelId?: boolean
    storeName?: boolean
    url?: boolean
    price?: boolean
    currency?: boolean
    createdAt?: boolean
  }

  export type AffiliateLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | PhoneModelDefaultArgs<ExtArgs>
  }
  export type AffiliateLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | PhoneModelDefaultArgs<ExtArgs>
  }

  export type $AffiliateLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AffiliateLink"
    objects: {
      model: Prisma.$PhoneModelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modelId: number
      storeName: string
      url: string
      price: string | null
      currency: string | null
      createdAt: Date
    }, ExtArgs["result"]["affiliateLink"]>
    composites: {}
  }

  type AffiliateLinkGetPayload<S extends boolean | null | undefined | AffiliateLinkDefaultArgs> = $Result.GetResult<Prisma.$AffiliateLinkPayload, S>

  type AffiliateLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AffiliateLinkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AffiliateLinkCountAggregateInputType | true
    }

  export interface AffiliateLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AffiliateLink'], meta: { name: 'AffiliateLink' } }
    /**
     * Find zero or one AffiliateLink that matches the filter.
     * @param {AffiliateLinkFindUniqueArgs} args - Arguments to find a AffiliateLink
     * @example
     * // Get one AffiliateLink
     * const affiliateLink = await prisma.affiliateLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AffiliateLinkFindUniqueArgs>(args: SelectSubset<T, AffiliateLinkFindUniqueArgs<ExtArgs>>): Prisma__AffiliateLinkClient<$Result.GetResult<Prisma.$AffiliateLinkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AffiliateLink that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AffiliateLinkFindUniqueOrThrowArgs} args - Arguments to find a AffiliateLink
     * @example
     * // Get one AffiliateLink
     * const affiliateLink = await prisma.affiliateLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AffiliateLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, AffiliateLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AffiliateLinkClient<$Result.GetResult<Prisma.$AffiliateLinkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AffiliateLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateLinkFindFirstArgs} args - Arguments to find a AffiliateLink
     * @example
     * // Get one AffiliateLink
     * const affiliateLink = await prisma.affiliateLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AffiliateLinkFindFirstArgs>(args?: SelectSubset<T, AffiliateLinkFindFirstArgs<ExtArgs>>): Prisma__AffiliateLinkClient<$Result.GetResult<Prisma.$AffiliateLinkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AffiliateLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateLinkFindFirstOrThrowArgs} args - Arguments to find a AffiliateLink
     * @example
     * // Get one AffiliateLink
     * const affiliateLink = await prisma.affiliateLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AffiliateLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, AffiliateLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__AffiliateLinkClient<$Result.GetResult<Prisma.$AffiliateLinkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AffiliateLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AffiliateLinks
     * const affiliateLinks = await prisma.affiliateLink.findMany()
     * 
     * // Get first 10 AffiliateLinks
     * const affiliateLinks = await prisma.affiliateLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const affiliateLinkWithIdOnly = await prisma.affiliateLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AffiliateLinkFindManyArgs>(args?: SelectSubset<T, AffiliateLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliateLinkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AffiliateLink.
     * @param {AffiliateLinkCreateArgs} args - Arguments to create a AffiliateLink.
     * @example
     * // Create one AffiliateLink
     * const AffiliateLink = await prisma.affiliateLink.create({
     *   data: {
     *     // ... data to create a AffiliateLink
     *   }
     * })
     * 
     */
    create<T extends AffiliateLinkCreateArgs>(args: SelectSubset<T, AffiliateLinkCreateArgs<ExtArgs>>): Prisma__AffiliateLinkClient<$Result.GetResult<Prisma.$AffiliateLinkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AffiliateLinks.
     * @param {AffiliateLinkCreateManyArgs} args - Arguments to create many AffiliateLinks.
     * @example
     * // Create many AffiliateLinks
     * const affiliateLink = await prisma.affiliateLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AffiliateLinkCreateManyArgs>(args?: SelectSubset<T, AffiliateLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AffiliateLinks and returns the data saved in the database.
     * @param {AffiliateLinkCreateManyAndReturnArgs} args - Arguments to create many AffiliateLinks.
     * @example
     * // Create many AffiliateLinks
     * const affiliateLink = await prisma.affiliateLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AffiliateLinks and only return the `id`
     * const affiliateLinkWithIdOnly = await prisma.affiliateLink.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AffiliateLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, AffiliateLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliateLinkPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AffiliateLink.
     * @param {AffiliateLinkDeleteArgs} args - Arguments to delete one AffiliateLink.
     * @example
     * // Delete one AffiliateLink
     * const AffiliateLink = await prisma.affiliateLink.delete({
     *   where: {
     *     // ... filter to delete one AffiliateLink
     *   }
     * })
     * 
     */
    delete<T extends AffiliateLinkDeleteArgs>(args: SelectSubset<T, AffiliateLinkDeleteArgs<ExtArgs>>): Prisma__AffiliateLinkClient<$Result.GetResult<Prisma.$AffiliateLinkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AffiliateLink.
     * @param {AffiliateLinkUpdateArgs} args - Arguments to update one AffiliateLink.
     * @example
     * // Update one AffiliateLink
     * const affiliateLink = await prisma.affiliateLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AffiliateLinkUpdateArgs>(args: SelectSubset<T, AffiliateLinkUpdateArgs<ExtArgs>>): Prisma__AffiliateLinkClient<$Result.GetResult<Prisma.$AffiliateLinkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AffiliateLinks.
     * @param {AffiliateLinkDeleteManyArgs} args - Arguments to filter AffiliateLinks to delete.
     * @example
     * // Delete a few AffiliateLinks
     * const { count } = await prisma.affiliateLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AffiliateLinkDeleteManyArgs>(args?: SelectSubset<T, AffiliateLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AffiliateLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AffiliateLinks
     * const affiliateLink = await prisma.affiliateLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AffiliateLinkUpdateManyArgs>(args: SelectSubset<T, AffiliateLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AffiliateLink.
     * @param {AffiliateLinkUpsertArgs} args - Arguments to update or create a AffiliateLink.
     * @example
     * // Update or create a AffiliateLink
     * const affiliateLink = await prisma.affiliateLink.upsert({
     *   create: {
     *     // ... data to create a AffiliateLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AffiliateLink we want to update
     *   }
     * })
     */
    upsert<T extends AffiliateLinkUpsertArgs>(args: SelectSubset<T, AffiliateLinkUpsertArgs<ExtArgs>>): Prisma__AffiliateLinkClient<$Result.GetResult<Prisma.$AffiliateLinkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AffiliateLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateLinkCountArgs} args - Arguments to filter AffiliateLinks to count.
     * @example
     * // Count the number of AffiliateLinks
     * const count = await prisma.affiliateLink.count({
     *   where: {
     *     // ... the filter for the AffiliateLinks we want to count
     *   }
     * })
    **/
    count<T extends AffiliateLinkCountArgs>(
      args?: Subset<T, AffiliateLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AffiliateLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AffiliateLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AffiliateLinkAggregateArgs>(args: Subset<T, AffiliateLinkAggregateArgs>): Prisma.PrismaPromise<GetAffiliateLinkAggregateType<T>>

    /**
     * Group by AffiliateLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateLinkGroupByArgs} args - Group by arguments.
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
      T extends AffiliateLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AffiliateLinkGroupByArgs['orderBy'] }
        : { orderBy?: AffiliateLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AffiliateLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAffiliateLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AffiliateLink model
   */
  readonly fields: AffiliateLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AffiliateLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AffiliateLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends PhoneModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PhoneModelDefaultArgs<ExtArgs>>): Prisma__PhoneModelClient<$Result.GetResult<Prisma.$PhoneModelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AffiliateLink model
   */ 
  interface AffiliateLinkFieldRefs {
    readonly id: FieldRef<"AffiliateLink", 'Int'>
    readonly modelId: FieldRef<"AffiliateLink", 'Int'>
    readonly storeName: FieldRef<"AffiliateLink", 'String'>
    readonly url: FieldRef<"AffiliateLink", 'String'>
    readonly price: FieldRef<"AffiliateLink", 'String'>
    readonly currency: FieldRef<"AffiliateLink", 'String'>
    readonly createdAt: FieldRef<"AffiliateLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AffiliateLink findUnique
   */
  export type AffiliateLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateLink
     */
    select?: AffiliateLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateLinkInclude<ExtArgs> | null
    /**
     * Filter, which AffiliateLink to fetch.
     */
    where: AffiliateLinkWhereUniqueInput
  }

  /**
   * AffiliateLink findUniqueOrThrow
   */
  export type AffiliateLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateLink
     */
    select?: AffiliateLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateLinkInclude<ExtArgs> | null
    /**
     * Filter, which AffiliateLink to fetch.
     */
    where: AffiliateLinkWhereUniqueInput
  }

  /**
   * AffiliateLink findFirst
   */
  export type AffiliateLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateLink
     */
    select?: AffiliateLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateLinkInclude<ExtArgs> | null
    /**
     * Filter, which AffiliateLink to fetch.
     */
    where?: AffiliateLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AffiliateLinks to fetch.
     */
    orderBy?: AffiliateLinkOrderByWithRelationInput | AffiliateLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AffiliateLinks.
     */
    cursor?: AffiliateLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AffiliateLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AffiliateLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AffiliateLinks.
     */
    distinct?: AffiliateLinkScalarFieldEnum | AffiliateLinkScalarFieldEnum[]
  }

  /**
   * AffiliateLink findFirstOrThrow
   */
  export type AffiliateLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateLink
     */
    select?: AffiliateLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateLinkInclude<ExtArgs> | null
    /**
     * Filter, which AffiliateLink to fetch.
     */
    where?: AffiliateLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AffiliateLinks to fetch.
     */
    orderBy?: AffiliateLinkOrderByWithRelationInput | AffiliateLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AffiliateLinks.
     */
    cursor?: AffiliateLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AffiliateLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AffiliateLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AffiliateLinks.
     */
    distinct?: AffiliateLinkScalarFieldEnum | AffiliateLinkScalarFieldEnum[]
  }

  /**
   * AffiliateLink findMany
   */
  export type AffiliateLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateLink
     */
    select?: AffiliateLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateLinkInclude<ExtArgs> | null
    /**
     * Filter, which AffiliateLinks to fetch.
     */
    where?: AffiliateLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AffiliateLinks to fetch.
     */
    orderBy?: AffiliateLinkOrderByWithRelationInput | AffiliateLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AffiliateLinks.
     */
    cursor?: AffiliateLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AffiliateLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AffiliateLinks.
     */
    skip?: number
    distinct?: AffiliateLinkScalarFieldEnum | AffiliateLinkScalarFieldEnum[]
  }

  /**
   * AffiliateLink create
   */
  export type AffiliateLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateLink
     */
    select?: AffiliateLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a AffiliateLink.
     */
    data: XOR<AffiliateLinkCreateInput, AffiliateLinkUncheckedCreateInput>
  }

  /**
   * AffiliateLink createMany
   */
  export type AffiliateLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AffiliateLinks.
     */
    data: AffiliateLinkCreateManyInput | AffiliateLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AffiliateLink createManyAndReturn
   */
  export type AffiliateLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateLink
     */
    select?: AffiliateLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AffiliateLinks.
     */
    data: AffiliateLinkCreateManyInput | AffiliateLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AffiliateLink update
   */
  export type AffiliateLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateLink
     */
    select?: AffiliateLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a AffiliateLink.
     */
    data: XOR<AffiliateLinkUpdateInput, AffiliateLinkUncheckedUpdateInput>
    /**
     * Choose, which AffiliateLink to update.
     */
    where: AffiliateLinkWhereUniqueInput
  }

  /**
   * AffiliateLink updateMany
   */
  export type AffiliateLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AffiliateLinks.
     */
    data: XOR<AffiliateLinkUpdateManyMutationInput, AffiliateLinkUncheckedUpdateManyInput>
    /**
     * Filter which AffiliateLinks to update
     */
    where?: AffiliateLinkWhereInput
  }

  /**
   * AffiliateLink upsert
   */
  export type AffiliateLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateLink
     */
    select?: AffiliateLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the AffiliateLink to update in case it exists.
     */
    where: AffiliateLinkWhereUniqueInput
    /**
     * In case the AffiliateLink found by the `where` argument doesn't exist, create a new AffiliateLink with this data.
     */
    create: XOR<AffiliateLinkCreateInput, AffiliateLinkUncheckedCreateInput>
    /**
     * In case the AffiliateLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AffiliateLinkUpdateInput, AffiliateLinkUncheckedUpdateInput>
  }

  /**
   * AffiliateLink delete
   */
  export type AffiliateLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateLink
     */
    select?: AffiliateLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateLinkInclude<ExtArgs> | null
    /**
     * Filter which AffiliateLink to delete.
     */
    where: AffiliateLinkWhereUniqueInput
  }

  /**
   * AffiliateLink deleteMany
   */
  export type AffiliateLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AffiliateLinks to delete
     */
    where?: AffiliateLinkWhereInput
  }

  /**
   * AffiliateLink without action
   */
  export type AffiliateLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateLink
     */
    select?: AffiliateLinkSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateLinkInclude<ExtArgs> | null
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


  export const AdminConfigScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value'
  };

  export type AdminConfigScalarFieldEnum = (typeof AdminConfigScalarFieldEnum)[keyof typeof AdminConfigScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const PhoneBrandScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhoneBrandScalarFieldEnum = (typeof PhoneBrandScalarFieldEnum)[keyof typeof PhoneBrandScalarFieldEnum]


  export const PhoneModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    image: 'image',
    colors: 'colors',
    variants: 'variants',
    brandId: 'brandId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhoneModelScalarFieldEnum = (typeof PhoneModelScalarFieldEnum)[keyof typeof PhoneModelScalarFieldEnum]


  export const PhoneSpecsScalarFieldEnum: {
    id: 'id',
    modelId: 'modelId',
    os: 'os',
    chipset: 'chipset',
    cpu: 'cpu',
    gpu: 'gpu',
    displayType: 'displayType',
    displaySize: 'displaySize',
    resolution: 'resolution',
    refreshRate: 'refreshRate',
    protection: 'protection',
    mainCamera: 'mainCamera',
    selfieCamera: 'selfieCamera',
    videoRecording: 'videoRecording',
    batteryCapacity: 'batteryCapacity',
    chargingSpeed: 'chargingSpeed',
    network: 'network',
    sim: 'sim',
    wifi: 'wifi',
    bluetooth: 'bluetooth',
    usb: 'usb',
    sensors: 'sensors',
    dimensions: 'dimensions',
    weight: 'weight',
    buildMaterial: 'buildMaterial',
    releaseDate: 'releaseDate',
    otherFeatures: 'otherFeatures',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhoneSpecsScalarFieldEnum = (typeof PhoneSpecsScalarFieldEnum)[keyof typeof PhoneSpecsScalarFieldEnum]


  export const PhoneMediaScalarFieldEnum: {
    id: 'id',
    modelId: 'modelId',
    url: 'url',
    publicId: 'publicId',
    type: 'type',
    alt: 'alt',
    width: 'width',
    height: 'height',
    duration: 'duration',
    createdAt: 'createdAt'
  };

  export type PhoneMediaScalarFieldEnum = (typeof PhoneMediaScalarFieldEnum)[keyof typeof PhoneMediaScalarFieldEnum]


  export const AffiliateLinkScalarFieldEnum: {
    id: 'id',
    modelId: 'modelId',
    storeName: 'storeName',
    url: 'url',
    price: 'price',
    currency: 'currency',
    createdAt: 'createdAt'
  };

  export type AffiliateLinkScalarFieldEnum = (typeof AffiliateLinkScalarFieldEnum)[keyof typeof AffiliateLinkScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MediaType'
   */
  export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>
    


  /**
   * Reference to a field of type 'MediaType[]'
   */
  export type ListEnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType[]'>
    


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


  export type AdminConfigWhereInput = {
    AND?: AdminConfigWhereInput | AdminConfigWhereInput[]
    OR?: AdminConfigWhereInput[]
    NOT?: AdminConfigWhereInput | AdminConfigWhereInput[]
    id?: IntFilter<"AdminConfig"> | number
    key?: StringFilter<"AdminConfig"> | string
    value?: StringFilter<"AdminConfig"> | string
  }

  export type AdminConfigOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type AdminConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: AdminConfigWhereInput | AdminConfigWhereInput[]
    OR?: AdminConfigWhereInput[]
    NOT?: AdminConfigWhereInput | AdminConfigWhereInput[]
    value?: StringFilter<"AdminConfig"> | string
  }, "id" | "key">

  export type AdminConfigOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    _count?: AdminConfigCountOrderByAggregateInput
    _avg?: AdminConfigAvgOrderByAggregateInput
    _max?: AdminConfigMaxOrderByAggregateInput
    _min?: AdminConfigMinOrderByAggregateInput
    _sum?: AdminConfigSumOrderByAggregateInput
  }

  export type AdminConfigScalarWhereWithAggregatesInput = {
    AND?: AdminConfigScalarWhereWithAggregatesInput | AdminConfigScalarWhereWithAggregatesInput[]
    OR?: AdminConfigScalarWhereWithAggregatesInput[]
    NOT?: AdminConfigScalarWhereWithAggregatesInput | AdminConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminConfig"> | number
    key?: StringWithAggregatesFilter<"AdminConfig"> | string
    value?: StringWithAggregatesFilter<"AdminConfig"> | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    name?: StringNullableFilter<"Admin"> | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    name?: StringNullableFilter<"Admin"> | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type PhoneBrandWhereInput = {
    AND?: PhoneBrandWhereInput | PhoneBrandWhereInput[]
    OR?: PhoneBrandWhereInput[]
    NOT?: PhoneBrandWhereInput | PhoneBrandWhereInput[]
    id?: IntFilter<"PhoneBrand"> | number
    name?: StringFilter<"PhoneBrand"> | string
    slug?: StringFilter<"PhoneBrand"> | string
    createdAt?: DateTimeFilter<"PhoneBrand"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneBrand"> | Date | string
    models?: PhoneModelListRelationFilter
  }

  export type PhoneBrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    models?: PhoneModelOrderByRelationAggregateInput
  }

  export type PhoneBrandWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    slug?: string
    AND?: PhoneBrandWhereInput | PhoneBrandWhereInput[]
    OR?: PhoneBrandWhereInput[]
    NOT?: PhoneBrandWhereInput | PhoneBrandWhereInput[]
    createdAt?: DateTimeFilter<"PhoneBrand"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneBrand"> | Date | string
    models?: PhoneModelListRelationFilter
  }, "id" | "name" | "slug">

  export type PhoneBrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhoneBrandCountOrderByAggregateInput
    _avg?: PhoneBrandAvgOrderByAggregateInput
    _max?: PhoneBrandMaxOrderByAggregateInput
    _min?: PhoneBrandMinOrderByAggregateInput
    _sum?: PhoneBrandSumOrderByAggregateInput
  }

  export type PhoneBrandScalarWhereWithAggregatesInput = {
    AND?: PhoneBrandScalarWhereWithAggregatesInput | PhoneBrandScalarWhereWithAggregatesInput[]
    OR?: PhoneBrandScalarWhereWithAggregatesInput[]
    NOT?: PhoneBrandScalarWhereWithAggregatesInput | PhoneBrandScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PhoneBrand"> | number
    name?: StringWithAggregatesFilter<"PhoneBrand"> | string
    slug?: StringWithAggregatesFilter<"PhoneBrand"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PhoneBrand"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PhoneBrand"> | Date | string
  }

  export type PhoneModelWhereInput = {
    AND?: PhoneModelWhereInput | PhoneModelWhereInput[]
    OR?: PhoneModelWhereInput[]
    NOT?: PhoneModelWhereInput | PhoneModelWhereInput[]
    id?: IntFilter<"PhoneModel"> | number
    name?: StringFilter<"PhoneModel"> | string
    slug?: StringFilter<"PhoneModel"> | string
    image?: StringNullableFilter<"PhoneModel"> | string | null
    colors?: StringNullableListFilter<"PhoneModel">
    variants?: StringNullableListFilter<"PhoneModel">
    brandId?: IntFilter<"PhoneModel"> | number
    createdAt?: DateTimeFilter<"PhoneModel"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneModel"> | Date | string
    brand?: XOR<PhoneBrandRelationFilter, PhoneBrandWhereInput>
    specs?: XOR<PhoneSpecsNullableRelationFilter, PhoneSpecsWhereInput> | null
    media?: PhoneMediaListRelationFilter
    affiliates?: AffiliateLinkListRelationFilter
  }

  export type PhoneModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    image?: SortOrderInput | SortOrder
    colors?: SortOrder
    variants?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brand?: PhoneBrandOrderByWithRelationInput
    specs?: PhoneSpecsOrderByWithRelationInput
    media?: PhoneMediaOrderByRelationAggregateInput
    affiliates?: AffiliateLinkOrderByRelationAggregateInput
  }

  export type PhoneModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: PhoneModelWhereInput | PhoneModelWhereInput[]
    OR?: PhoneModelWhereInput[]
    NOT?: PhoneModelWhereInput | PhoneModelWhereInput[]
    name?: StringFilter<"PhoneModel"> | string
    image?: StringNullableFilter<"PhoneModel"> | string | null
    colors?: StringNullableListFilter<"PhoneModel">
    variants?: StringNullableListFilter<"PhoneModel">
    brandId?: IntFilter<"PhoneModel"> | number
    createdAt?: DateTimeFilter<"PhoneModel"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneModel"> | Date | string
    brand?: XOR<PhoneBrandRelationFilter, PhoneBrandWhereInput>
    specs?: XOR<PhoneSpecsNullableRelationFilter, PhoneSpecsWhereInput> | null
    media?: PhoneMediaListRelationFilter
    affiliates?: AffiliateLinkListRelationFilter
  }, "id" | "slug">

  export type PhoneModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    image?: SortOrderInput | SortOrder
    colors?: SortOrder
    variants?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhoneModelCountOrderByAggregateInput
    _avg?: PhoneModelAvgOrderByAggregateInput
    _max?: PhoneModelMaxOrderByAggregateInput
    _min?: PhoneModelMinOrderByAggregateInput
    _sum?: PhoneModelSumOrderByAggregateInput
  }

  export type PhoneModelScalarWhereWithAggregatesInput = {
    AND?: PhoneModelScalarWhereWithAggregatesInput | PhoneModelScalarWhereWithAggregatesInput[]
    OR?: PhoneModelScalarWhereWithAggregatesInput[]
    NOT?: PhoneModelScalarWhereWithAggregatesInput | PhoneModelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PhoneModel"> | number
    name?: StringWithAggregatesFilter<"PhoneModel"> | string
    slug?: StringWithAggregatesFilter<"PhoneModel"> | string
    image?: StringNullableWithAggregatesFilter<"PhoneModel"> | string | null
    colors?: StringNullableListFilter<"PhoneModel">
    variants?: StringNullableListFilter<"PhoneModel">
    brandId?: IntWithAggregatesFilter<"PhoneModel"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PhoneModel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PhoneModel"> | Date | string
  }

  export type PhoneSpecsWhereInput = {
    AND?: PhoneSpecsWhereInput | PhoneSpecsWhereInput[]
    OR?: PhoneSpecsWhereInput[]
    NOT?: PhoneSpecsWhereInput | PhoneSpecsWhereInput[]
    id?: IntFilter<"PhoneSpecs"> | number
    modelId?: IntFilter<"PhoneSpecs"> | number
    os?: StringNullableFilter<"PhoneSpecs"> | string | null
    chipset?: StringNullableFilter<"PhoneSpecs"> | string | null
    cpu?: StringNullableFilter<"PhoneSpecs"> | string | null
    gpu?: StringNullableFilter<"PhoneSpecs"> | string | null
    displayType?: StringNullableFilter<"PhoneSpecs"> | string | null
    displaySize?: StringNullableFilter<"PhoneSpecs"> | string | null
    resolution?: StringNullableFilter<"PhoneSpecs"> | string | null
    refreshRate?: StringNullableFilter<"PhoneSpecs"> | string | null
    protection?: StringNullableFilter<"PhoneSpecs"> | string | null
    mainCamera?: StringNullableFilter<"PhoneSpecs"> | string | null
    selfieCamera?: StringNullableFilter<"PhoneSpecs"> | string | null
    videoRecording?: StringNullableFilter<"PhoneSpecs"> | string | null
    batteryCapacity?: StringNullableFilter<"PhoneSpecs"> | string | null
    chargingSpeed?: StringNullableFilter<"PhoneSpecs"> | string | null
    network?: StringNullableFilter<"PhoneSpecs"> | string | null
    sim?: StringNullableFilter<"PhoneSpecs"> | string | null
    wifi?: StringNullableFilter<"PhoneSpecs"> | string | null
    bluetooth?: StringNullableFilter<"PhoneSpecs"> | string | null
    usb?: StringNullableFilter<"PhoneSpecs"> | string | null
    sensors?: StringNullableFilter<"PhoneSpecs"> | string | null
    dimensions?: StringNullableFilter<"PhoneSpecs"> | string | null
    weight?: StringNullableFilter<"PhoneSpecs"> | string | null
    buildMaterial?: StringNullableFilter<"PhoneSpecs"> | string | null
    releaseDate?: StringNullableFilter<"PhoneSpecs"> | string | null
    otherFeatures?: StringNullableFilter<"PhoneSpecs"> | string | null
    createdAt?: DateTimeFilter<"PhoneSpecs"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneSpecs"> | Date | string
    model?: XOR<PhoneModelRelationFilter, PhoneModelWhereInput>
  }

  export type PhoneSpecsOrderByWithRelationInput = {
    id?: SortOrder
    modelId?: SortOrder
    os?: SortOrderInput | SortOrder
    chipset?: SortOrderInput | SortOrder
    cpu?: SortOrderInput | SortOrder
    gpu?: SortOrderInput | SortOrder
    displayType?: SortOrderInput | SortOrder
    displaySize?: SortOrderInput | SortOrder
    resolution?: SortOrderInput | SortOrder
    refreshRate?: SortOrderInput | SortOrder
    protection?: SortOrderInput | SortOrder
    mainCamera?: SortOrderInput | SortOrder
    selfieCamera?: SortOrderInput | SortOrder
    videoRecording?: SortOrderInput | SortOrder
    batteryCapacity?: SortOrderInput | SortOrder
    chargingSpeed?: SortOrderInput | SortOrder
    network?: SortOrderInput | SortOrder
    sim?: SortOrderInput | SortOrder
    wifi?: SortOrderInput | SortOrder
    bluetooth?: SortOrderInput | SortOrder
    usb?: SortOrderInput | SortOrder
    sensors?: SortOrderInput | SortOrder
    dimensions?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    buildMaterial?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    otherFeatures?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    model?: PhoneModelOrderByWithRelationInput
  }

  export type PhoneSpecsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    modelId?: number
    AND?: PhoneSpecsWhereInput | PhoneSpecsWhereInput[]
    OR?: PhoneSpecsWhereInput[]
    NOT?: PhoneSpecsWhereInput | PhoneSpecsWhereInput[]
    os?: StringNullableFilter<"PhoneSpecs"> | string | null
    chipset?: StringNullableFilter<"PhoneSpecs"> | string | null
    cpu?: StringNullableFilter<"PhoneSpecs"> | string | null
    gpu?: StringNullableFilter<"PhoneSpecs"> | string | null
    displayType?: StringNullableFilter<"PhoneSpecs"> | string | null
    displaySize?: StringNullableFilter<"PhoneSpecs"> | string | null
    resolution?: StringNullableFilter<"PhoneSpecs"> | string | null
    refreshRate?: StringNullableFilter<"PhoneSpecs"> | string | null
    protection?: StringNullableFilter<"PhoneSpecs"> | string | null
    mainCamera?: StringNullableFilter<"PhoneSpecs"> | string | null
    selfieCamera?: StringNullableFilter<"PhoneSpecs"> | string | null
    videoRecording?: StringNullableFilter<"PhoneSpecs"> | string | null
    batteryCapacity?: StringNullableFilter<"PhoneSpecs"> | string | null
    chargingSpeed?: StringNullableFilter<"PhoneSpecs"> | string | null
    network?: StringNullableFilter<"PhoneSpecs"> | string | null
    sim?: StringNullableFilter<"PhoneSpecs"> | string | null
    wifi?: StringNullableFilter<"PhoneSpecs"> | string | null
    bluetooth?: StringNullableFilter<"PhoneSpecs"> | string | null
    usb?: StringNullableFilter<"PhoneSpecs"> | string | null
    sensors?: StringNullableFilter<"PhoneSpecs"> | string | null
    dimensions?: StringNullableFilter<"PhoneSpecs"> | string | null
    weight?: StringNullableFilter<"PhoneSpecs"> | string | null
    buildMaterial?: StringNullableFilter<"PhoneSpecs"> | string | null
    releaseDate?: StringNullableFilter<"PhoneSpecs"> | string | null
    otherFeatures?: StringNullableFilter<"PhoneSpecs"> | string | null
    createdAt?: DateTimeFilter<"PhoneSpecs"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneSpecs"> | Date | string
    model?: XOR<PhoneModelRelationFilter, PhoneModelWhereInput>
  }, "id" | "modelId">

  export type PhoneSpecsOrderByWithAggregationInput = {
    id?: SortOrder
    modelId?: SortOrder
    os?: SortOrderInput | SortOrder
    chipset?: SortOrderInput | SortOrder
    cpu?: SortOrderInput | SortOrder
    gpu?: SortOrderInput | SortOrder
    displayType?: SortOrderInput | SortOrder
    displaySize?: SortOrderInput | SortOrder
    resolution?: SortOrderInput | SortOrder
    refreshRate?: SortOrderInput | SortOrder
    protection?: SortOrderInput | SortOrder
    mainCamera?: SortOrderInput | SortOrder
    selfieCamera?: SortOrderInput | SortOrder
    videoRecording?: SortOrderInput | SortOrder
    batteryCapacity?: SortOrderInput | SortOrder
    chargingSpeed?: SortOrderInput | SortOrder
    network?: SortOrderInput | SortOrder
    sim?: SortOrderInput | SortOrder
    wifi?: SortOrderInput | SortOrder
    bluetooth?: SortOrderInput | SortOrder
    usb?: SortOrderInput | SortOrder
    sensors?: SortOrderInput | SortOrder
    dimensions?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    buildMaterial?: SortOrderInput | SortOrder
    releaseDate?: SortOrderInput | SortOrder
    otherFeatures?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhoneSpecsCountOrderByAggregateInput
    _avg?: PhoneSpecsAvgOrderByAggregateInput
    _max?: PhoneSpecsMaxOrderByAggregateInput
    _min?: PhoneSpecsMinOrderByAggregateInput
    _sum?: PhoneSpecsSumOrderByAggregateInput
  }

  export type PhoneSpecsScalarWhereWithAggregatesInput = {
    AND?: PhoneSpecsScalarWhereWithAggregatesInput | PhoneSpecsScalarWhereWithAggregatesInput[]
    OR?: PhoneSpecsScalarWhereWithAggregatesInput[]
    NOT?: PhoneSpecsScalarWhereWithAggregatesInput | PhoneSpecsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PhoneSpecs"> | number
    modelId?: IntWithAggregatesFilter<"PhoneSpecs"> | number
    os?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    chipset?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    cpu?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    gpu?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    displayType?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    displaySize?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    resolution?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    refreshRate?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    protection?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    mainCamera?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    selfieCamera?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    videoRecording?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    batteryCapacity?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    chargingSpeed?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    network?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    sim?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    wifi?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    bluetooth?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    usb?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    sensors?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    dimensions?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    weight?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    buildMaterial?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    releaseDate?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    otherFeatures?: StringNullableWithAggregatesFilter<"PhoneSpecs"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PhoneSpecs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PhoneSpecs"> | Date | string
  }

  export type PhoneMediaWhereInput = {
    AND?: PhoneMediaWhereInput | PhoneMediaWhereInput[]
    OR?: PhoneMediaWhereInput[]
    NOT?: PhoneMediaWhereInput | PhoneMediaWhereInput[]
    id?: IntFilter<"PhoneMedia"> | number
    modelId?: IntFilter<"PhoneMedia"> | number
    url?: StringFilter<"PhoneMedia"> | string
    publicId?: StringNullableFilter<"PhoneMedia"> | string | null
    type?: EnumMediaTypeFilter<"PhoneMedia"> | $Enums.MediaType
    alt?: StringNullableFilter<"PhoneMedia"> | string | null
    width?: IntNullableFilter<"PhoneMedia"> | number | null
    height?: IntNullableFilter<"PhoneMedia"> | number | null
    duration?: FloatNullableFilter<"PhoneMedia"> | number | null
    createdAt?: DateTimeFilter<"PhoneMedia"> | Date | string
    model?: XOR<PhoneModelRelationFilter, PhoneModelWhereInput>
  }

  export type PhoneMediaOrderByWithRelationInput = {
    id?: SortOrder
    modelId?: SortOrder
    url?: SortOrder
    publicId?: SortOrderInput | SortOrder
    type?: SortOrder
    alt?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    model?: PhoneModelOrderByWithRelationInput
  }

  export type PhoneMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhoneMediaWhereInput | PhoneMediaWhereInput[]
    OR?: PhoneMediaWhereInput[]
    NOT?: PhoneMediaWhereInput | PhoneMediaWhereInput[]
    modelId?: IntFilter<"PhoneMedia"> | number
    url?: StringFilter<"PhoneMedia"> | string
    publicId?: StringNullableFilter<"PhoneMedia"> | string | null
    type?: EnumMediaTypeFilter<"PhoneMedia"> | $Enums.MediaType
    alt?: StringNullableFilter<"PhoneMedia"> | string | null
    width?: IntNullableFilter<"PhoneMedia"> | number | null
    height?: IntNullableFilter<"PhoneMedia"> | number | null
    duration?: FloatNullableFilter<"PhoneMedia"> | number | null
    createdAt?: DateTimeFilter<"PhoneMedia"> | Date | string
    model?: XOR<PhoneModelRelationFilter, PhoneModelWhereInput>
  }, "id">

  export type PhoneMediaOrderByWithAggregationInput = {
    id?: SortOrder
    modelId?: SortOrder
    url?: SortOrder
    publicId?: SortOrderInput | SortOrder
    type?: SortOrder
    alt?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PhoneMediaCountOrderByAggregateInput
    _avg?: PhoneMediaAvgOrderByAggregateInput
    _max?: PhoneMediaMaxOrderByAggregateInput
    _min?: PhoneMediaMinOrderByAggregateInput
    _sum?: PhoneMediaSumOrderByAggregateInput
  }

  export type PhoneMediaScalarWhereWithAggregatesInput = {
    AND?: PhoneMediaScalarWhereWithAggregatesInput | PhoneMediaScalarWhereWithAggregatesInput[]
    OR?: PhoneMediaScalarWhereWithAggregatesInput[]
    NOT?: PhoneMediaScalarWhereWithAggregatesInput | PhoneMediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PhoneMedia"> | number
    modelId?: IntWithAggregatesFilter<"PhoneMedia"> | number
    url?: StringWithAggregatesFilter<"PhoneMedia"> | string
    publicId?: StringNullableWithAggregatesFilter<"PhoneMedia"> | string | null
    type?: EnumMediaTypeWithAggregatesFilter<"PhoneMedia"> | $Enums.MediaType
    alt?: StringNullableWithAggregatesFilter<"PhoneMedia"> | string | null
    width?: IntNullableWithAggregatesFilter<"PhoneMedia"> | number | null
    height?: IntNullableWithAggregatesFilter<"PhoneMedia"> | number | null
    duration?: FloatNullableWithAggregatesFilter<"PhoneMedia"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"PhoneMedia"> | Date | string
  }

  export type AffiliateLinkWhereInput = {
    AND?: AffiliateLinkWhereInput | AffiliateLinkWhereInput[]
    OR?: AffiliateLinkWhereInput[]
    NOT?: AffiliateLinkWhereInput | AffiliateLinkWhereInput[]
    id?: IntFilter<"AffiliateLink"> | number
    modelId?: IntFilter<"AffiliateLink"> | number
    storeName?: StringFilter<"AffiliateLink"> | string
    url?: StringFilter<"AffiliateLink"> | string
    price?: StringNullableFilter<"AffiliateLink"> | string | null
    currency?: StringNullableFilter<"AffiliateLink"> | string | null
    createdAt?: DateTimeFilter<"AffiliateLink"> | Date | string
    model?: XOR<PhoneModelRelationFilter, PhoneModelWhereInput>
  }

  export type AffiliateLinkOrderByWithRelationInput = {
    id?: SortOrder
    modelId?: SortOrder
    storeName?: SortOrder
    url?: SortOrder
    price?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    model?: PhoneModelOrderByWithRelationInput
  }

  export type AffiliateLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AffiliateLinkWhereInput | AffiliateLinkWhereInput[]
    OR?: AffiliateLinkWhereInput[]
    NOT?: AffiliateLinkWhereInput | AffiliateLinkWhereInput[]
    modelId?: IntFilter<"AffiliateLink"> | number
    storeName?: StringFilter<"AffiliateLink"> | string
    url?: StringFilter<"AffiliateLink"> | string
    price?: StringNullableFilter<"AffiliateLink"> | string | null
    currency?: StringNullableFilter<"AffiliateLink"> | string | null
    createdAt?: DateTimeFilter<"AffiliateLink"> | Date | string
    model?: XOR<PhoneModelRelationFilter, PhoneModelWhereInput>
  }, "id">

  export type AffiliateLinkOrderByWithAggregationInput = {
    id?: SortOrder
    modelId?: SortOrder
    storeName?: SortOrder
    url?: SortOrder
    price?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AffiliateLinkCountOrderByAggregateInput
    _avg?: AffiliateLinkAvgOrderByAggregateInput
    _max?: AffiliateLinkMaxOrderByAggregateInput
    _min?: AffiliateLinkMinOrderByAggregateInput
    _sum?: AffiliateLinkSumOrderByAggregateInput
  }

  export type AffiliateLinkScalarWhereWithAggregatesInput = {
    AND?: AffiliateLinkScalarWhereWithAggregatesInput | AffiliateLinkScalarWhereWithAggregatesInput[]
    OR?: AffiliateLinkScalarWhereWithAggregatesInput[]
    NOT?: AffiliateLinkScalarWhereWithAggregatesInput | AffiliateLinkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AffiliateLink"> | number
    modelId?: IntWithAggregatesFilter<"AffiliateLink"> | number
    storeName?: StringWithAggregatesFilter<"AffiliateLink"> | string
    url?: StringWithAggregatesFilter<"AffiliateLink"> | string
    price?: StringNullableWithAggregatesFilter<"AffiliateLink"> | string | null
    currency?: StringNullableWithAggregatesFilter<"AffiliateLink"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AffiliateLink"> | Date | string
  }

  export type AdminConfigCreateInput = {
    key: string
    value: string
  }

  export type AdminConfigUncheckedCreateInput = {
    id?: number
    key: string
    value: string
  }

  export type AdminConfigUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AdminConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AdminConfigCreateManyInput = {
    id?: number
    key: string
    value: string
  }

  export type AdminConfigUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AdminConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateInput = {
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneBrandCreateInput = {
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: PhoneModelCreateNestedManyWithoutBrandInput
  }

  export type PhoneBrandUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    models?: PhoneModelUncheckedCreateNestedManyWithoutBrandInput
  }

  export type PhoneBrandUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: PhoneModelUpdateManyWithoutBrandNestedInput
  }

  export type PhoneBrandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: PhoneModelUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type PhoneBrandCreateManyInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneBrandUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneBrandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneModelCreateInput = {
    name: string
    slug: string
    image?: string | null
    colors?: PhoneModelCreatecolorsInput | string[]
    variants?: PhoneModelCreatevariantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: PhoneBrandCreateNestedOneWithoutModelsInput
    specs?: PhoneSpecsCreateNestedOneWithoutModelInput
    media?: PhoneMediaCreateNestedManyWithoutModelInput
    affiliates?: AffiliateLinkCreateNestedManyWithoutModelInput
  }

  export type PhoneModelUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    image?: string | null
    colors?: PhoneModelCreatecolorsInput | string[]
    variants?: PhoneModelCreatevariantsInput | string[]
    brandId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    specs?: PhoneSpecsUncheckedCreateNestedOneWithoutModelInput
    media?: PhoneMediaUncheckedCreateNestedManyWithoutModelInput
    affiliates?: AffiliateLinkUncheckedCreateNestedManyWithoutModelInput
  }

  export type PhoneModelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: PhoneModelUpdatecolorsInput | string[]
    variants?: PhoneModelUpdatevariantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: PhoneBrandUpdateOneRequiredWithoutModelsNestedInput
    specs?: PhoneSpecsUpdateOneWithoutModelNestedInput
    media?: PhoneMediaUpdateManyWithoutModelNestedInput
    affiliates?: AffiliateLinkUpdateManyWithoutModelNestedInput
  }

  export type PhoneModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: PhoneModelUpdatecolorsInput | string[]
    variants?: PhoneModelUpdatevariantsInput | string[]
    brandId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specs?: PhoneSpecsUncheckedUpdateOneWithoutModelNestedInput
    media?: PhoneMediaUncheckedUpdateManyWithoutModelNestedInput
    affiliates?: AffiliateLinkUncheckedUpdateManyWithoutModelNestedInput
  }

  export type PhoneModelCreateManyInput = {
    id?: number
    name: string
    slug: string
    image?: string | null
    colors?: PhoneModelCreatecolorsInput | string[]
    variants?: PhoneModelCreatevariantsInput | string[]
    brandId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneModelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: PhoneModelUpdatecolorsInput | string[]
    variants?: PhoneModelUpdatevariantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: PhoneModelUpdatecolorsInput | string[]
    variants?: PhoneModelUpdatevariantsInput | string[]
    brandId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneSpecsCreateInput = {
    os?: string | null
    chipset?: string | null
    cpu?: string | null
    gpu?: string | null
    displayType?: string | null
    displaySize?: string | null
    resolution?: string | null
    refreshRate?: string | null
    protection?: string | null
    mainCamera?: string | null
    selfieCamera?: string | null
    videoRecording?: string | null
    batteryCapacity?: string | null
    chargingSpeed?: string | null
    network?: string | null
    sim?: string | null
    wifi?: string | null
    bluetooth?: string | null
    usb?: string | null
    sensors?: string | null
    dimensions?: string | null
    weight?: string | null
    buildMaterial?: string | null
    releaseDate?: string | null
    otherFeatures?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    model: PhoneModelCreateNestedOneWithoutSpecsInput
  }

  export type PhoneSpecsUncheckedCreateInput = {
    id?: number
    modelId: number
    os?: string | null
    chipset?: string | null
    cpu?: string | null
    gpu?: string | null
    displayType?: string | null
    displaySize?: string | null
    resolution?: string | null
    refreshRate?: string | null
    protection?: string | null
    mainCamera?: string | null
    selfieCamera?: string | null
    videoRecording?: string | null
    batteryCapacity?: string | null
    chargingSpeed?: string | null
    network?: string | null
    sim?: string | null
    wifi?: string | null
    bluetooth?: string | null
    usb?: string | null
    sensors?: string | null
    dimensions?: string | null
    weight?: string | null
    buildMaterial?: string | null
    releaseDate?: string | null
    otherFeatures?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneSpecsUpdateInput = {
    os?: NullableStringFieldUpdateOperationsInput | string | null
    chipset?: NullableStringFieldUpdateOperationsInput | string | null
    cpu?: NullableStringFieldUpdateOperationsInput | string | null
    gpu?: NullableStringFieldUpdateOperationsInput | string | null
    displayType?: NullableStringFieldUpdateOperationsInput | string | null
    displaySize?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    refreshRate?: NullableStringFieldUpdateOperationsInput | string | null
    protection?: NullableStringFieldUpdateOperationsInput | string | null
    mainCamera?: NullableStringFieldUpdateOperationsInput | string | null
    selfieCamera?: NullableStringFieldUpdateOperationsInput | string | null
    videoRecording?: NullableStringFieldUpdateOperationsInput | string | null
    batteryCapacity?: NullableStringFieldUpdateOperationsInput | string | null
    chargingSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    sim?: NullableStringFieldUpdateOperationsInput | string | null
    wifi?: NullableStringFieldUpdateOperationsInput | string | null
    bluetooth?: NullableStringFieldUpdateOperationsInput | string | null
    usb?: NullableStringFieldUpdateOperationsInput | string | null
    sensors?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    buildMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableStringFieldUpdateOperationsInput | string | null
    otherFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: PhoneModelUpdateOneRequiredWithoutSpecsNestedInput
  }

  export type PhoneSpecsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    os?: NullableStringFieldUpdateOperationsInput | string | null
    chipset?: NullableStringFieldUpdateOperationsInput | string | null
    cpu?: NullableStringFieldUpdateOperationsInput | string | null
    gpu?: NullableStringFieldUpdateOperationsInput | string | null
    displayType?: NullableStringFieldUpdateOperationsInput | string | null
    displaySize?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    refreshRate?: NullableStringFieldUpdateOperationsInput | string | null
    protection?: NullableStringFieldUpdateOperationsInput | string | null
    mainCamera?: NullableStringFieldUpdateOperationsInput | string | null
    selfieCamera?: NullableStringFieldUpdateOperationsInput | string | null
    videoRecording?: NullableStringFieldUpdateOperationsInput | string | null
    batteryCapacity?: NullableStringFieldUpdateOperationsInput | string | null
    chargingSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    sim?: NullableStringFieldUpdateOperationsInput | string | null
    wifi?: NullableStringFieldUpdateOperationsInput | string | null
    bluetooth?: NullableStringFieldUpdateOperationsInput | string | null
    usb?: NullableStringFieldUpdateOperationsInput | string | null
    sensors?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    buildMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableStringFieldUpdateOperationsInput | string | null
    otherFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneSpecsCreateManyInput = {
    id?: number
    modelId: number
    os?: string | null
    chipset?: string | null
    cpu?: string | null
    gpu?: string | null
    displayType?: string | null
    displaySize?: string | null
    resolution?: string | null
    refreshRate?: string | null
    protection?: string | null
    mainCamera?: string | null
    selfieCamera?: string | null
    videoRecording?: string | null
    batteryCapacity?: string | null
    chargingSpeed?: string | null
    network?: string | null
    sim?: string | null
    wifi?: string | null
    bluetooth?: string | null
    usb?: string | null
    sensors?: string | null
    dimensions?: string | null
    weight?: string | null
    buildMaterial?: string | null
    releaseDate?: string | null
    otherFeatures?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneSpecsUpdateManyMutationInput = {
    os?: NullableStringFieldUpdateOperationsInput | string | null
    chipset?: NullableStringFieldUpdateOperationsInput | string | null
    cpu?: NullableStringFieldUpdateOperationsInput | string | null
    gpu?: NullableStringFieldUpdateOperationsInput | string | null
    displayType?: NullableStringFieldUpdateOperationsInput | string | null
    displaySize?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    refreshRate?: NullableStringFieldUpdateOperationsInput | string | null
    protection?: NullableStringFieldUpdateOperationsInput | string | null
    mainCamera?: NullableStringFieldUpdateOperationsInput | string | null
    selfieCamera?: NullableStringFieldUpdateOperationsInput | string | null
    videoRecording?: NullableStringFieldUpdateOperationsInput | string | null
    batteryCapacity?: NullableStringFieldUpdateOperationsInput | string | null
    chargingSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    sim?: NullableStringFieldUpdateOperationsInput | string | null
    wifi?: NullableStringFieldUpdateOperationsInput | string | null
    bluetooth?: NullableStringFieldUpdateOperationsInput | string | null
    usb?: NullableStringFieldUpdateOperationsInput | string | null
    sensors?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    buildMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableStringFieldUpdateOperationsInput | string | null
    otherFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneSpecsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    os?: NullableStringFieldUpdateOperationsInput | string | null
    chipset?: NullableStringFieldUpdateOperationsInput | string | null
    cpu?: NullableStringFieldUpdateOperationsInput | string | null
    gpu?: NullableStringFieldUpdateOperationsInput | string | null
    displayType?: NullableStringFieldUpdateOperationsInput | string | null
    displaySize?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    refreshRate?: NullableStringFieldUpdateOperationsInput | string | null
    protection?: NullableStringFieldUpdateOperationsInput | string | null
    mainCamera?: NullableStringFieldUpdateOperationsInput | string | null
    selfieCamera?: NullableStringFieldUpdateOperationsInput | string | null
    videoRecording?: NullableStringFieldUpdateOperationsInput | string | null
    batteryCapacity?: NullableStringFieldUpdateOperationsInput | string | null
    chargingSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    sim?: NullableStringFieldUpdateOperationsInput | string | null
    wifi?: NullableStringFieldUpdateOperationsInput | string | null
    bluetooth?: NullableStringFieldUpdateOperationsInput | string | null
    usb?: NullableStringFieldUpdateOperationsInput | string | null
    sensors?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    buildMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableStringFieldUpdateOperationsInput | string | null
    otherFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneMediaCreateInput = {
    url: string
    publicId?: string | null
    type: $Enums.MediaType
    alt?: string | null
    width?: number | null
    height?: number | null
    duration?: number | null
    createdAt?: Date | string
    model: PhoneModelCreateNestedOneWithoutMediaInput
  }

  export type PhoneMediaUncheckedCreateInput = {
    id?: number
    modelId: number
    url: string
    publicId?: string | null
    type: $Enums.MediaType
    alt?: string | null
    width?: number | null
    height?: number | null
    duration?: number | null
    createdAt?: Date | string
  }

  export type PhoneMediaUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: PhoneModelUpdateOneRequiredWithoutMediaNestedInput
  }

  export type PhoneMediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneMediaCreateManyInput = {
    id?: number
    modelId: number
    url: string
    publicId?: string | null
    type: $Enums.MediaType
    alt?: string | null
    width?: number | null
    height?: number | null
    duration?: number | null
    createdAt?: Date | string
  }

  export type PhoneMediaUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneMediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateLinkCreateInput = {
    storeName: string
    url: string
    price?: string | null
    currency?: string | null
    createdAt?: Date | string
    model: PhoneModelCreateNestedOneWithoutAffiliatesInput
  }

  export type AffiliateLinkUncheckedCreateInput = {
    id?: number
    modelId: number
    storeName: string
    url: string
    price?: string | null
    currency?: string | null
    createdAt?: Date | string
  }

  export type AffiliateLinkUpdateInput = {
    storeName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: PhoneModelUpdateOneRequiredWithoutAffiliatesNestedInput
  }

  export type AffiliateLinkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    storeName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateLinkCreateManyInput = {
    id?: number
    modelId: number
    storeName: string
    url: string
    price?: string | null
    currency?: string | null
    createdAt?: Date | string
  }

  export type AffiliateLinkUpdateManyMutationInput = {
    storeName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateLinkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    storeName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AdminConfigCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type AdminConfigAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type AdminConfigMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
  }

  export type AdminConfigSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PhoneModelListRelationFilter = {
    every?: PhoneModelWhereInput
    some?: PhoneModelWhereInput
    none?: PhoneModelWhereInput
  }

  export type PhoneModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhoneBrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneBrandAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PhoneBrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneBrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneBrandSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PhoneBrandRelationFilter = {
    is?: PhoneBrandWhereInput
    isNot?: PhoneBrandWhereInput
  }

  export type PhoneSpecsNullableRelationFilter = {
    is?: PhoneSpecsWhereInput | null
    isNot?: PhoneSpecsWhereInput | null
  }

  export type PhoneMediaListRelationFilter = {
    every?: PhoneMediaWhereInput
    some?: PhoneMediaWhereInput
    none?: PhoneMediaWhereInput
  }

  export type AffiliateLinkListRelationFilter = {
    every?: AffiliateLinkWhereInput
    some?: AffiliateLinkWhereInput
    none?: AffiliateLinkWhereInput
  }

  export type PhoneMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AffiliateLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhoneModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    image?: SortOrder
    colors?: SortOrder
    variants?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneModelAvgOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
  }

  export type PhoneModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    image?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    image?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneModelSumOrderByAggregateInput = {
    id?: SortOrder
    brandId?: SortOrder
  }

  export type PhoneModelRelationFilter = {
    is?: PhoneModelWhereInput
    isNot?: PhoneModelWhereInput
  }

  export type PhoneSpecsCountOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    os?: SortOrder
    chipset?: SortOrder
    cpu?: SortOrder
    gpu?: SortOrder
    displayType?: SortOrder
    displaySize?: SortOrder
    resolution?: SortOrder
    refreshRate?: SortOrder
    protection?: SortOrder
    mainCamera?: SortOrder
    selfieCamera?: SortOrder
    videoRecording?: SortOrder
    batteryCapacity?: SortOrder
    chargingSpeed?: SortOrder
    network?: SortOrder
    sim?: SortOrder
    wifi?: SortOrder
    bluetooth?: SortOrder
    usb?: SortOrder
    sensors?: SortOrder
    dimensions?: SortOrder
    weight?: SortOrder
    buildMaterial?: SortOrder
    releaseDate?: SortOrder
    otherFeatures?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneSpecsAvgOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
  }

  export type PhoneSpecsMaxOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    os?: SortOrder
    chipset?: SortOrder
    cpu?: SortOrder
    gpu?: SortOrder
    displayType?: SortOrder
    displaySize?: SortOrder
    resolution?: SortOrder
    refreshRate?: SortOrder
    protection?: SortOrder
    mainCamera?: SortOrder
    selfieCamera?: SortOrder
    videoRecording?: SortOrder
    batteryCapacity?: SortOrder
    chargingSpeed?: SortOrder
    network?: SortOrder
    sim?: SortOrder
    wifi?: SortOrder
    bluetooth?: SortOrder
    usb?: SortOrder
    sensors?: SortOrder
    dimensions?: SortOrder
    weight?: SortOrder
    buildMaterial?: SortOrder
    releaseDate?: SortOrder
    otherFeatures?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneSpecsMinOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    os?: SortOrder
    chipset?: SortOrder
    cpu?: SortOrder
    gpu?: SortOrder
    displayType?: SortOrder
    displaySize?: SortOrder
    resolution?: SortOrder
    refreshRate?: SortOrder
    protection?: SortOrder
    mainCamera?: SortOrder
    selfieCamera?: SortOrder
    videoRecording?: SortOrder
    batteryCapacity?: SortOrder
    chargingSpeed?: SortOrder
    network?: SortOrder
    sim?: SortOrder
    wifi?: SortOrder
    bluetooth?: SortOrder
    usb?: SortOrder
    sensors?: SortOrder
    dimensions?: SortOrder
    weight?: SortOrder
    buildMaterial?: SortOrder
    releaseDate?: SortOrder
    otherFeatures?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhoneSpecsSumOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
  }

  export type EnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PhoneMediaCountOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    type?: SortOrder
    alt?: SortOrder
    width?: SortOrder
    height?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type PhoneMediaAvgOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    width?: SortOrder
    height?: SortOrder
    duration?: SortOrder
  }

  export type PhoneMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    type?: SortOrder
    alt?: SortOrder
    width?: SortOrder
    height?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type PhoneMediaMinOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    url?: SortOrder
    publicId?: SortOrder
    type?: SortOrder
    alt?: SortOrder
    width?: SortOrder
    height?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type PhoneMediaSumOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    width?: SortOrder
    height?: SortOrder
    duration?: SortOrder
  }

  export type EnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AffiliateLinkCountOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    storeName?: SortOrder
    url?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
  }

  export type AffiliateLinkAvgOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
  }

  export type AffiliateLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    storeName?: SortOrder
    url?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
  }

  export type AffiliateLinkMinOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    storeName?: SortOrder
    url?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
  }

  export type AffiliateLinkSumOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PhoneModelCreateNestedManyWithoutBrandInput = {
    create?: XOR<PhoneModelCreateWithoutBrandInput, PhoneModelUncheckedCreateWithoutBrandInput> | PhoneModelCreateWithoutBrandInput[] | PhoneModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: PhoneModelCreateOrConnectWithoutBrandInput | PhoneModelCreateOrConnectWithoutBrandInput[]
    createMany?: PhoneModelCreateManyBrandInputEnvelope
    connect?: PhoneModelWhereUniqueInput | PhoneModelWhereUniqueInput[]
  }

  export type PhoneModelUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<PhoneModelCreateWithoutBrandInput, PhoneModelUncheckedCreateWithoutBrandInput> | PhoneModelCreateWithoutBrandInput[] | PhoneModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: PhoneModelCreateOrConnectWithoutBrandInput | PhoneModelCreateOrConnectWithoutBrandInput[]
    createMany?: PhoneModelCreateManyBrandInputEnvelope
    connect?: PhoneModelWhereUniqueInput | PhoneModelWhereUniqueInput[]
  }

  export type PhoneModelUpdateManyWithoutBrandNestedInput = {
    create?: XOR<PhoneModelCreateWithoutBrandInput, PhoneModelUncheckedCreateWithoutBrandInput> | PhoneModelCreateWithoutBrandInput[] | PhoneModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: PhoneModelCreateOrConnectWithoutBrandInput | PhoneModelCreateOrConnectWithoutBrandInput[]
    upsert?: PhoneModelUpsertWithWhereUniqueWithoutBrandInput | PhoneModelUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: PhoneModelCreateManyBrandInputEnvelope
    set?: PhoneModelWhereUniqueInput | PhoneModelWhereUniqueInput[]
    disconnect?: PhoneModelWhereUniqueInput | PhoneModelWhereUniqueInput[]
    delete?: PhoneModelWhereUniqueInput | PhoneModelWhereUniqueInput[]
    connect?: PhoneModelWhereUniqueInput | PhoneModelWhereUniqueInput[]
    update?: PhoneModelUpdateWithWhereUniqueWithoutBrandInput | PhoneModelUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: PhoneModelUpdateManyWithWhereWithoutBrandInput | PhoneModelUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: PhoneModelScalarWhereInput | PhoneModelScalarWhereInput[]
  }

  export type PhoneModelUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<PhoneModelCreateWithoutBrandInput, PhoneModelUncheckedCreateWithoutBrandInput> | PhoneModelCreateWithoutBrandInput[] | PhoneModelUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: PhoneModelCreateOrConnectWithoutBrandInput | PhoneModelCreateOrConnectWithoutBrandInput[]
    upsert?: PhoneModelUpsertWithWhereUniqueWithoutBrandInput | PhoneModelUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: PhoneModelCreateManyBrandInputEnvelope
    set?: PhoneModelWhereUniqueInput | PhoneModelWhereUniqueInput[]
    disconnect?: PhoneModelWhereUniqueInput | PhoneModelWhereUniqueInput[]
    delete?: PhoneModelWhereUniqueInput | PhoneModelWhereUniqueInput[]
    connect?: PhoneModelWhereUniqueInput | PhoneModelWhereUniqueInput[]
    update?: PhoneModelUpdateWithWhereUniqueWithoutBrandInput | PhoneModelUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: PhoneModelUpdateManyWithWhereWithoutBrandInput | PhoneModelUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: PhoneModelScalarWhereInput | PhoneModelScalarWhereInput[]
  }

  export type PhoneModelCreatecolorsInput = {
    set: string[]
  }

  export type PhoneModelCreatevariantsInput = {
    set: string[]
  }

  export type PhoneBrandCreateNestedOneWithoutModelsInput = {
    create?: XOR<PhoneBrandCreateWithoutModelsInput, PhoneBrandUncheckedCreateWithoutModelsInput>
    connectOrCreate?: PhoneBrandCreateOrConnectWithoutModelsInput
    connect?: PhoneBrandWhereUniqueInput
  }

  export type PhoneSpecsCreateNestedOneWithoutModelInput = {
    create?: XOR<PhoneSpecsCreateWithoutModelInput, PhoneSpecsUncheckedCreateWithoutModelInput>
    connectOrCreate?: PhoneSpecsCreateOrConnectWithoutModelInput
    connect?: PhoneSpecsWhereUniqueInput
  }

  export type PhoneMediaCreateNestedManyWithoutModelInput = {
    create?: XOR<PhoneMediaCreateWithoutModelInput, PhoneMediaUncheckedCreateWithoutModelInput> | PhoneMediaCreateWithoutModelInput[] | PhoneMediaUncheckedCreateWithoutModelInput[]
    connectOrCreate?: PhoneMediaCreateOrConnectWithoutModelInput | PhoneMediaCreateOrConnectWithoutModelInput[]
    createMany?: PhoneMediaCreateManyModelInputEnvelope
    connect?: PhoneMediaWhereUniqueInput | PhoneMediaWhereUniqueInput[]
  }

  export type AffiliateLinkCreateNestedManyWithoutModelInput = {
    create?: XOR<AffiliateLinkCreateWithoutModelInput, AffiliateLinkUncheckedCreateWithoutModelInput> | AffiliateLinkCreateWithoutModelInput[] | AffiliateLinkUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AffiliateLinkCreateOrConnectWithoutModelInput | AffiliateLinkCreateOrConnectWithoutModelInput[]
    createMany?: AffiliateLinkCreateManyModelInputEnvelope
    connect?: AffiliateLinkWhereUniqueInput | AffiliateLinkWhereUniqueInput[]
  }

  export type PhoneSpecsUncheckedCreateNestedOneWithoutModelInput = {
    create?: XOR<PhoneSpecsCreateWithoutModelInput, PhoneSpecsUncheckedCreateWithoutModelInput>
    connectOrCreate?: PhoneSpecsCreateOrConnectWithoutModelInput
    connect?: PhoneSpecsWhereUniqueInput
  }

  export type PhoneMediaUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<PhoneMediaCreateWithoutModelInput, PhoneMediaUncheckedCreateWithoutModelInput> | PhoneMediaCreateWithoutModelInput[] | PhoneMediaUncheckedCreateWithoutModelInput[]
    connectOrCreate?: PhoneMediaCreateOrConnectWithoutModelInput | PhoneMediaCreateOrConnectWithoutModelInput[]
    createMany?: PhoneMediaCreateManyModelInputEnvelope
    connect?: PhoneMediaWhereUniqueInput | PhoneMediaWhereUniqueInput[]
  }

  export type AffiliateLinkUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<AffiliateLinkCreateWithoutModelInput, AffiliateLinkUncheckedCreateWithoutModelInput> | AffiliateLinkCreateWithoutModelInput[] | AffiliateLinkUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AffiliateLinkCreateOrConnectWithoutModelInput | AffiliateLinkCreateOrConnectWithoutModelInput[]
    createMany?: AffiliateLinkCreateManyModelInputEnvelope
    connect?: AffiliateLinkWhereUniqueInput | AffiliateLinkWhereUniqueInput[]
  }

  export type PhoneModelUpdatecolorsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PhoneModelUpdatevariantsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PhoneBrandUpdateOneRequiredWithoutModelsNestedInput = {
    create?: XOR<PhoneBrandCreateWithoutModelsInput, PhoneBrandUncheckedCreateWithoutModelsInput>
    connectOrCreate?: PhoneBrandCreateOrConnectWithoutModelsInput
    upsert?: PhoneBrandUpsertWithoutModelsInput
    connect?: PhoneBrandWhereUniqueInput
    update?: XOR<XOR<PhoneBrandUpdateToOneWithWhereWithoutModelsInput, PhoneBrandUpdateWithoutModelsInput>, PhoneBrandUncheckedUpdateWithoutModelsInput>
  }

  export type PhoneSpecsUpdateOneWithoutModelNestedInput = {
    create?: XOR<PhoneSpecsCreateWithoutModelInput, PhoneSpecsUncheckedCreateWithoutModelInput>
    connectOrCreate?: PhoneSpecsCreateOrConnectWithoutModelInput
    upsert?: PhoneSpecsUpsertWithoutModelInput
    disconnect?: PhoneSpecsWhereInput | boolean
    delete?: PhoneSpecsWhereInput | boolean
    connect?: PhoneSpecsWhereUniqueInput
    update?: XOR<XOR<PhoneSpecsUpdateToOneWithWhereWithoutModelInput, PhoneSpecsUpdateWithoutModelInput>, PhoneSpecsUncheckedUpdateWithoutModelInput>
  }

  export type PhoneMediaUpdateManyWithoutModelNestedInput = {
    create?: XOR<PhoneMediaCreateWithoutModelInput, PhoneMediaUncheckedCreateWithoutModelInput> | PhoneMediaCreateWithoutModelInput[] | PhoneMediaUncheckedCreateWithoutModelInput[]
    connectOrCreate?: PhoneMediaCreateOrConnectWithoutModelInput | PhoneMediaCreateOrConnectWithoutModelInput[]
    upsert?: PhoneMediaUpsertWithWhereUniqueWithoutModelInput | PhoneMediaUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: PhoneMediaCreateManyModelInputEnvelope
    set?: PhoneMediaWhereUniqueInput | PhoneMediaWhereUniqueInput[]
    disconnect?: PhoneMediaWhereUniqueInput | PhoneMediaWhereUniqueInput[]
    delete?: PhoneMediaWhereUniqueInput | PhoneMediaWhereUniqueInput[]
    connect?: PhoneMediaWhereUniqueInput | PhoneMediaWhereUniqueInput[]
    update?: PhoneMediaUpdateWithWhereUniqueWithoutModelInput | PhoneMediaUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: PhoneMediaUpdateManyWithWhereWithoutModelInput | PhoneMediaUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: PhoneMediaScalarWhereInput | PhoneMediaScalarWhereInput[]
  }

  export type AffiliateLinkUpdateManyWithoutModelNestedInput = {
    create?: XOR<AffiliateLinkCreateWithoutModelInput, AffiliateLinkUncheckedCreateWithoutModelInput> | AffiliateLinkCreateWithoutModelInput[] | AffiliateLinkUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AffiliateLinkCreateOrConnectWithoutModelInput | AffiliateLinkCreateOrConnectWithoutModelInput[]
    upsert?: AffiliateLinkUpsertWithWhereUniqueWithoutModelInput | AffiliateLinkUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: AffiliateLinkCreateManyModelInputEnvelope
    set?: AffiliateLinkWhereUniqueInput | AffiliateLinkWhereUniqueInput[]
    disconnect?: AffiliateLinkWhereUniqueInput | AffiliateLinkWhereUniqueInput[]
    delete?: AffiliateLinkWhereUniqueInput | AffiliateLinkWhereUniqueInput[]
    connect?: AffiliateLinkWhereUniqueInput | AffiliateLinkWhereUniqueInput[]
    update?: AffiliateLinkUpdateWithWhereUniqueWithoutModelInput | AffiliateLinkUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: AffiliateLinkUpdateManyWithWhereWithoutModelInput | AffiliateLinkUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: AffiliateLinkScalarWhereInput | AffiliateLinkScalarWhereInput[]
  }

  export type PhoneSpecsUncheckedUpdateOneWithoutModelNestedInput = {
    create?: XOR<PhoneSpecsCreateWithoutModelInput, PhoneSpecsUncheckedCreateWithoutModelInput>
    connectOrCreate?: PhoneSpecsCreateOrConnectWithoutModelInput
    upsert?: PhoneSpecsUpsertWithoutModelInput
    disconnect?: PhoneSpecsWhereInput | boolean
    delete?: PhoneSpecsWhereInput | boolean
    connect?: PhoneSpecsWhereUniqueInput
    update?: XOR<XOR<PhoneSpecsUpdateToOneWithWhereWithoutModelInput, PhoneSpecsUpdateWithoutModelInput>, PhoneSpecsUncheckedUpdateWithoutModelInput>
  }

  export type PhoneMediaUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<PhoneMediaCreateWithoutModelInput, PhoneMediaUncheckedCreateWithoutModelInput> | PhoneMediaCreateWithoutModelInput[] | PhoneMediaUncheckedCreateWithoutModelInput[]
    connectOrCreate?: PhoneMediaCreateOrConnectWithoutModelInput | PhoneMediaCreateOrConnectWithoutModelInput[]
    upsert?: PhoneMediaUpsertWithWhereUniqueWithoutModelInput | PhoneMediaUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: PhoneMediaCreateManyModelInputEnvelope
    set?: PhoneMediaWhereUniqueInput | PhoneMediaWhereUniqueInput[]
    disconnect?: PhoneMediaWhereUniqueInput | PhoneMediaWhereUniqueInput[]
    delete?: PhoneMediaWhereUniqueInput | PhoneMediaWhereUniqueInput[]
    connect?: PhoneMediaWhereUniqueInput | PhoneMediaWhereUniqueInput[]
    update?: PhoneMediaUpdateWithWhereUniqueWithoutModelInput | PhoneMediaUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: PhoneMediaUpdateManyWithWhereWithoutModelInput | PhoneMediaUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: PhoneMediaScalarWhereInput | PhoneMediaScalarWhereInput[]
  }

  export type AffiliateLinkUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<AffiliateLinkCreateWithoutModelInput, AffiliateLinkUncheckedCreateWithoutModelInput> | AffiliateLinkCreateWithoutModelInput[] | AffiliateLinkUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AffiliateLinkCreateOrConnectWithoutModelInput | AffiliateLinkCreateOrConnectWithoutModelInput[]
    upsert?: AffiliateLinkUpsertWithWhereUniqueWithoutModelInput | AffiliateLinkUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: AffiliateLinkCreateManyModelInputEnvelope
    set?: AffiliateLinkWhereUniqueInput | AffiliateLinkWhereUniqueInput[]
    disconnect?: AffiliateLinkWhereUniqueInput | AffiliateLinkWhereUniqueInput[]
    delete?: AffiliateLinkWhereUniqueInput | AffiliateLinkWhereUniqueInput[]
    connect?: AffiliateLinkWhereUniqueInput | AffiliateLinkWhereUniqueInput[]
    update?: AffiliateLinkUpdateWithWhereUniqueWithoutModelInput | AffiliateLinkUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: AffiliateLinkUpdateManyWithWhereWithoutModelInput | AffiliateLinkUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: AffiliateLinkScalarWhereInput | AffiliateLinkScalarWhereInput[]
  }

  export type PhoneModelCreateNestedOneWithoutSpecsInput = {
    create?: XOR<PhoneModelCreateWithoutSpecsInput, PhoneModelUncheckedCreateWithoutSpecsInput>
    connectOrCreate?: PhoneModelCreateOrConnectWithoutSpecsInput
    connect?: PhoneModelWhereUniqueInput
  }

  export type PhoneModelUpdateOneRequiredWithoutSpecsNestedInput = {
    create?: XOR<PhoneModelCreateWithoutSpecsInput, PhoneModelUncheckedCreateWithoutSpecsInput>
    connectOrCreate?: PhoneModelCreateOrConnectWithoutSpecsInput
    upsert?: PhoneModelUpsertWithoutSpecsInput
    connect?: PhoneModelWhereUniqueInput
    update?: XOR<XOR<PhoneModelUpdateToOneWithWhereWithoutSpecsInput, PhoneModelUpdateWithoutSpecsInput>, PhoneModelUncheckedUpdateWithoutSpecsInput>
  }

  export type PhoneModelCreateNestedOneWithoutMediaInput = {
    create?: XOR<PhoneModelCreateWithoutMediaInput, PhoneModelUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PhoneModelCreateOrConnectWithoutMediaInput
    connect?: PhoneModelWhereUniqueInput
  }

  export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PhoneModelUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<PhoneModelCreateWithoutMediaInput, PhoneModelUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PhoneModelCreateOrConnectWithoutMediaInput
    upsert?: PhoneModelUpsertWithoutMediaInput
    connect?: PhoneModelWhereUniqueInput
    update?: XOR<XOR<PhoneModelUpdateToOneWithWhereWithoutMediaInput, PhoneModelUpdateWithoutMediaInput>, PhoneModelUncheckedUpdateWithoutMediaInput>
  }

  export type PhoneModelCreateNestedOneWithoutAffiliatesInput = {
    create?: XOR<PhoneModelCreateWithoutAffiliatesInput, PhoneModelUncheckedCreateWithoutAffiliatesInput>
    connectOrCreate?: PhoneModelCreateOrConnectWithoutAffiliatesInput
    connect?: PhoneModelWhereUniqueInput
  }

  export type PhoneModelUpdateOneRequiredWithoutAffiliatesNestedInput = {
    create?: XOR<PhoneModelCreateWithoutAffiliatesInput, PhoneModelUncheckedCreateWithoutAffiliatesInput>
    connectOrCreate?: PhoneModelCreateOrConnectWithoutAffiliatesInput
    upsert?: PhoneModelUpsertWithoutAffiliatesInput
    connect?: PhoneModelWhereUniqueInput
    update?: XOR<XOR<PhoneModelUpdateToOneWithWhereWithoutAffiliatesInput, PhoneModelUpdateWithoutAffiliatesInput>, PhoneModelUncheckedUpdateWithoutAffiliatesInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MediaType[] | ListEnumMediaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PhoneModelCreateWithoutBrandInput = {
    name: string
    slug: string
    image?: string | null
    colors?: PhoneModelCreatecolorsInput | string[]
    variants?: PhoneModelCreatevariantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    specs?: PhoneSpecsCreateNestedOneWithoutModelInput
    media?: PhoneMediaCreateNestedManyWithoutModelInput
    affiliates?: AffiliateLinkCreateNestedManyWithoutModelInput
  }

  export type PhoneModelUncheckedCreateWithoutBrandInput = {
    id?: number
    name: string
    slug: string
    image?: string | null
    colors?: PhoneModelCreatecolorsInput | string[]
    variants?: PhoneModelCreatevariantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    specs?: PhoneSpecsUncheckedCreateNestedOneWithoutModelInput
    media?: PhoneMediaUncheckedCreateNestedManyWithoutModelInput
    affiliates?: AffiliateLinkUncheckedCreateNestedManyWithoutModelInput
  }

  export type PhoneModelCreateOrConnectWithoutBrandInput = {
    where: PhoneModelWhereUniqueInput
    create: XOR<PhoneModelCreateWithoutBrandInput, PhoneModelUncheckedCreateWithoutBrandInput>
  }

  export type PhoneModelCreateManyBrandInputEnvelope = {
    data: PhoneModelCreateManyBrandInput | PhoneModelCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type PhoneModelUpsertWithWhereUniqueWithoutBrandInput = {
    where: PhoneModelWhereUniqueInput
    update: XOR<PhoneModelUpdateWithoutBrandInput, PhoneModelUncheckedUpdateWithoutBrandInput>
    create: XOR<PhoneModelCreateWithoutBrandInput, PhoneModelUncheckedCreateWithoutBrandInput>
  }

  export type PhoneModelUpdateWithWhereUniqueWithoutBrandInput = {
    where: PhoneModelWhereUniqueInput
    data: XOR<PhoneModelUpdateWithoutBrandInput, PhoneModelUncheckedUpdateWithoutBrandInput>
  }

  export type PhoneModelUpdateManyWithWhereWithoutBrandInput = {
    where: PhoneModelScalarWhereInput
    data: XOR<PhoneModelUpdateManyMutationInput, PhoneModelUncheckedUpdateManyWithoutBrandInput>
  }

  export type PhoneModelScalarWhereInput = {
    AND?: PhoneModelScalarWhereInput | PhoneModelScalarWhereInput[]
    OR?: PhoneModelScalarWhereInput[]
    NOT?: PhoneModelScalarWhereInput | PhoneModelScalarWhereInput[]
    id?: IntFilter<"PhoneModel"> | number
    name?: StringFilter<"PhoneModel"> | string
    slug?: StringFilter<"PhoneModel"> | string
    image?: StringNullableFilter<"PhoneModel"> | string | null
    colors?: StringNullableListFilter<"PhoneModel">
    variants?: StringNullableListFilter<"PhoneModel">
    brandId?: IntFilter<"PhoneModel"> | number
    createdAt?: DateTimeFilter<"PhoneModel"> | Date | string
    updatedAt?: DateTimeFilter<"PhoneModel"> | Date | string
  }

  export type PhoneBrandCreateWithoutModelsInput = {
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneBrandUncheckedCreateWithoutModelsInput = {
    id?: number
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneBrandCreateOrConnectWithoutModelsInput = {
    where: PhoneBrandWhereUniqueInput
    create: XOR<PhoneBrandCreateWithoutModelsInput, PhoneBrandUncheckedCreateWithoutModelsInput>
  }

  export type PhoneSpecsCreateWithoutModelInput = {
    os?: string | null
    chipset?: string | null
    cpu?: string | null
    gpu?: string | null
    displayType?: string | null
    displaySize?: string | null
    resolution?: string | null
    refreshRate?: string | null
    protection?: string | null
    mainCamera?: string | null
    selfieCamera?: string | null
    videoRecording?: string | null
    batteryCapacity?: string | null
    chargingSpeed?: string | null
    network?: string | null
    sim?: string | null
    wifi?: string | null
    bluetooth?: string | null
    usb?: string | null
    sensors?: string | null
    dimensions?: string | null
    weight?: string | null
    buildMaterial?: string | null
    releaseDate?: string | null
    otherFeatures?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneSpecsUncheckedCreateWithoutModelInput = {
    id?: number
    os?: string | null
    chipset?: string | null
    cpu?: string | null
    gpu?: string | null
    displayType?: string | null
    displaySize?: string | null
    resolution?: string | null
    refreshRate?: string | null
    protection?: string | null
    mainCamera?: string | null
    selfieCamera?: string | null
    videoRecording?: string | null
    batteryCapacity?: string | null
    chargingSpeed?: string | null
    network?: string | null
    sim?: string | null
    wifi?: string | null
    bluetooth?: string | null
    usb?: string | null
    sensors?: string | null
    dimensions?: string | null
    weight?: string | null
    buildMaterial?: string | null
    releaseDate?: string | null
    otherFeatures?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneSpecsCreateOrConnectWithoutModelInput = {
    where: PhoneSpecsWhereUniqueInput
    create: XOR<PhoneSpecsCreateWithoutModelInput, PhoneSpecsUncheckedCreateWithoutModelInput>
  }

  export type PhoneMediaCreateWithoutModelInput = {
    url: string
    publicId?: string | null
    type: $Enums.MediaType
    alt?: string | null
    width?: number | null
    height?: number | null
    duration?: number | null
    createdAt?: Date | string
  }

  export type PhoneMediaUncheckedCreateWithoutModelInput = {
    id?: number
    url: string
    publicId?: string | null
    type: $Enums.MediaType
    alt?: string | null
    width?: number | null
    height?: number | null
    duration?: number | null
    createdAt?: Date | string
  }

  export type PhoneMediaCreateOrConnectWithoutModelInput = {
    where: PhoneMediaWhereUniqueInput
    create: XOR<PhoneMediaCreateWithoutModelInput, PhoneMediaUncheckedCreateWithoutModelInput>
  }

  export type PhoneMediaCreateManyModelInputEnvelope = {
    data: PhoneMediaCreateManyModelInput | PhoneMediaCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type AffiliateLinkCreateWithoutModelInput = {
    storeName: string
    url: string
    price?: string | null
    currency?: string | null
    createdAt?: Date | string
  }

  export type AffiliateLinkUncheckedCreateWithoutModelInput = {
    id?: number
    storeName: string
    url: string
    price?: string | null
    currency?: string | null
    createdAt?: Date | string
  }

  export type AffiliateLinkCreateOrConnectWithoutModelInput = {
    where: AffiliateLinkWhereUniqueInput
    create: XOR<AffiliateLinkCreateWithoutModelInput, AffiliateLinkUncheckedCreateWithoutModelInput>
  }

  export type AffiliateLinkCreateManyModelInputEnvelope = {
    data: AffiliateLinkCreateManyModelInput | AffiliateLinkCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type PhoneBrandUpsertWithoutModelsInput = {
    update: XOR<PhoneBrandUpdateWithoutModelsInput, PhoneBrandUncheckedUpdateWithoutModelsInput>
    create: XOR<PhoneBrandCreateWithoutModelsInput, PhoneBrandUncheckedCreateWithoutModelsInput>
    where?: PhoneBrandWhereInput
  }

  export type PhoneBrandUpdateToOneWithWhereWithoutModelsInput = {
    where?: PhoneBrandWhereInput
    data: XOR<PhoneBrandUpdateWithoutModelsInput, PhoneBrandUncheckedUpdateWithoutModelsInput>
  }

  export type PhoneBrandUpdateWithoutModelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneBrandUncheckedUpdateWithoutModelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneSpecsUpsertWithoutModelInput = {
    update: XOR<PhoneSpecsUpdateWithoutModelInput, PhoneSpecsUncheckedUpdateWithoutModelInput>
    create: XOR<PhoneSpecsCreateWithoutModelInput, PhoneSpecsUncheckedCreateWithoutModelInput>
    where?: PhoneSpecsWhereInput
  }

  export type PhoneSpecsUpdateToOneWithWhereWithoutModelInput = {
    where?: PhoneSpecsWhereInput
    data: XOR<PhoneSpecsUpdateWithoutModelInput, PhoneSpecsUncheckedUpdateWithoutModelInput>
  }

  export type PhoneSpecsUpdateWithoutModelInput = {
    os?: NullableStringFieldUpdateOperationsInput | string | null
    chipset?: NullableStringFieldUpdateOperationsInput | string | null
    cpu?: NullableStringFieldUpdateOperationsInput | string | null
    gpu?: NullableStringFieldUpdateOperationsInput | string | null
    displayType?: NullableStringFieldUpdateOperationsInput | string | null
    displaySize?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    refreshRate?: NullableStringFieldUpdateOperationsInput | string | null
    protection?: NullableStringFieldUpdateOperationsInput | string | null
    mainCamera?: NullableStringFieldUpdateOperationsInput | string | null
    selfieCamera?: NullableStringFieldUpdateOperationsInput | string | null
    videoRecording?: NullableStringFieldUpdateOperationsInput | string | null
    batteryCapacity?: NullableStringFieldUpdateOperationsInput | string | null
    chargingSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    sim?: NullableStringFieldUpdateOperationsInput | string | null
    wifi?: NullableStringFieldUpdateOperationsInput | string | null
    bluetooth?: NullableStringFieldUpdateOperationsInput | string | null
    usb?: NullableStringFieldUpdateOperationsInput | string | null
    sensors?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    buildMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableStringFieldUpdateOperationsInput | string | null
    otherFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneSpecsUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    os?: NullableStringFieldUpdateOperationsInput | string | null
    chipset?: NullableStringFieldUpdateOperationsInput | string | null
    cpu?: NullableStringFieldUpdateOperationsInput | string | null
    gpu?: NullableStringFieldUpdateOperationsInput | string | null
    displayType?: NullableStringFieldUpdateOperationsInput | string | null
    displaySize?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    refreshRate?: NullableStringFieldUpdateOperationsInput | string | null
    protection?: NullableStringFieldUpdateOperationsInput | string | null
    mainCamera?: NullableStringFieldUpdateOperationsInput | string | null
    selfieCamera?: NullableStringFieldUpdateOperationsInput | string | null
    videoRecording?: NullableStringFieldUpdateOperationsInput | string | null
    batteryCapacity?: NullableStringFieldUpdateOperationsInput | string | null
    chargingSpeed?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    sim?: NullableStringFieldUpdateOperationsInput | string | null
    wifi?: NullableStringFieldUpdateOperationsInput | string | null
    bluetooth?: NullableStringFieldUpdateOperationsInput | string | null
    usb?: NullableStringFieldUpdateOperationsInput | string | null
    sensors?: NullableStringFieldUpdateOperationsInput | string | null
    dimensions?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    buildMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    releaseDate?: NullableStringFieldUpdateOperationsInput | string | null
    otherFeatures?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneMediaUpsertWithWhereUniqueWithoutModelInput = {
    where: PhoneMediaWhereUniqueInput
    update: XOR<PhoneMediaUpdateWithoutModelInput, PhoneMediaUncheckedUpdateWithoutModelInput>
    create: XOR<PhoneMediaCreateWithoutModelInput, PhoneMediaUncheckedCreateWithoutModelInput>
  }

  export type PhoneMediaUpdateWithWhereUniqueWithoutModelInput = {
    where: PhoneMediaWhereUniqueInput
    data: XOR<PhoneMediaUpdateWithoutModelInput, PhoneMediaUncheckedUpdateWithoutModelInput>
  }

  export type PhoneMediaUpdateManyWithWhereWithoutModelInput = {
    where: PhoneMediaScalarWhereInput
    data: XOR<PhoneMediaUpdateManyMutationInput, PhoneMediaUncheckedUpdateManyWithoutModelInput>
  }

  export type PhoneMediaScalarWhereInput = {
    AND?: PhoneMediaScalarWhereInput | PhoneMediaScalarWhereInput[]
    OR?: PhoneMediaScalarWhereInput[]
    NOT?: PhoneMediaScalarWhereInput | PhoneMediaScalarWhereInput[]
    id?: IntFilter<"PhoneMedia"> | number
    modelId?: IntFilter<"PhoneMedia"> | number
    url?: StringFilter<"PhoneMedia"> | string
    publicId?: StringNullableFilter<"PhoneMedia"> | string | null
    type?: EnumMediaTypeFilter<"PhoneMedia"> | $Enums.MediaType
    alt?: StringNullableFilter<"PhoneMedia"> | string | null
    width?: IntNullableFilter<"PhoneMedia"> | number | null
    height?: IntNullableFilter<"PhoneMedia"> | number | null
    duration?: FloatNullableFilter<"PhoneMedia"> | number | null
    createdAt?: DateTimeFilter<"PhoneMedia"> | Date | string
  }

  export type AffiliateLinkUpsertWithWhereUniqueWithoutModelInput = {
    where: AffiliateLinkWhereUniqueInput
    update: XOR<AffiliateLinkUpdateWithoutModelInput, AffiliateLinkUncheckedUpdateWithoutModelInput>
    create: XOR<AffiliateLinkCreateWithoutModelInput, AffiliateLinkUncheckedCreateWithoutModelInput>
  }

  export type AffiliateLinkUpdateWithWhereUniqueWithoutModelInput = {
    where: AffiliateLinkWhereUniqueInput
    data: XOR<AffiliateLinkUpdateWithoutModelInput, AffiliateLinkUncheckedUpdateWithoutModelInput>
  }

  export type AffiliateLinkUpdateManyWithWhereWithoutModelInput = {
    where: AffiliateLinkScalarWhereInput
    data: XOR<AffiliateLinkUpdateManyMutationInput, AffiliateLinkUncheckedUpdateManyWithoutModelInput>
  }

  export type AffiliateLinkScalarWhereInput = {
    AND?: AffiliateLinkScalarWhereInput | AffiliateLinkScalarWhereInput[]
    OR?: AffiliateLinkScalarWhereInput[]
    NOT?: AffiliateLinkScalarWhereInput | AffiliateLinkScalarWhereInput[]
    id?: IntFilter<"AffiliateLink"> | number
    modelId?: IntFilter<"AffiliateLink"> | number
    storeName?: StringFilter<"AffiliateLink"> | string
    url?: StringFilter<"AffiliateLink"> | string
    price?: StringNullableFilter<"AffiliateLink"> | string | null
    currency?: StringNullableFilter<"AffiliateLink"> | string | null
    createdAt?: DateTimeFilter<"AffiliateLink"> | Date | string
  }

  export type PhoneModelCreateWithoutSpecsInput = {
    name: string
    slug: string
    image?: string | null
    colors?: PhoneModelCreatecolorsInput | string[]
    variants?: PhoneModelCreatevariantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: PhoneBrandCreateNestedOneWithoutModelsInput
    media?: PhoneMediaCreateNestedManyWithoutModelInput
    affiliates?: AffiliateLinkCreateNestedManyWithoutModelInput
  }

  export type PhoneModelUncheckedCreateWithoutSpecsInput = {
    id?: number
    name: string
    slug: string
    image?: string | null
    colors?: PhoneModelCreatecolorsInput | string[]
    variants?: PhoneModelCreatevariantsInput | string[]
    brandId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    media?: PhoneMediaUncheckedCreateNestedManyWithoutModelInput
    affiliates?: AffiliateLinkUncheckedCreateNestedManyWithoutModelInput
  }

  export type PhoneModelCreateOrConnectWithoutSpecsInput = {
    where: PhoneModelWhereUniqueInput
    create: XOR<PhoneModelCreateWithoutSpecsInput, PhoneModelUncheckedCreateWithoutSpecsInput>
  }

  export type PhoneModelUpsertWithoutSpecsInput = {
    update: XOR<PhoneModelUpdateWithoutSpecsInput, PhoneModelUncheckedUpdateWithoutSpecsInput>
    create: XOR<PhoneModelCreateWithoutSpecsInput, PhoneModelUncheckedCreateWithoutSpecsInput>
    where?: PhoneModelWhereInput
  }

  export type PhoneModelUpdateToOneWithWhereWithoutSpecsInput = {
    where?: PhoneModelWhereInput
    data: XOR<PhoneModelUpdateWithoutSpecsInput, PhoneModelUncheckedUpdateWithoutSpecsInput>
  }

  export type PhoneModelUpdateWithoutSpecsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: PhoneModelUpdatecolorsInput | string[]
    variants?: PhoneModelUpdatevariantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: PhoneBrandUpdateOneRequiredWithoutModelsNestedInput
    media?: PhoneMediaUpdateManyWithoutModelNestedInput
    affiliates?: AffiliateLinkUpdateManyWithoutModelNestedInput
  }

  export type PhoneModelUncheckedUpdateWithoutSpecsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: PhoneModelUpdatecolorsInput | string[]
    variants?: PhoneModelUpdatevariantsInput | string[]
    brandId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    media?: PhoneMediaUncheckedUpdateManyWithoutModelNestedInput
    affiliates?: AffiliateLinkUncheckedUpdateManyWithoutModelNestedInput
  }

  export type PhoneModelCreateWithoutMediaInput = {
    name: string
    slug: string
    image?: string | null
    colors?: PhoneModelCreatecolorsInput | string[]
    variants?: PhoneModelCreatevariantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: PhoneBrandCreateNestedOneWithoutModelsInput
    specs?: PhoneSpecsCreateNestedOneWithoutModelInput
    affiliates?: AffiliateLinkCreateNestedManyWithoutModelInput
  }

  export type PhoneModelUncheckedCreateWithoutMediaInput = {
    id?: number
    name: string
    slug: string
    image?: string | null
    colors?: PhoneModelCreatecolorsInput | string[]
    variants?: PhoneModelCreatevariantsInput | string[]
    brandId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    specs?: PhoneSpecsUncheckedCreateNestedOneWithoutModelInput
    affiliates?: AffiliateLinkUncheckedCreateNestedManyWithoutModelInput
  }

  export type PhoneModelCreateOrConnectWithoutMediaInput = {
    where: PhoneModelWhereUniqueInput
    create: XOR<PhoneModelCreateWithoutMediaInput, PhoneModelUncheckedCreateWithoutMediaInput>
  }

  export type PhoneModelUpsertWithoutMediaInput = {
    update: XOR<PhoneModelUpdateWithoutMediaInput, PhoneModelUncheckedUpdateWithoutMediaInput>
    create: XOR<PhoneModelCreateWithoutMediaInput, PhoneModelUncheckedCreateWithoutMediaInput>
    where?: PhoneModelWhereInput
  }

  export type PhoneModelUpdateToOneWithWhereWithoutMediaInput = {
    where?: PhoneModelWhereInput
    data: XOR<PhoneModelUpdateWithoutMediaInput, PhoneModelUncheckedUpdateWithoutMediaInput>
  }

  export type PhoneModelUpdateWithoutMediaInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: PhoneModelUpdatecolorsInput | string[]
    variants?: PhoneModelUpdatevariantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: PhoneBrandUpdateOneRequiredWithoutModelsNestedInput
    specs?: PhoneSpecsUpdateOneWithoutModelNestedInput
    affiliates?: AffiliateLinkUpdateManyWithoutModelNestedInput
  }

  export type PhoneModelUncheckedUpdateWithoutMediaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: PhoneModelUpdatecolorsInput | string[]
    variants?: PhoneModelUpdatevariantsInput | string[]
    brandId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specs?: PhoneSpecsUncheckedUpdateOneWithoutModelNestedInput
    affiliates?: AffiliateLinkUncheckedUpdateManyWithoutModelNestedInput
  }

  export type PhoneModelCreateWithoutAffiliatesInput = {
    name: string
    slug: string
    image?: string | null
    colors?: PhoneModelCreatecolorsInput | string[]
    variants?: PhoneModelCreatevariantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: PhoneBrandCreateNestedOneWithoutModelsInput
    specs?: PhoneSpecsCreateNestedOneWithoutModelInput
    media?: PhoneMediaCreateNestedManyWithoutModelInput
  }

  export type PhoneModelUncheckedCreateWithoutAffiliatesInput = {
    id?: number
    name: string
    slug: string
    image?: string | null
    colors?: PhoneModelCreatecolorsInput | string[]
    variants?: PhoneModelCreatevariantsInput | string[]
    brandId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    specs?: PhoneSpecsUncheckedCreateNestedOneWithoutModelInput
    media?: PhoneMediaUncheckedCreateNestedManyWithoutModelInput
  }

  export type PhoneModelCreateOrConnectWithoutAffiliatesInput = {
    where: PhoneModelWhereUniqueInput
    create: XOR<PhoneModelCreateWithoutAffiliatesInput, PhoneModelUncheckedCreateWithoutAffiliatesInput>
  }

  export type PhoneModelUpsertWithoutAffiliatesInput = {
    update: XOR<PhoneModelUpdateWithoutAffiliatesInput, PhoneModelUncheckedUpdateWithoutAffiliatesInput>
    create: XOR<PhoneModelCreateWithoutAffiliatesInput, PhoneModelUncheckedCreateWithoutAffiliatesInput>
    where?: PhoneModelWhereInput
  }

  export type PhoneModelUpdateToOneWithWhereWithoutAffiliatesInput = {
    where?: PhoneModelWhereInput
    data: XOR<PhoneModelUpdateWithoutAffiliatesInput, PhoneModelUncheckedUpdateWithoutAffiliatesInput>
  }

  export type PhoneModelUpdateWithoutAffiliatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: PhoneModelUpdatecolorsInput | string[]
    variants?: PhoneModelUpdatevariantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: PhoneBrandUpdateOneRequiredWithoutModelsNestedInput
    specs?: PhoneSpecsUpdateOneWithoutModelNestedInput
    media?: PhoneMediaUpdateManyWithoutModelNestedInput
  }

  export type PhoneModelUncheckedUpdateWithoutAffiliatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: PhoneModelUpdatecolorsInput | string[]
    variants?: PhoneModelUpdatevariantsInput | string[]
    brandId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specs?: PhoneSpecsUncheckedUpdateOneWithoutModelNestedInput
    media?: PhoneMediaUncheckedUpdateManyWithoutModelNestedInput
  }

  export type PhoneModelCreateManyBrandInput = {
    id?: number
    name: string
    slug: string
    image?: string | null
    colors?: PhoneModelCreatecolorsInput | string[]
    variants?: PhoneModelCreatevariantsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhoneModelUpdateWithoutBrandInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: PhoneModelUpdatecolorsInput | string[]
    variants?: PhoneModelUpdatevariantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specs?: PhoneSpecsUpdateOneWithoutModelNestedInput
    media?: PhoneMediaUpdateManyWithoutModelNestedInput
    affiliates?: AffiliateLinkUpdateManyWithoutModelNestedInput
  }

  export type PhoneModelUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: PhoneModelUpdatecolorsInput | string[]
    variants?: PhoneModelUpdatevariantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specs?: PhoneSpecsUncheckedUpdateOneWithoutModelNestedInput
    media?: PhoneMediaUncheckedUpdateManyWithoutModelNestedInput
    affiliates?: AffiliateLinkUncheckedUpdateManyWithoutModelNestedInput
  }

  export type PhoneModelUncheckedUpdateManyWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    colors?: PhoneModelUpdatecolorsInput | string[]
    variants?: PhoneModelUpdatevariantsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneMediaCreateManyModelInput = {
    id?: number
    url: string
    publicId?: string | null
    type: $Enums.MediaType
    alt?: string | null
    width?: number | null
    height?: number | null
    duration?: number | null
    createdAt?: Date | string
  }

  export type AffiliateLinkCreateManyModelInput = {
    id?: number
    storeName: string
    url: string
    price?: string | null
    currency?: string | null
    createdAt?: Date | string
  }

  export type PhoneMediaUpdateWithoutModelInput = {
    url?: StringFieldUpdateOperationsInput | string
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneMediaUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneMediaUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    duration?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateLinkUpdateWithoutModelInput = {
    storeName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateLinkUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateLinkUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeName?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    price?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PhoneBrandCountOutputTypeDefaultArgs instead
     */
    export type PhoneBrandCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhoneBrandCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhoneModelCountOutputTypeDefaultArgs instead
     */
    export type PhoneModelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhoneModelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminConfigDefaultArgs instead
     */
    export type AdminConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhoneBrandDefaultArgs instead
     */
    export type PhoneBrandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhoneBrandDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhoneModelDefaultArgs instead
     */
    export type PhoneModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhoneModelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhoneSpecsDefaultArgs instead
     */
    export type PhoneSpecsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhoneSpecsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhoneMediaDefaultArgs instead
     */
    export type PhoneMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhoneMediaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AffiliateLinkDefaultArgs instead
     */
    export type AffiliateLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AffiliateLinkDefaultArgs<ExtArgs>

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