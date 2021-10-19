export class NodeModel {
  id: string;
  name?: string;
  type: 'folder' | 'file' | 'unset' | null;
  children?: NodeModel[];
}