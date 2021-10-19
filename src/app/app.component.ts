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
  refresh() {
    const data = this.nestedDataSource.data;
    this.nestedDataSource.data = null;
    this.nestedDataSource.data = data;
  }
  onKeyUp(event: any, node: NodeModel) {
    if (event.keyCode === 46 || event.keyCode === 8) {
      this.deleteNode(node);
    }
  }

  deleteNode(nodeToBeDeleted: NodeModel) {
    let nodePlace: number;
    const deleteNode: NodeModel = this.functionService.findNode(
      nodeToBeDeleted.id,
      this.nestedDataSource.data
    );
    if (
      window.confirm(
        'Are you sure you want to delete ' + nodeToBeDeleted.name + '?'
      )
    ) {
      if (deleteNode[0]) {
        deleteNode[0].children.splice(deleteNode[1], 1);
      } else {
        nodePlace = this.functionService.findPosition(
          nodeToBeDeleted.id,
          this.nestedDataSource.data
        );
        this.nestedDataSource.data.splice(nodePlace, 1);
      }
      this.refresh();
    }
  }
}
