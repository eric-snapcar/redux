export default class LocaleStorageService {
  static getCurrentToDoId(){
      if(localStorage.currentToDoId != null){
        return localStorage.currentToDoId ;
      }
      return 0;
  }
  static setCurrentToDoId(toDoId){
    localStorage.currentToDoId = toDoId;
  }
}
