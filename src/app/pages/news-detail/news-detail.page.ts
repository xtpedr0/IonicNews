import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsArticle } from '../../models/news.model';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  article: NewsArticle | null = null;
  isFavorite = false;

  constructor(
    private router: Router,
    private newsService: NewsService
  ) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state) {
      this.article = nav.extras.state['article'];
    }
  }

  ngOnInit() {
    if (this.article) {
      this.isFavorite = this.newsService.isFavorite(this.article.url);
    } else {
      this.router.navigate(['/home']);
    }
  }

  toggleFavorite() {
    if (this.article) {
      if (this.isFavorite) {
        this.newsService.removeFromFavorites(this.article.url);
      } else {
        this.newsService.addToFavorites(this.article);
      }
      this.isFavorite = !this.isFavorite;
    }
  }

  share() {
    // Simulação de compartilhamento
    console.log('Compartilhando:', this.article?.url);
  }
}
