
export class PaginationHelper {
  collection
  itemsPerPage

  constructor(collection: number[], itemsPerPage: number) {
    console.log(collection, itemsPerPage)
    this.collection = collection
    this.itemsPerPage = itemsPerPage
	}
	itemCount() {
    return this.collection.length
	}
	pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage)
	}
	pageItemCount(pageIndex: number) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1
    }
    return pageIndex === this.pageCount() -1
      ? this.collection.length % this.itemsPerPage
      : this.itemsPerPage
	}
	pageIndex(itemIndex: number) {
    if (itemIndex < 0 || itemIndex >= this.collection.length) {
      return -1
    }
    return Math.floor(itemIndex / this.itemsPerPage)
	}
}

const helper = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8], 4);

console.log(helper.itemCount())
console.log(helper.pageCount());
console.log(helper.pageItemCount(0));
console.log(helper.pageItemCount(1));
console.log(helper.pageItemCount(2));

console.log(helper.pageIndex(5));
console.log(helper.pageIndex(2));
console.log(helper.pageIndex(20));

// https://www.codewars.com/kata/515bb423de843ea99400000a/train/typescript
