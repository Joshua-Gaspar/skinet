import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopService } from 'src/app/shop/shop.service';
import { ShopParams } from '../../models/shopParams';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {

  @Input() totalCount: number;
  @Input() pageSize:number;
  @Input() pageNumber =new EventEmitter<number>();

  @Output() pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onPagerChange(event: any){
    this.pageChanged.emit(event.page);

  }

}
