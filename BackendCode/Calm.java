import java.util.Scanner;

public class Calm {
	String mood;
	
	public Calm() {
		mood = null;
	}
	
	public Calm(String mood) {
		mood = "calm";
	}
	
	public static int calm(int option, Scanner input) {
		System.out.println(ChatBot.intro());
		System.out.println(ChatBot.posResponses("calm"));
		ChatBot.functions();
		option = input.nextInt();
		return option;
	}
	
	public static void calmResources() {

	}
	
	public static void calmLetsChat(int option) {
		
	}
	
	public static void calmDistractions(int option) {
		
	}

}
