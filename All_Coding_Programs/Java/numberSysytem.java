import java.util.Scanner;

class numberSysytem {
  public static void main(String arg[]) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();

    int[] arr = new int[n];
    int CountNoOfPositive = 0;
    int CountNoOfNegative = 0;
    int CountNoOfZeros = 0;

    for (int i = 0; i < n; i++) {
      arr[i] = sc.nextInt();
      if (arr[i] > 0) {
        CountNoOfPositive = CountNoOfPositive + 1;
      } else if (arr[i] < 0) {
        CountNoOfNegative = CountNoOfNegative + 1;
      } else {
        CountNoOfZeros = CountNoOfZeros + 1;
      }
    }

    System.out.println(CountNoOfPositive / n);
    System.out.println(CountNoOfNegative / n);
    System.out.println(CountNoOfZeros / n);
    sc.close();
  }
}