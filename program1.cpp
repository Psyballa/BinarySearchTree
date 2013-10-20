

#include <stdio.h>

struct Event
{
   Event() : entryTime(-1), exitTime(-1) {;}
   int entryTime, exitTime;
};

int main()
{
   int N;
   scanf("%d", &N);

   //Read input
   Event events[100][1024]l
   for(int i = 0; i < N; i++)
   {
      int userId, roomId, eventTime;
      char eventType;
      scanf("%d %d %c %d", &userId, &roomId, &eventType, &eventTime);

      if(eventType == 'I') events[roomId][userId].entryTime = eventTime;
      else events[roomId][userId].exitTime = eventTime;
   }



   for(int roomId = 0; roomId < 100; roomId++)
   {
     float sum = 0.0f; int count = 0;
     for(int userId = 0; userId < 1024; userId++)
     {
         if(events[roomId][userId].entryTime >= 0)
         {
            sum += events[roomId][userId].exitTime - events[roomId][userId].entryTime + 1.0f;
            count++;
         }
     }

     if(count > 0) printf("Room %d, %d minute average visit, %dvisitor%s total\n", roomId, (int)(sum/count), count, (count > 1) ? "s" : "");
    }
}
