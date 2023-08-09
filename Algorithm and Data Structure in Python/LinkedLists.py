class Node:

	def __init__(self, data):
		self.data = data
		self.next = None

class LinkedList:

	def __init__(self):
		self.head = None

	def push(self, new_data):
		new_node = Node(new_data)
		new_node.next = self.head
		self.head = new_node

	def insertAfter(self, prev_node, new_data):
		if prev_node is None:
			print("The given previous node must inLinkedList.")
			return
		new_node = Node(new_data)
		new_node.next = prev_node.next
		prev_node.next = new_node

	def append(self, new_data):
		new_node = Node(new_data)
		if self.head is None:
			self.head = new_node
			return
		last = self.head
		while (last.next):
			last = last.next
		last.next = new_node

	def deleteNode(self, key):
		temp = self.head
		if (temp is not None):
			if (temp.data == key):
				self.head = temp.next
				temp = None
				return
		while (temp is not None):
			if temp.data == key:
				break
			prev = temp
			temp = temp.next
		if (temp == None):
			return
		prev.next = temp.next
		temp = None

	def printList(self):
		temp = self.head
		while(temp):
			print(temp.data)
			temp = temp.next

if __name__=='__main__':
	llist = LinkedList()
	llist.head = Node(1)
	second = Node(2)
	third = Node(3)
	llist.head.next = second;
	second.next = third;



llist.push(7)
llist.insertAfter(llist.head.next.next.next,10)
llist.append(17)
llist.deleteNode(2)

llist.printList()