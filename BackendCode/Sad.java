import java.util.Scanner;

public class Sad extends ChatBot{
String mood;
	
	public Sad() {
		mood = null;
	}
	
	public Sad(String mood) {
		mood = "sad";
	}
	
	public static int sad(int option, Scanner input) {
		System.out.println(ChatBot.intro());
		System.out.println(ChatBot.negResponses("sad"));
		ChatBot.functions();		
		option = input.nextInt();
		return option;
	}
	
	public static void sadResources() {
		String [] anxietySources = new String [5];
		anxietySources[0] = "Calm App";

	}
	
	public static void sadLetsChat(int option) {
		
	}
	
	public static void sadDistractions(int option) {
		
	}


}
