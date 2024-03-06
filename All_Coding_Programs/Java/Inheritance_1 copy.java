class A
{
    int i=1;
    private int j=10;
}

public class Inheritance_1 extends A 
{
         int k=23;
        public static void main(String[] args) {
            Inheritance_1 obj=new Inheritance_1();
            System.out.println(obj.i);
            // System.out.println(obj.j);
            System.out.println(obj.k);
        }

}