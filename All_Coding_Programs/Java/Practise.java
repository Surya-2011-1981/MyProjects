import java.util.Scanner;

public class Practise {

    public static void main(String[] args) {
        int num;
        for (int i = 1; i <= 5; i++) {
            num=1;
            for (int p = 1; p <= (5 - i); p++) {
                System.out.print("  ");
            }
            for (int j = 1; j <=(2*i-1); j++) {
                 
                if(j<i)
                {
                    System.out.print(num+" * ");
                    num++;
                }
                else
                {
                    System.out.print(num+" * ");
                    num--;
                }
            }
            System.out.println();

        }
    }

}
