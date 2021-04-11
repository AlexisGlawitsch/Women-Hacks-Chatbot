import java.util.Scanner;

public class Mad {
	String mood;
	
	public Mad() {
		mood = null;
	}
	
	public Mad(String mood) {
		mood = "mad";
	}
	
	public static int mad(int option, Scanner input) {
		System.out.println(ChatBot.intro());
		System.out.println(ChatBot.negResponses("mad"));
		ChatBot.functions();
		option = input.nextInt();
		return option;
	}
	
	public static void madResources() {

	}
	
	public static void madLetsChat(int option) {
		
	}
	
	public static void madDistractions(int option) {
		
	}

}
