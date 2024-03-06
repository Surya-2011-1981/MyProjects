class Engine
{
    int cc;
    public Engine(int cc)
    {
        this.cc=cc;
    }
}
class Car{
    String brand,color;
    Engine e;
    public Car(String brand,String color,Engine e)
    {
        this.brand=brand;
        this.color=color;
        this.e=e;
    }
}
public class Composition_Car
{
public static void main(String[] args) 
{
  Car c1=new Car("BMW","Black",new Engine(2000));  
  Car c2=new Car("Alto","Red",new Engine(800));  
  System.out.print(c1.brand+"  ");
  System.out.print(c1.color+"  ");
  System.out.println(c1.e.cc+"CC");
  System.out.print(c2.brand+"  ");
  System.out.print(c2.color+"  ");
  System.out.print(c2.e.cc+"CC");
}
}
