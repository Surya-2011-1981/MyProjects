import java.util.Scanner;
class Tut{
    public static void main(String[] args)
     {
        Scanner obj=new Scanner(System.in);
        int n;
        System.out.println("Enter value of n for square matrix");
        n=obj.nextInt();
        for(int i=1;i<=n;i++)
        {
            if(i%2==0)
            {
                for (int j = 1; j <=n; j++) {
                    System.out.print("0 ");
                    
                }

                System.out.print("\n");
            }
            else{
                for(int j=1;j<=n;j++)
                {
                    System.out.print("1 ");
                }
             System.out.print("\n");
            }
        }

        obj.close();
    }
}