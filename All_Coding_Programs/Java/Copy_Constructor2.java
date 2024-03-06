class pen{
    String color,name;
    int price;

    pen(String color,String name,int price)
    {
        this.color=color;
        this.price=price;
        this.name=name;
    }
    pen(pen p){
        System.out.println("inside Copy Constructor");
        System.out.println(p.name+" "+p.color+" "+p.price);
    }
}
public class Copy_Constructor2 {
    public static void main(String[] args) {
        pen p1=new pen("Blue","Cello",10);
        pen p2=new pen(p1);
    }
}
