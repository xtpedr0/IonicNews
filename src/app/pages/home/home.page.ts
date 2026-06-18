import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewsArticle } from '../../models/news.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  articles: NewsArticle[] = [];
  currentCategory = 'general';

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews(event?: any) {
    this.newsService.getTopHeadlines(this.currentCategory).subscribe(res => {
      this.articles = res.articles;
      if (event) {
        event.target.complete();
      }
    });
  }

  segmentChanged(event: any) {
    this.currentCategory = event.detail.value;
    this.articles = [];
    this.loadNews();
  }

  doRefresh(event: any) {
    // Limpa cache para forçar atualização no refresh
    localStorage.removeItem(`news_cache_${this.currentCategory}`);
    this.loadNews(event);
  }

  openDetails(article: NewsArticle) {
    // Passa os dados via state ou serviço (simplificado para o projeto)
    this.router.navigate(['/news-detail'], { state: { article } });
  }
}
