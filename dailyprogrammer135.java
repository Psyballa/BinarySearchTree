
import java.util.Scanner;
import java.util.Random;


public class dailyprogrammer135
{

   public static void main(String[] args)
   {
      int[] range = new int[2];
      Scanner s = new Scanner(System.in);
      int[] nums = new int[4];
      char[] ops = new char[3];

      System.out.println("Enter minimum number: ");
      range[0] = s.nextInt();
      System.out.println("Enter maximum number: ");
      range[1] = s.nextInt();
   
      range = CompareNums(range[0], range[1]);
      System.out.println("Your two numbers are: ");
      System.out.println(range[0]+ " " + range[1]);
   }

   public static int[] CompareNums(int minNum, int maxNum)
   {
      int temp;
      int[] result = new int[2];
      if(minNum > maxNum)
      {
         temp = maxNum;
         maxNum = minNum;
         minNum = temp;
      }
      result[0] = minNum;
      result[1] = maxNum;
      System.out.println("You tried to fool me! Switching these numbers...");
      return result;
   }
}
