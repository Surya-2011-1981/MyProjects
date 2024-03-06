class parent
{
    String name="Suraj";
    void m1()
    {
        System.out.println("Parent class Method");
    } 
}
class child1 extends parent
{
     void m2()
    {
        System.err.println(name);
    }
}
class Inheritance_3 
{

    public static void main(String[] args)
    {
        parent p=new parent();
        p.m1();
        // p.m2();
        System.out.println(p.name);
        child1 c=new child1();
        c.m1();
        c.m2();
    System.out.println(c.name);
    }
}

