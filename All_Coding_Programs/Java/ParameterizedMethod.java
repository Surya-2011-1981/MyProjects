
public class ParameterizedMethod {
    public static void m1(int a, int b) {
        int sum = 0;
        sum = a + b;
        System.out.println("Sum is " + sum);
    }

    public static void main(String[] args) {
        System.out.println("Main Method");
        m1(5, 6);
         System.out.println("End Method");
    }

}
