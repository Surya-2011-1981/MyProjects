public class Parameterized_Constructor_1 {
    int price;
    String name,brand;
Parameterized_Constructor_1(int price,String name,String brand) 
{
    this.price=price;
   this.name=name;
   this.brand=brand; 
}
public void show()
{
    System.out.println(price);
    System.out.println(name);
    System.out.println(brand);
}
public static void main(String[] args) {
    Parameterized_Constructor_1 p1=new  Parameterized_Constructor_1 (2000,"Earphone","Boat");
    p1.show();
}
}
