import { Injectable } from '@angular/core';
import { IToken, IUser } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private keyUser: 'user';
  private keyToken: 'token'

  constructor() { }

  setUser(data: IUser): void {
    localStorage.setItem(this.keyUser, JSON.stringify(data));
  }
  getUser(): IUser {
    return JSON.parse(localStorage.getItem(this.keyUser));
  }

  setToken(data: IToken): void {
    localStorage.setItem(this.keyToken, JSON.stringify(data));
  }
  getToken(): IToken {
    return JSON.parse(localStorage.getItem(this.keyToken));
  }
}
