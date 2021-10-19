import { Injectable } from '@angular/core';
import { NodeModel } from './node.model';

@Injectable({
  providedIn: 'root'
})
export class NodeFunctionService {

  constructor() { }
  flatJsonArray(flattenedAray: Array<NodeModel>, node: NodeModel[]) {
    const array: Array<NodeModel> = flattenedAray;
    node.forEach(element => {
      if (element.children) {
        array.push(element);
        this.flatJsonArray(array, element.children);
      }
    });
    return array;
  }

  findPosition(id: string, data: NodeModel[]) {
    for (let i = 0; i < data.length; i += 1) {
      if (id === data[i].id) {
        return i;
      }
    }
  }

  findNode(id: string, data: NodeModel[]) {
    for (let i = 0; i < data.length; i += 1) {
      const parent = data[i];
      for (let z = 0; z < parent.children.length; z += 1) {
        if (id === parent.children[z]['id']) {
          return [parent, z];
        }
      }
      for (let z = 0; z < parent.children.length; z += 1) {
        if (id !== parent.children[z]['id']) {
          const result = this.findNode(id, parent.children);
          if (result !== false) {
            return result;
          }
        }
      }
    }
    return false;
  }

}