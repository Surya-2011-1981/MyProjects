import java.util.Scanner;
public class demo3 {
    public static void main(String[] args) 
    {
       System.out.println("Enter value");
       Scanner obj=new Scanner(System.in);
       int n=obj.nextInt();
       
       for(int i=1;i<=n;i++)
       {
            for (int j = 1; j <=n; j++)
            {
                char ch = (char)(64+i);
                System.out.print(ch+" ");
            }
            System.out.println();
            
       } 
       obj.close();
    }

}
