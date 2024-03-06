import java.util.Scanner;

public class Switch2 {
     public static void main(String[] args) {
        int num;
        Scanner obj=new Scanner(System.in);
        System.out.println("Enter any Number between 1 to 4");
        num=obj.nextInt();
        switch (num) {
            case 1:
            System.out.println("Sing");    
            break;
            case 2:
            case 4:
            {
            System.out.println("dance");    
            break;
            }
            case 3:
            case 5:
            {
            System.out.println("Dilouge");    
            break;
            }
            case 6:
             System.out.println("Fight");
             break;
            default:
            System.out.println("You Have Entered Wrong Choice");    
            break;
        }

    }
}
