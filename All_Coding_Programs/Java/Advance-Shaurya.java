import java.util.Scanner;
class Advance
{
    static int num,i;
    public static void main(String[] args)
    {
        Scanner obj = new Scanner(System.in);
        System.out.println("Hello world");
        System.out.println("Enter any number to check");
        num=obj.nextInt();
        i=1;
        int count =0;
        while(i<=num)
        {
            if(num%i==0)
            {
            count++;
            }
            i++;
        }
        if(count==2)
        {
            System.out.println(num + " is a prime number");
        }
        else
        {
            System.out.println("Not prime number");
        }
        obj.close();
    
    }
}