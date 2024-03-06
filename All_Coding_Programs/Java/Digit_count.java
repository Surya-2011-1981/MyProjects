import java.util.Scanner;
public class Digit_count {
    public static void main(String[] args) {
        long num=00545646,count=0;
        for(long i=num;i!=0;i=i/10)
        {
            count++;
        }
        System.out.println(count);

    }
}
