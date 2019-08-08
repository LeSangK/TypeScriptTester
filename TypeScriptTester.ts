function myFilter<T>(arr: T[], predicate: (elm: T) => boolean): T[] {
    const result = [];
    for (const elm of arr) {
      if (predicate(elm)) {
        result.push(elm);
      }
    }
    return result;
  }

  const a:string[]=['c','k','u']

  const isBiggerThanA=(a:string)=>{
      if(a>'a') return true
      return false
  }

  const b:string[]=myFilter<string>(a,isBiggerThanA)

  console.log(b)

