// Object literal representing a book
let book = {
    title: "Atomic Habits",
    author: "James Clear",
    pages: 281,
    
    // Method to print a summary of the book
    printSummary: function() {
        console.log(`"${this.title}" by ${this.author}, ${this.pages} pages.`);
    }
};

// Call the method to print the book summary
book.printSummary();
