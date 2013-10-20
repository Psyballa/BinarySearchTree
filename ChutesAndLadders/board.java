public enum CellType
{
   NONE, CHUTE, LADDER;
}

class Cell
{
   int ID;
   CellType cellType;
}

class Board
{
   Cell[][] tiles;
   String name;
}

class Player
{ 
   int ID;
   Cell position;
   void move(Cell end)
   {
      this.position = end;
   }
}
