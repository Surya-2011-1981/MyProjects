import java.util.Scanner;
public class Ladder_Else_if {
    public static void main(String[] args) {
       int year;
       Scanner obj =new Scanner(System.in);
       System.out.println("Enter any year");
       year = obj.nextInt();
       if((year%4==0 && year%100!=0) || (year%400==0))
       {
        System.out.println(year +" is an Leap Year");
       }
       else{
        System.out.println(year+" is not Leap Year");
       }
    }
}
