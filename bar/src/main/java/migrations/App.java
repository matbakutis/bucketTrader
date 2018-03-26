package migrations;

import org.flywaydb.core.Flyway;

public class App {
    public static void main(String[] args) {
        // Create the Flyway instance
        Flyway flyway = new Flyway();

        // Point it to the database
        flyway.setDataSource("jdbc:postgresql://postgresdev:5432/pgdev", "postgres", "password");

        // Start the migration
        flyway.migrate();
    }
}