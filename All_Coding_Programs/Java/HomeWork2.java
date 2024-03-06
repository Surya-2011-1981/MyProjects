import java.util.Scanner;

public class HomeWork2 {
    static int num;
    static Scanner obj = new Scanner(System.in);

    public static void main(String[] args) {
        int product, sum, digit, hold;
        System.out.println("Enter any two Digit Number");
        num=obj.nextInt();
        sum = 0;
        product = 1;
        hold = num;
            do {
                digit = num % 10;
                product *= digit;
                sum += digit;
                num = num / 10;
            } while (num != 0);
            
        if(hold==(sum+product))
        System.out.println("Special Digit Number");
        else
        System.out.println("Not an Special Digit Number");
    }
}
