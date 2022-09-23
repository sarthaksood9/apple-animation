function Mc(num){
    let i ;
    let is_prime = 1;
    if (n == 0 || n == 1) {
        is_prime = 0;
    }
    
      
      for (i = 2; i <= n/2; ++i) {
        if (n % i == 0) {
          is_prime = 0;
          break;
        }
      }
    
      if (is_prime==1)
        return "true";
      else
        return "false";
}
console.log(Mc(10));
