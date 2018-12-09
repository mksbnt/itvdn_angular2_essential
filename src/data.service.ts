import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
  getData() {
    let items: string[] = [];
    for (let i = 0; i < items.length; i++) {
      items[i] = "Item " + i;
    }
    return items;
  }
}
