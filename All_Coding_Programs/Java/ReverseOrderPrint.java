public class ReverseOrderPrint {
    public static void main(String[] args) {
        int num=1;
        int remainder,placevalue,sum=0,hold;
        hold=num;
        placevalue=1;
        do{
            num=num/10;
            if(num!=0){
            placevalue*=10;
            }
        } while(num>0);
        do{
            remainder=hold%10;
            sum=sum+(remainder*placevalue);
            placevalue/=10;
            hold=hold/10;
        }while(hold>0);
        System.out.println(sum); 
    }
}
// import java.util.Scanner;

// public class ReverseOrderPrint {
//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);

//         // Input: Get the number from the user
//         System.out.print("Enter a number to reverse: ");
//         int number = scanner.nextInt();

//         // Reverse the number
//         int reversedNumber = reverseNumber(number);

//         // Output: Display the reversed number
//         System.out.println("Reversed number: " + reversedNumber);

//         scanner.close();
//     }

//     // Function to reverse a number
//     private static int reverseNumber(int num) {
//         int reversedNum = 0;

//         while (num != 0) {
//             int digit = num % 10;
//             reversedNum = reversedNum * 10 + digit;
//             num /= 10;
//         }

//         return reversedNum;
//     }
// }

