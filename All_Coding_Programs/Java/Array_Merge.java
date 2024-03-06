import java.util.Scanner;

class Array_Merge {
  public static void main(String[] args) {
    Scanner obj = new Scanner(System.in);
    int n, m;
    System.out.println("Enter Size of 1st array");
    n = obj.nextInt();
    System.out.println("Enter Size of Second array");
    m = obj.nextInt();
    int[] arr1 = new int[n];
    int[] arr2 = new int[m];
    System.out.println("Enter Elements in First Array");
    for (int i = 0; i < n; i++) {
      arr1[i] = obj.nextInt();
    }
    System.out.println("Enter Elements in Second Array");
    for (int i = 0; i < m; i++) {
      arr2[i] = obj.nextInt();
    }
    System.out.println("Now Merging");
    int[] arr3 = new int[m + n];
    for (int i = 0; i < (m + n); i++) {
      if (i < n) {
        arr3[i] = arr1[i];
      }
      if (i >= n) {
        int j = i - n;
        arr3[i] = arr2[j];
      }

    }
    for (int i = 0; i < arr3.length; i++) {
      System.err.print(arr3[i] + "  ");
    }
  }
}