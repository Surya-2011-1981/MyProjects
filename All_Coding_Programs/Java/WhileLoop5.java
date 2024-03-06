import java.util.Scanner;
class WhileLoop5 {
    public static void main(String[] args) {
        int num=4;
        Scanner obj=new Scanner(System.in);
        while(num<=100)
        {
            System.out.println(num);
            num+=4;
        }
    }
}
