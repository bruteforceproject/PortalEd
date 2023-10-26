package org.example;

import static com.mongodb.client.model.Filters.eq;

import com.mongodb.client.*;
import org.bson.Document;

import java.util.Random;

public class Main {
    public static void main( String[] args ) {

        // Replace the placeholder with your MongoDB deployment's connection string
        String uri = "mongodb+srv://Ramez:GHipRjutHHid5CG7@portaledcluster.x6u4jx9.mongodb.net/?retryWrites=true&w=majority";

        try (MongoClient mongoClient = MongoClients.create(uri)) {
            MongoDatabase database = mongoClient.getDatabase("PortedEd");
            MongoCollection<Document> collection = database.getCollection("Student");

            MongoCursor<Document> cursor = collection.find().iterator();

            System.out.println("[");
            try {
                while (cursor.hasNext()) {
                    Document document = cursor.next();
                    String studentID = document.getString("studentID");
                    String period0 = document.getString("period0");
                    String period1 = document.getString("period1");
                    String period2 = document.getString("period2");
                    String period3 = document.getString("period3");
                    String period4 = document.getString("period4");
                    String period5 = document.getString("period5");
                    String period6 = document.getString("period6");
                    String period7 = document.getString("period7");


//                    System.out.println("{");
//                    System.out.println("\t\"studentID\": \"" + studentID + "\",");
//                    System.out.println("\t\"class_id\" : \"" + period0 + "\",");
//                    System.out.println("\t\"color\" : \"" + getColor() + "\",");
//                    System.out.println("\t\"date\" : \"" + getDate() + "\",");
//                    System.out.println("\t\"alertID\" : \"" + getAlertID() + "\"");
//                    System.out.println("},");
//
//                    System.out.println("{");
//                    System.out.println("\t\"studentID\": \"" + studentID + "\",");
//                    System.out.println("\t\"class_id\" : \"" + period1 + "\",");
//                    System.out.println("\t\"color\" : \"" + getColor() + "\",");
//                    System.out.println("\t\"date\" : \"" + getDate() + "\",");
//                    System.out.println("\t\"alertID\" : \"" + getAlertID() + "\"");
//                    System.out.println("},");
//
//                    System.out.println("{");
//                    System.out.println("\t\"studentID\": \"" + studentID + "\",");
//                    System.out.println("\t\"class_id\" : \"" + period2 + "\",");
//                    System.out.println("\t\"color\" : \"" + getColor() + "\",");
//                    System.out.println("\t\"date\" : \"" + getDate() + "\",");
//                    System.out.println("\t\"alertID\" : \"" + getAlertID() + "\"");
//                    System.out.println("},");
//
//                    System.out.println("{");
//                    System.out.println("\t\"studentID\": \"" + studentID + "\",");
//                    System.out.println("\t\"class_id\" : \"" + period3 + "\",");
//                    System.out.println("\t\"color\" : \"" + getColor() + "\",");
//                    System.out.println("\t\"date\" : \"" + getDate() + "\",");
//                    System.out.println("\t\"alertID\" : \"" + getAlertID() + "\"");
//                    System.out.println("},");
//
//                    System.out.println("{");
//                    System.out.println("\t\"studentID\": \"" + studentID + "\",");
//                    System.out.println("\t\"class_id\" : \"" + period4 + "\",");
//                    System.out.println("\t\"color\" : \"" + getColor() + "\",");
//                    System.out.println("\t\"date\" : \"" + getDate() + "\",");
//                    System.out.println("\t\"alertID\" : \"" + getAlertID() + "\"");
//                    System.out.println("},");
//
//                    System.out.println("{");
//                    System.out.println("\t\"studentID\": \"" + studentID + "\",");
//                    System.out.println("\t\"class_id\" : \"" + period5 + "\",");
//                    System.out.println("\t\"color\" : \"" + getColor() + "\",");
//                    System.out.println("\t\"date\" : \"" + getDate() + "\",");
//                    System.out.println("\t\"alertID\" : \"" + getAlertID() + "\"");
//                    System.out.println("},");
//
//                    System.out.println("{");
//                    System.out.println("\t\"studentID\": \"" + studentID + "\",");
//                    System.out.println("\t\"class_id\" : \"" + period6 + "\",");
//                    System.out.println("\t\"color\" : \"" + getColor() + "\",");
//                    System.out.println("\t\"date\" : \"" + getDate() + "\",");
//                    System.out.println("\t\"alertID\" : \"" + getAlertID() + "\"");
//                    System.out.println("},");
//
//                    System.out.println("{");
//                    System.out.println("\t\"studentID\": \"" + studentID + "\",");
//                    System.out.println("\t\"class_id\" : \"" + period7 + "\",");
//                    System.out.println("\t\"color\" : \"" + getColor() + "\",");
//                    System.out.println("\t\"date\" : \"" + getDate() + "\",");
//                    System.out.println("\t\"alertID\" : \"" + getAlertID() + "\"");
//                    System.out.println("},");



                    //other two tables

                    System.out.println("{");
                    System.out.println("\t\"studentID\": \"" + studentID + "\",");
                    System.out.println("\t\"class_id\" : \"" + period0 + "\",");
                    System.out.println("\t\"color\" : \"" + getColor() + "\",");
                    System.out.println("\t\"date\" : \"" + getDate() + "\"");
                    System.out.println("},");

                    System.out.println("{");
                    System.out.println("\t\"studentID\": \"" + studentID + "\",");
                    System.out.println("\t\"class_id\" : \"" + period1 + "\",");
                    System.out.println("\t\"color\" : \"" + getColor() + "\",");
                    System.out.println("\t\"date\" : \"" + getDate() + "\"");
                    System.out.println("},");

                    System.out.println("{");
                    System.out.println("\t\"studentID\": \"" + studentID + "\",");
                    System.out.println("\t\"class_id\" : \"" + period2 + "\",");
                    System.out.println("\t\"color\" : \"" + getColor() + "\",");
                    System.out.println("\t\"date\" : \"" + getDate() + "\"");
                    System.out.println("},");

                    System.out.println("{");
                    System.out.println("\t\"studentID\": \"" + studentID + "\",");
                    System.out.println("\t\"class_id\" : \"" + period3 + "\",");
                    System.out.println("\t\"color\" : \"" + getColor() + "\",");
                    System.out.println("\t\"date\" : \"" + getDate() + "\"");
                    System.out.println("},");

                    System.out.println("{");
                    System.out.println("\t\"studentID\": \"" + studentID + "\",");
                    System.out.println("\t\"class_id\" : \"" + period4 + "\",");
                    System.out.println("\t\"color\" : \"" + getColor() + "\",");
                    System.out.println("\t\"date\" : \"" + getDate() + "\"");
                    System.out.println("},");

                    System.out.println("{");
                    System.out.println("\t\"studentID\": \"" + studentID + "\",");
                    System.out.println("\t\"class_id\" : \"" + period5 + "\",");
                    System.out.println("\t\"color\" : \"" + getColor() + "\",");
                    System.out.println("\t\"date\" : \"" + getDate() + "\"");
                    System.out.println("},");

                    System.out.println("{");
                    System.out.println("\t\"studentID\": \"" + studentID + "\",");
                    System.out.println("\t\"class_id\" : \"" + period6 + "\",");
                    System.out.println("\t\"color\" : \"" + getColor() + "\",");
                    System.out.println("\t\"date\" : \"" + getDate() + "\"");
                    System.out.println("},");

                    System.out.println("{");
                    System.out.println("\t\"studentID\": \"" + studentID + "\",");
                    System.out.println("\t\"class_id\" : \"" + period7 + "\",");
                    System.out.println("\t\"color\" : \"" + getColor() + "\",");
                    System.out.println("\t\"date\" : \"" + getDate() + "\"");
                    System.out.println("},");

                }
            } finally {
                cursor.close(); // Don't forget to close the cursor
            }

            System.out.println("]");

        }
    }

    public static String getDate(){
        return getRand(1, 12) + "/" + getRand(1, 28) + "/2022";
    }

    public static int getAlertID(){
        return getRand(0, 5);
    }

    public static int getRand(int x, int y){
        Random rand = new Random();
        return rand.nextInt(y - x + 1) + x;
    }

    public static String getColor(){
        int num = getRand(1, 4);
        String color;

        if(num == 1){
            color = "Green";
        }if(num == 2){
            color = "Yellow";
        }if(num == 3){
            color = "Red";
        }else{
            color = "Null";
        }
        return color;
    }
}