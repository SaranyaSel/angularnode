import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeModel } from '../shared/node.model';

@Component({
  selector: 'app-deletenode',
  templateUrl: './deletenode.component.html',
  styleUrls: ['./deletenode.component.css']
})
export class DeletenodeComponent implements OnInit {
  @Input() currentNode: NodeModel;
  @Output() deletedNode = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  deleteNode() {
    this.deletedNode.emit(this.currentNode);
  }
}