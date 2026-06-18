import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewsArticle } from '../../models/news.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorites: NewsArticle[] = [];

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favorites = this.newsService.getFavorites();
  }

  openDetails(article: NewsArticle) {
    this.router.navigate(['/news-detail'], { state: { article } });
  }

  removeFavorite(articleUrl: string, event: any) {
    event.stopPropagation();
    this.newsService.removeFromFavorites(articleUrl);
    this.loadFavorites();
  }
}
