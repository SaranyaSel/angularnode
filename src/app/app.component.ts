import { Component, OnInit } from '@angular/core';
import {of as observableOf} from 'rxjs';

import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

import { NodeModel } from './shared/node.model';
import { NodeDataService } from './shared/node-data.service';
import { NodeFunctionService } from './shared/node-function.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Folder Structure Maker';

  nestedTreeControl: NestedTreeControl<NodeModel>;
  nestedDataSource: MatTreeNestedDataSource<NodeModel>;
  private getChildren = (node: NodeModel) => observableOf(node.children);
  hasNestedChild = (_: number, nodeData: NodeModel) => nodeData.children.length > 0;
  constructor(
    private dataService: NodeDataService,
    private functionService: NodeFunctionService
  ) {}
  ngOnInit() {
    this.nestedTreeControl = new NestedTreeControl<NodeModel>(this.getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.dataService.dataChange.subscribe(
      (data) => (this.nestedDataSource.data = data)
    );
  }
}
