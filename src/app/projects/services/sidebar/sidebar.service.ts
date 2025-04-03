import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private isFilterOpenSubject = new BehaviorSubject<boolean>(true);
  private isMenuOpenSubject = new BehaviorSubject<boolean>(false);

  isFilterOpen$ = this.isFilterOpenSubject.asObservable();
  isMenuOpen$ = this.isMenuOpenSubject.asObservable();

  toggleFilter(): void {
    this.isMenuOpenSubject.next(false);
    const current = this.isFilterOpenSubject.getValue();
    this.isFilterOpenSubject.next(!current);
  }

  toggleMenu(): void {
    this.isFilterOpenSubject.next(false);
    const current = this.isMenuOpenSubject.getValue();
    this.isMenuOpenSubject.next(!current);
  }
}
