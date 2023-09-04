package book.store;
import book.store.domain.Book;
import book.store.domain.BookStore;
import book.store.domain.BookStoreException;
import book.store.domain.BookStoreRepository;
import book.store.domain.BookStoreRepositoryException;

public class BookStoreService {
    private BookStoreRepository bookStoreRepository;
    public BookStoreService(BookStoreRepository bookStoreRepository) {
        this.bookStoreRepository = bookStoreRepository;
        }
        public Book addBook(Book book) throws BookStoreException {
            try {
                return bookStoreRepository.addBook(book);
                } catch (BookStoreRepositoryException e) {
                    throw new BookStoreException(e.getMessage());
                    }
                    }
                    public Book getBook(String bookId) throws BookStoreException {
                        try {
                            return bookStoreRepository.getBook(bookId);
                            } catch (BookStoreRepositoryException e) {
                                throw new BookStoreException(e.getMessage());
                                }
                                }
                                public Book editBook(String bookId, Book book) throws BookStoreException {
                                    try {
                                        return bookStoreRepository.editBook(bookId, book);
                                        } catch (BookStoreRepositoryException e) {
                                            throw new BookStoreException(e.getMessage());
                                            }
                                            }
                                            /**
                                             * @param bookId
                                             * @throws BookStoreException
                                             */
                                            public void removeBook(String bookId) throws BookStoreException {
                                                try {
                                                    bookStoreRepository.removeBook(bookId);
                                                    } catch (BookStoreRepositoryException e) {
                                                        throw new BookStoreException(e.getMessage());
                                                        }
                                                        }

import java.awt.Button;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.awt.Color;
import java.awt.Frame;
import java.awt.Label;
import java.awt.TextField;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.awt.Button;

public class BookStore extends Frame implements ActionListener {
    private TextField txtBookId;
    private TextField txtBookName;
    private TextField txtBookAuthor;
    private TextField txtBookPrice;
    private TextField txtBookQuantity;
    private Button btnAdd;
    private Button btnUpdate;
    private Button btnDelete;
    private Button btnSearch;
    private Button btnClear;
    private Button btnExit;
    private Button btnBack;
    private Button btnNext;
    private Button btnFirst;
    private Button btnLast;
    private Button btnPrev;
    private Button btnFirstPage;
    private Button btnLastPage;
    private Button btnNextPage;
    private Button btnPrevPage;

Button exit =   new Button("EXIT");
Label uname =   new Label("username");
Button sup =   new Button("EXIT");
TextField un =new TextField();
Button uBack =   new Button("Back");
//Button exit =   new Button("EXIT");
//Button exit =   new Button("EXIT");
Button user = new Button("User");
Button author = new Button("author");
Button book = new Button("book");
Button book1 = new Button("book1");
Button book2 = new Button("book2");
Button book3 = new Button("book3");
Button book4 = new Button("book4");
Button book5 = new Button("book5");
Button book6 = new Button("book6");
Button book7 = new Button("book7");
Button book8 = new Button("book8");
Button book9 = new Button("book9");
Button book10 = new Button("book10");

Frame main =new Frame();
Frame User =new Frame();
Frame author =new Frame();
Frame book =new Frame();
public BookStore() {
    setSize(500, 500);
    setTitle("Book Store");
    setLocation(300, 300);
    setResizable(false);
    setVisible(true);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    setLayout(null);
}
BookStore(){
   main.setLayout(null);
   main.setVisible(true);
   main.setBounds(700, 200,700, 700);
   main.setBackground(Color.LIGHT_GRAY);
 
   exit.setBounds(200,500,50, 50);
   exit.setVisible(true);
   exit.addActionListener(this);
   main.add(exit); 
   
   user.setBounds(400,400,50,50);
   user.setVisible(true);
   user.addActionListener(this);
   main.add(user);
   
   author.setBounds(500,400,50,50);
   author.setVisible(true);
   author.addActionListener(this);
   main.add(author);
  
   User.setLayout(null);
   User.setBounds(700, 200,700, 700);
   User.setBackground(Color.LIGHT_GRAY);
    
   uname.setVisible(true);
   uname.setBounds(400,500,80,80);
   User.add(uname);
   
   un.setVisible(true);
   un.setBounds(420,500,100,50);
   User.add(un);
   User.setLayout(null);
   
  
    uBack.setBounds(300, 600, 100, 50);
    uBack.setVisible(true);
    User.add(uBack);
        
        }
    
    public static void main(String[] args) {

    BookStore m =new BookStore ();

    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if(e.getSource()== exit)
            System.exit(0);
        if(e.getSource()==user)  
          User.setVisible(true);
        
          if(e.getSource()==uBack)
              main.setVisible(true);
              User.setVisible(false);    
    }
}