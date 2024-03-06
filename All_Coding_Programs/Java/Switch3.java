import java.util.Scanner;
public class Switch3 {
    public static void main(String[] args) {
        char ch;
        Scanner obj=new Scanner(System.in);
        System.out.println("Enter any Character");
        ch=obj.next().charAt(0);
        switch(ch){
            case 'A':
            case 'a':
            case 'E':
            case 'e':
            case 'I':
            case 'i':
            case 'O':
            case 'o':
            case 'U':
            case 'u':
            {
            System.out.println("Character is Vowel");
            break;
            }
            default:
            System.out.println("Character is Consonent");

        }
    }
}
