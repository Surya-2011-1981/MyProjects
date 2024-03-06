public class Constructor_Overloading {
    Constructor_Overloading (int price)
    {
        System.out.println("The price of pen 1 is :"+price);
    }
    Constructor_Overloading (int price,String name)
    {
        System.out.print("The price of pen 2 is :"+price);
        System.out.println(" and name is :"+name);
    }
    Constructor_Overloading (int price,String name,String color)
    {
        System.out.print("The price of pen 3 is :"+price);
        System.out.print(" and name is :"+name);
        System.out.println("and color is :"+color);
    }
    public static void main(String[] args) {
        Constructor_Overloading c1=new Constructor_Overloading(30); 
        Constructor_Overloading c2=new Constructor_Overloading(10,"Link Glaycer"); 
        Constructor_Overloading c3=new Constructor_Overloading(25,"WritoMeter","blue"); 
    }

}
