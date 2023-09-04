import java.util.Scanner;

public class book {
	static Scanner input=new Scanner(System.in);

	static String[] books={"A","B","C"};
	static final double studentDiscount=0.5;
	static final double teacherDiscount=0.7;
	
	public static void main(String[] args) {
		prln("=====|| WELLCOME TO OUR BOOKSTORE #By_Sharawi ||=====");
		pr("Which book do you want? \nAns: ");
		
		String choice=input.nextLine();
		
		if(choice.toLowerCase().equals(books[0].toLowerCase())){
			prln("You Opted for "+books[0]+" Book.");
			calculatePrice(books[0]);
		}else if(choice.toLowerCase().equals(books[1].toLowerCase())){
			prln("You Opted for "+books[1]+" Book.");
			calculatePrice(books[1]);
		}else if(choice.toLowerCase().equals(books[2].toLowerCase())){
			prln("You Opted for "+books[2]+" Book.");
			calculatePrice(books[2]);
		}else{
			prln("Sorry!! WE Dont have that Book");
			
		}
		
	}
	
	static void calculatePrice(String bookName){
		prln("Are you Student or Teacher?\nAns: ");
		String answer=input.nextLine();
		double price=200;
		
		if(answer.toLowerCase().equals("student")){
		 price=price-price*studentDiscount;	
		 showprice(price);
		}else if(answer.toLowerCase().equals("teacher")){
			 price=price-price*teacherDiscount;	
			 showprice(price);
			}else{
				prln("Sorry!! We can't Serve you... :( ");
			
			}
	}
	
	static void showprice(double price){
		prln("Your Total payable amount: "+price);
		prln("\n- Thank You for shopping from our Bookstore #By_Sharawi ");
	}
	static void prln(Object anyobject){
		System.out.println(anyobject);
	}
	static void pr(Object anyobject){
		System.out.print(anyobject);
	}

    @Override
    public String toString() {
        return "book []";
    }
	

}