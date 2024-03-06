import java.util.Scanner;
public class Question2 {

    public static void main(String[] args)
    {
        Scanner obj =new Scanner(System.in);
        char ch;
        System.out.println("Enter any character");
        ch=obj.next().charAt(0);
        int ascii;
        ascii=ch;
        if(ascii<91 && ascii>64)
        {
            System.out.println("The input character is Capital alphabet");
        }
        else if(ascii<123 && ascii>96)
        {
            System.out.println("The input character is Small Alphabet");
        }
        else if(ascii<=57 && ascii>=48)
        {
            System.out.println("The input character is number");
        }
        else{
            System.out.println("The entered character is special symbol");
        }
 
        obj.close();
    }
    
}
