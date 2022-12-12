

export class Utils{
   static mergeObj<T extends object>(obj:T,objs:object){//@ts-ignore
      return Object.apply(obj,objs);
   }
   static isUndefined(val:any){
      return typeof val ==='undefined';
   }
    static isFunction(val: any) {
       return typeof val === 'function';
    }
}
