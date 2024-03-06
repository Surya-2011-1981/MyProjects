import java.util.Scanner;
public class Odd_Even {
    public static void main(String[] args) {
            Scanner obj=new Scanner(System.in);
            int num;
            System.out.println("Enter any number to check");
            num=obj.nextInt();
           /*  if((num/2)*2==num)
            System.out.println(num+" is an Even Number");
            else
            System.out.println(num+" is Odd Number");
            */
            if((num & 1)==0)
            System.out.println(num+" Even Number");
            else
            System.out.println(num+" is Odd Number");
    }
}
