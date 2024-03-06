import java.util.Scanner;
class fibonacci{
    public static void main(String[] args) {
        Scanner obj=new Scanner(System.in);
        int n1,n2,hold,steps,count;
        count=0;
        n1=0;
        n2=1;
        System.out.println("Enter no of steps you want to print the series");
        steps=obj.nextInt();
        do{
            //System.out.println(n1);
            System.out.print(n1+","+n2+",");

            hold=n2;
            n1=n1+n2;
            n2=n1+hold;
            count++;
        }while(count<(steps-2));
        obj.close();
    }
}