package org.henrya.ronin.publishdkp;

import java.util.ArrayList;
import java.util.List;
import org.henrya.httpicnic.PicnicClient;
import org.henrya.httpicnic.http.HttpConnectionException;
import org.henrya.httpicnic.http.HttpRequest;
import org.henrya.httpicnic.http.HttpResponse;
import org.henrya.httpicnic.requests.HttpGet;
import org.henrya.httpicnic.requests.HttpPost;
import org.json.JSONObject;

/**
 * Represents a session on WebDKP
 * @author Henry Anderson
 * 
 */
public class WebDKPSession {
	private PicnicClient client;
	private String tableURL;
	private String username;
	private String password;
	private List<Player> players;
	
	/** 
	 * Constructs a session
	 * @param tableURL The URL of the table such as https://www.webdkp.com/dkp/Aegwynn/ronintest/
	 * @param username The username
	 * @param password The password
	 */
	public WebDKPSession(String tableURL, String username, String password) {
		this.client = new PicnicClient();
		this.tableURL = tableURL;
		this.username = username;
		this.password = password;
		this.players = new ArrayList<Player>();
	}
	
	/**
	 * Logs into WebDKP
	 * @return Returns whether the login was successful
	 * @throws HttpConnectionException Thrown when a connection cannot be established
	 */
	public boolean login() throws HttpConnectionException {
		HttpRequest request = new HttpPost("https://webdkp.com/login");
		this.client.addParameter("siteUserEvent", "login");
		this.client.addParameter("username", this.username);
		this.client.addParameter("password", this.password);
		HttpResponse response = this.client.send(request);
		if(response.getContent().contains("Incorrect")) {
			return false;
		}
		return true;
	}
	
	/**
	 * Loads all of the players in the WebDKP table
	 * @throws HttpConnectionException Thrown when a connection cannot be established
	 */
	public void loadPlayers() throws HttpConnectionException {
		for(int pageNumber = 1; pageNumber < 100; pageNumber++) {
			String url = this.tableURL + "/" + pageNumber + "/date/desc";
			HttpRequest request = new HttpGet(url);
			HttpResponse response = request.send();
			String page = response.getContent();
			if(!page.contains("table.Add")) {
				break;
			}
			String[] table = page.split("table.Add");
			for(String line : table) {
				if(line.length() > 2 && line.contains("userid")) {
					String jsonString = line.substring(1).split("\\);")[0].trim();
					JSONObject json = new JSONObject(jsonString);
					Player player = new Player(json.getString("player"), json.getInt("userid"), (int) json.getDouble("dkp"), (int) json.getDouble("lifetime"));
					this.players.add(player);
				}
			}
		}
	}
	
	/**
	 * Adds points to a player
	 * @param player The player
	 * @param amount The amount of points to add
	 * @param reason The reason they were added
	 * @throws HttpConnectionException Thrown when a connection cannot be established
	 */
	public void addPoints(Player player, int amount, String reason) throws HttpConnectionException {
		String url = this.tableURL + "/Admin/CreateAward/";
		HttpRequest request = new HttpPost(url);
		this.client.addParameter("ajax", "CreateAward");
		this.client.addParameter("playerids", String.valueOf(player.getID()));
		this.client.addParameter("reason", reason);
		this.client.addParameter("cost", String.valueOf(amount));
		this.client.addParameter("location", "WebDKP");
		this.client.addParameter("awardedby", "DKP Bot");
		this.client.send(request);
	}
	
	/**
	 * Creates a new player on WebDKP
	 * @param name The name of the player
	 * @param amount The amount of points to initially add
	 * @return A Player instance representing the player that was created
	 * @throws HttpConnectionException Thrown when a connection cannot be established
	 */
	public Player createPlayer(String name, int amount) throws HttpConnectionException {
		String url = this.tableURL + "/Admin/Manage/";
		HttpRequest request = new HttpPost(url);
		this.client.addParameter("ajax", "AddPlayer");
		this.client.addParameter("name", name);
		this.client.addParameter("playerguild", "Novalis");
		this.client.addParameter("playerclass", "Warrior");
		this.client.addParameter("dkp", String.valueOf(amount));
		this.client.send(request);
		Player player = new Player(name, 0, amount, amount);
		this.players.add(player);
		return player;
	}
	
	/**
	 * Returns whether the player exists
	 * @param name The name of the player
	 * @return A boolean
	 */
	public boolean playerExists(String name) {
		for(Player player : this.players) {
			if(player.getName().equalsIgnoreCase(name)) {
				return true;
			}
		}
		return false;
	}
	
	/**
	 * Returns the Player from their name
	 * @param name The name
	 * @return The Player
	 */
	public Player getPlayer(String name) {
		for(Player player : this.players) {
			if(player.getName().equalsIgnoreCase(name)) {
				return player;
			}
		}
		return null;
	}
}
