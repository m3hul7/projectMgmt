import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private ACCESS_TOKEN: string
  private REFRESH_TOKEN: string

  constructor() { 
    this.ACCESS_TOKEN = 'access_token'
    this.REFRESH_TOKEN = 'refresh_token'
  }

  getToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN)
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN)
  }

  saveToken(token: string): void {
    localStorage.setItem(this.ACCESS_TOKEN, token)
  }

  saveRefreshToken(refresh_token: string): void {
    localStorage.setItem(this.REFRESH_TOKEN, refresh_token)
  }

  removeToken(): void {
    localStorage.removeItem(this.ACCESS_TOKEN)
  }

  removeRefreshToken(): void {
    localStorage.removeItem(this.REFRESH_TOKEN)
  }

  
}
