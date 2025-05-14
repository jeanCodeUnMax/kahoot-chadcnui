
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Quizz
 * 
 */
export type Quizz = $Result.DefaultSelection<Prisma.$QuizzPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Answer
 * 
 */
export type Answer = $Result.DefaultSelection<Prisma.$AnswerPayload>
/**
 * Model SessionQuizz
 * 
 */
export type SessionQuizz = $Result.DefaultSelection<Prisma.$SessionQuizzPayload>
/**
 * Model UserResponse
 * 
 */
export type UserResponse = $Result.DefaultSelection<Prisma.$UserResponsePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizz`: Exposes CRUD operations for the **Quizz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quizz.findMany()
    * ```
    */
  get quizz(): Prisma.QuizzDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.answer`: Exposes CRUD operations for the **Answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.AnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionQuizz`: Exposes CRUD operations for the **SessionQuizz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionQuizzes
    * const sessionQuizzes = await prisma.sessionQuizz.findMany()
    * ```
    */
  get sessionQuizz(): Prisma.SessionQuizzDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userResponse`: Exposes CRUD operations for the **UserResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserResponses
    * const userResponses = await prisma.userResponse.findMany()
    * ```
    */
  get userResponse(): Prisma.UserResponseDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Quizz: 'Quizz',
    Question: 'Question',
    Answer: 'Answer',
    SessionQuizz: 'SessionQuizz',
    UserResponse: 'UserResponse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "quizz" | "question" | "answer" | "sessionQuizz" | "userResponse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Quizz: {
        payload: Prisma.$QuizzPayload<ExtArgs>
        fields: Prisma.QuizzFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizzFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizzFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzPayload>
          }
          findFirst: {
            args: Prisma.QuizzFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizzFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzPayload>
          }
          findMany: {
            args: Prisma.QuizzFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzPayload>[]
          }
          create: {
            args: Prisma.QuizzCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzPayload>
          }
          createMany: {
            args: Prisma.QuizzCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizzCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzPayload>[]
          }
          delete: {
            args: Prisma.QuizzDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzPayload>
          }
          update: {
            args: Prisma.QuizzUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzPayload>
          }
          deleteMany: {
            args: Prisma.QuizzDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizzUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizzUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzPayload>[]
          }
          upsert: {
            args: Prisma.QuizzUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizzPayload>
          }
          aggregate: {
            args: Prisma.QuizzAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizz>
          }
          groupBy: {
            args: Prisma.QuizzGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizzGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizzCountArgs<ExtArgs>
            result: $Utils.Optional<QuizzCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Answer: {
        payload: Prisma.$AnswerPayload<ExtArgs>
        fields: Prisma.AnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findFirst: {
            args: Prisma.AnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          findMany: {
            args: Prisma.AnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          create: {
            args: Prisma.AnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          createMany: {
            args: Prisma.AnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          delete: {
            args: Prisma.AnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          update: {
            args: Prisma.AnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          deleteMany: {
            args: Prisma.AnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>[]
          }
          upsert: {
            args: Prisma.AnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnswerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.AnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnswerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      SessionQuizz: {
        payload: Prisma.$SessionQuizzPayload<ExtArgs>
        fields: Prisma.SessionQuizzFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionQuizzFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionQuizzPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionQuizzFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionQuizzPayload>
          }
          findFirst: {
            args: Prisma.SessionQuizzFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionQuizzPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionQuizzFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionQuizzPayload>
          }
          findMany: {
            args: Prisma.SessionQuizzFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionQuizzPayload>[]
          }
          create: {
            args: Prisma.SessionQuizzCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionQuizzPayload>
          }
          createMany: {
            args: Prisma.SessionQuizzCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionQuizzCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionQuizzPayload>[]
          }
          delete: {
            args: Prisma.SessionQuizzDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionQuizzPayload>
          }
          update: {
            args: Prisma.SessionQuizzUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionQuizzPayload>
          }
          deleteMany: {
            args: Prisma.SessionQuizzDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionQuizzUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionQuizzUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionQuizzPayload>[]
          }
          upsert: {
            args: Prisma.SessionQuizzUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionQuizzPayload>
          }
          aggregate: {
            args: Prisma.SessionQuizzAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionQuizz>
          }
          groupBy: {
            args: Prisma.SessionQuizzGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionQuizzGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionQuizzCountArgs<ExtArgs>
            result: $Utils.Optional<SessionQuizzCountAggregateOutputType> | number
          }
        }
      }
      UserResponse: {
        payload: Prisma.$UserResponsePayload<ExtArgs>
        fields: Prisma.UserResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload>
          }
          findFirst: {
            args: Prisma.UserResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload>
          }
          findMany: {
            args: Prisma.UserResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload>[]
          }
          create: {
            args: Prisma.UserResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload>
          }
          createMany: {
            args: Prisma.UserResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload>[]
          }
          delete: {
            args: Prisma.UserResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload>
          }
          update: {
            args: Prisma.UserResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload>
          }
          deleteMany: {
            args: Prisma.UserResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload>[]
          }
          upsert: {
            args: Prisma.UserResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserResponsePayload>
          }
          aggregate: {
            args: Prisma.UserResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserResponse>
          }
          groupBy: {
            args: Prisma.UserResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserResponseCountArgs<ExtArgs>
            result: $Utils.Optional<UserResponseCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    quizz?: QuizzOmit
    question?: QuestionOmit
    answer?: AnswerOmit
    sessionQuizz?: SessionQuizzOmit
    userResponse?: UserResponseOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userResponse: number
    sessionGame: number
    sessionPresenter: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userResponse?: boolean | UserCountOutputTypeCountUserResponseArgs
    sessionGame?: boolean | UserCountOutputTypeCountSessionGameArgs
    sessionPresenter?: boolean | UserCountOutputTypeCountSessionPresenterArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserResponseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionQuizzWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionPresenterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionQuizzWhereInput
  }


  /**
   * Count Type QuizzCountOutputType
   */

  export type QuizzCountOutputType = {
    questions: number
    sessionQuizz: number
  }

  export type QuizzCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuizzCountOutputTypeCountQuestionsArgs
    sessionQuizz?: boolean | QuizzCountOutputTypeCountSessionQuizzArgs
  }

  // Custom InputTypes
  /**
   * QuizzCountOutputType without action
   */
  export type QuizzCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizzCountOutputType
     */
    select?: QuizzCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizzCountOutputType without action
   */
  export type QuizzCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * QuizzCountOutputType without action
   */
  export type QuizzCountOutputTypeCountSessionQuizzArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionQuizzWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answers: number
    userResponse: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | QuestionCountOutputTypeCountAnswersArgs
    userResponse?: boolean | QuestionCountOutputTypeCountUserResponseArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountUserResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserResponseWhereInput
  }


  /**
   * Count Type AnswerCountOutputType
   */

  export type AnswerCountOutputType = {
    userResponse: number
  }

  export type AnswerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userResponse?: boolean | AnswerCountOutputTypeCountUserResponseArgs
  }

  // Custom InputTypes
  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnswerCountOutputType
     */
    select?: AnswerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnswerCountOutputType without action
   */
  export type AnswerCountOutputTypeCountUserResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserResponseWhereInput
  }


  /**
   * Count Type SessionQuizzCountOutputType
   */

  export type SessionQuizzCountOutputType = {
    participants: number
    userResponse: number
  }

  export type SessionQuizzCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | SessionQuizzCountOutputTypeCountParticipantsArgs
    userResponse?: boolean | SessionQuizzCountOutputTypeCountUserResponseArgs
  }

  // Custom InputTypes
  /**
   * SessionQuizzCountOutputType without action
   */
  export type SessionQuizzCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionQuizzCountOutputType
     */
    select?: SessionQuizzCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionQuizzCountOutputType without action
   */
  export type SessionQuizzCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * SessionQuizzCountOutputType without action
   */
  export type SessionQuizzCountOutputTypeCountUserResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userResponse?: boolean | User$userResponseArgs<ExtArgs>
    sessionGame?: boolean | User$sessionGameArgs<ExtArgs>
    sessionPresenter?: boolean | User$sessionPresenterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userResponse?: boolean | User$userResponseArgs<ExtArgs>
    sessionGame?: boolean | User$sessionGameArgs<ExtArgs>
    sessionPresenter?: boolean | User$sessionPresenterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userResponse: Prisma.$UserResponsePayload<ExtArgs>[]
      sessionGame: Prisma.$SessionQuizzPayload<ExtArgs>[]
      sessionPresenter: Prisma.$SessionQuizzPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userResponse<T extends User$userResponseArgs<ExtArgs> = {}>(args?: Subset<T, User$userResponseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessionGame<T extends User$sessionGameArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionGameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionQuizzPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessionPresenter<T extends User$sessionPresenterArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionPresenterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionQuizzPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userResponse
   */
  export type User$userResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    where?: UserResponseWhereInput
    orderBy?: UserResponseOrderByWithRelationInput | UserResponseOrderByWithRelationInput[]
    cursor?: UserResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserResponseScalarFieldEnum | UserResponseScalarFieldEnum[]
  }

  /**
   * User.sessionGame
   */
  export type User$sessionGameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionQuizz
     */
    select?: SessionQuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionQuizz
     */
    omit?: SessionQuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionQuizzInclude<ExtArgs> | null
    where?: SessionQuizzWhereInput
    orderBy?: SessionQuizzOrderByWithRelationInput | SessionQuizzOrderByWithRelationInput[]
    cursor?: SessionQuizzWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionQuizzScalarFieldEnum | SessionQuizzScalarFieldEnum[]
  }

  /**
   * User.sessionPresenter
   */
  export type User$sessionPresenterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionQuizz
     */
    select?: SessionQuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionQuizz
     */
    omit?: SessionQuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionQuizzInclude<ExtArgs> | null
    where?: SessionQuizzWhereInput
    orderBy?: SessionQuizzOrderByWithRelationInput | SessionQuizzOrderByWithRelationInput[]
    cursor?: SessionQuizzWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionQuizzScalarFieldEnum | SessionQuizzScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Quizz
   */

  export type AggregateQuizz = {
    _count: QuizzCountAggregateOutputType | null
    _avg: QuizzAvgAggregateOutputType | null
    _sum: QuizzSumAggregateOutputType | null
    _min: QuizzMinAggregateOutputType | null
    _max: QuizzMaxAggregateOutputType | null
  }

  export type QuizzAvgAggregateOutputType = {
    id: number | null
  }

  export type QuizzSumAggregateOutputType = {
    id: number | null
  }

  export type QuizzMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type QuizzMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type QuizzCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type QuizzAvgAggregateInputType = {
    id?: true
  }

  export type QuizzSumAggregateInputType = {
    id?: true
  }

  export type QuizzMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type QuizzMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type QuizzCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type QuizzAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizz to aggregate.
     */
    where?: QuizzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizzOrderByWithRelationInput | QuizzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizzCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizzAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizzSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizzMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizzMaxAggregateInputType
  }

  export type GetQuizzAggregateType<T extends QuizzAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizz[P]>
      : GetScalarType<T[P], AggregateQuizz[P]>
  }




  export type QuizzGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizzWhereInput
    orderBy?: QuizzOrderByWithAggregationInput | QuizzOrderByWithAggregationInput[]
    by: QuizzScalarFieldEnum[] | QuizzScalarFieldEnum
    having?: QuizzScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizzCountAggregateInputType | true
    _avg?: QuizzAvgAggregateInputType
    _sum?: QuizzSumAggregateInputType
    _min?: QuizzMinAggregateInputType
    _max?: QuizzMaxAggregateInputType
  }

  export type QuizzGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: QuizzCountAggregateOutputType | null
    _avg: QuizzAvgAggregateOutputType | null
    _sum: QuizzSumAggregateOutputType | null
    _min: QuizzMinAggregateOutputType | null
    _max: QuizzMaxAggregateOutputType | null
  }

  type GetQuizzGroupByPayload<T extends QuizzGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizzGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizzGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizzGroupByOutputType[P]>
            : GetScalarType<T[P], QuizzGroupByOutputType[P]>
        }
      >
    >


  export type QuizzSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    questions?: boolean | Quizz$questionsArgs<ExtArgs>
    sessionQuizz?: boolean | Quizz$sessionQuizzArgs<ExtArgs>
    _count?: boolean | QuizzCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizz"]>

  export type QuizzSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["quizz"]>

  export type QuizzSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["quizz"]>

  export type QuizzSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type QuizzOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["quizz"]>
  export type QuizzInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Quizz$questionsArgs<ExtArgs>
    sessionQuizz?: boolean | Quizz$sessionQuizzArgs<ExtArgs>
    _count?: boolean | QuizzCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizzIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type QuizzIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $QuizzPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quizz"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      sessionQuizz: Prisma.$SessionQuizzPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["quizz"]>
    composites: {}
  }

  type QuizzGetPayload<S extends boolean | null | undefined | QuizzDefaultArgs> = $Result.GetResult<Prisma.$QuizzPayload, S>

  type QuizzCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizzFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizzCountAggregateInputType | true
    }

  export interface QuizzDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quizz'], meta: { name: 'Quizz' } }
    /**
     * Find zero or one Quizz that matches the filter.
     * @param {QuizzFindUniqueArgs} args - Arguments to find a Quizz
     * @example
     * // Get one Quizz
     * const quizz = await prisma.quizz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizzFindUniqueArgs>(args: SelectSubset<T, QuizzFindUniqueArgs<ExtArgs>>): Prisma__QuizzClient<$Result.GetResult<Prisma.$QuizzPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quizz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizzFindUniqueOrThrowArgs} args - Arguments to find a Quizz
     * @example
     * // Get one Quizz
     * const quizz = await prisma.quizz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizzFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizzFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizzClient<$Result.GetResult<Prisma.$QuizzPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quizz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizzFindFirstArgs} args - Arguments to find a Quizz
     * @example
     * // Get one Quizz
     * const quizz = await prisma.quizz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizzFindFirstArgs>(args?: SelectSubset<T, QuizzFindFirstArgs<ExtArgs>>): Prisma__QuizzClient<$Result.GetResult<Prisma.$QuizzPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quizz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizzFindFirstOrThrowArgs} args - Arguments to find a Quizz
     * @example
     * // Get one Quizz
     * const quizz = await prisma.quizz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizzFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizzFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizzClient<$Result.GetResult<Prisma.$QuizzPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizzFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quizz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quizz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizzWithIdOnly = await prisma.quizz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizzFindManyArgs>(args?: SelectSubset<T, QuizzFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizzPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quizz.
     * @param {QuizzCreateArgs} args - Arguments to create a Quizz.
     * @example
     * // Create one Quizz
     * const Quizz = await prisma.quizz.create({
     *   data: {
     *     // ... data to create a Quizz
     *   }
     * })
     * 
     */
    create<T extends QuizzCreateArgs>(args: SelectSubset<T, QuizzCreateArgs<ExtArgs>>): Prisma__QuizzClient<$Result.GetResult<Prisma.$QuizzPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizzCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quizz = await prisma.quizz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizzCreateManyArgs>(args?: SelectSubset<T, QuizzCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {QuizzCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quizz = await prisma.quizz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `id`
     * const quizzWithIdOnly = await prisma.quizz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizzCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizzCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizzPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quizz.
     * @param {QuizzDeleteArgs} args - Arguments to delete one Quizz.
     * @example
     * // Delete one Quizz
     * const Quizz = await prisma.quizz.delete({
     *   where: {
     *     // ... filter to delete one Quizz
     *   }
     * })
     * 
     */
    delete<T extends QuizzDeleteArgs>(args: SelectSubset<T, QuizzDeleteArgs<ExtArgs>>): Prisma__QuizzClient<$Result.GetResult<Prisma.$QuizzPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quizz.
     * @param {QuizzUpdateArgs} args - Arguments to update one Quizz.
     * @example
     * // Update one Quizz
     * const quizz = await prisma.quizz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizzUpdateArgs>(args: SelectSubset<T, QuizzUpdateArgs<ExtArgs>>): Prisma__QuizzClient<$Result.GetResult<Prisma.$QuizzPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizzDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quizz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizzDeleteManyArgs>(args?: SelectSubset<T, QuizzDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizzUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quizz = await prisma.quizz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizzUpdateManyArgs>(args: SelectSubset<T, QuizzUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes and returns the data updated in the database.
     * @param {QuizzUpdateManyAndReturnArgs} args - Arguments to update many Quizzes.
     * @example
     * // Update many Quizzes
     * const quizz = await prisma.quizz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quizzes and only return the `id`
     * const quizzWithIdOnly = await prisma.quizz.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizzUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizzUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizzPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quizz.
     * @param {QuizzUpsertArgs} args - Arguments to update or create a Quizz.
     * @example
     * // Update or create a Quizz
     * const quizz = await prisma.quizz.upsert({
     *   create: {
     *     // ... data to create a Quizz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quizz we want to update
     *   }
     * })
     */
    upsert<T extends QuizzUpsertArgs>(args: SelectSubset<T, QuizzUpsertArgs<ExtArgs>>): Prisma__QuizzClient<$Result.GetResult<Prisma.$QuizzPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizzCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quizz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizzCountArgs>(
      args?: Subset<T, QuizzCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizzCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quizz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizzAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizzAggregateArgs>(args: Subset<T, QuizzAggregateArgs>): Prisma.PrismaPromise<GetQuizzAggregateType<T>>

    /**
     * Group by Quizz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizzGroupByArgs} args - Group by arguments.
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
      T extends QuizzGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizzGroupByArgs['orderBy'] }
        : { orderBy?: QuizzGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizzGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizzGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quizz model
   */
  readonly fields: QuizzFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quizz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizzClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Quizz$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Quizz$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessionQuizz<T extends Quizz$sessionQuizzArgs<ExtArgs> = {}>(args?: Subset<T, Quizz$sessionQuizzArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionQuizzPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Quizz model
   */
  interface QuizzFieldRefs {
    readonly id: FieldRef<"Quizz", 'Int'>
    readonly name: FieldRef<"Quizz", 'String'>
    readonly description: FieldRef<"Quizz", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Quizz findUnique
   */
  export type QuizzFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizz
     */
    select?: QuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quizz
     */
    omit?: QuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzInclude<ExtArgs> | null
    /**
     * Filter, which Quizz to fetch.
     */
    where: QuizzWhereUniqueInput
  }

  /**
   * Quizz findUniqueOrThrow
   */
  export type QuizzFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizz
     */
    select?: QuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quizz
     */
    omit?: QuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzInclude<ExtArgs> | null
    /**
     * Filter, which Quizz to fetch.
     */
    where: QuizzWhereUniqueInput
  }

  /**
   * Quizz findFirst
   */
  export type QuizzFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizz
     */
    select?: QuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quizz
     */
    omit?: QuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzInclude<ExtArgs> | null
    /**
     * Filter, which Quizz to fetch.
     */
    where?: QuizzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizzOrderByWithRelationInput | QuizzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizzScalarFieldEnum | QuizzScalarFieldEnum[]
  }

  /**
   * Quizz findFirstOrThrow
   */
  export type QuizzFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizz
     */
    select?: QuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quizz
     */
    omit?: QuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzInclude<ExtArgs> | null
    /**
     * Filter, which Quizz to fetch.
     */
    where?: QuizzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizzOrderByWithRelationInput | QuizzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizzScalarFieldEnum | QuizzScalarFieldEnum[]
  }

  /**
   * Quizz findMany
   */
  export type QuizzFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizz
     */
    select?: QuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quizz
     */
    omit?: QuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizzOrderByWithRelationInput | QuizzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizzScalarFieldEnum | QuizzScalarFieldEnum[]
  }

  /**
   * Quizz create
   */
  export type QuizzCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizz
     */
    select?: QuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quizz
     */
    omit?: QuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzInclude<ExtArgs> | null
    /**
     * The data needed to create a Quizz.
     */
    data: XOR<QuizzCreateInput, QuizzUncheckedCreateInput>
  }

  /**
   * Quizz createMany
   */
  export type QuizzCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizzCreateManyInput | QuizzCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quizz createManyAndReturn
   */
  export type QuizzCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizz
     */
    select?: QuizzSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quizz
     */
    omit?: QuizzOmit<ExtArgs> | null
    /**
     * The data used to create many Quizzes.
     */
    data: QuizzCreateManyInput | QuizzCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quizz update
   */
  export type QuizzUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizz
     */
    select?: QuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quizz
     */
    omit?: QuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzInclude<ExtArgs> | null
    /**
     * The data needed to update a Quizz.
     */
    data: XOR<QuizzUpdateInput, QuizzUncheckedUpdateInput>
    /**
     * Choose, which Quizz to update.
     */
    where: QuizzWhereUniqueInput
  }

  /**
   * Quizz updateMany
   */
  export type QuizzUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizzUpdateManyMutationInput, QuizzUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizzWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quizz updateManyAndReturn
   */
  export type QuizzUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizz
     */
    select?: QuizzSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quizz
     */
    omit?: QuizzOmit<ExtArgs> | null
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizzUpdateManyMutationInput, QuizzUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizzWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quizz upsert
   */
  export type QuizzUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizz
     */
    select?: QuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quizz
     */
    omit?: QuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzInclude<ExtArgs> | null
    /**
     * The filter to search for the Quizz to update in case it exists.
     */
    where: QuizzWhereUniqueInput
    /**
     * In case the Quizz found by the `where` argument doesn't exist, create a new Quizz with this data.
     */
    create: XOR<QuizzCreateInput, QuizzUncheckedCreateInput>
    /**
     * In case the Quizz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizzUpdateInput, QuizzUncheckedUpdateInput>
  }

  /**
   * Quizz delete
   */
  export type QuizzDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizz
     */
    select?: QuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quizz
     */
    omit?: QuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzInclude<ExtArgs> | null
    /**
     * Filter which Quizz to delete.
     */
    where: QuizzWhereUniqueInput
  }

  /**
   * Quizz deleteMany
   */
  export type QuizzDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizzWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quizz.questions
   */
  export type Quizz$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Quizz.sessionQuizz
   */
  export type Quizz$sessionQuizzArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionQuizz
     */
    select?: SessionQuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionQuizz
     */
    omit?: SessionQuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionQuizzInclude<ExtArgs> | null
    where?: SessionQuizzWhereInput
    orderBy?: SessionQuizzOrderByWithRelationInput | SessionQuizzOrderByWithRelationInput[]
    cursor?: SessionQuizzWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionQuizzScalarFieldEnum | SessionQuizzScalarFieldEnum[]
  }

  /**
   * Quizz without action
   */
  export type QuizzDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quizz
     */
    select?: QuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quizz
     */
    omit?: QuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizzInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    timeMax: number | null
    scoreMax: number | null
    scoreMin: number | null
    quizzId: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    timeMax: number | null
    scoreMax: number | null
    scoreMin: number | null
    quizzId: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    timeMax: number | null
    scoreMax: number | null
    scoreMin: number | null
    question: string | null
    explication: string | null
    quizzId: number | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    timeMax: number | null
    scoreMax: number | null
    scoreMin: number | null
    question: string | null
    explication: string | null
    quizzId: number | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    timeMax: number
    scoreMax: number
    scoreMin: number
    question: number
    explication: number
    quizzId: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    timeMax?: true
    scoreMax?: true
    scoreMin?: true
    quizzId?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    timeMax?: true
    scoreMax?: true
    scoreMin?: true
    quizzId?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    timeMax?: true
    scoreMax?: true
    scoreMin?: true
    question?: true
    explication?: true
    quizzId?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    timeMax?: true
    scoreMax?: true
    scoreMin?: true
    question?: true
    explication?: true
    quizzId?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    timeMax?: true
    scoreMax?: true
    scoreMin?: true
    question?: true
    explication?: true
    quizzId?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: number
    timeMax: number
    scoreMax: number
    scoreMin: number
    question: string
    explication: string
    quizzId: number
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timeMax?: boolean
    scoreMax?: boolean
    scoreMin?: boolean
    question?: boolean
    explication?: boolean
    quizzId?: boolean
    quizz?: boolean | QuizzDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    userResponse?: boolean | Question$userResponseArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timeMax?: boolean
    scoreMax?: boolean
    scoreMin?: boolean
    question?: boolean
    explication?: boolean
    quizzId?: boolean
    quizz?: boolean | QuizzDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timeMax?: boolean
    scoreMax?: boolean
    scoreMin?: boolean
    question?: boolean
    explication?: boolean
    quizzId?: boolean
    quizz?: boolean | QuizzDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    timeMax?: boolean
    scoreMax?: boolean
    scoreMin?: boolean
    question?: boolean
    explication?: boolean
    quizzId?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timeMax" | "scoreMax" | "scoreMin" | "question" | "explication" | "quizzId", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizz?: boolean | QuizzDefaultArgs<ExtArgs>
    answers?: boolean | Question$answersArgs<ExtArgs>
    userResponse?: boolean | Question$userResponseArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizz?: boolean | QuizzDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizz?: boolean | QuizzDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      quizz: Prisma.$QuizzPayload<ExtArgs>
      answers: Prisma.$AnswerPayload<ExtArgs>[]
      userResponse: Prisma.$UserResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timeMax: number
      scoreMax: number
      scoreMin: number
      question: string
      explication: string
      quizzId: number
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizz<T extends QuizzDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizzDefaultArgs<ExtArgs>>): Prisma__QuizzClient<$Result.GetResult<Prisma.$QuizzPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Question$answersArgs<ExtArgs> = {}>(args?: Subset<T, Question$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userResponse<T extends Question$userResponseArgs<ExtArgs> = {}>(args?: Subset<T, Question$userResponseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'Int'>
    readonly timeMax: FieldRef<"Question", 'Int'>
    readonly scoreMax: FieldRef<"Question", 'Int'>
    readonly scoreMin: FieldRef<"Question", 'Int'>
    readonly question: FieldRef<"Question", 'String'>
    readonly explication: FieldRef<"Question", 'String'>
    readonly quizzId: FieldRef<"Question", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.answers
   */
  export type Question$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    cursor?: AnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Question.userResponse
   */
  export type Question$userResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    where?: UserResponseWhereInput
    orderBy?: UserResponseOrderByWithRelationInput | UserResponseOrderByWithRelationInput[]
    cursor?: UserResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserResponseScalarFieldEnum | UserResponseScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type AnswerSumAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: number | null
    isGoodAnswers: boolean | null
    name: string | null
    questionId: number | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: number | null
    isGoodAnswers: boolean | null
    name: string | null
    questionId: number | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    isGoodAnswers: number
    name: number
    questionId: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type AnswerSumAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    isGoodAnswers?: true
    name?: true
    questionId?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    isGoodAnswers?: true
    name?: true
    questionId?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    isGoodAnswers?: true
    name?: true
    questionId?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answer to aggregate.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type AnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnswerWhereInput
    orderBy?: AnswerOrderByWithAggregationInput | AnswerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: AnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: number
    isGoodAnswers: boolean
    name: string
    questionId: number
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends AnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type AnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isGoodAnswers?: boolean
    name?: boolean
    questionId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    userResponse?: boolean | Answer$userResponseArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isGoodAnswers?: boolean
    name?: boolean
    questionId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isGoodAnswers?: boolean
    name?: boolean
    questionId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>

  export type AnswerSelectScalar = {
    id?: boolean
    isGoodAnswers?: boolean
    name?: boolean
    questionId?: boolean
  }

  export type AnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isGoodAnswers" | "name" | "questionId", ExtArgs["result"]["answer"]>
  export type AnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    userResponse?: boolean | Answer$userResponseArgs<ExtArgs>
    _count?: boolean | AnswerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type AnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Answer"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      userResponse: Prisma.$UserResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      isGoodAnswers: boolean
      name: string
      questionId: number
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type AnswerGetPayload<S extends boolean | null | undefined | AnswerDefaultArgs> = $Result.GetResult<Prisma.$AnswerPayload, S>

  type AnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface AnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Answer'], meta: { name: 'Answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {AnswerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnswerFindUniqueArgs>(args: SelectSubset<T, AnswerFindUniqueArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnswerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, AnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnswerFindFirstArgs>(args?: SelectSubset<T, AnswerFindFirstArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, AnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnswerFindManyArgs>(args?: SelectSubset<T, AnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {AnswerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends AnswerCreateArgs>(args: SelectSubset<T, AnswerCreateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {AnswerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnswerCreateManyArgs>(args?: SelectSubset<T, AnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Answers and returns the data saved in the database.
     * @param {AnswerCreateManyAndReturnArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, AnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Answer.
     * @param {AnswerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends AnswerDeleteArgs>(args: SelectSubset<T, AnswerDeleteArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {AnswerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnswerUpdateArgs>(args: SelectSubset<T, AnswerUpdateArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {AnswerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnswerDeleteManyArgs>(args?: SelectSubset<T, AnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnswerUpdateManyArgs>(args: SelectSubset<T, AnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers and returns the data updated in the database.
     * @param {AnswerUpdateManyAndReturnArgs} args - Arguments to update many Answers.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Answers and only return the `id`
     * const answerWithIdOnly = await prisma.answer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, AnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Answer.
     * @param {AnswerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends AnswerUpsertArgs>(args: SelectSubset<T, AnswerUpsertArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends AnswerCountArgs>(
      args?: Subset<T, AnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerGroupByArgs} args - Group by arguments.
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
      T extends AnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnswerGroupByArgs['orderBy'] }
        : { orderBy?: AnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Answer model
   */
  readonly fields: AnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userResponse<T extends Answer$userResponseArgs<ExtArgs> = {}>(args?: Subset<T, Answer$userResponseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Answer model
   */
  interface AnswerFieldRefs {
    readonly id: FieldRef<"Answer", 'Int'>
    readonly isGoodAnswers: FieldRef<"Answer", 'Boolean'>
    readonly name: FieldRef<"Answer", 'String'>
    readonly questionId: FieldRef<"Answer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Answer findUnique
   */
  export type AnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findUniqueOrThrow
   */
  export type AnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer findFirst
   */
  export type AnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findFirstOrThrow
   */
  export type AnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answer to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer findMany
   */
  export type AnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter, which Answers to fetch.
     */
    where?: AnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Answers to fetch.
     */
    orderBy?: AnswerOrderByWithRelationInput | AnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Answers.
     */
    cursor?: AnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * Answer create
   */
  export type AnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a Answer.
     */
    data: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
  }

  /**
   * Answer createMany
   */
  export type AnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Answer createManyAndReturn
   */
  export type AnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to create many Answers.
     */
    data: AnswerCreateManyInput | AnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer update
   */
  export type AnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a Answer.
     */
    data: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
    /**
     * Choose, which Answer to update.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer updateMany
   */
  export type AnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
  }

  /**
   * Answer updateManyAndReturn
   */
  export type AnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * The data used to update Answers.
     */
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyInput>
    /**
     * Filter which Answers to update
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Answer upsert
   */
  export type AnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the Answer to update in case it exists.
     */
    where: AnswerWhereUniqueInput
    /**
     * In case the Answer found by the `where` argument doesn't exist, create a new Answer with this data.
     */
    create: XOR<AnswerCreateInput, AnswerUncheckedCreateInput>
    /**
     * In case the Answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnswerUpdateInput, AnswerUncheckedUpdateInput>
  }

  /**
   * Answer delete
   */
  export type AnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
    /**
     * Filter which Answer to delete.
     */
    where: AnswerWhereUniqueInput
  }

  /**
   * Answer deleteMany
   */
  export type AnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Answers to delete
     */
    where?: AnswerWhereInput
    /**
     * Limit how many Answers to delete.
     */
    limit?: number
  }

  /**
   * Answer.userResponse
   */
  export type Answer$userResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    where?: UserResponseWhereInput
    orderBy?: UserResponseOrderByWithRelationInput | UserResponseOrderByWithRelationInput[]
    cursor?: UserResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserResponseScalarFieldEnum | UserResponseScalarFieldEnum[]
  }

  /**
   * Answer without action
   */
  export type AnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Answer
     */
    select?: AnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Answer
     */
    omit?: AnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnswerInclude<ExtArgs> | null
  }


  /**
   * Model SessionQuizz
   */

  export type AggregateSessionQuizz = {
    _count: SessionQuizzCountAggregateOutputType | null
    _avg: SessionQuizzAvgAggregateOutputType | null
    _sum: SessionQuizzSumAggregateOutputType | null
    _min: SessionQuizzMinAggregateOutputType | null
    _max: SessionQuizzMaxAggregateOutputType | null
  }

  export type SessionQuizzAvgAggregateOutputType = {
    id: number | null
    quizzId: number | null
    presenterId: number | null
  }

  export type SessionQuizzSumAggregateOutputType = {
    id: number | null
    quizzId: number | null
    presenterId: number | null
  }

  export type SessionQuizzMinAggregateOutputType = {
    id: number | null
    quizzId: number | null
    presenterId: number | null
  }

  export type SessionQuizzMaxAggregateOutputType = {
    id: number | null
    quizzId: number | null
    presenterId: number | null
  }

  export type SessionQuizzCountAggregateOutputType = {
    id: number
    quizzId: number
    presenterId: number
    _all: number
  }


  export type SessionQuizzAvgAggregateInputType = {
    id?: true
    quizzId?: true
    presenterId?: true
  }

  export type SessionQuizzSumAggregateInputType = {
    id?: true
    quizzId?: true
    presenterId?: true
  }

  export type SessionQuizzMinAggregateInputType = {
    id?: true
    quizzId?: true
    presenterId?: true
  }

  export type SessionQuizzMaxAggregateInputType = {
    id?: true
    quizzId?: true
    presenterId?: true
  }

  export type SessionQuizzCountAggregateInputType = {
    id?: true
    quizzId?: true
    presenterId?: true
    _all?: true
  }

  export type SessionQuizzAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionQuizz to aggregate.
     */
    where?: SessionQuizzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionQuizzes to fetch.
     */
    orderBy?: SessionQuizzOrderByWithRelationInput | SessionQuizzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionQuizzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionQuizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionQuizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionQuizzes
    **/
    _count?: true | SessionQuizzCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionQuizzAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionQuizzSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionQuizzMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionQuizzMaxAggregateInputType
  }

  export type GetSessionQuizzAggregateType<T extends SessionQuizzAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionQuizz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionQuizz[P]>
      : GetScalarType<T[P], AggregateSessionQuizz[P]>
  }




  export type SessionQuizzGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionQuizzWhereInput
    orderBy?: SessionQuizzOrderByWithAggregationInput | SessionQuizzOrderByWithAggregationInput[]
    by: SessionQuizzScalarFieldEnum[] | SessionQuizzScalarFieldEnum
    having?: SessionQuizzScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionQuizzCountAggregateInputType | true
    _avg?: SessionQuizzAvgAggregateInputType
    _sum?: SessionQuizzSumAggregateInputType
    _min?: SessionQuizzMinAggregateInputType
    _max?: SessionQuizzMaxAggregateInputType
  }

  export type SessionQuizzGroupByOutputType = {
    id: number
    quizzId: number
    presenterId: number
    _count: SessionQuizzCountAggregateOutputType | null
    _avg: SessionQuizzAvgAggregateOutputType | null
    _sum: SessionQuizzSumAggregateOutputType | null
    _min: SessionQuizzMinAggregateOutputType | null
    _max: SessionQuizzMaxAggregateOutputType | null
  }

  type GetSessionQuizzGroupByPayload<T extends SessionQuizzGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionQuizzGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionQuizzGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionQuizzGroupByOutputType[P]>
            : GetScalarType<T[P], SessionQuizzGroupByOutputType[P]>
        }
      >
    >


  export type SessionQuizzSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizzId?: boolean
    presenterId?: boolean
    quizz?: boolean | QuizzDefaultArgs<ExtArgs>
    participants?: boolean | SessionQuizz$participantsArgs<ExtArgs>
    presenter?: boolean | UserDefaultArgs<ExtArgs>
    userResponse?: boolean | SessionQuizz$userResponseArgs<ExtArgs>
    _count?: boolean | SessionQuizzCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionQuizz"]>

  export type SessionQuizzSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizzId?: boolean
    presenterId?: boolean
    quizz?: boolean | QuizzDefaultArgs<ExtArgs>
    presenter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionQuizz"]>

  export type SessionQuizzSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quizzId?: boolean
    presenterId?: boolean
    quizz?: boolean | QuizzDefaultArgs<ExtArgs>
    presenter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionQuizz"]>

  export type SessionQuizzSelectScalar = {
    id?: boolean
    quizzId?: boolean
    presenterId?: boolean
  }

  export type SessionQuizzOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quizzId" | "presenterId", ExtArgs["result"]["sessionQuizz"]>
  export type SessionQuizzInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizz?: boolean | QuizzDefaultArgs<ExtArgs>
    participants?: boolean | SessionQuizz$participantsArgs<ExtArgs>
    presenter?: boolean | UserDefaultArgs<ExtArgs>
    userResponse?: boolean | SessionQuizz$userResponseArgs<ExtArgs>
    _count?: boolean | SessionQuizzCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionQuizzIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizz?: boolean | QuizzDefaultArgs<ExtArgs>
    presenter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionQuizzIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizz?: boolean | QuizzDefaultArgs<ExtArgs>
    presenter?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionQuizzPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionQuizz"
    objects: {
      quizz: Prisma.$QuizzPayload<ExtArgs>
      participants: Prisma.$UserPayload<ExtArgs>[]
      presenter: Prisma.$UserPayload<ExtArgs>
      userResponse: Prisma.$UserResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quizzId: number
      presenterId: number
    }, ExtArgs["result"]["sessionQuizz"]>
    composites: {}
  }

  type SessionQuizzGetPayload<S extends boolean | null | undefined | SessionQuizzDefaultArgs> = $Result.GetResult<Prisma.$SessionQuizzPayload, S>

  type SessionQuizzCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionQuizzFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionQuizzCountAggregateInputType | true
    }

  export interface SessionQuizzDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionQuizz'], meta: { name: 'SessionQuizz' } }
    /**
     * Find zero or one SessionQuizz that matches the filter.
     * @param {SessionQuizzFindUniqueArgs} args - Arguments to find a SessionQuizz
     * @example
     * // Get one SessionQuizz
     * const sessionQuizz = await prisma.sessionQuizz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionQuizzFindUniqueArgs>(args: SelectSubset<T, SessionQuizzFindUniqueArgs<ExtArgs>>): Prisma__SessionQuizzClient<$Result.GetResult<Prisma.$SessionQuizzPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionQuizz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionQuizzFindUniqueOrThrowArgs} args - Arguments to find a SessionQuizz
     * @example
     * // Get one SessionQuizz
     * const sessionQuizz = await prisma.sessionQuizz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionQuizzFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionQuizzFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionQuizzClient<$Result.GetResult<Prisma.$SessionQuizzPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionQuizz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionQuizzFindFirstArgs} args - Arguments to find a SessionQuizz
     * @example
     * // Get one SessionQuizz
     * const sessionQuizz = await prisma.sessionQuizz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionQuizzFindFirstArgs>(args?: SelectSubset<T, SessionQuizzFindFirstArgs<ExtArgs>>): Prisma__SessionQuizzClient<$Result.GetResult<Prisma.$SessionQuizzPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionQuizz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionQuizzFindFirstOrThrowArgs} args - Arguments to find a SessionQuizz
     * @example
     * // Get one SessionQuizz
     * const sessionQuizz = await prisma.sessionQuizz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionQuizzFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionQuizzFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionQuizzClient<$Result.GetResult<Prisma.$SessionQuizzPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionQuizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionQuizzFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionQuizzes
     * const sessionQuizzes = await prisma.sessionQuizz.findMany()
     * 
     * // Get first 10 SessionQuizzes
     * const sessionQuizzes = await prisma.sessionQuizz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionQuizzWithIdOnly = await prisma.sessionQuizz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionQuizzFindManyArgs>(args?: SelectSubset<T, SessionQuizzFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionQuizzPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionQuizz.
     * @param {SessionQuizzCreateArgs} args - Arguments to create a SessionQuizz.
     * @example
     * // Create one SessionQuizz
     * const SessionQuizz = await prisma.sessionQuizz.create({
     *   data: {
     *     // ... data to create a SessionQuizz
     *   }
     * })
     * 
     */
    create<T extends SessionQuizzCreateArgs>(args: SelectSubset<T, SessionQuizzCreateArgs<ExtArgs>>): Prisma__SessionQuizzClient<$Result.GetResult<Prisma.$SessionQuizzPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionQuizzes.
     * @param {SessionQuizzCreateManyArgs} args - Arguments to create many SessionQuizzes.
     * @example
     * // Create many SessionQuizzes
     * const sessionQuizz = await prisma.sessionQuizz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionQuizzCreateManyArgs>(args?: SelectSubset<T, SessionQuizzCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionQuizzes and returns the data saved in the database.
     * @param {SessionQuizzCreateManyAndReturnArgs} args - Arguments to create many SessionQuizzes.
     * @example
     * // Create many SessionQuizzes
     * const sessionQuizz = await prisma.sessionQuizz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionQuizzes and only return the `id`
     * const sessionQuizzWithIdOnly = await prisma.sessionQuizz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionQuizzCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionQuizzCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionQuizzPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionQuizz.
     * @param {SessionQuizzDeleteArgs} args - Arguments to delete one SessionQuizz.
     * @example
     * // Delete one SessionQuizz
     * const SessionQuizz = await prisma.sessionQuizz.delete({
     *   where: {
     *     // ... filter to delete one SessionQuizz
     *   }
     * })
     * 
     */
    delete<T extends SessionQuizzDeleteArgs>(args: SelectSubset<T, SessionQuizzDeleteArgs<ExtArgs>>): Prisma__SessionQuizzClient<$Result.GetResult<Prisma.$SessionQuizzPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionQuizz.
     * @param {SessionQuizzUpdateArgs} args - Arguments to update one SessionQuizz.
     * @example
     * // Update one SessionQuizz
     * const sessionQuizz = await prisma.sessionQuizz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionQuizzUpdateArgs>(args: SelectSubset<T, SessionQuizzUpdateArgs<ExtArgs>>): Prisma__SessionQuizzClient<$Result.GetResult<Prisma.$SessionQuizzPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionQuizzes.
     * @param {SessionQuizzDeleteManyArgs} args - Arguments to filter SessionQuizzes to delete.
     * @example
     * // Delete a few SessionQuizzes
     * const { count } = await prisma.sessionQuizz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionQuizzDeleteManyArgs>(args?: SelectSubset<T, SessionQuizzDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionQuizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionQuizzUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionQuizzes
     * const sessionQuizz = await prisma.sessionQuizz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionQuizzUpdateManyArgs>(args: SelectSubset<T, SessionQuizzUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionQuizzes and returns the data updated in the database.
     * @param {SessionQuizzUpdateManyAndReturnArgs} args - Arguments to update many SessionQuizzes.
     * @example
     * // Update many SessionQuizzes
     * const sessionQuizz = await prisma.sessionQuizz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionQuizzes and only return the `id`
     * const sessionQuizzWithIdOnly = await prisma.sessionQuizz.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionQuizzUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionQuizzUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionQuizzPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionQuizz.
     * @param {SessionQuizzUpsertArgs} args - Arguments to update or create a SessionQuizz.
     * @example
     * // Update or create a SessionQuizz
     * const sessionQuizz = await prisma.sessionQuizz.upsert({
     *   create: {
     *     // ... data to create a SessionQuizz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionQuizz we want to update
     *   }
     * })
     */
    upsert<T extends SessionQuizzUpsertArgs>(args: SelectSubset<T, SessionQuizzUpsertArgs<ExtArgs>>): Prisma__SessionQuizzClient<$Result.GetResult<Prisma.$SessionQuizzPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionQuizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionQuizzCountArgs} args - Arguments to filter SessionQuizzes to count.
     * @example
     * // Count the number of SessionQuizzes
     * const count = await prisma.sessionQuizz.count({
     *   where: {
     *     // ... the filter for the SessionQuizzes we want to count
     *   }
     * })
    **/
    count<T extends SessionQuizzCountArgs>(
      args?: Subset<T, SessionQuizzCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionQuizzCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionQuizz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionQuizzAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionQuizzAggregateArgs>(args: Subset<T, SessionQuizzAggregateArgs>): Prisma.PrismaPromise<GetSessionQuizzAggregateType<T>>

    /**
     * Group by SessionQuizz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionQuizzGroupByArgs} args - Group by arguments.
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
      T extends SessionQuizzGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionQuizzGroupByArgs['orderBy'] }
        : { orderBy?: SessionQuizzGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionQuizzGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionQuizzGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionQuizz model
   */
  readonly fields: SessionQuizzFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionQuizz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionQuizzClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizz<T extends QuizzDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizzDefaultArgs<ExtArgs>>): Prisma__QuizzClient<$Result.GetResult<Prisma.$QuizzPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends SessionQuizz$participantsArgs<ExtArgs> = {}>(args?: Subset<T, SessionQuizz$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    presenter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userResponse<T extends SessionQuizz$userResponseArgs<ExtArgs> = {}>(args?: Subset<T, SessionQuizz$userResponseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SessionQuizz model
   */
  interface SessionQuizzFieldRefs {
    readonly id: FieldRef<"SessionQuizz", 'Int'>
    readonly quizzId: FieldRef<"SessionQuizz", 'Int'>
    readonly presenterId: FieldRef<"SessionQuizz", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SessionQuizz findUnique
   */
  export type SessionQuizzFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionQuizz
     */
    select?: SessionQuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionQuizz
     */
    omit?: SessionQuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionQuizzInclude<ExtArgs> | null
    /**
     * Filter, which SessionQuizz to fetch.
     */
    where: SessionQuizzWhereUniqueInput
  }

  /**
   * SessionQuizz findUniqueOrThrow
   */
  export type SessionQuizzFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionQuizz
     */
    select?: SessionQuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionQuizz
     */
    omit?: SessionQuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionQuizzInclude<ExtArgs> | null
    /**
     * Filter, which SessionQuizz to fetch.
     */
    where: SessionQuizzWhereUniqueInput
  }

  /**
   * SessionQuizz findFirst
   */
  export type SessionQuizzFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionQuizz
     */
    select?: SessionQuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionQuizz
     */
    omit?: SessionQuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionQuizzInclude<ExtArgs> | null
    /**
     * Filter, which SessionQuizz to fetch.
     */
    where?: SessionQuizzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionQuizzes to fetch.
     */
    orderBy?: SessionQuizzOrderByWithRelationInput | SessionQuizzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionQuizzes.
     */
    cursor?: SessionQuizzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionQuizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionQuizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionQuizzes.
     */
    distinct?: SessionQuizzScalarFieldEnum | SessionQuizzScalarFieldEnum[]
  }

  /**
   * SessionQuizz findFirstOrThrow
   */
  export type SessionQuizzFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionQuizz
     */
    select?: SessionQuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionQuizz
     */
    omit?: SessionQuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionQuizzInclude<ExtArgs> | null
    /**
     * Filter, which SessionQuizz to fetch.
     */
    where?: SessionQuizzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionQuizzes to fetch.
     */
    orderBy?: SessionQuizzOrderByWithRelationInput | SessionQuizzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionQuizzes.
     */
    cursor?: SessionQuizzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionQuizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionQuizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionQuizzes.
     */
    distinct?: SessionQuizzScalarFieldEnum | SessionQuizzScalarFieldEnum[]
  }

  /**
   * SessionQuizz findMany
   */
  export type SessionQuizzFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionQuizz
     */
    select?: SessionQuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionQuizz
     */
    omit?: SessionQuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionQuizzInclude<ExtArgs> | null
    /**
     * Filter, which SessionQuizzes to fetch.
     */
    where?: SessionQuizzWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionQuizzes to fetch.
     */
    orderBy?: SessionQuizzOrderByWithRelationInput | SessionQuizzOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionQuizzes.
     */
    cursor?: SessionQuizzWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionQuizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionQuizzes.
     */
    skip?: number
    distinct?: SessionQuizzScalarFieldEnum | SessionQuizzScalarFieldEnum[]
  }

  /**
   * SessionQuizz create
   */
  export type SessionQuizzCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionQuizz
     */
    select?: SessionQuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionQuizz
     */
    omit?: SessionQuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionQuizzInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionQuizz.
     */
    data: XOR<SessionQuizzCreateInput, SessionQuizzUncheckedCreateInput>
  }

  /**
   * SessionQuizz createMany
   */
  export type SessionQuizzCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionQuizzes.
     */
    data: SessionQuizzCreateManyInput | SessionQuizzCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionQuizz createManyAndReturn
   */
  export type SessionQuizzCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionQuizz
     */
    select?: SessionQuizzSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionQuizz
     */
    omit?: SessionQuizzOmit<ExtArgs> | null
    /**
     * The data used to create many SessionQuizzes.
     */
    data: SessionQuizzCreateManyInput | SessionQuizzCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionQuizzIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionQuizz update
   */
  export type SessionQuizzUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionQuizz
     */
    select?: SessionQuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionQuizz
     */
    omit?: SessionQuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionQuizzInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionQuizz.
     */
    data: XOR<SessionQuizzUpdateInput, SessionQuizzUncheckedUpdateInput>
    /**
     * Choose, which SessionQuizz to update.
     */
    where: SessionQuizzWhereUniqueInput
  }

  /**
   * SessionQuizz updateMany
   */
  export type SessionQuizzUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionQuizzes.
     */
    data: XOR<SessionQuizzUpdateManyMutationInput, SessionQuizzUncheckedUpdateManyInput>
    /**
     * Filter which SessionQuizzes to update
     */
    where?: SessionQuizzWhereInput
    /**
     * Limit how many SessionQuizzes to update.
     */
    limit?: number
  }

  /**
   * SessionQuizz updateManyAndReturn
   */
  export type SessionQuizzUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionQuizz
     */
    select?: SessionQuizzSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionQuizz
     */
    omit?: SessionQuizzOmit<ExtArgs> | null
    /**
     * The data used to update SessionQuizzes.
     */
    data: XOR<SessionQuizzUpdateManyMutationInput, SessionQuizzUncheckedUpdateManyInput>
    /**
     * Filter which SessionQuizzes to update
     */
    where?: SessionQuizzWhereInput
    /**
     * Limit how many SessionQuizzes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionQuizzIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionQuizz upsert
   */
  export type SessionQuizzUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionQuizz
     */
    select?: SessionQuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionQuizz
     */
    omit?: SessionQuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionQuizzInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionQuizz to update in case it exists.
     */
    where: SessionQuizzWhereUniqueInput
    /**
     * In case the SessionQuizz found by the `where` argument doesn't exist, create a new SessionQuizz with this data.
     */
    create: XOR<SessionQuizzCreateInput, SessionQuizzUncheckedCreateInput>
    /**
     * In case the SessionQuizz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionQuizzUpdateInput, SessionQuizzUncheckedUpdateInput>
  }

  /**
   * SessionQuizz delete
   */
  export type SessionQuizzDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionQuizz
     */
    select?: SessionQuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionQuizz
     */
    omit?: SessionQuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionQuizzInclude<ExtArgs> | null
    /**
     * Filter which SessionQuizz to delete.
     */
    where: SessionQuizzWhereUniqueInput
  }

  /**
   * SessionQuizz deleteMany
   */
  export type SessionQuizzDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionQuizzes to delete
     */
    where?: SessionQuizzWhereInput
    /**
     * Limit how many SessionQuizzes to delete.
     */
    limit?: number
  }

  /**
   * SessionQuizz.participants
   */
  export type SessionQuizz$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * SessionQuizz.userResponse
   */
  export type SessionQuizz$userResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    where?: UserResponseWhereInput
    orderBy?: UserResponseOrderByWithRelationInput | UserResponseOrderByWithRelationInput[]
    cursor?: UserResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserResponseScalarFieldEnum | UserResponseScalarFieldEnum[]
  }

  /**
   * SessionQuizz without action
   */
  export type SessionQuizzDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionQuizz
     */
    select?: SessionQuizzSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionQuizz
     */
    omit?: SessionQuizzOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionQuizzInclude<ExtArgs> | null
  }


  /**
   * Model UserResponse
   */

  export type AggregateUserResponse = {
    _count: UserResponseCountAggregateOutputType | null
    _avg: UserResponseAvgAggregateOutputType | null
    _sum: UserResponseSumAggregateOutputType | null
    _min: UserResponseMinAggregateOutputType | null
    _max: UserResponseMaxAggregateOutputType | null
  }

  export type UserResponseAvgAggregateOutputType = {
    id: number | null
    questionId: number | null
    answerId: number | null
    sessionQuizzId: number | null
    score: number | null
    responseTime: number | null
    userId: number | null
  }

  export type UserResponseSumAggregateOutputType = {
    id: number | null
    questionId: number | null
    answerId: number | null
    sessionQuizzId: number | null
    score: number | null
    responseTime: number | null
    userId: number | null
  }

  export type UserResponseMinAggregateOutputType = {
    id: number | null
    questionId: number | null
    answerId: number | null
    sessionQuizzId: number | null
    score: number | null
    responseTime: number | null
    userId: number | null
  }

  export type UserResponseMaxAggregateOutputType = {
    id: number | null
    questionId: number | null
    answerId: number | null
    sessionQuizzId: number | null
    score: number | null
    responseTime: number | null
    userId: number | null
  }

  export type UserResponseCountAggregateOutputType = {
    id: number
    questionId: number
    answerId: number
    sessionQuizzId: number
    score: number
    responseTime: number
    userId: number
    _all: number
  }


  export type UserResponseAvgAggregateInputType = {
    id?: true
    questionId?: true
    answerId?: true
    sessionQuizzId?: true
    score?: true
    responseTime?: true
    userId?: true
  }

  export type UserResponseSumAggregateInputType = {
    id?: true
    questionId?: true
    answerId?: true
    sessionQuizzId?: true
    score?: true
    responseTime?: true
    userId?: true
  }

  export type UserResponseMinAggregateInputType = {
    id?: true
    questionId?: true
    answerId?: true
    sessionQuizzId?: true
    score?: true
    responseTime?: true
    userId?: true
  }

  export type UserResponseMaxAggregateInputType = {
    id?: true
    questionId?: true
    answerId?: true
    sessionQuizzId?: true
    score?: true
    responseTime?: true
    userId?: true
  }

  export type UserResponseCountAggregateInputType = {
    id?: true
    questionId?: true
    answerId?: true
    sessionQuizzId?: true
    score?: true
    responseTime?: true
    userId?: true
    _all?: true
  }

  export type UserResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserResponse to aggregate.
     */
    where?: UserResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserResponses to fetch.
     */
    orderBy?: UserResponseOrderByWithRelationInput | UserResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserResponses
    **/
    _count?: true | UserResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserResponseMaxAggregateInputType
  }

  export type GetUserResponseAggregateType<T extends UserResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateUserResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserResponse[P]>
      : GetScalarType<T[P], AggregateUserResponse[P]>
  }




  export type UserResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserResponseWhereInput
    orderBy?: UserResponseOrderByWithAggregationInput | UserResponseOrderByWithAggregationInput[]
    by: UserResponseScalarFieldEnum[] | UserResponseScalarFieldEnum
    having?: UserResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserResponseCountAggregateInputType | true
    _avg?: UserResponseAvgAggregateInputType
    _sum?: UserResponseSumAggregateInputType
    _min?: UserResponseMinAggregateInputType
    _max?: UserResponseMaxAggregateInputType
  }

  export type UserResponseGroupByOutputType = {
    id: number
    questionId: number
    answerId: number
    sessionQuizzId: number
    score: number
    responseTime: number
    userId: number
    _count: UserResponseCountAggregateOutputType | null
    _avg: UserResponseAvgAggregateOutputType | null
    _sum: UserResponseSumAggregateOutputType | null
    _min: UserResponseMinAggregateOutputType | null
    _max: UserResponseMaxAggregateOutputType | null
  }

  type GetUserResponseGroupByPayload<T extends UserResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserResponseGroupByOutputType[P]>
            : GetScalarType<T[P], UserResponseGroupByOutputType[P]>
        }
      >
    >


  export type UserResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    answerId?: boolean
    sessionQuizzId?: boolean
    score?: boolean
    responseTime?: boolean
    userId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    sessionQuizz?: boolean | SessionQuizzDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userResponse"]>

  export type UserResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    answerId?: boolean
    sessionQuizzId?: boolean
    score?: boolean
    responseTime?: boolean
    userId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    sessionQuizz?: boolean | SessionQuizzDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userResponse"]>

  export type UserResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    answerId?: boolean
    sessionQuizzId?: boolean
    score?: boolean
    responseTime?: boolean
    userId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    sessionQuizz?: boolean | SessionQuizzDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userResponse"]>

  export type UserResponseSelectScalar = {
    id?: boolean
    questionId?: boolean
    answerId?: boolean
    sessionQuizzId?: boolean
    score?: boolean
    responseTime?: boolean
    userId?: boolean
  }

  export type UserResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "answerId" | "sessionQuizzId" | "score" | "responseTime" | "userId", ExtArgs["result"]["userResponse"]>
  export type UserResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    sessionQuizz?: boolean | SessionQuizzDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    sessionQuizz?: boolean | SessionQuizzDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    answer?: boolean | AnswerDefaultArgs<ExtArgs>
    sessionQuizz?: boolean | SessionQuizzDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserResponse"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      answer: Prisma.$AnswerPayload<ExtArgs>
      sessionQuizz: Prisma.$SessionQuizzPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      questionId: number
      answerId: number
      sessionQuizzId: number
      score: number
      responseTime: number
      userId: number
    }, ExtArgs["result"]["userResponse"]>
    composites: {}
  }

  type UserResponseGetPayload<S extends boolean | null | undefined | UserResponseDefaultArgs> = $Result.GetResult<Prisma.$UserResponsePayload, S>

  type UserResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserResponseCountAggregateInputType | true
    }

  export interface UserResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserResponse'], meta: { name: 'UserResponse' } }
    /**
     * Find zero or one UserResponse that matches the filter.
     * @param {UserResponseFindUniqueArgs} args - Arguments to find a UserResponse
     * @example
     * // Get one UserResponse
     * const userResponse = await prisma.userResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserResponseFindUniqueArgs>(args: SelectSubset<T, UserResponseFindUniqueArgs<ExtArgs>>): Prisma__UserResponseClient<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserResponseFindUniqueOrThrowArgs} args - Arguments to find a UserResponse
     * @example
     * // Get one UserResponse
     * const userResponse = await prisma.userResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, UserResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserResponseClient<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResponseFindFirstArgs} args - Arguments to find a UserResponse
     * @example
     * // Get one UserResponse
     * const userResponse = await prisma.userResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserResponseFindFirstArgs>(args?: SelectSubset<T, UserResponseFindFirstArgs<ExtArgs>>): Prisma__UserResponseClient<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResponseFindFirstOrThrowArgs} args - Arguments to find a UserResponse
     * @example
     * // Get one UserResponse
     * const userResponse = await prisma.userResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, UserResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserResponseClient<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserResponses
     * const userResponses = await prisma.userResponse.findMany()
     * 
     * // Get first 10 UserResponses
     * const userResponses = await prisma.userResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userResponseWithIdOnly = await prisma.userResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserResponseFindManyArgs>(args?: SelectSubset<T, UserResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserResponse.
     * @param {UserResponseCreateArgs} args - Arguments to create a UserResponse.
     * @example
     * // Create one UserResponse
     * const UserResponse = await prisma.userResponse.create({
     *   data: {
     *     // ... data to create a UserResponse
     *   }
     * })
     * 
     */
    create<T extends UserResponseCreateArgs>(args: SelectSubset<T, UserResponseCreateArgs<ExtArgs>>): Prisma__UserResponseClient<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserResponses.
     * @param {UserResponseCreateManyArgs} args - Arguments to create many UserResponses.
     * @example
     * // Create many UserResponses
     * const userResponse = await prisma.userResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserResponseCreateManyArgs>(args?: SelectSubset<T, UserResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserResponses and returns the data saved in the database.
     * @param {UserResponseCreateManyAndReturnArgs} args - Arguments to create many UserResponses.
     * @example
     * // Create many UserResponses
     * const userResponse = await prisma.userResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserResponses and only return the `id`
     * const userResponseWithIdOnly = await prisma.userResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, UserResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserResponse.
     * @param {UserResponseDeleteArgs} args - Arguments to delete one UserResponse.
     * @example
     * // Delete one UserResponse
     * const UserResponse = await prisma.userResponse.delete({
     *   where: {
     *     // ... filter to delete one UserResponse
     *   }
     * })
     * 
     */
    delete<T extends UserResponseDeleteArgs>(args: SelectSubset<T, UserResponseDeleteArgs<ExtArgs>>): Prisma__UserResponseClient<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserResponse.
     * @param {UserResponseUpdateArgs} args - Arguments to update one UserResponse.
     * @example
     * // Update one UserResponse
     * const userResponse = await prisma.userResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserResponseUpdateArgs>(args: SelectSubset<T, UserResponseUpdateArgs<ExtArgs>>): Prisma__UserResponseClient<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserResponses.
     * @param {UserResponseDeleteManyArgs} args - Arguments to filter UserResponses to delete.
     * @example
     * // Delete a few UserResponses
     * const { count } = await prisma.userResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserResponseDeleteManyArgs>(args?: SelectSubset<T, UserResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserResponses
     * const userResponse = await prisma.userResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserResponseUpdateManyArgs>(args: SelectSubset<T, UserResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserResponses and returns the data updated in the database.
     * @param {UserResponseUpdateManyAndReturnArgs} args - Arguments to update many UserResponses.
     * @example
     * // Update many UserResponses
     * const userResponse = await prisma.userResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserResponses and only return the `id`
     * const userResponseWithIdOnly = await prisma.userResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, UserResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserResponse.
     * @param {UserResponseUpsertArgs} args - Arguments to update or create a UserResponse.
     * @example
     * // Update or create a UserResponse
     * const userResponse = await prisma.userResponse.upsert({
     *   create: {
     *     // ... data to create a UserResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserResponse we want to update
     *   }
     * })
     */
    upsert<T extends UserResponseUpsertArgs>(args: SelectSubset<T, UserResponseUpsertArgs<ExtArgs>>): Prisma__UserResponseClient<$Result.GetResult<Prisma.$UserResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResponseCountArgs} args - Arguments to filter UserResponses to count.
     * @example
     * // Count the number of UserResponses
     * const count = await prisma.userResponse.count({
     *   where: {
     *     // ... the filter for the UserResponses we want to count
     *   }
     * })
    **/
    count<T extends UserResponseCountArgs>(
      args?: Subset<T, UserResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserResponseAggregateArgs>(args: Subset<T, UserResponseAggregateArgs>): Prisma.PrismaPromise<GetUserResponseAggregateType<T>>

    /**
     * Group by UserResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserResponseGroupByArgs} args - Group by arguments.
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
      T extends UserResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserResponseGroupByArgs['orderBy'] }
        : { orderBy?: UserResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserResponse model
   */
  readonly fields: UserResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answer<T extends AnswerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnswerDefaultArgs<ExtArgs>>): Prisma__AnswerClient<$Result.GetResult<Prisma.$AnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessionQuizz<T extends SessionQuizzDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionQuizzDefaultArgs<ExtArgs>>): Prisma__SessionQuizzClient<$Result.GetResult<Prisma.$SessionQuizzPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserResponse model
   */
  interface UserResponseFieldRefs {
    readonly id: FieldRef<"UserResponse", 'Int'>
    readonly questionId: FieldRef<"UserResponse", 'Int'>
    readonly answerId: FieldRef<"UserResponse", 'Int'>
    readonly sessionQuizzId: FieldRef<"UserResponse", 'Int'>
    readonly score: FieldRef<"UserResponse", 'Int'>
    readonly responseTime: FieldRef<"UserResponse", 'Float'>
    readonly userId: FieldRef<"UserResponse", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserResponse findUnique
   */
  export type UserResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserResponse to fetch.
     */
    where: UserResponseWhereUniqueInput
  }

  /**
   * UserResponse findUniqueOrThrow
   */
  export type UserResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserResponse to fetch.
     */
    where: UserResponseWhereUniqueInput
  }

  /**
   * UserResponse findFirst
   */
  export type UserResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserResponse to fetch.
     */
    where?: UserResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserResponses to fetch.
     */
    orderBy?: UserResponseOrderByWithRelationInput | UserResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserResponses.
     */
    cursor?: UserResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserResponses.
     */
    distinct?: UserResponseScalarFieldEnum | UserResponseScalarFieldEnum[]
  }

  /**
   * UserResponse findFirstOrThrow
   */
  export type UserResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserResponse to fetch.
     */
    where?: UserResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserResponses to fetch.
     */
    orderBy?: UserResponseOrderByWithRelationInput | UserResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserResponses.
     */
    cursor?: UserResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserResponses.
     */
    distinct?: UserResponseScalarFieldEnum | UserResponseScalarFieldEnum[]
  }

  /**
   * UserResponse findMany
   */
  export type UserResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserResponses to fetch.
     */
    where?: UserResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserResponses to fetch.
     */
    orderBy?: UserResponseOrderByWithRelationInput | UserResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserResponses.
     */
    cursor?: UserResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserResponses.
     */
    skip?: number
    distinct?: UserResponseScalarFieldEnum | UserResponseScalarFieldEnum[]
  }

  /**
   * UserResponse create
   */
  export type UserResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a UserResponse.
     */
    data: XOR<UserResponseCreateInput, UserResponseUncheckedCreateInput>
  }

  /**
   * UserResponse createMany
   */
  export type UserResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserResponses.
     */
    data: UserResponseCreateManyInput | UserResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserResponse createManyAndReturn
   */
  export type UserResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * The data used to create many UserResponses.
     */
    data: UserResponseCreateManyInput | UserResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserResponse update
   */
  export type UserResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a UserResponse.
     */
    data: XOR<UserResponseUpdateInput, UserResponseUncheckedUpdateInput>
    /**
     * Choose, which UserResponse to update.
     */
    where: UserResponseWhereUniqueInput
  }

  /**
   * UserResponse updateMany
   */
  export type UserResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserResponses.
     */
    data: XOR<UserResponseUpdateManyMutationInput, UserResponseUncheckedUpdateManyInput>
    /**
     * Filter which UserResponses to update
     */
    where?: UserResponseWhereInput
    /**
     * Limit how many UserResponses to update.
     */
    limit?: number
  }

  /**
   * UserResponse updateManyAndReturn
   */
  export type UserResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * The data used to update UserResponses.
     */
    data: XOR<UserResponseUpdateManyMutationInput, UserResponseUncheckedUpdateManyInput>
    /**
     * Filter which UserResponses to update
     */
    where?: UserResponseWhereInput
    /**
     * Limit how many UserResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserResponse upsert
   */
  export type UserResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the UserResponse to update in case it exists.
     */
    where: UserResponseWhereUniqueInput
    /**
     * In case the UserResponse found by the `where` argument doesn't exist, create a new UserResponse with this data.
     */
    create: XOR<UserResponseCreateInput, UserResponseUncheckedCreateInput>
    /**
     * In case the UserResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserResponseUpdateInput, UserResponseUncheckedUpdateInput>
  }

  /**
   * UserResponse delete
   */
  export type UserResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
    /**
     * Filter which UserResponse to delete.
     */
    where: UserResponseWhereUniqueInput
  }

  /**
   * UserResponse deleteMany
   */
  export type UserResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserResponses to delete
     */
    where?: UserResponseWhereInput
    /**
     * Limit how many UserResponses to delete.
     */
    limit?: number
  }

  /**
   * UserResponse without action
   */
  export type UserResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserResponse
     */
    select?: UserResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserResponse
     */
    omit?: UserResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserResponseInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QuizzScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type QuizzScalarFieldEnum = (typeof QuizzScalarFieldEnum)[keyof typeof QuizzScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    timeMax: 'timeMax',
    scoreMax: 'scoreMax',
    scoreMin: 'scoreMin',
    question: 'question',
    explication: 'explication',
    quizzId: 'quizzId'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    isGoodAnswers: 'isGoodAnswers',
    name: 'name',
    questionId: 'questionId'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const SessionQuizzScalarFieldEnum: {
    id: 'id',
    quizzId: 'quizzId',
    presenterId: 'presenterId'
  };

  export type SessionQuizzScalarFieldEnum = (typeof SessionQuizzScalarFieldEnum)[keyof typeof SessionQuizzScalarFieldEnum]


  export const UserResponseScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    answerId: 'answerId',
    sessionQuizzId: 'sessionQuizzId',
    score: 'score',
    responseTime: 'responseTime',
    userId: 'userId'
  };

  export type UserResponseScalarFieldEnum = (typeof UserResponseScalarFieldEnum)[keyof typeof UserResponseScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userResponse?: UserResponseListRelationFilter
    sessionGame?: SessionQuizzListRelationFilter
    sessionPresenter?: SessionQuizzListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userResponse?: UserResponseOrderByRelationAggregateInput
    sessionGame?: SessionQuizzOrderByRelationAggregateInput
    sessionPresenter?: SessionQuizzOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userResponse?: UserResponseListRelationFilter
    sessionGame?: SessionQuizzListRelationFilter
    sessionPresenter?: SessionQuizzListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type QuizzWhereInput = {
    AND?: QuizzWhereInput | QuizzWhereInput[]
    OR?: QuizzWhereInput[]
    NOT?: QuizzWhereInput | QuizzWhereInput[]
    id?: IntFilter<"Quizz"> | number
    name?: StringFilter<"Quizz"> | string
    description?: StringFilter<"Quizz"> | string
    questions?: QuestionListRelationFilter
    sessionQuizz?: SessionQuizzListRelationFilter
  }

  export type QuizzOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    sessionQuizz?: SessionQuizzOrderByRelationAggregateInput
  }

  export type QuizzWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuizzWhereInput | QuizzWhereInput[]
    OR?: QuizzWhereInput[]
    NOT?: QuizzWhereInput | QuizzWhereInput[]
    name?: StringFilter<"Quizz"> | string
    description?: StringFilter<"Quizz"> | string
    questions?: QuestionListRelationFilter
    sessionQuizz?: SessionQuizzListRelationFilter
  }, "id">

  export type QuizzOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: QuizzCountOrderByAggregateInput
    _avg?: QuizzAvgOrderByAggregateInput
    _max?: QuizzMaxOrderByAggregateInput
    _min?: QuizzMinOrderByAggregateInput
    _sum?: QuizzSumOrderByAggregateInput
  }

  export type QuizzScalarWhereWithAggregatesInput = {
    AND?: QuizzScalarWhereWithAggregatesInput | QuizzScalarWhereWithAggregatesInput[]
    OR?: QuizzScalarWhereWithAggregatesInput[]
    NOT?: QuizzScalarWhereWithAggregatesInput | QuizzScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Quizz"> | number
    name?: StringWithAggregatesFilter<"Quizz"> | string
    description?: StringWithAggregatesFilter<"Quizz"> | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: IntFilter<"Question"> | number
    timeMax?: IntFilter<"Question"> | number
    scoreMax?: IntFilter<"Question"> | number
    scoreMin?: IntFilter<"Question"> | number
    question?: StringFilter<"Question"> | string
    explication?: StringFilter<"Question"> | string
    quizzId?: IntFilter<"Question"> | number
    quizz?: XOR<QuizzScalarRelationFilter, QuizzWhereInput>
    answers?: AnswerListRelationFilter
    userResponse?: UserResponseListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    timeMax?: SortOrder
    scoreMax?: SortOrder
    scoreMin?: SortOrder
    question?: SortOrder
    explication?: SortOrder
    quizzId?: SortOrder
    quizz?: QuizzOrderByWithRelationInput
    answers?: AnswerOrderByRelationAggregateInput
    userResponse?: UserResponseOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    timeMax?: IntFilter<"Question"> | number
    scoreMax?: IntFilter<"Question"> | number
    scoreMin?: IntFilter<"Question"> | number
    question?: StringFilter<"Question"> | string
    explication?: StringFilter<"Question"> | string
    quizzId?: IntFilter<"Question"> | number
    quizz?: XOR<QuizzScalarRelationFilter, QuizzWhereInput>
    answers?: AnswerListRelationFilter
    userResponse?: UserResponseListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    timeMax?: SortOrder
    scoreMax?: SortOrder
    scoreMin?: SortOrder
    question?: SortOrder
    explication?: SortOrder
    quizzId?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question"> | number
    timeMax?: IntWithAggregatesFilter<"Question"> | number
    scoreMax?: IntWithAggregatesFilter<"Question"> | number
    scoreMin?: IntWithAggregatesFilter<"Question"> | number
    question?: StringWithAggregatesFilter<"Question"> | string
    explication?: StringWithAggregatesFilter<"Question"> | string
    quizzId?: IntWithAggregatesFilter<"Question"> | number
  }

  export type AnswerWhereInput = {
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    id?: IntFilter<"Answer"> | number
    isGoodAnswers?: BoolFilter<"Answer"> | boolean
    name?: StringFilter<"Answer"> | string
    questionId?: IntFilter<"Answer"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    userResponse?: UserResponseListRelationFilter
  }

  export type AnswerOrderByWithRelationInput = {
    id?: SortOrder
    isGoodAnswers?: SortOrder
    name?: SortOrder
    questionId?: SortOrder
    question?: QuestionOrderByWithRelationInput
    userResponse?: UserResponseOrderByRelationAggregateInput
  }

  export type AnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnswerWhereInput | AnswerWhereInput[]
    OR?: AnswerWhereInput[]
    NOT?: AnswerWhereInput | AnswerWhereInput[]
    isGoodAnswers?: BoolFilter<"Answer"> | boolean
    name?: StringFilter<"Answer"> | string
    questionId?: IntFilter<"Answer"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    userResponse?: UserResponseListRelationFilter
  }, "id">

  export type AnswerOrderByWithAggregationInput = {
    id?: SortOrder
    isGoodAnswers?: SortOrder
    name?: SortOrder
    questionId?: SortOrder
    _count?: AnswerCountOrderByAggregateInput
    _avg?: AnswerAvgOrderByAggregateInput
    _max?: AnswerMaxOrderByAggregateInput
    _min?: AnswerMinOrderByAggregateInput
    _sum?: AnswerSumOrderByAggregateInput
  }

  export type AnswerScalarWhereWithAggregatesInput = {
    AND?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    OR?: AnswerScalarWhereWithAggregatesInput[]
    NOT?: AnswerScalarWhereWithAggregatesInput | AnswerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Answer"> | number
    isGoodAnswers?: BoolWithAggregatesFilter<"Answer"> | boolean
    name?: StringWithAggregatesFilter<"Answer"> | string
    questionId?: IntWithAggregatesFilter<"Answer"> | number
  }

  export type SessionQuizzWhereInput = {
    AND?: SessionQuizzWhereInput | SessionQuizzWhereInput[]
    OR?: SessionQuizzWhereInput[]
    NOT?: SessionQuizzWhereInput | SessionQuizzWhereInput[]
    id?: IntFilter<"SessionQuizz"> | number
    quizzId?: IntFilter<"SessionQuizz"> | number
    presenterId?: IntFilter<"SessionQuizz"> | number
    quizz?: XOR<QuizzScalarRelationFilter, QuizzWhereInput>
    participants?: UserListRelationFilter
    presenter?: XOR<UserScalarRelationFilter, UserWhereInput>
    userResponse?: UserResponseListRelationFilter
  }

  export type SessionQuizzOrderByWithRelationInput = {
    id?: SortOrder
    quizzId?: SortOrder
    presenterId?: SortOrder
    quizz?: QuizzOrderByWithRelationInput
    participants?: UserOrderByRelationAggregateInput
    presenter?: UserOrderByWithRelationInput
    userResponse?: UserResponseOrderByRelationAggregateInput
  }

  export type SessionQuizzWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SessionQuizzWhereInput | SessionQuizzWhereInput[]
    OR?: SessionQuizzWhereInput[]
    NOT?: SessionQuizzWhereInput | SessionQuizzWhereInput[]
    quizzId?: IntFilter<"SessionQuizz"> | number
    presenterId?: IntFilter<"SessionQuizz"> | number
    quizz?: XOR<QuizzScalarRelationFilter, QuizzWhereInput>
    participants?: UserListRelationFilter
    presenter?: XOR<UserScalarRelationFilter, UserWhereInput>
    userResponse?: UserResponseListRelationFilter
  }, "id">

  export type SessionQuizzOrderByWithAggregationInput = {
    id?: SortOrder
    quizzId?: SortOrder
    presenterId?: SortOrder
    _count?: SessionQuizzCountOrderByAggregateInput
    _avg?: SessionQuizzAvgOrderByAggregateInput
    _max?: SessionQuizzMaxOrderByAggregateInput
    _min?: SessionQuizzMinOrderByAggregateInput
    _sum?: SessionQuizzSumOrderByAggregateInput
  }

  export type SessionQuizzScalarWhereWithAggregatesInput = {
    AND?: SessionQuizzScalarWhereWithAggregatesInput | SessionQuizzScalarWhereWithAggregatesInput[]
    OR?: SessionQuizzScalarWhereWithAggregatesInput[]
    NOT?: SessionQuizzScalarWhereWithAggregatesInput | SessionQuizzScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SessionQuizz"> | number
    quizzId?: IntWithAggregatesFilter<"SessionQuizz"> | number
    presenterId?: IntWithAggregatesFilter<"SessionQuizz"> | number
  }

  export type UserResponseWhereInput = {
    AND?: UserResponseWhereInput | UserResponseWhereInput[]
    OR?: UserResponseWhereInput[]
    NOT?: UserResponseWhereInput | UserResponseWhereInput[]
    id?: IntFilter<"UserResponse"> | number
    questionId?: IntFilter<"UserResponse"> | number
    answerId?: IntFilter<"UserResponse"> | number
    sessionQuizzId?: IntFilter<"UserResponse"> | number
    score?: IntFilter<"UserResponse"> | number
    responseTime?: FloatFilter<"UserResponse"> | number
    userId?: IntFilter<"UserResponse"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    answer?: XOR<AnswerScalarRelationFilter, AnswerWhereInput>
    sessionQuizz?: XOR<SessionQuizzScalarRelationFilter, SessionQuizzWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserResponseOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    sessionQuizzId?: SortOrder
    score?: SortOrder
    responseTime?: SortOrder
    userId?: SortOrder
    question?: QuestionOrderByWithRelationInput
    answer?: AnswerOrderByWithRelationInput
    sessionQuizz?: SessionQuizzOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    questionId?: number
    sessionQuizzId?: number
    AND?: UserResponseWhereInput | UserResponseWhereInput[]
    OR?: UserResponseWhereInput[]
    NOT?: UserResponseWhereInput | UserResponseWhereInput[]
    answerId?: IntFilter<"UserResponse"> | number
    score?: IntFilter<"UserResponse"> | number
    responseTime?: FloatFilter<"UserResponse"> | number
    userId?: IntFilter<"UserResponse"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    answer?: XOR<AnswerScalarRelationFilter, AnswerWhereInput>
    sessionQuizz?: XOR<SessionQuizzScalarRelationFilter, SessionQuizzWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "questionId" | "sessionQuizzId">

  export type UserResponseOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    sessionQuizzId?: SortOrder
    score?: SortOrder
    responseTime?: SortOrder
    userId?: SortOrder
    _count?: UserResponseCountOrderByAggregateInput
    _avg?: UserResponseAvgOrderByAggregateInput
    _max?: UserResponseMaxOrderByAggregateInput
    _min?: UserResponseMinOrderByAggregateInput
    _sum?: UserResponseSumOrderByAggregateInput
  }

  export type UserResponseScalarWhereWithAggregatesInput = {
    AND?: UserResponseScalarWhereWithAggregatesInput | UserResponseScalarWhereWithAggregatesInput[]
    OR?: UserResponseScalarWhereWithAggregatesInput[]
    NOT?: UserResponseScalarWhereWithAggregatesInput | UserResponseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserResponse"> | number
    questionId?: IntWithAggregatesFilter<"UserResponse"> | number
    answerId?: IntWithAggregatesFilter<"UserResponse"> | number
    sessionQuizzId?: IntWithAggregatesFilter<"UserResponse"> | number
    score?: IntWithAggregatesFilter<"UserResponse"> | number
    responseTime?: FloatWithAggregatesFilter<"UserResponse"> | number
    userId?: IntWithAggregatesFilter<"UserResponse"> | number
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userResponse?: UserResponseCreateNestedManyWithoutUserInput
    sessionGame?: SessionQuizzCreateNestedManyWithoutParticipantsInput
    sessionPresenter?: SessionQuizzCreateNestedManyWithoutPresenterInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userResponse?: UserResponseUncheckedCreateNestedManyWithoutUserInput
    sessionGame?: SessionQuizzUncheckedCreateNestedManyWithoutParticipantsInput
    sessionPresenter?: SessionQuizzUncheckedCreateNestedManyWithoutPresenterInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userResponse?: UserResponseUpdateManyWithoutUserNestedInput
    sessionGame?: SessionQuizzUpdateManyWithoutParticipantsNestedInput
    sessionPresenter?: SessionQuizzUpdateManyWithoutPresenterNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userResponse?: UserResponseUncheckedUpdateManyWithoutUserNestedInput
    sessionGame?: SessionQuizzUncheckedUpdateManyWithoutParticipantsNestedInput
    sessionPresenter?: SessionQuizzUncheckedUpdateManyWithoutPresenterNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizzCreateInput = {
    name: string
    description: string
    questions?: QuestionCreateNestedManyWithoutQuizzInput
    sessionQuizz?: SessionQuizzCreateNestedManyWithoutQuizzInput
  }

  export type QuizzUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizzInput
    sessionQuizz?: SessionQuizzUncheckedCreateNestedManyWithoutQuizzInput
  }

  export type QuizzUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUpdateManyWithoutQuizzNestedInput
    sessionQuizz?: SessionQuizzUpdateManyWithoutQuizzNestedInput
  }

  export type QuizzUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizzNestedInput
    sessionQuizz?: SessionQuizzUncheckedUpdateManyWithoutQuizzNestedInput
  }

  export type QuizzCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type QuizzUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type QuizzUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateInput = {
    timeMax: number
    scoreMax: number
    scoreMin: number
    question: string
    explication: string
    quizz: QuizzCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    userResponse?: UserResponseCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    timeMax: number
    scoreMax: number
    scoreMin: number
    question: string
    explication: string
    quizzId: number
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    userResponse?: UserResponseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    timeMax?: IntFieldUpdateOperationsInput | number
    scoreMax?: IntFieldUpdateOperationsInput | number
    scoreMin?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    explication?: StringFieldUpdateOperationsInput | string
    quizz?: QuizzUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    userResponse?: UserResponseUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timeMax?: IntFieldUpdateOperationsInput | number
    scoreMax?: IntFieldUpdateOperationsInput | number
    scoreMin?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    explication?: StringFieldUpdateOperationsInput | string
    quizzId?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    userResponse?: UserResponseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    timeMax: number
    scoreMax: number
    scoreMin: number
    question: string
    explication: string
    quizzId: number
  }

  export type QuestionUpdateManyMutationInput = {
    timeMax?: IntFieldUpdateOperationsInput | number
    scoreMax?: IntFieldUpdateOperationsInput | number
    scoreMin?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    explication?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timeMax?: IntFieldUpdateOperationsInput | number
    scoreMax?: IntFieldUpdateOperationsInput | number
    scoreMin?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    explication?: StringFieldUpdateOperationsInput | string
    quizzId?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerCreateInput = {
    isGoodAnswers: boolean
    name: string
    question: QuestionCreateNestedOneWithoutAnswersInput
    userResponse?: UserResponseCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateInput = {
    id?: number
    isGoodAnswers: boolean
    name: string
    questionId: number
    userResponse?: UserResponseUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUpdateInput = {
    isGoodAnswers?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
    userResponse?: UserResponseUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isGoodAnswers?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    questionId?: IntFieldUpdateOperationsInput | number
    userResponse?: UserResponseUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerCreateManyInput = {
    id?: number
    isGoodAnswers: boolean
    name: string
    questionId: number
  }

  export type AnswerUpdateManyMutationInput = {
    isGoodAnswers?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AnswerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isGoodAnswers?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    questionId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionQuizzCreateInput = {
    quizz: QuizzCreateNestedOneWithoutSessionQuizzInput
    participants?: UserCreateNestedManyWithoutSessionGameInput
    presenter: UserCreateNestedOneWithoutSessionPresenterInput
    userResponse?: UserResponseCreateNestedManyWithoutSessionQuizzInput
  }

  export type SessionQuizzUncheckedCreateInput = {
    id?: number
    quizzId: number
    presenterId: number
    participants?: UserUncheckedCreateNestedManyWithoutSessionGameInput
    userResponse?: UserResponseUncheckedCreateNestedManyWithoutSessionQuizzInput
  }

  export type SessionQuizzUpdateInput = {
    quizz?: QuizzUpdateOneRequiredWithoutSessionQuizzNestedInput
    participants?: UserUpdateManyWithoutSessionGameNestedInput
    presenter?: UserUpdateOneRequiredWithoutSessionPresenterNestedInput
    userResponse?: UserResponseUpdateManyWithoutSessionQuizzNestedInput
  }

  export type SessionQuizzUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizzId?: IntFieldUpdateOperationsInput | number
    presenterId?: IntFieldUpdateOperationsInput | number
    participants?: UserUncheckedUpdateManyWithoutSessionGameNestedInput
    userResponse?: UserResponseUncheckedUpdateManyWithoutSessionQuizzNestedInput
  }

  export type SessionQuizzCreateManyInput = {
    id?: number
    quizzId: number
    presenterId: number
  }

  export type SessionQuizzUpdateManyMutationInput = {

  }

  export type SessionQuizzUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizzId?: IntFieldUpdateOperationsInput | number
    presenterId?: IntFieldUpdateOperationsInput | number
  }

  export type UserResponseCreateInput = {
    score: number
    responseTime: number
    question: QuestionCreateNestedOneWithoutUserResponseInput
    answer: AnswerCreateNestedOneWithoutUserResponseInput
    sessionQuizz: SessionQuizzCreateNestedOneWithoutUserResponseInput
    user: UserCreateNestedOneWithoutUserResponseInput
  }

  export type UserResponseUncheckedCreateInput = {
    id?: number
    questionId: number
    answerId: number
    sessionQuizzId: number
    score: number
    responseTime: number
    userId: number
  }

  export type UserResponseUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    question?: QuestionUpdateOneRequiredWithoutUserResponseNestedInput
    answer?: AnswerUpdateOneRequiredWithoutUserResponseNestedInput
    sessionQuizz?: SessionQuizzUpdateOneRequiredWithoutUserResponseNestedInput
    user?: UserUpdateOneRequiredWithoutUserResponseNestedInput
  }

  export type UserResponseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    sessionQuizzId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserResponseCreateManyInput = {
    id?: number
    questionId: number
    answerId: number
    sessionQuizzId: number
    score: number
    responseTime: number
    userId: number
  }

  export type UserResponseUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
  }

  export type UserResponseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    sessionQuizzId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
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

  export type UserResponseListRelationFilter = {
    every?: UserResponseWhereInput
    some?: UserResponseWhereInput
    none?: UserResponseWhereInput
  }

  export type SessionQuizzListRelationFilter = {
    every?: SessionQuizzWhereInput
    some?: SessionQuizzWhereInput
    none?: SessionQuizzWhereInput
  }

  export type UserResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionQuizzOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizzCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type QuizzAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuizzMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type QuizzMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type QuizzSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuizzScalarRelationFilter = {
    is?: QuizzWhereInput
    isNot?: QuizzWhereInput
  }

  export type AnswerListRelationFilter = {
    every?: AnswerWhereInput
    some?: AnswerWhereInput
    none?: AnswerWhereInput
  }

  export type AnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    timeMax?: SortOrder
    scoreMax?: SortOrder
    scoreMin?: SortOrder
    question?: SortOrder
    explication?: SortOrder
    quizzId?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    timeMax?: SortOrder
    scoreMax?: SortOrder
    scoreMin?: SortOrder
    quizzId?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    timeMax?: SortOrder
    scoreMax?: SortOrder
    scoreMin?: SortOrder
    question?: SortOrder
    explication?: SortOrder
    quizzId?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    timeMax?: SortOrder
    scoreMax?: SortOrder
    scoreMin?: SortOrder
    question?: SortOrder
    explication?: SortOrder
    quizzId?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    timeMax?: SortOrder
    scoreMax?: SortOrder
    scoreMin?: SortOrder
    quizzId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AnswerCountOrderByAggregateInput = {
    id?: SortOrder
    isGoodAnswers?: SortOrder
    name?: SortOrder
    questionId?: SortOrder
  }

  export type AnswerAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type AnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    isGoodAnswers?: SortOrder
    name?: SortOrder
    questionId?: SortOrder
  }

  export type AnswerMinOrderByAggregateInput = {
    id?: SortOrder
    isGoodAnswers?: SortOrder
    name?: SortOrder
    questionId?: SortOrder
  }

  export type AnswerSumOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionQuizzCountOrderByAggregateInput = {
    id?: SortOrder
    quizzId?: SortOrder
    presenterId?: SortOrder
  }

  export type SessionQuizzAvgOrderByAggregateInput = {
    id?: SortOrder
    quizzId?: SortOrder
    presenterId?: SortOrder
  }

  export type SessionQuizzMaxOrderByAggregateInput = {
    id?: SortOrder
    quizzId?: SortOrder
    presenterId?: SortOrder
  }

  export type SessionQuizzMinOrderByAggregateInput = {
    id?: SortOrder
    quizzId?: SortOrder
    presenterId?: SortOrder
  }

  export type SessionQuizzSumOrderByAggregateInput = {
    id?: SortOrder
    quizzId?: SortOrder
    presenterId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AnswerScalarRelationFilter = {
    is?: AnswerWhereInput
    isNot?: AnswerWhereInput
  }

  export type SessionQuizzScalarRelationFilter = {
    is?: SessionQuizzWhereInput
    isNot?: SessionQuizzWhereInput
  }

  export type UserResponseCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    sessionQuizzId?: SortOrder
    score?: SortOrder
    responseTime?: SortOrder
    userId?: SortOrder
  }

  export type UserResponseAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    sessionQuizzId?: SortOrder
    score?: SortOrder
    responseTime?: SortOrder
    userId?: SortOrder
  }

  export type UserResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    sessionQuizzId?: SortOrder
    score?: SortOrder
    responseTime?: SortOrder
    userId?: SortOrder
  }

  export type UserResponseMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    sessionQuizzId?: SortOrder
    score?: SortOrder
    responseTime?: SortOrder
    userId?: SortOrder
  }

  export type UserResponseSumOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    answerId?: SortOrder
    sessionQuizzId?: SortOrder
    score?: SortOrder
    responseTime?: SortOrder
    userId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserResponseCreateNestedManyWithoutUserInput = {
    create?: XOR<UserResponseCreateWithoutUserInput, UserResponseUncheckedCreateWithoutUserInput> | UserResponseCreateWithoutUserInput[] | UserResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutUserInput | UserResponseCreateOrConnectWithoutUserInput[]
    createMany?: UserResponseCreateManyUserInputEnvelope
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
  }

  export type SessionQuizzCreateNestedManyWithoutParticipantsInput = {
    create?: XOR<SessionQuizzCreateWithoutParticipantsInput, SessionQuizzUncheckedCreateWithoutParticipantsInput> | SessionQuizzCreateWithoutParticipantsInput[] | SessionQuizzUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: SessionQuizzCreateOrConnectWithoutParticipantsInput | SessionQuizzCreateOrConnectWithoutParticipantsInput[]
    connect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
  }

  export type SessionQuizzCreateNestedManyWithoutPresenterInput = {
    create?: XOR<SessionQuizzCreateWithoutPresenterInput, SessionQuizzUncheckedCreateWithoutPresenterInput> | SessionQuizzCreateWithoutPresenterInput[] | SessionQuizzUncheckedCreateWithoutPresenterInput[]
    connectOrCreate?: SessionQuizzCreateOrConnectWithoutPresenterInput | SessionQuizzCreateOrConnectWithoutPresenterInput[]
    createMany?: SessionQuizzCreateManyPresenterInputEnvelope
    connect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
  }

  export type UserResponseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserResponseCreateWithoutUserInput, UserResponseUncheckedCreateWithoutUserInput> | UserResponseCreateWithoutUserInput[] | UserResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutUserInput | UserResponseCreateOrConnectWithoutUserInput[]
    createMany?: UserResponseCreateManyUserInputEnvelope
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
  }

  export type SessionQuizzUncheckedCreateNestedManyWithoutParticipantsInput = {
    create?: XOR<SessionQuizzCreateWithoutParticipantsInput, SessionQuizzUncheckedCreateWithoutParticipantsInput> | SessionQuizzCreateWithoutParticipantsInput[] | SessionQuizzUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: SessionQuizzCreateOrConnectWithoutParticipantsInput | SessionQuizzCreateOrConnectWithoutParticipantsInput[]
    connect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
  }

  export type SessionQuizzUncheckedCreateNestedManyWithoutPresenterInput = {
    create?: XOR<SessionQuizzCreateWithoutPresenterInput, SessionQuizzUncheckedCreateWithoutPresenterInput> | SessionQuizzCreateWithoutPresenterInput[] | SessionQuizzUncheckedCreateWithoutPresenterInput[]
    connectOrCreate?: SessionQuizzCreateOrConnectWithoutPresenterInput | SessionQuizzCreateOrConnectWithoutPresenterInput[]
    createMany?: SessionQuizzCreateManyPresenterInputEnvelope
    connect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserResponseUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserResponseCreateWithoutUserInput, UserResponseUncheckedCreateWithoutUserInput> | UserResponseCreateWithoutUserInput[] | UserResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutUserInput | UserResponseCreateOrConnectWithoutUserInput[]
    upsert?: UserResponseUpsertWithWhereUniqueWithoutUserInput | UserResponseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserResponseCreateManyUserInputEnvelope
    set?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    disconnect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    delete?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    update?: UserResponseUpdateWithWhereUniqueWithoutUserInput | UserResponseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserResponseUpdateManyWithWhereWithoutUserInput | UserResponseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
  }

  export type SessionQuizzUpdateManyWithoutParticipantsNestedInput = {
    create?: XOR<SessionQuizzCreateWithoutParticipantsInput, SessionQuizzUncheckedCreateWithoutParticipantsInput> | SessionQuizzCreateWithoutParticipantsInput[] | SessionQuizzUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: SessionQuizzCreateOrConnectWithoutParticipantsInput | SessionQuizzCreateOrConnectWithoutParticipantsInput[]
    upsert?: SessionQuizzUpsertWithWhereUniqueWithoutParticipantsInput | SessionQuizzUpsertWithWhereUniqueWithoutParticipantsInput[]
    set?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    disconnect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    delete?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    connect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    update?: SessionQuizzUpdateWithWhereUniqueWithoutParticipantsInput | SessionQuizzUpdateWithWhereUniqueWithoutParticipantsInput[]
    updateMany?: SessionQuizzUpdateManyWithWhereWithoutParticipantsInput | SessionQuizzUpdateManyWithWhereWithoutParticipantsInput[]
    deleteMany?: SessionQuizzScalarWhereInput | SessionQuizzScalarWhereInput[]
  }

  export type SessionQuizzUpdateManyWithoutPresenterNestedInput = {
    create?: XOR<SessionQuizzCreateWithoutPresenterInput, SessionQuizzUncheckedCreateWithoutPresenterInput> | SessionQuizzCreateWithoutPresenterInput[] | SessionQuizzUncheckedCreateWithoutPresenterInput[]
    connectOrCreate?: SessionQuizzCreateOrConnectWithoutPresenterInput | SessionQuizzCreateOrConnectWithoutPresenterInput[]
    upsert?: SessionQuizzUpsertWithWhereUniqueWithoutPresenterInput | SessionQuizzUpsertWithWhereUniqueWithoutPresenterInput[]
    createMany?: SessionQuizzCreateManyPresenterInputEnvelope
    set?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    disconnect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    delete?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    connect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    update?: SessionQuizzUpdateWithWhereUniqueWithoutPresenterInput | SessionQuizzUpdateWithWhereUniqueWithoutPresenterInput[]
    updateMany?: SessionQuizzUpdateManyWithWhereWithoutPresenterInput | SessionQuizzUpdateManyWithWhereWithoutPresenterInput[]
    deleteMany?: SessionQuizzScalarWhereInput | SessionQuizzScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserResponseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserResponseCreateWithoutUserInput, UserResponseUncheckedCreateWithoutUserInput> | UserResponseCreateWithoutUserInput[] | UserResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutUserInput | UserResponseCreateOrConnectWithoutUserInput[]
    upsert?: UserResponseUpsertWithWhereUniqueWithoutUserInput | UserResponseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserResponseCreateManyUserInputEnvelope
    set?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    disconnect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    delete?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    update?: UserResponseUpdateWithWhereUniqueWithoutUserInput | UserResponseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserResponseUpdateManyWithWhereWithoutUserInput | UserResponseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
  }

  export type SessionQuizzUncheckedUpdateManyWithoutParticipantsNestedInput = {
    create?: XOR<SessionQuizzCreateWithoutParticipantsInput, SessionQuizzUncheckedCreateWithoutParticipantsInput> | SessionQuizzCreateWithoutParticipantsInput[] | SessionQuizzUncheckedCreateWithoutParticipantsInput[]
    connectOrCreate?: SessionQuizzCreateOrConnectWithoutParticipantsInput | SessionQuizzCreateOrConnectWithoutParticipantsInput[]
    upsert?: SessionQuizzUpsertWithWhereUniqueWithoutParticipantsInput | SessionQuizzUpsertWithWhereUniqueWithoutParticipantsInput[]
    set?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    disconnect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    delete?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    connect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    update?: SessionQuizzUpdateWithWhereUniqueWithoutParticipantsInput | SessionQuizzUpdateWithWhereUniqueWithoutParticipantsInput[]
    updateMany?: SessionQuizzUpdateManyWithWhereWithoutParticipantsInput | SessionQuizzUpdateManyWithWhereWithoutParticipantsInput[]
    deleteMany?: SessionQuizzScalarWhereInput | SessionQuizzScalarWhereInput[]
  }

  export type SessionQuizzUncheckedUpdateManyWithoutPresenterNestedInput = {
    create?: XOR<SessionQuizzCreateWithoutPresenterInput, SessionQuizzUncheckedCreateWithoutPresenterInput> | SessionQuizzCreateWithoutPresenterInput[] | SessionQuizzUncheckedCreateWithoutPresenterInput[]
    connectOrCreate?: SessionQuizzCreateOrConnectWithoutPresenterInput | SessionQuizzCreateOrConnectWithoutPresenterInput[]
    upsert?: SessionQuizzUpsertWithWhereUniqueWithoutPresenterInput | SessionQuizzUpsertWithWhereUniqueWithoutPresenterInput[]
    createMany?: SessionQuizzCreateManyPresenterInputEnvelope
    set?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    disconnect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    delete?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    connect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    update?: SessionQuizzUpdateWithWhereUniqueWithoutPresenterInput | SessionQuizzUpdateWithWhereUniqueWithoutPresenterInput[]
    updateMany?: SessionQuizzUpdateManyWithWhereWithoutPresenterInput | SessionQuizzUpdateManyWithWhereWithoutPresenterInput[]
    deleteMany?: SessionQuizzScalarWhereInput | SessionQuizzScalarWhereInput[]
  }

  export type QuestionCreateNestedManyWithoutQuizzInput = {
    create?: XOR<QuestionCreateWithoutQuizzInput, QuestionUncheckedCreateWithoutQuizzInput> | QuestionCreateWithoutQuizzInput[] | QuestionUncheckedCreateWithoutQuizzInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizzInput | QuestionCreateOrConnectWithoutQuizzInput[]
    createMany?: QuestionCreateManyQuizzInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type SessionQuizzCreateNestedManyWithoutQuizzInput = {
    create?: XOR<SessionQuizzCreateWithoutQuizzInput, SessionQuizzUncheckedCreateWithoutQuizzInput> | SessionQuizzCreateWithoutQuizzInput[] | SessionQuizzUncheckedCreateWithoutQuizzInput[]
    connectOrCreate?: SessionQuizzCreateOrConnectWithoutQuizzInput | SessionQuizzCreateOrConnectWithoutQuizzInput[]
    createMany?: SessionQuizzCreateManyQuizzInputEnvelope
    connect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutQuizzInput = {
    create?: XOR<QuestionCreateWithoutQuizzInput, QuestionUncheckedCreateWithoutQuizzInput> | QuestionCreateWithoutQuizzInput[] | QuestionUncheckedCreateWithoutQuizzInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizzInput | QuestionCreateOrConnectWithoutQuizzInput[]
    createMany?: QuestionCreateManyQuizzInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type SessionQuizzUncheckedCreateNestedManyWithoutQuizzInput = {
    create?: XOR<SessionQuizzCreateWithoutQuizzInput, SessionQuizzUncheckedCreateWithoutQuizzInput> | SessionQuizzCreateWithoutQuizzInput[] | SessionQuizzUncheckedCreateWithoutQuizzInput[]
    connectOrCreate?: SessionQuizzCreateOrConnectWithoutQuizzInput | SessionQuizzCreateOrConnectWithoutQuizzInput[]
    createMany?: SessionQuizzCreateManyQuizzInputEnvelope
    connect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
  }

  export type QuestionUpdateManyWithoutQuizzNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizzInput, QuestionUncheckedCreateWithoutQuizzInput> | QuestionCreateWithoutQuizzInput[] | QuestionUncheckedCreateWithoutQuizzInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizzInput | QuestionCreateOrConnectWithoutQuizzInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizzInput | QuestionUpsertWithWhereUniqueWithoutQuizzInput[]
    createMany?: QuestionCreateManyQuizzInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizzInput | QuestionUpdateWithWhereUniqueWithoutQuizzInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizzInput | QuestionUpdateManyWithWhereWithoutQuizzInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type SessionQuizzUpdateManyWithoutQuizzNestedInput = {
    create?: XOR<SessionQuizzCreateWithoutQuizzInput, SessionQuizzUncheckedCreateWithoutQuizzInput> | SessionQuizzCreateWithoutQuizzInput[] | SessionQuizzUncheckedCreateWithoutQuizzInput[]
    connectOrCreate?: SessionQuizzCreateOrConnectWithoutQuizzInput | SessionQuizzCreateOrConnectWithoutQuizzInput[]
    upsert?: SessionQuizzUpsertWithWhereUniqueWithoutQuizzInput | SessionQuizzUpsertWithWhereUniqueWithoutQuizzInput[]
    createMany?: SessionQuizzCreateManyQuizzInputEnvelope
    set?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    disconnect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    delete?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    connect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    update?: SessionQuizzUpdateWithWhereUniqueWithoutQuizzInput | SessionQuizzUpdateWithWhereUniqueWithoutQuizzInput[]
    updateMany?: SessionQuizzUpdateManyWithWhereWithoutQuizzInput | SessionQuizzUpdateManyWithWhereWithoutQuizzInput[]
    deleteMany?: SessionQuizzScalarWhereInput | SessionQuizzScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutQuizzNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizzInput, QuestionUncheckedCreateWithoutQuizzInput> | QuestionCreateWithoutQuizzInput[] | QuestionUncheckedCreateWithoutQuizzInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizzInput | QuestionCreateOrConnectWithoutQuizzInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizzInput | QuestionUpsertWithWhereUniqueWithoutQuizzInput[]
    createMany?: QuestionCreateManyQuizzInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizzInput | QuestionUpdateWithWhereUniqueWithoutQuizzInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizzInput | QuestionUpdateManyWithWhereWithoutQuizzInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type SessionQuizzUncheckedUpdateManyWithoutQuizzNestedInput = {
    create?: XOR<SessionQuizzCreateWithoutQuizzInput, SessionQuizzUncheckedCreateWithoutQuizzInput> | SessionQuizzCreateWithoutQuizzInput[] | SessionQuizzUncheckedCreateWithoutQuizzInput[]
    connectOrCreate?: SessionQuizzCreateOrConnectWithoutQuizzInput | SessionQuizzCreateOrConnectWithoutQuizzInput[]
    upsert?: SessionQuizzUpsertWithWhereUniqueWithoutQuizzInput | SessionQuizzUpsertWithWhereUniqueWithoutQuizzInput[]
    createMany?: SessionQuizzCreateManyQuizzInputEnvelope
    set?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    disconnect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    delete?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    connect?: SessionQuizzWhereUniqueInput | SessionQuizzWhereUniqueInput[]
    update?: SessionQuizzUpdateWithWhereUniqueWithoutQuizzInput | SessionQuizzUpdateWithWhereUniqueWithoutQuizzInput[]
    updateMany?: SessionQuizzUpdateManyWithWhereWithoutQuizzInput | SessionQuizzUpdateManyWithWhereWithoutQuizzInput[]
    deleteMany?: SessionQuizzScalarWhereInput | SessionQuizzScalarWhereInput[]
  }

  export type QuizzCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<QuizzCreateWithoutQuestionsInput, QuizzUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizzCreateOrConnectWithoutQuestionsInput
    connect?: QuizzWhereUniqueInput
  }

  export type AnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type UserResponseCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserResponseCreateWithoutQuestionInput, UserResponseUncheckedCreateWithoutQuestionInput> | UserResponseCreateWithoutQuestionInput[] | UserResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutQuestionInput | UserResponseCreateOrConnectWithoutQuestionInput[]
    createMany?: UserResponseCreateManyQuestionInputEnvelope
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
  }

  export type AnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
  }

  export type UserResponseUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserResponseCreateWithoutQuestionInput, UserResponseUncheckedCreateWithoutQuestionInput> | UserResponseCreateWithoutQuestionInput[] | UserResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutQuestionInput | UserResponseCreateOrConnectWithoutQuestionInput[]
    createMany?: UserResponseCreateManyQuestionInputEnvelope
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
  }

  export type QuizzUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<QuizzCreateWithoutQuestionsInput, QuizzUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizzCreateOrConnectWithoutQuestionsInput
    upsert?: QuizzUpsertWithoutQuestionsInput
    connect?: QuizzWhereUniqueInput
    update?: XOR<XOR<QuizzUpdateToOneWithWhereWithoutQuestionsInput, QuizzUpdateWithoutQuestionsInput>, QuizzUncheckedUpdateWithoutQuestionsInput>
  }

  export type AnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type UserResponseUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserResponseCreateWithoutQuestionInput, UserResponseUncheckedCreateWithoutQuestionInput> | UserResponseCreateWithoutQuestionInput[] | UserResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutQuestionInput | UserResponseCreateOrConnectWithoutQuestionInput[]
    upsert?: UserResponseUpsertWithWhereUniqueWithoutQuestionInput | UserResponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserResponseCreateManyQuestionInputEnvelope
    set?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    disconnect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    delete?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    update?: UserResponseUpdateWithWhereUniqueWithoutQuestionInput | UserResponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserResponseUpdateManyWithWhereWithoutQuestionInput | UserResponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput> | AnswerCreateWithoutQuestionInput[] | AnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AnswerCreateOrConnectWithoutQuestionInput | AnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: AnswerUpsertWithWhereUniqueWithoutQuestionInput | AnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AnswerCreateManyQuestionInputEnvelope
    set?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    disconnect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    delete?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    connect?: AnswerWhereUniqueInput | AnswerWhereUniqueInput[]
    update?: AnswerUpdateWithWhereUniqueWithoutQuestionInput | AnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AnswerUpdateManyWithWhereWithoutQuestionInput | AnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
  }

  export type UserResponseUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserResponseCreateWithoutQuestionInput, UserResponseUncheckedCreateWithoutQuestionInput> | UserResponseCreateWithoutQuestionInput[] | UserResponseUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutQuestionInput | UserResponseCreateOrConnectWithoutQuestionInput[]
    upsert?: UserResponseUpsertWithWhereUniqueWithoutQuestionInput | UserResponseUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserResponseCreateManyQuestionInputEnvelope
    set?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    disconnect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    delete?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    update?: UserResponseUpdateWithWhereUniqueWithoutQuestionInput | UserResponseUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserResponseUpdateManyWithWhereWithoutQuestionInput | UserResponseUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserResponseCreateNestedManyWithoutAnswerInput = {
    create?: XOR<UserResponseCreateWithoutAnswerInput, UserResponseUncheckedCreateWithoutAnswerInput> | UserResponseCreateWithoutAnswerInput[] | UserResponseUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutAnswerInput | UserResponseCreateOrConnectWithoutAnswerInput[]
    createMany?: UserResponseCreateManyAnswerInputEnvelope
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
  }

  export type UserResponseUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: XOR<UserResponseCreateWithoutAnswerInput, UserResponseUncheckedCreateWithoutAnswerInput> | UserResponseCreateWithoutAnswerInput[] | UserResponseUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutAnswerInput | UserResponseCreateOrConnectWithoutAnswerInput[]
    createMany?: UserResponseCreateManyAnswerInputEnvelope
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAnswersInput
    upsert?: QuestionUpsertWithoutAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAnswersInput, QuestionUpdateWithoutAnswersInput>, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type UserResponseUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<UserResponseCreateWithoutAnswerInput, UserResponseUncheckedCreateWithoutAnswerInput> | UserResponseCreateWithoutAnswerInput[] | UserResponseUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutAnswerInput | UserResponseCreateOrConnectWithoutAnswerInput[]
    upsert?: UserResponseUpsertWithWhereUniqueWithoutAnswerInput | UserResponseUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: UserResponseCreateManyAnswerInputEnvelope
    set?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    disconnect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    delete?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    update?: UserResponseUpdateWithWhereUniqueWithoutAnswerInput | UserResponseUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: UserResponseUpdateManyWithWhereWithoutAnswerInput | UserResponseUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
  }

  export type UserResponseUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: XOR<UserResponseCreateWithoutAnswerInput, UserResponseUncheckedCreateWithoutAnswerInput> | UserResponseCreateWithoutAnswerInput[] | UserResponseUncheckedCreateWithoutAnswerInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutAnswerInput | UserResponseCreateOrConnectWithoutAnswerInput[]
    upsert?: UserResponseUpsertWithWhereUniqueWithoutAnswerInput | UserResponseUpsertWithWhereUniqueWithoutAnswerInput[]
    createMany?: UserResponseCreateManyAnswerInputEnvelope
    set?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    disconnect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    delete?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    update?: UserResponseUpdateWithWhereUniqueWithoutAnswerInput | UserResponseUpdateWithWhereUniqueWithoutAnswerInput[]
    updateMany?: UserResponseUpdateManyWithWhereWithoutAnswerInput | UserResponseUpdateManyWithWhereWithoutAnswerInput[]
    deleteMany?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
  }

  export type QuizzCreateNestedOneWithoutSessionQuizzInput = {
    create?: XOR<QuizzCreateWithoutSessionQuizzInput, QuizzUncheckedCreateWithoutSessionQuizzInput>
    connectOrCreate?: QuizzCreateOrConnectWithoutSessionQuizzInput
    connect?: QuizzWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutSessionGameInput = {
    create?: XOR<UserCreateWithoutSessionGameInput, UserUncheckedCreateWithoutSessionGameInput> | UserCreateWithoutSessionGameInput[] | UserUncheckedCreateWithoutSessionGameInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSessionGameInput | UserCreateOrConnectWithoutSessionGameInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSessionPresenterInput = {
    create?: XOR<UserCreateWithoutSessionPresenterInput, UserUncheckedCreateWithoutSessionPresenterInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionPresenterInput
    connect?: UserWhereUniqueInput
  }

  export type UserResponseCreateNestedManyWithoutSessionQuizzInput = {
    create?: XOR<UserResponseCreateWithoutSessionQuizzInput, UserResponseUncheckedCreateWithoutSessionQuizzInput> | UserResponseCreateWithoutSessionQuizzInput[] | UserResponseUncheckedCreateWithoutSessionQuizzInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutSessionQuizzInput | UserResponseCreateOrConnectWithoutSessionQuizzInput[]
    createMany?: UserResponseCreateManySessionQuizzInputEnvelope
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSessionGameInput = {
    create?: XOR<UserCreateWithoutSessionGameInput, UserUncheckedCreateWithoutSessionGameInput> | UserCreateWithoutSessionGameInput[] | UserUncheckedCreateWithoutSessionGameInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSessionGameInput | UserCreateOrConnectWithoutSessionGameInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserResponseUncheckedCreateNestedManyWithoutSessionQuizzInput = {
    create?: XOR<UserResponseCreateWithoutSessionQuizzInput, UserResponseUncheckedCreateWithoutSessionQuizzInput> | UserResponseCreateWithoutSessionQuizzInput[] | UserResponseUncheckedCreateWithoutSessionQuizzInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutSessionQuizzInput | UserResponseCreateOrConnectWithoutSessionQuizzInput[]
    createMany?: UserResponseCreateManySessionQuizzInputEnvelope
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
  }

  export type QuizzUpdateOneRequiredWithoutSessionQuizzNestedInput = {
    create?: XOR<QuizzCreateWithoutSessionQuizzInput, QuizzUncheckedCreateWithoutSessionQuizzInput>
    connectOrCreate?: QuizzCreateOrConnectWithoutSessionQuizzInput
    upsert?: QuizzUpsertWithoutSessionQuizzInput
    connect?: QuizzWhereUniqueInput
    update?: XOR<XOR<QuizzUpdateToOneWithWhereWithoutSessionQuizzInput, QuizzUpdateWithoutSessionQuizzInput>, QuizzUncheckedUpdateWithoutSessionQuizzInput>
  }

  export type UserUpdateManyWithoutSessionGameNestedInput = {
    create?: XOR<UserCreateWithoutSessionGameInput, UserUncheckedCreateWithoutSessionGameInput> | UserCreateWithoutSessionGameInput[] | UserUncheckedCreateWithoutSessionGameInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSessionGameInput | UserCreateOrConnectWithoutSessionGameInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSessionGameInput | UserUpsertWithWhereUniqueWithoutSessionGameInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSessionGameInput | UserUpdateWithWhereUniqueWithoutSessionGameInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSessionGameInput | UserUpdateManyWithWhereWithoutSessionGameInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutSessionPresenterNestedInput = {
    create?: XOR<UserCreateWithoutSessionPresenterInput, UserUncheckedCreateWithoutSessionPresenterInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionPresenterInput
    upsert?: UserUpsertWithoutSessionPresenterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionPresenterInput, UserUpdateWithoutSessionPresenterInput>, UserUncheckedUpdateWithoutSessionPresenterInput>
  }

  export type UserResponseUpdateManyWithoutSessionQuizzNestedInput = {
    create?: XOR<UserResponseCreateWithoutSessionQuizzInput, UserResponseUncheckedCreateWithoutSessionQuizzInput> | UserResponseCreateWithoutSessionQuizzInput[] | UserResponseUncheckedCreateWithoutSessionQuizzInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutSessionQuizzInput | UserResponseCreateOrConnectWithoutSessionQuizzInput[]
    upsert?: UserResponseUpsertWithWhereUniqueWithoutSessionQuizzInput | UserResponseUpsertWithWhereUniqueWithoutSessionQuizzInput[]
    createMany?: UserResponseCreateManySessionQuizzInputEnvelope
    set?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    disconnect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    delete?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    update?: UserResponseUpdateWithWhereUniqueWithoutSessionQuizzInput | UserResponseUpdateWithWhereUniqueWithoutSessionQuizzInput[]
    updateMany?: UserResponseUpdateManyWithWhereWithoutSessionQuizzInput | UserResponseUpdateManyWithWhereWithoutSessionQuizzInput[]
    deleteMany?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSessionGameNestedInput = {
    create?: XOR<UserCreateWithoutSessionGameInput, UserUncheckedCreateWithoutSessionGameInput> | UserCreateWithoutSessionGameInput[] | UserUncheckedCreateWithoutSessionGameInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSessionGameInput | UserCreateOrConnectWithoutSessionGameInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSessionGameInput | UserUpsertWithWhereUniqueWithoutSessionGameInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSessionGameInput | UserUpdateWithWhereUniqueWithoutSessionGameInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSessionGameInput | UserUpdateManyWithWhereWithoutSessionGameInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserResponseUncheckedUpdateManyWithoutSessionQuizzNestedInput = {
    create?: XOR<UserResponseCreateWithoutSessionQuizzInput, UserResponseUncheckedCreateWithoutSessionQuizzInput> | UserResponseCreateWithoutSessionQuizzInput[] | UserResponseUncheckedCreateWithoutSessionQuizzInput[]
    connectOrCreate?: UserResponseCreateOrConnectWithoutSessionQuizzInput | UserResponseCreateOrConnectWithoutSessionQuizzInput[]
    upsert?: UserResponseUpsertWithWhereUniqueWithoutSessionQuizzInput | UserResponseUpsertWithWhereUniqueWithoutSessionQuizzInput[]
    createMany?: UserResponseCreateManySessionQuizzInputEnvelope
    set?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    disconnect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    delete?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    connect?: UserResponseWhereUniqueInput | UserResponseWhereUniqueInput[]
    update?: UserResponseUpdateWithWhereUniqueWithoutSessionQuizzInput | UserResponseUpdateWithWhereUniqueWithoutSessionQuizzInput[]
    updateMany?: UserResponseUpdateManyWithWhereWithoutSessionQuizzInput | UserResponseUpdateManyWithWhereWithoutSessionQuizzInput[]
    deleteMany?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutUserResponseInput = {
    create?: XOR<QuestionCreateWithoutUserResponseInput, QuestionUncheckedCreateWithoutUserResponseInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutUserResponseInput
    connect?: QuestionWhereUniqueInput
  }

  export type AnswerCreateNestedOneWithoutUserResponseInput = {
    create?: XOR<AnswerCreateWithoutUserResponseInput, AnswerUncheckedCreateWithoutUserResponseInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutUserResponseInput
    connect?: AnswerWhereUniqueInput
  }

  export type SessionQuizzCreateNestedOneWithoutUserResponseInput = {
    create?: XOR<SessionQuizzCreateWithoutUserResponseInput, SessionQuizzUncheckedCreateWithoutUserResponseInput>
    connectOrCreate?: SessionQuizzCreateOrConnectWithoutUserResponseInput
    connect?: SessionQuizzWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserResponseInput = {
    create?: XOR<UserCreateWithoutUserResponseInput, UserUncheckedCreateWithoutUserResponseInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserResponseInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionUpdateOneRequiredWithoutUserResponseNestedInput = {
    create?: XOR<QuestionCreateWithoutUserResponseInput, QuestionUncheckedCreateWithoutUserResponseInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutUserResponseInput
    upsert?: QuestionUpsertWithoutUserResponseInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutUserResponseInput, QuestionUpdateWithoutUserResponseInput>, QuestionUncheckedUpdateWithoutUserResponseInput>
  }

  export type AnswerUpdateOneRequiredWithoutUserResponseNestedInput = {
    create?: XOR<AnswerCreateWithoutUserResponseInput, AnswerUncheckedCreateWithoutUserResponseInput>
    connectOrCreate?: AnswerCreateOrConnectWithoutUserResponseInput
    upsert?: AnswerUpsertWithoutUserResponseInput
    connect?: AnswerWhereUniqueInput
    update?: XOR<XOR<AnswerUpdateToOneWithWhereWithoutUserResponseInput, AnswerUpdateWithoutUserResponseInput>, AnswerUncheckedUpdateWithoutUserResponseInput>
  }

  export type SessionQuizzUpdateOneRequiredWithoutUserResponseNestedInput = {
    create?: XOR<SessionQuizzCreateWithoutUserResponseInput, SessionQuizzUncheckedCreateWithoutUserResponseInput>
    connectOrCreate?: SessionQuizzCreateOrConnectWithoutUserResponseInput
    upsert?: SessionQuizzUpsertWithoutUserResponseInput
    connect?: SessionQuizzWhereUniqueInput
    update?: XOR<XOR<SessionQuizzUpdateToOneWithWhereWithoutUserResponseInput, SessionQuizzUpdateWithoutUserResponseInput>, SessionQuizzUncheckedUpdateWithoutUserResponseInput>
  }

  export type UserUpdateOneRequiredWithoutUserResponseNestedInput = {
    create?: XOR<UserCreateWithoutUserResponseInput, UserUncheckedCreateWithoutUserResponseInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserResponseInput
    upsert?: UserUpsertWithoutUserResponseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserResponseInput, UserUpdateWithoutUserResponseInput>, UserUncheckedUpdateWithoutUserResponseInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserResponseCreateWithoutUserInput = {
    score: number
    responseTime: number
    question: QuestionCreateNestedOneWithoutUserResponseInput
    answer: AnswerCreateNestedOneWithoutUserResponseInput
    sessionQuizz: SessionQuizzCreateNestedOneWithoutUserResponseInput
  }

  export type UserResponseUncheckedCreateWithoutUserInput = {
    id?: number
    questionId: number
    answerId: number
    sessionQuizzId: number
    score: number
    responseTime: number
  }

  export type UserResponseCreateOrConnectWithoutUserInput = {
    where: UserResponseWhereUniqueInput
    create: XOR<UserResponseCreateWithoutUserInput, UserResponseUncheckedCreateWithoutUserInput>
  }

  export type UserResponseCreateManyUserInputEnvelope = {
    data: UserResponseCreateManyUserInput | UserResponseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionQuizzCreateWithoutParticipantsInput = {
    quizz: QuizzCreateNestedOneWithoutSessionQuizzInput
    presenter: UserCreateNestedOneWithoutSessionPresenterInput
    userResponse?: UserResponseCreateNestedManyWithoutSessionQuizzInput
  }

  export type SessionQuizzUncheckedCreateWithoutParticipantsInput = {
    id?: number
    quizzId: number
    presenterId: number
    userResponse?: UserResponseUncheckedCreateNestedManyWithoutSessionQuizzInput
  }

  export type SessionQuizzCreateOrConnectWithoutParticipantsInput = {
    where: SessionQuizzWhereUniqueInput
    create: XOR<SessionQuizzCreateWithoutParticipantsInput, SessionQuizzUncheckedCreateWithoutParticipantsInput>
  }

  export type SessionQuizzCreateWithoutPresenterInput = {
    quizz: QuizzCreateNestedOneWithoutSessionQuizzInput
    participants?: UserCreateNestedManyWithoutSessionGameInput
    userResponse?: UserResponseCreateNestedManyWithoutSessionQuizzInput
  }

  export type SessionQuizzUncheckedCreateWithoutPresenterInput = {
    id?: number
    quizzId: number
    participants?: UserUncheckedCreateNestedManyWithoutSessionGameInput
    userResponse?: UserResponseUncheckedCreateNestedManyWithoutSessionQuizzInput
  }

  export type SessionQuizzCreateOrConnectWithoutPresenterInput = {
    where: SessionQuizzWhereUniqueInput
    create: XOR<SessionQuizzCreateWithoutPresenterInput, SessionQuizzUncheckedCreateWithoutPresenterInput>
  }

  export type SessionQuizzCreateManyPresenterInputEnvelope = {
    data: SessionQuizzCreateManyPresenterInput | SessionQuizzCreateManyPresenterInput[]
    skipDuplicates?: boolean
  }

  export type UserResponseUpsertWithWhereUniqueWithoutUserInput = {
    where: UserResponseWhereUniqueInput
    update: XOR<UserResponseUpdateWithoutUserInput, UserResponseUncheckedUpdateWithoutUserInput>
    create: XOR<UserResponseCreateWithoutUserInput, UserResponseUncheckedCreateWithoutUserInput>
  }

  export type UserResponseUpdateWithWhereUniqueWithoutUserInput = {
    where: UserResponseWhereUniqueInput
    data: XOR<UserResponseUpdateWithoutUserInput, UserResponseUncheckedUpdateWithoutUserInput>
  }

  export type UserResponseUpdateManyWithWhereWithoutUserInput = {
    where: UserResponseScalarWhereInput
    data: XOR<UserResponseUpdateManyMutationInput, UserResponseUncheckedUpdateManyWithoutUserInput>
  }

  export type UserResponseScalarWhereInput = {
    AND?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
    OR?: UserResponseScalarWhereInput[]
    NOT?: UserResponseScalarWhereInput | UserResponseScalarWhereInput[]
    id?: IntFilter<"UserResponse"> | number
    questionId?: IntFilter<"UserResponse"> | number
    answerId?: IntFilter<"UserResponse"> | number
    sessionQuizzId?: IntFilter<"UserResponse"> | number
    score?: IntFilter<"UserResponse"> | number
    responseTime?: FloatFilter<"UserResponse"> | number
    userId?: IntFilter<"UserResponse"> | number
  }

  export type SessionQuizzUpsertWithWhereUniqueWithoutParticipantsInput = {
    where: SessionQuizzWhereUniqueInput
    update: XOR<SessionQuizzUpdateWithoutParticipantsInput, SessionQuizzUncheckedUpdateWithoutParticipantsInput>
    create: XOR<SessionQuizzCreateWithoutParticipantsInput, SessionQuizzUncheckedCreateWithoutParticipantsInput>
  }

  export type SessionQuizzUpdateWithWhereUniqueWithoutParticipantsInput = {
    where: SessionQuizzWhereUniqueInput
    data: XOR<SessionQuizzUpdateWithoutParticipantsInput, SessionQuizzUncheckedUpdateWithoutParticipantsInput>
  }

  export type SessionQuizzUpdateManyWithWhereWithoutParticipantsInput = {
    where: SessionQuizzScalarWhereInput
    data: XOR<SessionQuizzUpdateManyMutationInput, SessionQuizzUncheckedUpdateManyWithoutParticipantsInput>
  }

  export type SessionQuizzScalarWhereInput = {
    AND?: SessionQuizzScalarWhereInput | SessionQuizzScalarWhereInput[]
    OR?: SessionQuizzScalarWhereInput[]
    NOT?: SessionQuizzScalarWhereInput | SessionQuizzScalarWhereInput[]
    id?: IntFilter<"SessionQuizz"> | number
    quizzId?: IntFilter<"SessionQuizz"> | number
    presenterId?: IntFilter<"SessionQuizz"> | number
  }

  export type SessionQuizzUpsertWithWhereUniqueWithoutPresenterInput = {
    where: SessionQuizzWhereUniqueInput
    update: XOR<SessionQuizzUpdateWithoutPresenterInput, SessionQuizzUncheckedUpdateWithoutPresenterInput>
    create: XOR<SessionQuizzCreateWithoutPresenterInput, SessionQuizzUncheckedCreateWithoutPresenterInput>
  }

  export type SessionQuizzUpdateWithWhereUniqueWithoutPresenterInput = {
    where: SessionQuizzWhereUniqueInput
    data: XOR<SessionQuizzUpdateWithoutPresenterInput, SessionQuizzUncheckedUpdateWithoutPresenterInput>
  }

  export type SessionQuizzUpdateManyWithWhereWithoutPresenterInput = {
    where: SessionQuizzScalarWhereInput
    data: XOR<SessionQuizzUpdateManyMutationInput, SessionQuizzUncheckedUpdateManyWithoutPresenterInput>
  }

  export type QuestionCreateWithoutQuizzInput = {
    timeMax: number
    scoreMax: number
    scoreMin: number
    question: string
    explication: string
    answers?: AnswerCreateNestedManyWithoutQuestionInput
    userResponse?: UserResponseCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuizzInput = {
    id?: number
    timeMax: number
    scoreMax: number
    scoreMin: number
    question: string
    explication: string
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
    userResponse?: UserResponseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuizzInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuizzInput, QuestionUncheckedCreateWithoutQuizzInput>
  }

  export type QuestionCreateManyQuizzInputEnvelope = {
    data: QuestionCreateManyQuizzInput | QuestionCreateManyQuizzInput[]
    skipDuplicates?: boolean
  }

  export type SessionQuizzCreateWithoutQuizzInput = {
    participants?: UserCreateNestedManyWithoutSessionGameInput
    presenter: UserCreateNestedOneWithoutSessionPresenterInput
    userResponse?: UserResponseCreateNestedManyWithoutSessionQuizzInput
  }

  export type SessionQuizzUncheckedCreateWithoutQuizzInput = {
    id?: number
    presenterId: number
    participants?: UserUncheckedCreateNestedManyWithoutSessionGameInput
    userResponse?: UserResponseUncheckedCreateNestedManyWithoutSessionQuizzInput
  }

  export type SessionQuizzCreateOrConnectWithoutQuizzInput = {
    where: SessionQuizzWhereUniqueInput
    create: XOR<SessionQuizzCreateWithoutQuizzInput, SessionQuizzUncheckedCreateWithoutQuizzInput>
  }

  export type SessionQuizzCreateManyQuizzInputEnvelope = {
    data: SessionQuizzCreateManyQuizzInput | SessionQuizzCreateManyQuizzInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutQuizzInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutQuizzInput, QuestionUncheckedUpdateWithoutQuizzInput>
    create: XOR<QuestionCreateWithoutQuizzInput, QuestionUncheckedCreateWithoutQuizzInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutQuizzInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutQuizzInput, QuestionUncheckedUpdateWithoutQuizzInput>
  }

  export type QuestionUpdateManyWithWhereWithoutQuizzInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuizzInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: IntFilter<"Question"> | number
    timeMax?: IntFilter<"Question"> | number
    scoreMax?: IntFilter<"Question"> | number
    scoreMin?: IntFilter<"Question"> | number
    question?: StringFilter<"Question"> | string
    explication?: StringFilter<"Question"> | string
    quizzId?: IntFilter<"Question"> | number
  }

  export type SessionQuizzUpsertWithWhereUniqueWithoutQuizzInput = {
    where: SessionQuizzWhereUniqueInput
    update: XOR<SessionQuizzUpdateWithoutQuizzInput, SessionQuizzUncheckedUpdateWithoutQuizzInput>
    create: XOR<SessionQuizzCreateWithoutQuizzInput, SessionQuizzUncheckedCreateWithoutQuizzInput>
  }

  export type SessionQuizzUpdateWithWhereUniqueWithoutQuizzInput = {
    where: SessionQuizzWhereUniqueInput
    data: XOR<SessionQuizzUpdateWithoutQuizzInput, SessionQuizzUncheckedUpdateWithoutQuizzInput>
  }

  export type SessionQuizzUpdateManyWithWhereWithoutQuizzInput = {
    where: SessionQuizzScalarWhereInput
    data: XOR<SessionQuizzUpdateManyMutationInput, SessionQuizzUncheckedUpdateManyWithoutQuizzInput>
  }

  export type QuizzCreateWithoutQuestionsInput = {
    name: string
    description: string
    sessionQuizz?: SessionQuizzCreateNestedManyWithoutQuizzInput
  }

  export type QuizzUncheckedCreateWithoutQuestionsInput = {
    id?: number
    name: string
    description: string
    sessionQuizz?: SessionQuizzUncheckedCreateNestedManyWithoutQuizzInput
  }

  export type QuizzCreateOrConnectWithoutQuestionsInput = {
    where: QuizzWhereUniqueInput
    create: XOR<QuizzCreateWithoutQuestionsInput, QuizzUncheckedCreateWithoutQuestionsInput>
  }

  export type AnswerCreateWithoutQuestionInput = {
    isGoodAnswers: boolean
    name: string
    userResponse?: UserResponseCreateNestedManyWithoutAnswerInput
  }

  export type AnswerUncheckedCreateWithoutQuestionInput = {
    id?: number
    isGoodAnswers: boolean
    name: string
    userResponse?: UserResponseUncheckedCreateNestedManyWithoutAnswerInput
  }

  export type AnswerCreateOrConnectWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerCreateManyQuestionInputEnvelope = {
    data: AnswerCreateManyQuestionInput | AnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type UserResponseCreateWithoutQuestionInput = {
    score: number
    responseTime: number
    answer: AnswerCreateNestedOneWithoutUserResponseInput
    sessionQuizz: SessionQuizzCreateNestedOneWithoutUserResponseInput
    user: UserCreateNestedOneWithoutUserResponseInput
  }

  export type UserResponseUncheckedCreateWithoutQuestionInput = {
    id?: number
    answerId: number
    sessionQuizzId: number
    score: number
    responseTime: number
    userId: number
  }

  export type UserResponseCreateOrConnectWithoutQuestionInput = {
    where: UserResponseWhereUniqueInput
    create: XOR<UserResponseCreateWithoutQuestionInput, UserResponseUncheckedCreateWithoutQuestionInput>
  }

  export type UserResponseCreateManyQuestionInputEnvelope = {
    data: UserResponseCreateManyQuestionInput | UserResponseCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuizzUpsertWithoutQuestionsInput = {
    update: XOR<QuizzUpdateWithoutQuestionsInput, QuizzUncheckedUpdateWithoutQuestionsInput>
    create: XOR<QuizzCreateWithoutQuestionsInput, QuizzUncheckedCreateWithoutQuestionsInput>
    where?: QuizzWhereInput
  }

  export type QuizzUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: QuizzWhereInput
    data: XOR<QuizzUpdateWithoutQuestionsInput, QuizzUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizzUpdateWithoutQuestionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sessionQuizz?: SessionQuizzUpdateManyWithoutQuizzNestedInput
  }

  export type QuizzUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sessionQuizz?: SessionQuizzUncheckedUpdateManyWithoutQuizzNestedInput
  }

  export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    update: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<AnswerCreateWithoutQuestionInput, AnswerUncheckedCreateWithoutQuestionInput>
  }

  export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AnswerWhereUniqueInput
    data: XOR<AnswerUpdateWithoutQuestionInput, AnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: AnswerScalarWhereInput
    data: XOR<AnswerUpdateManyMutationInput, AnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AnswerScalarWhereInput = {
    AND?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    OR?: AnswerScalarWhereInput[]
    NOT?: AnswerScalarWhereInput | AnswerScalarWhereInput[]
    id?: IntFilter<"Answer"> | number
    isGoodAnswers?: BoolFilter<"Answer"> | boolean
    name?: StringFilter<"Answer"> | string
    questionId?: IntFilter<"Answer"> | number
  }

  export type UserResponseUpsertWithWhereUniqueWithoutQuestionInput = {
    where: UserResponseWhereUniqueInput
    update: XOR<UserResponseUpdateWithoutQuestionInput, UserResponseUncheckedUpdateWithoutQuestionInput>
    create: XOR<UserResponseCreateWithoutQuestionInput, UserResponseUncheckedCreateWithoutQuestionInput>
  }

  export type UserResponseUpdateWithWhereUniqueWithoutQuestionInput = {
    where: UserResponseWhereUniqueInput
    data: XOR<UserResponseUpdateWithoutQuestionInput, UserResponseUncheckedUpdateWithoutQuestionInput>
  }

  export type UserResponseUpdateManyWithWhereWithoutQuestionInput = {
    where: UserResponseScalarWhereInput
    data: XOR<UserResponseUpdateManyMutationInput, UserResponseUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionCreateWithoutAnswersInput = {
    timeMax: number
    scoreMax: number
    scoreMin: number
    question: string
    explication: string
    quizz: QuizzCreateNestedOneWithoutQuestionsInput
    userResponse?: UserResponseCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAnswersInput = {
    id?: number
    timeMax: number
    scoreMax: number
    scoreMin: number
    question: string
    explication: string
    quizzId: number
    userResponse?: UserResponseUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
  }

  export type UserResponseCreateWithoutAnswerInput = {
    score: number
    responseTime: number
    question: QuestionCreateNestedOneWithoutUserResponseInput
    sessionQuizz: SessionQuizzCreateNestedOneWithoutUserResponseInput
    user: UserCreateNestedOneWithoutUserResponseInput
  }

  export type UserResponseUncheckedCreateWithoutAnswerInput = {
    id?: number
    questionId: number
    sessionQuizzId: number
    score: number
    responseTime: number
    userId: number
  }

  export type UserResponseCreateOrConnectWithoutAnswerInput = {
    where: UserResponseWhereUniqueInput
    create: XOR<UserResponseCreateWithoutAnswerInput, UserResponseUncheckedCreateWithoutAnswerInput>
  }

  export type UserResponseCreateManyAnswerInputEnvelope = {
    data: UserResponseCreateManyAnswerInput | UserResponseCreateManyAnswerInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithoutAnswersInput = {
    update: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<QuestionCreateWithoutAnswersInput, QuestionUncheckedCreateWithoutAnswersInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAnswersInput, QuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type QuestionUpdateWithoutAnswersInput = {
    timeMax?: IntFieldUpdateOperationsInput | number
    scoreMax?: IntFieldUpdateOperationsInput | number
    scoreMin?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    explication?: StringFieldUpdateOperationsInput | string
    quizz?: QuizzUpdateOneRequiredWithoutQuestionsNestedInput
    userResponse?: UserResponseUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    timeMax?: IntFieldUpdateOperationsInput | number
    scoreMax?: IntFieldUpdateOperationsInput | number
    scoreMin?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    explication?: StringFieldUpdateOperationsInput | string
    quizzId?: IntFieldUpdateOperationsInput | number
    userResponse?: UserResponseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserResponseUpsertWithWhereUniqueWithoutAnswerInput = {
    where: UserResponseWhereUniqueInput
    update: XOR<UserResponseUpdateWithoutAnswerInput, UserResponseUncheckedUpdateWithoutAnswerInput>
    create: XOR<UserResponseCreateWithoutAnswerInput, UserResponseUncheckedCreateWithoutAnswerInput>
  }

  export type UserResponseUpdateWithWhereUniqueWithoutAnswerInput = {
    where: UserResponseWhereUniqueInput
    data: XOR<UserResponseUpdateWithoutAnswerInput, UserResponseUncheckedUpdateWithoutAnswerInput>
  }

  export type UserResponseUpdateManyWithWhereWithoutAnswerInput = {
    where: UserResponseScalarWhereInput
    data: XOR<UserResponseUpdateManyMutationInput, UserResponseUncheckedUpdateManyWithoutAnswerInput>
  }

  export type QuizzCreateWithoutSessionQuizzInput = {
    name: string
    description: string
    questions?: QuestionCreateNestedManyWithoutQuizzInput
  }

  export type QuizzUncheckedCreateWithoutSessionQuizzInput = {
    id?: number
    name: string
    description: string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizzInput
  }

  export type QuizzCreateOrConnectWithoutSessionQuizzInput = {
    where: QuizzWhereUniqueInput
    create: XOR<QuizzCreateWithoutSessionQuizzInput, QuizzUncheckedCreateWithoutSessionQuizzInput>
  }

  export type UserCreateWithoutSessionGameInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userResponse?: UserResponseCreateNestedManyWithoutUserInput
    sessionPresenter?: SessionQuizzCreateNestedManyWithoutPresenterInput
  }

  export type UserUncheckedCreateWithoutSessionGameInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userResponse?: UserResponseUncheckedCreateNestedManyWithoutUserInput
    sessionPresenter?: SessionQuizzUncheckedCreateNestedManyWithoutPresenterInput
  }

  export type UserCreateOrConnectWithoutSessionGameInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionGameInput, UserUncheckedCreateWithoutSessionGameInput>
  }

  export type UserCreateWithoutSessionPresenterInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userResponse?: UserResponseCreateNestedManyWithoutUserInput
    sessionGame?: SessionQuizzCreateNestedManyWithoutParticipantsInput
  }

  export type UserUncheckedCreateWithoutSessionPresenterInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userResponse?: UserResponseUncheckedCreateNestedManyWithoutUserInput
    sessionGame?: SessionQuizzUncheckedCreateNestedManyWithoutParticipantsInput
  }

  export type UserCreateOrConnectWithoutSessionPresenterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionPresenterInput, UserUncheckedCreateWithoutSessionPresenterInput>
  }

  export type UserResponseCreateWithoutSessionQuizzInput = {
    score: number
    responseTime: number
    question: QuestionCreateNestedOneWithoutUserResponseInput
    answer: AnswerCreateNestedOneWithoutUserResponseInput
    user: UserCreateNestedOneWithoutUserResponseInput
  }

  export type UserResponseUncheckedCreateWithoutSessionQuizzInput = {
    id?: number
    questionId: number
    answerId: number
    score: number
    responseTime: number
    userId: number
  }

  export type UserResponseCreateOrConnectWithoutSessionQuizzInput = {
    where: UserResponseWhereUniqueInput
    create: XOR<UserResponseCreateWithoutSessionQuizzInput, UserResponseUncheckedCreateWithoutSessionQuizzInput>
  }

  export type UserResponseCreateManySessionQuizzInputEnvelope = {
    data: UserResponseCreateManySessionQuizzInput | UserResponseCreateManySessionQuizzInput[]
    skipDuplicates?: boolean
  }

  export type QuizzUpsertWithoutSessionQuizzInput = {
    update: XOR<QuizzUpdateWithoutSessionQuizzInput, QuizzUncheckedUpdateWithoutSessionQuizzInput>
    create: XOR<QuizzCreateWithoutSessionQuizzInput, QuizzUncheckedCreateWithoutSessionQuizzInput>
    where?: QuizzWhereInput
  }

  export type QuizzUpdateToOneWithWhereWithoutSessionQuizzInput = {
    where?: QuizzWhereInput
    data: XOR<QuizzUpdateWithoutSessionQuizzInput, QuizzUncheckedUpdateWithoutSessionQuizzInput>
  }

  export type QuizzUpdateWithoutSessionQuizzInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUpdateManyWithoutQuizzNestedInput
  }

  export type QuizzUncheckedUpdateWithoutSessionQuizzInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizzNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutSessionGameInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSessionGameInput, UserUncheckedUpdateWithoutSessionGameInput>
    create: XOR<UserCreateWithoutSessionGameInput, UserUncheckedCreateWithoutSessionGameInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSessionGameInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSessionGameInput, UserUncheckedUpdateWithoutSessionGameInput>
  }

  export type UserUpdateManyWithWhereWithoutSessionGameInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSessionGameInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserUpsertWithoutSessionPresenterInput = {
    update: XOR<UserUpdateWithoutSessionPresenterInput, UserUncheckedUpdateWithoutSessionPresenterInput>
    create: XOR<UserCreateWithoutSessionPresenterInput, UserUncheckedCreateWithoutSessionPresenterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionPresenterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionPresenterInput, UserUncheckedUpdateWithoutSessionPresenterInput>
  }

  export type UserUpdateWithoutSessionPresenterInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userResponse?: UserResponseUpdateManyWithoutUserNestedInput
    sessionGame?: SessionQuizzUpdateManyWithoutParticipantsNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionPresenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userResponse?: UserResponseUncheckedUpdateManyWithoutUserNestedInput
    sessionGame?: SessionQuizzUncheckedUpdateManyWithoutParticipantsNestedInput
  }

  export type UserResponseUpsertWithWhereUniqueWithoutSessionQuizzInput = {
    where: UserResponseWhereUniqueInput
    update: XOR<UserResponseUpdateWithoutSessionQuizzInput, UserResponseUncheckedUpdateWithoutSessionQuizzInput>
    create: XOR<UserResponseCreateWithoutSessionQuizzInput, UserResponseUncheckedCreateWithoutSessionQuizzInput>
  }

  export type UserResponseUpdateWithWhereUniqueWithoutSessionQuizzInput = {
    where: UserResponseWhereUniqueInput
    data: XOR<UserResponseUpdateWithoutSessionQuizzInput, UserResponseUncheckedUpdateWithoutSessionQuizzInput>
  }

  export type UserResponseUpdateManyWithWhereWithoutSessionQuizzInput = {
    where: UserResponseScalarWhereInput
    data: XOR<UserResponseUpdateManyMutationInput, UserResponseUncheckedUpdateManyWithoutSessionQuizzInput>
  }

  export type QuestionCreateWithoutUserResponseInput = {
    timeMax: number
    scoreMax: number
    scoreMin: number
    question: string
    explication: string
    quizz: QuizzCreateNestedOneWithoutQuestionsInput
    answers?: AnswerCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutUserResponseInput = {
    id?: number
    timeMax: number
    scoreMax: number
    scoreMin: number
    question: string
    explication: string
    quizzId: number
    answers?: AnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutUserResponseInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutUserResponseInput, QuestionUncheckedCreateWithoutUserResponseInput>
  }

  export type AnswerCreateWithoutUserResponseInput = {
    isGoodAnswers: boolean
    name: string
    question: QuestionCreateNestedOneWithoutAnswersInput
  }

  export type AnswerUncheckedCreateWithoutUserResponseInput = {
    id?: number
    isGoodAnswers: boolean
    name: string
    questionId: number
  }

  export type AnswerCreateOrConnectWithoutUserResponseInput = {
    where: AnswerWhereUniqueInput
    create: XOR<AnswerCreateWithoutUserResponseInput, AnswerUncheckedCreateWithoutUserResponseInput>
  }

  export type SessionQuizzCreateWithoutUserResponseInput = {
    quizz: QuizzCreateNestedOneWithoutSessionQuizzInput
    participants?: UserCreateNestedManyWithoutSessionGameInput
    presenter: UserCreateNestedOneWithoutSessionPresenterInput
  }

  export type SessionQuizzUncheckedCreateWithoutUserResponseInput = {
    id?: number
    quizzId: number
    presenterId: number
    participants?: UserUncheckedCreateNestedManyWithoutSessionGameInput
  }

  export type SessionQuizzCreateOrConnectWithoutUserResponseInput = {
    where: SessionQuizzWhereUniqueInput
    create: XOR<SessionQuizzCreateWithoutUserResponseInput, SessionQuizzUncheckedCreateWithoutUserResponseInput>
  }

  export type UserCreateWithoutUserResponseInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionGame?: SessionQuizzCreateNestedManyWithoutParticipantsInput
    sessionPresenter?: SessionQuizzCreateNestedManyWithoutPresenterInput
  }

  export type UserUncheckedCreateWithoutUserResponseInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessionGame?: SessionQuizzUncheckedCreateNestedManyWithoutParticipantsInput
    sessionPresenter?: SessionQuizzUncheckedCreateNestedManyWithoutPresenterInput
  }

  export type UserCreateOrConnectWithoutUserResponseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserResponseInput, UserUncheckedCreateWithoutUserResponseInput>
  }

  export type QuestionUpsertWithoutUserResponseInput = {
    update: XOR<QuestionUpdateWithoutUserResponseInput, QuestionUncheckedUpdateWithoutUserResponseInput>
    create: XOR<QuestionCreateWithoutUserResponseInput, QuestionUncheckedCreateWithoutUserResponseInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutUserResponseInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutUserResponseInput, QuestionUncheckedUpdateWithoutUserResponseInput>
  }

  export type QuestionUpdateWithoutUserResponseInput = {
    timeMax?: IntFieldUpdateOperationsInput | number
    scoreMax?: IntFieldUpdateOperationsInput | number
    scoreMin?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    explication?: StringFieldUpdateOperationsInput | string
    quizz?: QuizzUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutUserResponseInput = {
    id?: IntFieldUpdateOperationsInput | number
    timeMax?: IntFieldUpdateOperationsInput | number
    scoreMax?: IntFieldUpdateOperationsInput | number
    scoreMin?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    explication?: StringFieldUpdateOperationsInput | string
    quizzId?: IntFieldUpdateOperationsInput | number
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type AnswerUpsertWithoutUserResponseInput = {
    update: XOR<AnswerUpdateWithoutUserResponseInput, AnswerUncheckedUpdateWithoutUserResponseInput>
    create: XOR<AnswerCreateWithoutUserResponseInput, AnswerUncheckedCreateWithoutUserResponseInput>
    where?: AnswerWhereInput
  }

  export type AnswerUpdateToOneWithWhereWithoutUserResponseInput = {
    where?: AnswerWhereInput
    data: XOR<AnswerUpdateWithoutUserResponseInput, AnswerUncheckedUpdateWithoutUserResponseInput>
  }

  export type AnswerUpdateWithoutUserResponseInput = {
    isGoodAnswers?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    question?: QuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type AnswerUncheckedUpdateWithoutUserResponseInput = {
    id?: IntFieldUpdateOperationsInput | number
    isGoodAnswers?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    questionId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionQuizzUpsertWithoutUserResponseInput = {
    update: XOR<SessionQuizzUpdateWithoutUserResponseInput, SessionQuizzUncheckedUpdateWithoutUserResponseInput>
    create: XOR<SessionQuizzCreateWithoutUserResponseInput, SessionQuizzUncheckedCreateWithoutUserResponseInput>
    where?: SessionQuizzWhereInput
  }

  export type SessionQuizzUpdateToOneWithWhereWithoutUserResponseInput = {
    where?: SessionQuizzWhereInput
    data: XOR<SessionQuizzUpdateWithoutUserResponseInput, SessionQuizzUncheckedUpdateWithoutUserResponseInput>
  }

  export type SessionQuizzUpdateWithoutUserResponseInput = {
    quizz?: QuizzUpdateOneRequiredWithoutSessionQuizzNestedInput
    participants?: UserUpdateManyWithoutSessionGameNestedInput
    presenter?: UserUpdateOneRequiredWithoutSessionPresenterNestedInput
  }

  export type SessionQuizzUncheckedUpdateWithoutUserResponseInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizzId?: IntFieldUpdateOperationsInput | number
    presenterId?: IntFieldUpdateOperationsInput | number
    participants?: UserUncheckedUpdateManyWithoutSessionGameNestedInput
  }

  export type UserUpsertWithoutUserResponseInput = {
    update: XOR<UserUpdateWithoutUserResponseInput, UserUncheckedUpdateWithoutUserResponseInput>
    create: XOR<UserCreateWithoutUserResponseInput, UserUncheckedCreateWithoutUserResponseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserResponseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserResponseInput, UserUncheckedUpdateWithoutUserResponseInput>
  }

  export type UserUpdateWithoutUserResponseInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionGame?: SessionQuizzUpdateManyWithoutParticipantsNestedInput
    sessionPresenter?: SessionQuizzUpdateManyWithoutPresenterNestedInput
  }

  export type UserUncheckedUpdateWithoutUserResponseInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionGame?: SessionQuizzUncheckedUpdateManyWithoutParticipantsNestedInput
    sessionPresenter?: SessionQuizzUncheckedUpdateManyWithoutPresenterNestedInput
  }

  export type UserResponseCreateManyUserInput = {
    id?: number
    questionId: number
    answerId: number
    sessionQuizzId: number
    score: number
    responseTime: number
  }

  export type SessionQuizzCreateManyPresenterInput = {
    id?: number
    quizzId: number
  }

  export type UserResponseUpdateWithoutUserInput = {
    score?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    question?: QuestionUpdateOneRequiredWithoutUserResponseNestedInput
    answer?: AnswerUpdateOneRequiredWithoutUserResponseNestedInput
    sessionQuizz?: SessionQuizzUpdateOneRequiredWithoutUserResponseNestedInput
  }

  export type UserResponseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    sessionQuizzId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
  }

  export type UserResponseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    sessionQuizzId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
  }

  export type SessionQuizzUpdateWithoutParticipantsInput = {
    quizz?: QuizzUpdateOneRequiredWithoutSessionQuizzNestedInput
    presenter?: UserUpdateOneRequiredWithoutSessionPresenterNestedInput
    userResponse?: UserResponseUpdateManyWithoutSessionQuizzNestedInput
  }

  export type SessionQuizzUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizzId?: IntFieldUpdateOperationsInput | number
    presenterId?: IntFieldUpdateOperationsInput | number
    userResponse?: UserResponseUncheckedUpdateManyWithoutSessionQuizzNestedInput
  }

  export type SessionQuizzUncheckedUpdateManyWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizzId?: IntFieldUpdateOperationsInput | number
    presenterId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionQuizzUpdateWithoutPresenterInput = {
    quizz?: QuizzUpdateOneRequiredWithoutSessionQuizzNestedInput
    participants?: UserUpdateManyWithoutSessionGameNestedInput
    userResponse?: UserResponseUpdateManyWithoutSessionQuizzNestedInput
  }

  export type SessionQuizzUncheckedUpdateWithoutPresenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizzId?: IntFieldUpdateOperationsInput | number
    participants?: UserUncheckedUpdateManyWithoutSessionGameNestedInput
    userResponse?: UserResponseUncheckedUpdateManyWithoutSessionQuizzNestedInput
  }

  export type SessionQuizzUncheckedUpdateManyWithoutPresenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    quizzId?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionCreateManyQuizzInput = {
    id?: number
    timeMax: number
    scoreMax: number
    scoreMin: number
    question: string
    explication: string
  }

  export type SessionQuizzCreateManyQuizzInput = {
    id?: number
    presenterId: number
  }

  export type QuestionUpdateWithoutQuizzInput = {
    timeMax?: IntFieldUpdateOperationsInput | number
    scoreMax?: IntFieldUpdateOperationsInput | number
    scoreMin?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    explication?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUpdateManyWithoutQuestionNestedInput
    userResponse?: UserResponseUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuizzInput = {
    id?: IntFieldUpdateOperationsInput | number
    timeMax?: IntFieldUpdateOperationsInput | number
    scoreMax?: IntFieldUpdateOperationsInput | number
    scoreMin?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    explication?: StringFieldUpdateOperationsInput | string
    answers?: AnswerUncheckedUpdateManyWithoutQuestionNestedInput
    userResponse?: UserResponseUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutQuizzInput = {
    id?: IntFieldUpdateOperationsInput | number
    timeMax?: IntFieldUpdateOperationsInput | number
    scoreMax?: IntFieldUpdateOperationsInput | number
    scoreMin?: IntFieldUpdateOperationsInput | number
    question?: StringFieldUpdateOperationsInput | string
    explication?: StringFieldUpdateOperationsInput | string
  }

  export type SessionQuizzUpdateWithoutQuizzInput = {
    participants?: UserUpdateManyWithoutSessionGameNestedInput
    presenter?: UserUpdateOneRequiredWithoutSessionPresenterNestedInput
    userResponse?: UserResponseUpdateManyWithoutSessionQuizzNestedInput
  }

  export type SessionQuizzUncheckedUpdateWithoutQuizzInput = {
    id?: IntFieldUpdateOperationsInput | number
    presenterId?: IntFieldUpdateOperationsInput | number
    participants?: UserUncheckedUpdateManyWithoutSessionGameNestedInput
    userResponse?: UserResponseUncheckedUpdateManyWithoutSessionQuizzNestedInput
  }

  export type SessionQuizzUncheckedUpdateManyWithoutQuizzInput = {
    id?: IntFieldUpdateOperationsInput | number
    presenterId?: IntFieldUpdateOperationsInput | number
  }

  export type AnswerCreateManyQuestionInput = {
    id?: number
    isGoodAnswers: boolean
    name: string
  }

  export type UserResponseCreateManyQuestionInput = {
    id?: number
    answerId: number
    sessionQuizzId: number
    score: number
    responseTime: number
    userId: number
  }

  export type AnswerUpdateWithoutQuestionInput = {
    isGoodAnswers?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    userResponse?: UserResponseUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    isGoodAnswers?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    userResponse?: UserResponseUncheckedUpdateManyWithoutAnswerNestedInput
  }

  export type AnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    isGoodAnswers?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserResponseUpdateWithoutQuestionInput = {
    score?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    answer?: AnswerUpdateOneRequiredWithoutUserResponseNestedInput
    sessionQuizz?: SessionQuizzUpdateOneRequiredWithoutUserResponseNestedInput
    user?: UserUpdateOneRequiredWithoutUserResponseNestedInput
  }

  export type UserResponseUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    sessionQuizzId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserResponseUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    sessionQuizzId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserResponseCreateManyAnswerInput = {
    id?: number
    questionId: number
    sessionQuizzId: number
    score: number
    responseTime: number
    userId: number
  }

  export type UserResponseUpdateWithoutAnswerInput = {
    score?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    question?: QuestionUpdateOneRequiredWithoutUserResponseNestedInput
    sessionQuizz?: SessionQuizzUpdateOneRequiredWithoutUserResponseNestedInput
    user?: UserUpdateOneRequiredWithoutUserResponseNestedInput
  }

  export type UserResponseUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    sessionQuizzId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserResponseUncheckedUpdateManyWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    sessionQuizzId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserResponseCreateManySessionQuizzInput = {
    id?: number
    questionId: number
    answerId: number
    score: number
    responseTime: number
    userId: number
  }

  export type UserUpdateWithoutSessionGameInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userResponse?: UserResponseUpdateManyWithoutUserNestedInput
    sessionPresenter?: SessionQuizzUpdateManyWithoutPresenterNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userResponse?: UserResponseUncheckedUpdateManyWithoutUserNestedInput
    sessionPresenter?: SessionQuizzUncheckedUpdateManyWithoutPresenterNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSessionGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserResponseUpdateWithoutSessionQuizzInput = {
    score?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    question?: QuestionUpdateOneRequiredWithoutUserResponseNestedInput
    answer?: AnswerUpdateOneRequiredWithoutUserResponseNestedInput
    user?: UserUpdateOneRequiredWithoutUserResponseNestedInput
  }

  export type UserResponseUncheckedUpdateWithoutSessionQuizzInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserResponseUncheckedUpdateManyWithoutSessionQuizzInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    answerId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



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