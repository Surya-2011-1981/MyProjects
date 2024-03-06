import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner obj = new Scanner(System.in);
        System.out.println("\n\nSimple Calculator\n");
        System.out.print("Enter the first number: ");
        int num1 =obj.nextInt();
        System.out.print("\nEnter an operation : ");
        char ch = obj.next().charAt(0);
        System.out.print("\nEnter the second number : ");
        int num2 = obj.nextInt();
        double result;
        switch (ch) {
            case '+':
                result = num1 + num2;
                System.out.println("Result: " + result);
                break;
            case'-':
                result = num1 - num2;
                System.out.println("Result: " + result);
                break;
            case '*':
                result = num1 * num2;
                System.out.println("Result: " + result);
                break;
            case '/':
                if (num2 != 0) {
                    result = (double)num1/(double)num2;
                    System.out.println("Result: " + result);
                } else {
                    System.out.println("Cannot divide by zero.");
                }
                break;
            default:
                System.out.println("Invalid operation.");
        }

        obj.close();
    }
}
