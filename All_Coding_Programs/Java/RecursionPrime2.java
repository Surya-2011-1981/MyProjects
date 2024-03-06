public class RecursionPrime2 {
    public static void main(String[] args) {
        System.out.println(prime(1,0));
    }

    static String prime(int i, int count) {
        int num = 26;
        while (i <= num) {
            if (num % i == 0) {
                count++;
                return prime((i + 1), count);
            } else {
                return prime((i + 1), count);
            }
        }
        if(count==2)
        return "Prime Number";
        else
        return "Not Prime Number";

    }
}
