public class Pattern1 {
    public static void main(String[] args) {
        
        int i=0;
        do{
            if(i==0 || i==2 || i==4)
            {
                for (int j = 0; j < 5; j++)
                {
                    System.out.print("1  ");
                    
                }
                System.out.println("\n");
            }
                else
                {
                    for (int j = 0; j < 5; j++) 
                    {
                         System.out.print("0  ");
                    }
                     System.out.println("\n");
                }
            i++;
        }while(i<5);

    }
}
