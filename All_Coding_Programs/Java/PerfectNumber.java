import java.util.Scanner;

public class PerfectNumber {
    public static void main(String[] args) {
        Scanner obj = new Scanner(System.in);
        int num, sum = 0;
        System.out.println("Enter any number to check if the number is Perfect");
        num = obj.nextInt();
        for (int i = 1; i <=(num/2); i++) {
            if (num % i == 0) {
                sum=sum+i;
            }
        }
        if (num == sum)
            System.out.println(num + " is Perfect Number");
        else
            System.out.println(num+" is not Perfect Number");
    }
}
