import { Store,select,Action,Selector } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppLocalStorageService } from "./local-storage";
import { AppWindowService } from "./window";
import { AppHttpService} from "./http";
import { AppState } from "../../states";

@Injectable({providedIn:"root"})
export class AppService {
  constructor(
    private store:Store<AppState>,
    public local:AppLocalStorageService,
    public win:AppWindowService,
    public http:AppHttpService){}
  do(a:Action){return this.store.dispatch(a);}
  select<V>(s:Selector<AppState,V>){return this.store.pipe(select(s));}
  load = this.store.select;
}
//export * from "./tesseract";