/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as AuthorizationRouteRouteImport } from './routes/authorization/route'
import { Route as IndexRouteImport } from './routes/index'

const AuthorizationRouteRoute = AuthorizationRouteRouteImport.update({
  id: '/authorization',
  path: '/authorization',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/authorization': typeof AuthorizationRouteRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/authorization': typeof AuthorizationRouteRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/authorization': typeof AuthorizationRouteRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/authorization'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/authorization'
  id: '__root__' | '/' | '/authorization'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthorizationRouteRoute: typeof AuthorizationRouteRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/authorization': {
      id: '/authorization'
      path: '/authorization'
      fullPath: '/authorization'
      preLoaderRoute: typeof AuthorizationRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthorizationRouteRoute: AuthorizationRouteRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
