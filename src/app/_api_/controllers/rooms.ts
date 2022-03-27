import { HttpRequest,HttpHandler} from '@angular/common/http';
import { AppEntity, Room } from '@state';
import { ok,isLoggedIn,idFromUrl,findone,save,add,errors as e } from '../utils';
import { db } from '../db';

export const roomsController = (req:HttpRequest<any>) => {
  try{
    const {url,method,headers,body} = req;
    const ROOMS = {
      create:() => {
        const newroom = body as Room;
        add("qs-rooms",db.rooms,new AppEntity(newroom));
        return ok();},
      fetchRecent:() => !isLoggedIn(headers)?e["unauthorized"]():ok(db.rooms),
      fetchById:() => {
        return isLoggedIn(headers)?e["unauthorized"]():
        ok(db.rooms.find(x => x.id == idFromUrl(url)));},
      update:() => {
        if (!isLoggedIn(headers)) return e["unauthorized"]();
        let {o,i} = findone(db.rooms,"id",idFromUrl(url));
        save("qs-rooms",db.rooms,{...o,...body},i);
        return ok();},
      remove:() => {
        if (!isLoggedIn(headers)) return e["unauthorized"]();
        db.rooms = db.rooms.filter(x => x.id !== idFromUrl(url));
        save("qs-rooms",db.rooms);
        return ok();
      }
    };
    switch(true){
      case url.endsWith('/rooms') && method === 'POST':return ROOMS.create();
      case url.endsWith('/rooms') && method === 'GET':return ROOMS.fetchRecent();
      case url.match(/\/rooms\/\w+$/) && method === 'GET':return ROOMS.fetchById();
      case url.match(/\/rooms\/\w+$/) && method === 'PUT':return ROOMS.update();
      case url.match(/\/rooms\/\w+$/) && method === 'DELETE':return ROOMS.remove();
      default:return e["fourohfour"]();
    }
  }
  catch(e_){return e["someerror"](e_);}
};