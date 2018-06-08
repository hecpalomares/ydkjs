/*** Chapter 6: Behavior Delegation ***/
// OLOO: Objects Linked to Other Objects
let Task = {
    setID: function(ID) {
        this.id = ID;
    },
    getID: function() {
        return this.id;
    }
};

let note = Object.create(Task);

note.setContent = function(ID, content) {
    this.setID(ID);
    this.content = content;
};

note.getContent = function() {
    return `The note ID ${this.getID()}, and its contents are ${this.content}`; 
};

note.setContent(4, "Hello wonderful world!");
console.log(note.getContent());                 // The note ID 4, and its contents are Hello wonderful world!

// 'Task' and 'note' are not classes (or functions), both are only objects. 'note' object is set up via object.create(Task) to its [[Prototype]] delegate to Task.