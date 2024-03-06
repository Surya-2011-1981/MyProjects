public class ParameterizedMethod3 {
    public static void main(String[] args) {
        pavan();
    }
    static void  pavan()
    {
        System.out.println(sum(5,6));
        int result=sum(7,8);
        System.out.println(result);
    }
    static int sum(int a, int b)
    {
        System.out.println("Sum Method");
        return a+b;
    }
}
