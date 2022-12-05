import { Component } from '@angular/core';
import { DataService } from './data.service';

import * as wjOlap from '@grapecity/wijmo.olap';

const customTemplate: string = `<div class="root">  
  <div class="field-list-label">  
    <label wj-part="g-flds"></label>  
  </div>  
  <div class="field-list pad">  
    <div wj-part="d-fields"></div>  
  </div>  
  <div class="drag-areas-label">  
    <label wj-part="g-drag"></label>  
  </div>  
  <div class="filter-list pad">  
    <label>  
      <span class="wj-glyph wj-glyph-filter"></span>  
      <span wj-part="g-flt"></span>  
    </label>  
    <div wj-part="d-filters"></div>  
  </div>  
  <div class="column-list pad bdr-left">  
    <label>  
      <span class="wj-glyph">⫴</span>  
      <span wj-part="g-cols"></span>  
    </label>  
    <div wj-part="d-cols"></div>  
  </div>  
  <div class="row-list pad bdr-top">  
    <label>  
      <span class="wj-glyph">≡</span>  
      <span wj-part="g-rows"></span>  
    </label>  
    <div wj-part="d-rows"></div>  
  </div>  
  <div class="values-list pad bdr-left bdr-top">  
    <label>  
      <span class="wj-glyph">Σ</span>  
      <span wj-part="g-vals"></span>  
    </label>  
    <div wj-part="d-vals"></div>  
  </div>  
  <div wj-part="d-prog" class="progress-bar"></div>  
  <div class="control-area">  
    <label>  
      <input wj-part="chk-defer" type="checkbox">  
      <span wj-part="g-defer">Defer Updates</span>  
    </label>  
    <button wj-part="btn-update" class="wj-btn wj-state-disabled" type="button" disabled>
      Update  
    </button>  
  </div>  
</div>`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ng: wjOlap.PivotEngine;

  constructor(private dataService: DataService) {
    wjOlap.PivotPanel.controlTemplate = customTemplate;
    this.ng = new wjOlap.PivotEngine({
      itemsSource: dataService.getOrdersList(1000),
      fields:[
        { binding: 'date', header: 'Quarter', format: '\"Q\"q yyyy' },
        { binding: 'date', header: 'Month', format: 'MMMM' },
        { binding: 'agent', header: 'Agent' },
        { binding: 'region', header: 'Region' },
        { binding: 'platform', header: 'Platform' },
        { binding: 'product', header: 'Product' },
        { binding: 'sales', header: 'Sales', format: 'c2' },
        { binding: 'downloads', header: 'Downloads', format: 'n0' },
        { binding: 'revenue', header: 'Revenue', format: 'c2' },
      ]
    });
  }
}