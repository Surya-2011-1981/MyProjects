import java.util.Scanner;

public class HomeWork_1 {

    public static void main(String[] args) {
        int product, sum, digit, hold, num;
        num = 11;
        while (num <= 99)

        {
            sum = 0;
            product = 1;
            hold = num;

            do {
                digit = num % 10;
                product *= digit;
                sum += digit;
                num = num / 10;
            } while (num != 0);
            if (hold == (sum + product)) {
                System.out.println(hold);
            }
             num=hold;
            num++;
         
        }
    }
}
