/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:23:50
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 00:24:01
 * @FilePath: \DDTV_WEBUI\src\typings\utils.d.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
declare namespace TypeUtil {
  type Noop = (...args: any) => any;

  type UnionInclude<T, K extends keyof T> = K extends keyof T ? true : false;

  type GetFunArgs<F extends Noop> = F extends (...args: infer P) => any ? P : never;

  type Writable<T> = { [K in keyof T]: T[K] };

  type FirstOfArray<T extends any[]> = T extends [infer First, ...infer _Rest] ? First : never;

  type LastOfArray<T extends any[]> = T extends [...infer _Rest, infer Last] ? Last : never;

  // union to tuple
  type Union2IntersectionFn<T> = (T extends unknown ? (k: () => T) => void : never) extends (k: infer R) => void
    ? R
    : never;
  type GetUnionLast<U> = Union2IntersectionFn<U> extends () => infer I ? I : never;

  type UnionToTuple<T, R extends any[] = []> = [T] extends [never]
    ? R
    : UnionToTuple<Exclude<T, GetUnionLast<T>>, [GetUnionLast<T>, ...R]>;
}
