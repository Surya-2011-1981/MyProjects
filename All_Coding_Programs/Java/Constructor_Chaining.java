class C1{
C1(){
System.out.println("I am Class 1 Constructer 1");
}
}
class C2 extends C1
{
    C2()
    {
        super();
        System.out.println("I am Class 2 Constructer 1");
    }
    C2(int num)
    {
        this();
        System.out.println("I am Class 2 Constructer 2");
    }
}
class Constructor_Chaining
{
    public static void main(String[] args) {
        C2 obj=new C2(10);
    }
}