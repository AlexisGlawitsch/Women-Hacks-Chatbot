import java.util.Scanner;

public class Energetic {
	String mood;
	
	public Energetic() {
		mood = null;
	}
	
	public Energetic(String mood) {
		mood = "calm";
	}
	
	public static int energetic(int option, Scanner input) {
		System.out.println(ChatBot.intro());
		System.out.println(ChatBot.posResponses("energetic"));
		ChatBot.functions();
		option = input.nextInt();
		return option;
	}
	
	public static void energeticResources() {

	}
	
	public static void energeticLetsChat(int option) {
		
	}
	
	public static void energeticDistractions(int option) {
		
	}

}
