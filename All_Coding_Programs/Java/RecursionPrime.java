import java.util.Scanner;

public class RecursionPrime {
    public static void main(String[] args) {
        Scanner obj = new Scanner(System.in);
        System.out.println(prime(1));
    }

    static String prime(int i) {
        int count = 0;
        int num = 20;
        String st;
        while (i < num) {
            if (num % i == 0) {
                st="Not Prime Number";
                break;
            }
            else{
                if(i==(num-1))
                {
                    st="Prime Number";
                    break;
                } 
                return prime(i + 1);
            }
        }
        return st;
    }

}