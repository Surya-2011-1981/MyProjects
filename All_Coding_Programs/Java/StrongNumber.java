import java.util.Scanner;
public class StrongNumber {
    public static void main(String[] arg){
    Scanner obj=new Scanner(System.in);
    int num;
    System.out.println("Enter any Number");
    num=obj.nextInt();
    int hold=num,rem;
    int sum=0;
    do{
        rem=num%10;
        sum=sum+fact(rem);
        num=num/10;
    }while(num>0);
    if(hold==sum)
    {
        System.out.println("Strong number");
    }
    else
System.out.println("Not a Strong number");
    }
    static int fact(int digit){
        int f=1;
        do{
            f=f*digit;
            digit--;
        }while(digit>1);
        return f;
    }
}
