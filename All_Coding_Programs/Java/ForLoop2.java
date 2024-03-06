import java.util.Scanner;
public class ForLoop2 {
    public static void main(String[] args) {
        int i,num,count=0;
        Scanner obj=new Scanner(System.in);
        System.out.println("Enter any number");
        num=obj.nextInt();
        for(i=1;i<=num;i++)
        {
            if(num%i==0)
            {
                count++;
            }
        }
        if(count==2)
        System.out.println(num+" is prime number");
        else
        System.out.println(num+" is not prime number");
    }
}
