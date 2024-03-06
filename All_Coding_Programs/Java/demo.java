import java.util.Scanner;

public class demo{
    public static void main(String[] args) {
            Scanner sc=new Scanner(System.in);
            int java,cpp,python;
            String j,c,p;
            j=sc.nextLine();
            java=sc.nextInt();
            sc.nextLine();
            c=sc.nextLine();
            cpp=sc.nextInt();
            sc.nextLine();
            p=sc.nextLine();
            python=sc.nextInt();
            System.out.println("================================");
            System.out.println(j+"           "+java);
            System.out.println(c+"            0"+cpp);
            System.out.println(p+"         0"+python);
            System.out.println("================================");
            sc.close();

    }
}
