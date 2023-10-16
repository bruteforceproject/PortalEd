package org.example;

import com.github.javafaker.Faker;
import java.util.ArrayList;
import java.util.Random;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        // Press Alt+Enter with your caret at the highlighted text to see how
        // IntelliJ IDEA suggests fixing it.
        int p0;
        int p1;
        int p2;
        int p3;
        int p4;
        int p5;
        int p6;
        int p7;

        ArrayList<Integer> integerList = new ArrayList<>();
        Random random = new Random();

        // Create an instance of JavaFaker
        Faker faker = new Faker();

        int temp;

        System.out.println("[");

        for(int i=1; i<=2; i++){

//            integerList.add(1);
//            integerList.add(2);
//            integerList.add(3);
//            integerList.add(4);
//            integerList.add(5);
//            integerList.add(6);
//            integerList.add(7);
//            integerList.add(8);
//
//            temp = random.nextInt(integerList.size());
//            p0 = integerList.get(temp);
//            integerList.remove(temp);
//
//            temp = random.nextInt(integerList.size());
//            p1 = integerList.get(temp);
//            integerList.remove(temp);
//
//            temp = random.nextInt(integerList.size());
//            p2 = integerList.get(temp);
//            integerList.remove(temp);
//
//            temp = random.nextInt(integerList.size());
//            p3 = integerList.get(temp);
//            integerList.remove(temp);
//
//            temp = random.nextInt(integerList.size());
//            p4 = integerList.get(temp);
//            integerList.remove(temp);
//
//            temp = random.nextInt(integerList.size());
//            p5 = integerList.get(temp);
//            integerList.remove(temp);
//
//            temp = random.nextInt(integerList.size());
//            p6 = integerList.get(temp);
//            integerList.remove(temp);
//
//            temp = random.nextInt(integerList.size());
//            p7 = integerList.get(temp);
//            integerList.remove(temp);


            //FOR STUDENTS
//            System.out.println("{");
//
//            System.out.println("\t\"studentID\": \"s" + i + "\",");
//            System.out.println("\t\"fname\": \""+ faker.name().firstName()+"\",");
//            System.out.println("\t\"lname\": \""+ faker.name().lastName()+"\",");
//            System.out.println("\t\"period0\" : \"c0" + p0 + "\",");
//            System.out.println("\t\"period1\" : \"c1" + p1 + "\",");
//            System.out.println("\t\"period2\" : \"c2" + p2 + "\",");
//            System.out.println("\t\"period3\" : \"c3" + p3 + "\",");
//            System.out.println("\t\"period4\" : \"c4" + p4 + "\",");
//            System.out.println("\t\"period5\" : \"c5" + p5 + "\",");
//            System.out.println("\t\"period6\" : \"c6" + p6 + "\",");
//            System.out.println("\t\"period7\" : \"c7" + p7 + "\",");
//            System.out.println("\t\"parent_id\": \"p" + i + "\"");
//
//            System.out.println("},");
            //FOR STUDENTS

            //FOR PARENTS
            System.out.println("{");

            System.out.println("\t\"parent_id\": \"p" + i + "\",");
            System.out.println("\t\"fname\": \""+ faker.name().firstName()+"\",");
            System.out.println("\t\"lname\": \""+ faker.name().lastName()+"\",");
            System.out.println("\t\"email\": \""+ faker.internet().emailAddress()+"\",");
            System.out.println("\t\"phone\": \""+ faker.phoneNumber().cellPhone()+"\",");
            System.out.println("\t\"password\": \"password\"");

            System.out.println("},");
            //FOR PARENTS

        }

        System.out.println("]");

    }
}