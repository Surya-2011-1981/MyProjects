public  class Array16
 {
    public static void main(String[] args) {

        
        for(int i=1;i<=5;i++)
        {
            for(int p=1;p<=(5-i);p++)
            {
                System.out.print("  ");
            }
             int num=1;
            for(int j=1;j<=(2*i-1);j++)
            {
                
                System.out.print(num+" ");
                if(j<i)
                {
                num++;
                }
                else
                {
                num--;
                }
            }
            System.out.println();
        }
    }
}
