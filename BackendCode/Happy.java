import java.util.Scanner;

public class Happy {
	String mood;
	
	public Happy() {
		mood = null;
	}
	
	public Happy(String mood) {
		mood = "happy";
	}
	
	public static int happy(int option, Scanner input) {
		System.out.println(ChatBot.intro());
		System.out.println(ChatBot.posResponses("happy"));
		ChatBot.functions();
		option = input.nextInt();
		return option;
	}
	
	public static void happyResources() {

	}
	
	public static void happyLetsChat(int option) {
		
	}
	
	public static void happyDistractions(int option) {
		
	}

}
