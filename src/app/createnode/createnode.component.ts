import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { NodeModel } from '../shared/node.model';

@Component({
  selector: 'app-createnode',
  templateUrl: './createnode.component.html',
  styleUrls: ['./createnode.component.css']
})
export class CreatenodeComponent implements OnInit {
  @Input() isRoot: boolean;
  @Input() currentNode: NodeModel;
  @Output() createdNode = new EventEmitter;
  name: string;
  type: 'folder' | 'file' | 'unset' | null;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: {nodename: this.name, nodetype: this.type, Component: 'Create'}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const node: NodeModel = {
          id: null,
          name: result.nodeName,
          type: result.nodetype,
          children: []
        };
        if (this.isRoot) {
          this.createdNode.emit(node);
        } else {
          this.createdNode.emit({currentNode: this.currentNode, node});
        }
      }
    });
  }

  ngOnInit() {
  }

}