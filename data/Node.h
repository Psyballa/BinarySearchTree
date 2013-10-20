#ifndef NODE_H_
#define NODE_H_

typedef struct node *node_ref;


//Creates a new node
node_ref new_node(int n);

//Deletes a node
node_ref delete_node(int n);



#endif
