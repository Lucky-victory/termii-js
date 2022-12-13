

export class Utils{
   static mergeObj<T extends object>(obj: T, ...objs: object[]) {
      const merged = Object.assign({}, obj, ...objs);
      return merged;
   }
   static isUndefined(val:any){
      return typeof val ==='undefined';
   }
    static isFunction(val: any) {
       return typeof val === 'function';
    }
}
