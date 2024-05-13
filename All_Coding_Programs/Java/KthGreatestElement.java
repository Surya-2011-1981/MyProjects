// import java.util.*;

// public class Kth_Greatest_Digit {
//   public static void main(String[] args) {
//     Scanner obj = new Scanner(System.in);
//     int n, hold;
//     System.out.println("Enter Size");
//     n = obj.nextInt();
//     int[] arr = new int[n];
//     System.out.println("Enter Elements");
//     for (int i = 0; i < n; i++) {
//       arr[i] = obj.nextInt();
//     }

//     int k;
//     System.out.println("Enter Kth place value");
//     k = obj.nextInt();
//     int i = 0;
//     do {
//       if (arr[i] > arr[i + 1]) {
//         hold = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = hold;
//         i = 0;
//       } else {
//         i++;
//       }
//     } while (i <= n - 1);

//     // for (int j = 0; j < n; j++) {
//     // System.out.println(arr[j] + " , ");
//     // }
//     System.out.println("value is : " + arr[k]);
//   }
// }

import java.util.*;

public class KthGreatestElement {
  // Function to swap two elements
  static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // Function to partition the array and return the index of the pivot element
  static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
      if (arr[j] >= pivot) {
        i++;
        swap(arr, i, j);
      }
    }
    swap(arr, i + 1, high);
    return i + 1;
  }

  // Function to find the kth greatest element using quickselect
  static int kthGreatest(int[] arr, int low, int high, int k) {
    // Partition the array
    int pivot = partition(arr, low, high);

    // If pivot is at the k-1th position, return it
    if (pivot == k - 1)
      return arr[pivot];
    // If pivot is greater than k-1, search in the left subarray
    else if (pivot > k - 1)
      return kthGreatest(arr, low, pivot - 1, k);
    // If pivot is smaller than k-1, search in the right subarray
    else
      return kthGreatest(arr, pivot + 1, high, k);
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    // System.out.print("Enter the size of the array: ");
    int n = scanner.nextInt();

    int[] arr = new int[n];
    // System.out.println("Enter the elements of the array: ");
    for (int i = 0; i < n; i++) {
      arr[i] = scanner.nextInt();
    }

    // System.out.print("Enter the value of k: ");
    int k = scanner.nextInt();

    // Find the kth greatest element
    int kthGreatestElement = kthGreatest(arr, 0, n - 1, k);

    System.out.println(kthGreatestElement);

    scanner.close();
  }
}
