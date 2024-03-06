public class Array14

{

	public static void main(String[] args) {

		for (int x = 1; x <= 5; x++) {

			int a = 0, b = 4;

			for (int y = 1; y <= x; y++) {

				int s = x + a;

				System .out.print(s + " ");

				a = a + b;
				b--;
			}
			System.out.println();
		}
	}
}
