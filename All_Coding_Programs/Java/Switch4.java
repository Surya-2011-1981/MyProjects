import java.util.Scanner;
public class Switch4 {
    public static void main(String[] args) {
        Scanner obj=new Scanner(System.in);
        int n1,n2;
        char ch;
        System.out.println("Enter first number ");
        n1=obj.nextInt();
        obj.nextLine();
        System.out.println("Enter your Opeartion");
        ch=obj.next().charAt(0);
        obj.nextLine();
        System.out.println("Enter second number");
        n2=obj.nextInt();
        switch(ch)
        {
            case '+':
            System.out.println("The Sum of the numbers is : "+(n1+n2));
            break;
            case '-':
            System.out.println("The difference of the numbers is : "+Math.abs(n1-n2));
            break;
            case '*':
            System.out.println("The Sum of the numbers is : "+(n1*n2));
            break;
            case '/':
            System.out.println("The Sum of the numbers is : "+(n1/n2));
            break;
            

        }

    }
}
