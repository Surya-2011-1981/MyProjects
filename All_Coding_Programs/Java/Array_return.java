import java.util.Scanner;

public class Array_return {
  public static void main(String[] args) {
    int size = 5;
    int[] arr2 = Array(size);
    for (int i = 0; i < arr2.length; i++) {
      System.out.println(arr2[i] + "  ");
    }

  }

  static int[] Array(int m) {
    Scanner obj = new Scanner(System.in);
    int[] arr = new int[m];

    System.out.print("Array is : ");
    for (int i = 0; i < m; i++) {
      arr[i] = obj.nextInt();
    }
    obj.close();
    return arr;
  }
}
