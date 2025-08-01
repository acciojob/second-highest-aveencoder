function secondHighest(arr){
   if(arr.length ==0 && arr.length == 1){
      return -Infinity;
   }
   else{
       function main(arr1){
     let sarr = arr1.sort((a,b)=> b-a);
     return sarr[1];
  }
   for(let i=0;i<arr.length-1;i++){
      if(arr[i+1]!=arr[i]){
            return main(arr);
      }
    
   }
    return -Infinity;

   }
}


