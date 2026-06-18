import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser = this.currentUserSubject.asObservable();

  constructor() {
    const user = localStorage.getItem('user');
    if (user) {
      this.currentUserSubject.next(JSON.parse(user));
    }
  }

  login(credentials: any): Observable<boolean> {
    // Simulação de login simples (requisito do projeto)
    if (credentials.email && credentials.password) {
      const user = { email: credentials.email, name: 'Usuário' };
      localStorage.setItem('user', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return of(true);
    }
    return of(false);
  }

  register(userData: any): Observable<boolean> {
    // Simulação de registro
    localStorage.setItem('user', JSON.stringify(userData));
    this.currentUserSubject.next(userData);
    return of(true);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }
}
