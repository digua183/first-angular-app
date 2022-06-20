import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>
  private searchTerms = new Subject<string>()

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300), // 每次敲击键盘等待300秒
      distinctUntilChanged(), // 忽略跟上一次相同的值
      // 每次term修改时切换到新的查询observable,
      //会记住原始的请求顺序,只会返回最近一次HTTP方法调用的结果,以前的那些请求都会被取消和舍弃。
      switchMap((term:string) => this.heroService.searchHeroes(term))
    )
  }

  search(term:string):void {
    this.searchTerms.next(term)
  }

}
