import java.util.Scanner;
public class Armstrong {
    public static void main(String[] args) {
        Scanner obj=new Scanner(System.in);
        System.out.println("Enter any Number");
        int num;
        num=obj.nextInt();
        if(num==ArmstrongCheck(num))
        {
            System.out.println("The input number "+num+" is Armstrong Number");
        }
        else{
            System.out.println("The input number "+num+" is not an Armstrong Number");
        }
    }
    
    static int ArmstrongCheck(int m)
    {
        int num,digit,rem,hold;
        double sum=0;
        num=m;
        digit=CalculteDigit(num);
        do{
            rem=num%10;
            sum=(double)sum+Math.pow(rem,digit);
            num=num/10;
        }while(num>0);
        return (int)sum;
    }
    static int CalculteDigit(int n){
        int count=0,digit;
        do{
            n=n/10;
            count++;
        }while(n>0);
        return count;
    }
}
