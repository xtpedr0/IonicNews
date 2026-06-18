import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { NewsResponse, NewsArticle } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private CACHE_KEY = 'news_cache_';
  private FAVORITES_KEY = 'news_favorites';

  constructor(private http: HttpClient) {}

  getTopHeadlines(category: string = 'general'): Observable<NewsResponse> {
    const cacheKey = `${this.CACHE_KEY}${category}`;
    
    // Tenta carregar do cache primeiro (requisito de performance/offline)
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      return of(JSON.parse(cachedData));
    }

    const url = `${environment.newsApiBaseUrl}/top-headlines?category=${category}&apiKey=${environment.newsApiKey}&country=br`;
    
    return this.http.get<NewsResponse>(url).pipe(
      tap(data => {
        // Salva no cache
        localStorage.setItem(cacheKey, JSON.stringify(data));
      }),
      catchError(err => {
        console.error('Erro ao buscar notícias', err);
        return of({ status: 'error', totalResults: 0, articles: [] });
      })
    );
  }

  getFavorites(): NewsArticle[] {
    const favs = localStorage.getItem(this.FAVORITES_KEY);
    return favs ? JSON.parse(favs) : [];
  }

  addToFavorites(article: NewsArticle) {
    const favs = this.getFavorites();
    if (!favs.find(a => a.url === article.url)) {
      favs.push(article);
      localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(favs));
    }
  }

  removeFromFavorites(articleUrl: string) {
    let favs = this.getFavorites();
    favs = favs.filter(a => a.url !== articleUrl);
    localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(favs));
  }

  isFavorite(articleUrl: string): boolean {
    const favs = this.getFavorites();
    return !!favs.find(a => a.url === articleUrl);
  }
}
