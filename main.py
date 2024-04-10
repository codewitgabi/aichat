from typing import Any


class BinarySearchTree:
    def __init__(self, id_: int, data: Any = None):
        self.id_ = id_
        self.data = data
        self.left = None
        self.right = None

    def insert(self, id_: int, data: Any):
        if id_ < self.id_:
            if not self.left:
                self.left = BinarySearchTree(id_, data)
            else:
                self.left.insert(id_, data)
        else:
            if not self.right:
                self.right = BinarySearchTree(id_, data)
            else:
                self.right.insert(id_, data)

    def traverse(self):
        print(f"<Tree {self.id_}: {self.data}>")
        if self.left:
            self.left.traverse()
        
        if self.right:
            self.right.traverse()

    def find(self, id_):
        if id_ < self.id_:
            if self.left:
                return self.left.find(id_)
            else:
                return None
        elif id_ > self.id_:
            if self.right:
                return self.right.find(id_)
            else:
                return None
        else:
            return True
        
    def get(self, id_):
        if id_ < self.id_:
            if self.left:
                return self.left.find(id_)
            else:
                return None
        elif id_ > self.id_:
            if self.right:
                return self.right.find(id_)
            else:
                return None
        else:
            return self.data
            

tree = BinarySearchTree(10, {"name": "Michael", "age": 12})
tree.insert(8, {"name": "Ezekiel", "age": 19})
tree.insert(12, {"name": "Jennifer", "age": 5})

print(tree.data["name"])
print(tree.left.data.get("name"))
print(tree.right.data.get("name"))
tree.traverse()
print(tree.get(5))
print(tree.get(10))