public class ParameterizedMethod2 {
    public static void main(String[] args) {

        Add(7,8);
        Difference(89,98);
        Product(8,2);
        Quotient(78,2);
        Modulas(79,8);
    }
    static void Add(int a,int b)
    {
       System.out.println("Sum is : "+(a+b)); 
    }
    static void Difference(int a,int b)
    {
       System.out.println("Difference is : "+Math.abs(a-b)); 
    }
    static void Product(int a,int b)
    {
       System.out.println("Product is : "+(a*b)); 
    }
   static void Quotient(int a,int b)
    {
       System.out.println("Quotient is : "+(a/b)); 
    }
    static void Modulas(int a,int b)
    {
       System.out.println("Modulas is : "+(a%b)); 
    }
}
