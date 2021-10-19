import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NodeModel } from './node.model';

@Injectable()
export class NodeDataService {
  dataChange = new BehaviorSubject<NodeModel[]> (
    [
      {
        id: 'f9037534-f637-41e9-bf09-b4562edeeb4a',
        name: 'my_First_folder',
        type: 'folder',
        children: [
          {
            id: 'c5a4a407-b55e-40e4-adeb-03302d90db3a',
            name: 'first_doc.html',
            type: 'file',
            children: []
          },
          {
            id: '7f4dfc10-04d5-49d4-bc65-a698f0a03a6e',
            name: 'second_doc.html',
            type: 'file',
            children: []
          }
        ]
      },
      {
        id: '15aa32b8-763e-48c1-a3b0-a3309a7e9e0c',
        name: 'my_second_folder',
        type: 'folder',
        children: [
          {
            id: 'a96db144-40b8-459d-ad5b-d342345aaafb',
            name: 'file_in_second_folder.txt',
            type: 'file',
            children: []
          },
          {
            id: 'da79c523-4507-4b08-ae72-566beeaf95c7',
            name: 'another_folder',
            type: 'folder',
            children: [
              {
                id: 'b97d72d1-9304-47d8-b7e4-e23909e9f686',
                name: 'random.txt',
                type: 'file',
                children: []
              },
              {
                id: '94c6bc5e-be4d-41ec-92f0-cd7e324b08fa',
                name: 'another_file.png',
                type: 'file',
                children: []
              },
              {
                id: '4f2ec4b6-a84b-4a11-b24f-042ecd010ca3',
                name: 'helloworld.html',
                type: 'file',
                children: []
              }
            ]
          }
        ]
      }
    ]
  );
  constructor() { }

}