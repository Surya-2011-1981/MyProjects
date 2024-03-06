public class pattern2 {
    public static void main(String[] args) {
        
        int i=0;
        do{
            if(i==0 )
            {
                for (int j = 0; j < 5; j++)
                {
                    System.out.print("A  ");
                    
                }
                System.out.println("\n");
            }
                else if(i==1)
                {
                    for (int j = 0; j < 5; j++) 
                    {
                         System.out.print("B  ");
                    }
                     System.out.println("\n");
                }
                else if(i==2)
                {
                    for (int j = 0; j < 5; j++) 
                    {
                         System.out.print("C  ");
                    }
                     System.out.println("\n");
                }
                else if(i==3)
                {
                    for (int j = 0; j < 5; j++) 
                    {
                         System.out.print("D  ");
                    }
                     System.out.println("\n");
                }
                else
                {
                    for (int j = 0; j < 5; j++) 
                    {
                         System.out.print("E  ");
                    }
                     System.out.println("\n");
                }
            i++;
        }while(i<5);

    }
}

