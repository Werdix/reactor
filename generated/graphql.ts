// THIS FILE IS GENERATED, DO NOT EDIT!
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
import { ApolloProvider, gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Gym = {
  readonly address?: Maybe<Scalars['String']>;
  readonly countRate: Scalars['Int'];
  readonly gymName?: Maybe<Scalars['String']>;
  readonly id: Scalars['Int'];
  readonly score: Scalars['Int'];
};

export enum Locale {
  CS = 'CS',
  EN = 'EN'
}

export type Mutation = {
  readonly updateProfile?: Maybe<User>;
  readonly updateRating?: Maybe<Gym>;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};


export type MutationUpdateRatingArgs = {
  input: UpdateRatingInput;
};

export type Query = {
  readonly gyms: ReadonlyArray<Gym>;
  readonly locales: ReadonlyArray<Locale>;
  readonly users: ReadonlyArray<User>;
};

export type UpdateProfileInput = {
  readonly locale?: InputMaybe<Locale>;
  readonly name?: InputMaybe<Scalars['String']>;
};

export type UpdateRatingInput = {
  readonly countRate: Scalars['Int'];
  readonly id: Scalars['Int'];
  readonly score: Scalars['Int'];
};

export type User = {
  readonly email?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly locale?: Maybe<Locale>;
  readonly name: Scalars['String'];
  readonly picture?: Maybe<Scalars['String']>;
};

export type GymsQueryVariables = Exact<{ [key: string]: never; }>;


export type GymsQuery = { readonly __typename: 'Query', readonly gyms: ReadonlyArray<{ readonly __typename: 'Gym', readonly id: number, readonly gymName?: string | null, readonly address?: string | null, readonly countRate: number, readonly score: number }> };


export const GymsDocument = gql`
    query gyms {
  gyms {
    id
    gymName
    address
    countRate
    score
  }
}
    `;

/**
 * __useGymsQuery__
 *
 * To run a query within a React component, call `useGymsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGymsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGymsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGymsQuery(baseOptions?: Apollo.QueryHookOptions<GymsQuery, GymsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GymsQuery, GymsQueryVariables>(GymsDocument, options);
      }
export function useGymsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GymsQuery, GymsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GymsQuery, GymsQueryVariables>(GymsDocument, options);
        }
export type GymsQueryHookResult = ReturnType<typeof useGymsQuery>;
export type GymsLazyQueryHookResult = ReturnType<typeof useGymsLazyQuery>;
export type GymsQueryResult = Apollo.QueryResult<GymsQuery, GymsQueryVariables>;