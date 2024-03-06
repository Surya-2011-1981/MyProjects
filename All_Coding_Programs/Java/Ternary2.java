import java.util.Scanner;
 class Ternary2 {
 public static void main(String[] args) {
    Scanner ob=new Scanner(System.in);
    int num;
    System.out.println("Enter number ");
    num=ob.nextInt();
    String st;
    st=(num%2==0)?"Even":"Odd";
    System.out.println("Your entered numberis "+st);;
 }   
}
