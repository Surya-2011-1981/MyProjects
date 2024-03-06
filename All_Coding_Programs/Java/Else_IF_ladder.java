import java.util.Scanner;
public class Else_IF_ladder {
    public static void main(String[] args) {
        int n1,n2,n3;
        Scanner obj=new Scanner(System.in);
        System.out.println("Enter three numbers one by one");
        n1=obj.nextInt();
        n2=obj.nextInt();
        n3=obj.nextInt();
        if(n1>n2 && n1>n3)
        {
            System.out.println(n1+" is Greater");
        }
        else if(n2>n1 && n2>n3)
        {
            System.out.println(n2+" is Greater");
        }
       else{
        System.out.println(n3+" is greater");
       }
    }
}
