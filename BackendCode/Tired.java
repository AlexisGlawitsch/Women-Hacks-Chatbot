import java.util.Scanner;

public class Tired {
	String mood;
	
	public Tired() {
		mood = null;
	}
	
	public Tired(String mood) {
		mood = "tired";
	}
	
	public static int tired(int option, Scanner input) {
		System.out.println(ChatBot.intro());
		System.out.println(ChatBot.negResponses("tired"));
		ChatBot.functions();
		option = input.nextInt();
		return option;
	}
	
	public static void tiredResources() {
		String [] tiredSources = new String [5];
		

	}
	
	public static void tiredLetsChat(int option) {
		
	}
	
	public static void tiredDistractions(int option) {
		
	}

}
