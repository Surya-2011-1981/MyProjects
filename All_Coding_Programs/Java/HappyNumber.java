import java.util.Scanner;

public class HappyNumber {
    public static void main(String[] args) {
        Scanner obj = new Scanner(System.in);
        int num;
        System.out.println("Enter any Number");
        num = obj.nextInt();
        int check=0;
        int count=0;
        do
        {
            if(count==0)
            {
             check = CheckSquareSum(num);
             count++;
            }
            else
            {
                check = CheckSquareSum(check);
            }

        }while(check>9);

            if (check == 1 || check == 7) {
                System.out.println(num + " is Happy Number");
            } else {
                System.out.println(num + " is not a happy Number");
            }
    
    }

    static int CheckSquareSum(int num) {
        int rem, sum = 0;
        do {
            rem = num % 10;
            sum += rem * rem;
            num /= 10;
        } while (num > 0);
        return sum;
    }
}
