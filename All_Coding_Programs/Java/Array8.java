public class Array8 {
    public static void main(String[] args) {
        int num = 0;
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= 5; j++) {

                // if(num==10)
                // {
                // num=1;
                // }
                // System.out.println(num + " ");
                System.out.print((num % 9 + 1) + " ");
                num++;

            }
            System.out.println();
        }
    }
}
