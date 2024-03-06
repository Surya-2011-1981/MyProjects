class fruit
{
    String f_name;
    String color;
}
class orange extends fruit
{
    
}
class Apple extends fruit
{

}
public class Generalization {
    public static void main(String[] args)
    {
        fruit f=new Apple();
        f.f_name="Apple";
        f.color="Red";
        System.out.println(f.f_name);
        System.out.println(f.color);
    }    
}
