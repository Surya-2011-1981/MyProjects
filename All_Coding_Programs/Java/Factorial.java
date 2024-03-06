import java.util.Scanner;
public class Factorial {
    public static void main(String[] args) {
        Scanner obj=new Scanner(System.in);
        System.out.println("Enter any number ");
        int fact,num;
        num=obj.nextInt();
        fact=1;
        for(int i=num;i>0;i--)
        {
            fact=fact*i;
        }
        System.out.print("Facroial is "+fact);
    }
}
