class A
{
    public static void m1()
    {
        System.out.println("Method m1() from A");
    }
}

public class Inheritance_1  extends A{
    public static void main(String[] args)
    {
        m1();
        m2();
    }
    public static void m2()
    {
        System.out.println("m2() is called");
    }
}
