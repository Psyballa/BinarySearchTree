#include <assert.h>
#include <stdio.h>
#include <stdlib.h>
#include <strings.h>

typedef struct node *node_ref;

struct node{
   node left, right, parent;
   int data;
}

node_ref new_node(int n){

   node_ref newNode = malloc(sizeof(struct node));
   assert (newNode != NULL);
   new->left = NULL;
   new->right = NULL;
   new->data = n;

   return new;
}

//Finds the smallest (left-most) node in the tree.
node_ref find_min(node_ref parent)
{
   node_ref curr = parent;
   while(curr->left != NULL)
   {
      curr = curr->left;
   }
   return curr;
}

node_ref find_max(node_ref parent)
{
   node_ref curr = parent;
   while(curr->right != NULL)
   {
      curr = curr->right;
   }
   return curr;
}
