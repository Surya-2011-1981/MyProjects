import java.util.Scanner;
public class table {
    public static void main(String[] args) {
        int num;
        Scanner obj=new Scanner(System.in);
        System.out.println("Enter the number which you want the table");
        num=obj.nextInt();
        int i=num;
        do{
            System.out.println(num);
            num=num+i;
        }while(num<=(i*10));
    }
}
