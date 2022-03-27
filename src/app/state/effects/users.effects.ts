import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,withLatestFrom } from "rxjs/operators";

import { UserJson } from "../models";
import { UsersActions as USERS } from "../actions";
import { AppService,UsersService } from "../services";

@Injectable()
export class UsersEffects {
  constructor(
    private actions$:Actions,
    private users:UsersService,
    private app:AppService){}
  fetchUsers$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(USERS.fetch),
    mergeMap(() => this.users.fetch().pipe(
      map((users:UserJson[]) => USERS.load(users)),
      catchError(error => of(USERS.error(error)))))));
  createUser$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(USERS.create),
    map(o => o.payload),
    mergeMap(o => this.users.create(o).pipe(
      map((user:UserJson) => USERS.loadOne(user)),
      catchError(error => of(USERS.error(error)))))));
}