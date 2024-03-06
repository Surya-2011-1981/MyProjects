import java.util.Scanner;
class Switch{
    public static void main(String[] args) {
        int num;
        Scanner obj=new Scanner(System.in);
        System.out.println("Enter any Number between 1 to 4");
        num=obj.nextInt();
        switch (num) {
            case 1:
            System.out.println("Good Morning");    
            break;
            case 2:
            System.out.println("Good AfterNoon");    
            break;
            case 3:
            System.out.println("Good Evening");    
            break;
            case 4:
            System.out.println("Good Night");    
            break;
            default:
            System.out.println("You Have Entered Wrong Choice ");
            break;

        }

    }
}