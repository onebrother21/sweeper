import { Action, createReducer, on } from "@ngrx/store";
import { NavigationActions as NAV } from "../actions";
import { NavigationState,initializeNavigation } from "../states";
import { AppEntity, AppError } from "../types";

const initialState = initializeNavigation();
const reducer = createReducer(
  initialState,  
  on(NAV.set,(s,{payload:route}) => ({ ...s,requested:route})),
  on(NAV.update,(s,{payload:{route,page}}) => {
    const history = [...s.history,new AppEntity(route) as any];
    return {...s,history,requested:undefined,page,loading:false,error:null};
  }),
  on(NAV.error,(s,{payload:error}) => ({ ...s,error:formetError(error),loading:false})),
);

export function NavigationReducer(s:NavigationState|undefined,action:Action) {return reducer(s,action);}
const formetError = (e:Error|AppError) => e instanceof AppError?e.json():e;