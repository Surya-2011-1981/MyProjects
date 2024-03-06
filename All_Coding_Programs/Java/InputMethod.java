import java.util.Scanner;
public class InputMethod {
    public static void main(String[] pr)
    {
        Scanner obj=new Scanner(System.in);
        String name,address;
        int age;
        long pin,mob;
        System.out.println("Enter Your Name");
        name=obj.nextLine();
        System.out.println("Enter your age");
        age=obj.nextInt();
        obj.nextLine();
        System.out.println("Enter your address");
        address=obj.nextLine();
        System.out.println("Enter your pin");
        pin=obj.nextLong();
        System.out.println("Enter your Mobile NUmber");
        mob=obj.nextLong();   
        System.out.println("====================================");     
        System.out.println("Your Details Are as Follows  : ");
        System.out.println("Your Name is : "+name);
        System.out.println("Your Address is : "+address);
        System.out.println("Your Age is : "+age);
        System.out.println("Your pin number is : "+pin);
        System.out.println("Your Mobile Number is : "+mob);

    }
}
